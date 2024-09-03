import { expandToString } from "langium/generate";
import fs from "fs";
import path from "path";
import { isLocalEntity, isModule, Model } from "../../../../../language/generated/ast.js";
import { capitalizeString } from "../../../../util/generator-utils.js";

export function generate(model: Model, target_folder: string) : void {

    const helpers_folder = target_folder + "/Helpers"
    let AddScoped = ""

    fs.mkdirSync(helpers_folder, {recursive: true})

    fs.writeFileSync(path.join(target_folder, "appsettings.json"), generateAppSettings(model))
    fs.writeFileSync(path.join(target_folder, "xunit.runner.json"), generateXunitRunner())
    fs.writeFileSync(path.join(helpers_folder, "TestHelper.cs"), generateTestHelper(model))

    const modules =  model.abstractElements.filter(isModule);
    for(const mod of modules) {
        const mod_classes = mod.elements.filter(isLocalEntity)

        for(const cls of mod_classes) {
          AddScoped += `                        services.AddScoped<I${capitalizeString(cls.name)}Repository, ${capitalizeString(cls.name)}Repository>(); \n`
        }
    }
    fs.writeFileSync(path.join(target_folder, "SharedTestConfiguration.cs"), generateSharedTestConfiguration(model, AddScoped))
}

function generateAppSettings(model: Model) : string {
    return expandToString`
{
  "ConnectionStrings": {
    "SqlServer": "Server=sqlserver,1433;Database=${model.configuration?.name}DB;User ID=sa;Password=Senha@123;Trusted_Connection=False;TrustServerCertificate=True;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}`
}

function generateXunitRunner(): string {
    return expandToString`
{
  "shadowCopy": false
}`
}

function generateSharedTestConfiguration(model: Model, AddScoped: string): string {
  return `
using ${model.configuration?.name}.Domain.Interfaces.Entities;
using ${model.configuration?.name}.Domain.Interfaces.Common;
using ${model.configuration?.name}.Infrastructure.Context;
using ${model.configuration?.name}.Infrastructure.Repositories.Entities;
using ${model.configuration?.name}.Infrastructure.Repositories;
using DotNet.Testcontainers.Builders;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Testcontainers.MsSql;

namespace ${model.configuration?.name}.Infrastructure.Test
{

    public static class SharedTestConfigurationParameters
    {

        public const string CollectionName = "SharedTestConfiguration Collection";
    }

    [CollectionDefinition(SharedTestConfigurationParameters.CollectionName)]
    public class SharedTestConfigurationCollection : ICollectionFixture<SharedTestConfiguration>
    {
    }

    public class SharedTestConfiguration : IAsyncDisposable, IAsyncLifetime
    {

        private const string Database = "${model.configuration?.name}";
        private const string Username = "sa";
        private const string Password = "v3-rUeghnQTzvzYqU9(0qm";
        private const ushort MsSqlPort = 1433;
        private string Connection;

        private readonly IHost host;
        private IConfiguration? _configuration;
        private readonly MsSqlContainer _dbContainer = new MsSqlBuilder()
                .WithImage("mcr.microsoft.com/mssql/server:2019-CU18-ubuntu-20.04")
                //.WithImage("mcr.microsoft.com/mssql/server:2022-latest")
                .WithPortBinding(MsSqlPort, true)
                .WithEnvironment("MSSQL_PID", "Developer")
                .WithEnvironment("SQLCMDDBNAME", Database)
                .WithEnvironment("ACCEPT_EULA", "Y")
                .WithEnvironment("SQLCMDUSER", Username)
                .WithEnvironment("SQLCMDPASSWORD", Password)
                .WithEnvironment("MSSQL_SA_PASSWORD", Password)
                .WithWaitStrategy(Wait.ForUnixContainer().UntilPortIsAvailable(MsSqlPort))
                .Build();

        public SharedTestConfiguration()
        {


            this.host = Host.CreateDefaultBuilder(null)
                .ConfigureServices((hostContext, services) =>
                {

                    this._configuration = hostContext.Configuration;

                    hostContext.Configuration = new ConfigurationBuilder()
                        .AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"))
                        .AddEnvironmentVariables()
                        .Build();

                    ConfigureRepositories();

                    ConfigureDbContext();

                    void ConfigureRepositories()
                    {
${AddScoped}
                        services.AddTransient<IUnitOfWork, UnitOfWork>();
                    }

                    void ConfigureDbContext()
                    {

                        // verify if exists a configuration for AppDbContext
                        // and remove it. Because we will reconfigure this service
                        var descriptorType = typeof(DbContextOptions<AppDbContext>);
                        var descriptor = services.SingleOrDefault(s => s.ServiceType == descriptorType);
                        if (descriptor is not null)
                        {
                            services.Remove(descriptor);
                        }

                        // new configuration for AppDbContext using TestContainer for it
                        services.AddDbContext<AppDbContext>(options =>
                        {
                            options.UseSqlServer(this.Connection, x => x.MigrationsAssembly("${model.configuration?.name}.Infrastructure"));
                            options.EnableSensitiveDataLogging();
                        });

                        services.AddSingleton<AppDbContext>();
                    }



                })
                .Build();

        }

        public IConfiguration GetConfiguration()
        {
            return this._configuration;
        }

        public IServiceProvider GetServices()
        {
            return this.host.Services;
        }

        public IHost GetHost()
        {
            return this.host;
        }

        async ValueTask IAsyncDisposable.DisposeAsync()
        {
            await this._dbContainer.StopAsync();
            await this._dbContainer.DisposeAsync();
        }

        public async Task InitializeAsync()
        {
            // iniciar container
            await this._dbContainer.StartAsync();

            await DatabaseReady(0);

            // create a database for tests
            await InitializeDatabase();

            async Task DatabaseReady(int counter)
            {
                try
                {
                    Thread.Sleep(5 * 1000);
                    var connection = new SqlConnection(this._dbContainer.GetConnectionString().Replace("yourStrong(!)Password", Password));
                    connection.Open();
                    var command = connection.CreateCommand();
                    command.CommandText = "SELECT 1";
                    await command.ExecuteNonQueryAsync();
                }
                catch (Exception)
                {
                    if (counter < 50)
                        await DatabaseReady(counter + 1);
                }
            }

            async Task InitializeDatabase()
            {
                var connection = new SqlConnection(this._dbContainer.GetConnectionString().Replace("yourStrong(!)Password", Password));
                connection.Open();
                var command = connection.CreateCommand();
                command.CommandText = $"IF DB_ID('{Database}') IS NOT NULL DROP DATABASE {Database}";
                command.ExecuteNonQuery();
                command.CommandText = $"CREATE DATABASE {Database}";
                command.ExecuteNonQuery();

                this.Connection = this._dbContainer.GetConnectionString().Replace("yourStrong(!)Password", Password).Replace("master", Database);

                var dbContext = this.host.Services.GetRequiredService<AppDbContext>();
                var connectionTeste = dbContext.Database.GetDbConnection();
                await dbContext.Database.EnsureCreatedAsync();
                await dbContext.Database.MigrateAsync();
            }
        }

        public async Task DisposeAsync()
        {
            await this._dbContainer.StopAsync();
            await this._dbContainer.DisposeAsync();
        }
    }
}`
}

function generateTestHelper(model: Model): string {
  return `
using AutoFixture;
using AutoFixture.Kernel;
using ${model.configuration?.name}.Domain.Entities;

namespace ${model.configuration?.name}.Infrastructure.Test.Helpers
{
    internal static class TestHelper
    {

        public static Fixture GetFixture()
        {

            Fixture entityfixture = new Fixture();

            // Remove the ThrowingRecursionBehavior
            entityfixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList()
                  .ForEach(b => entityfixture.Behaviors.Remove(b));

            // Add the OmitOnRecursionBehavior
            entityfixture.Behaviors.Add(new OmitOnRecursionBehavior());

            entityfixture.Customizations.Add();

            return entityfixture;

        }

    }
}`
}
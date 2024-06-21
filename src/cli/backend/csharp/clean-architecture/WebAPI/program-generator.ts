import { expandToString } from "langium/generate";
import { Model, isLocalEntity, isModule } from "../../../../../language/generated/ast.js"
import fs from "fs";
import path from "path";

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder,"Program.cs"), generateProgram(model))

}
function generateProgram(model: Model) : string {
    return expandToString`
using Microsoft.AspNetCore.OData;
using Microsoft.EntityFrameworkCore;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using Microsoft.OpenApi.Models;
using Serilog;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.Services;
using ${model.configuration?.name}.Application.Shared.Exceptions.Filters;
using ${model.configuration?.name}.Infrastructure;
using ${model.configuration?.name}.Infrastructure.Context;
using ${model.configuration?.name}.WebApi.Extensions;
using System.Text.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);

#region Adio do Serilog
Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Debug()
            .WriteTo.Console()
            .WriteTo.File("logs/myapp.txt", rollingInterval: RollingInterval.Day)
            .CreateLogger();
builder.Host.UseSerilog(Log.Logger);
#endregion

#region Add services to the container.
builder.Services.ConfigurePersistenceApp(builder.Configuration);
builder.Services.ConfigureApplicationApp();
builder.Services.AddMvc()
                .AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
#endregion

#region Adio do service do CORS
builder.Services.ConfigureCorsPolicy();
#endregion

#region Adio do ODATA
builder.Services.AddControllers(options =>
{
    options.Filters.Add<BadRequestExceptionFilter>();
    options.Filters.Add<DatabaseExceptionFilter>();
})
    .AddOData(options => options
        .SkipToken()
        .AddRouteComponents("api", GetEdmModel())
        .Select()
        .Filter()
        .OrderBy()
        .SetMaxTop(4)
        .Count()
        .Expand());

static IEdmModel GetEdmModel()
{
    ODataConventionModelBuilder builder = new();

    ${generateEntitySet(model)}
    return builder.GetEdmModel();
}
#endregion

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });

    options.CustomSchemaIds(type => type.ToString());
});

//descomente para utilizar a requisio baseada na Role do User
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("Coordenador", policy => policy.RequireRole("Coordenador"));
});

#region Adio das configuraes definidas no Builder Extension
builder.AddConfiguration();
builder.AddJwtAuthentication();

var app = builder.Build();

CreateDatabase(app);
#endregion

#region Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseHttpsRedirection();
// Adio de autnticao e autorizao
app.UseAuthentication();
app.UseAuthorization();

//app.UseRouting();
app.MapAccountEndpoints();
//descomente para utilizar a requisio baseada na Role do User
app.MapControllers().RequireAuthorization("Coordenador");
//app.MapControllers().RequireAuthorization();
//app.MapControllers();

app.Run();
#endregion

#region Cria banco de dados
static void CreateDatabase(WebApplication app)
{
    var serviceScope = app.Services.CreateScope();
    var dataContext = serviceScope.ServiceProvider.GetService<AppDbContext>();
        dataContext?.Database.EnsureCreated();
    // Carga no banco de dados
    //var sqlFile = "./Scripts/inserts.sql";
    //var sql = File.ReadAllText(sqlFile);
    //dataContext?.Database.ExecuteSqlRaw(sql);
}
#endregion`
}

function generateEntitySet(model: Model): string {
    let identitySet = ""
    const modules =  model.abstractElements.filter(isModule);
    
    for(const mod of modules) {
        for(const cls of mod.elements.filter(isLocalEntity)) {
            identitySet += `builder.EntitySet<${cls.name}ResponseDTO>("${cls.name}"); \n`
        }
    }
    return identitySet
}
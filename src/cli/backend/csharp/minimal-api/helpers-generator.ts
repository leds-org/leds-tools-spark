import { Model } from "../../../../language/generated/ast.js";
import fs from "fs";
import path from "path";
import { generate as generateProperties} from "./properties/generator.js";
import { expandToStringWithNL } from "langium/generate";

export function generate(model: Model, target_folder: string) : void {
    
    const target_folder_properties = target_folder + "/Properties"
    fs.mkdirSync(target_folder_properties, {recursive: true});

    generateProperties(model, target_folder_properties);
    fs.writeFileSync(path.join(target_folder, 'appsettings.json'), generateAppSettings())
    fs.writeFileSync(path.join(target_folder, 'appsettings.Development.json'), generateAppSettingsDevelopment())
    fs.writeFileSync(path.join(target_folder, model.configuration?.name + '.csproj'), generatecsproj())
    fs.writeFileSync(path.join(target_folder, model.configuration?.name + '.csproj.user'), generatecsprojuser())
    fs.writeFileSync(path.join(target_folder, 'Dockerfile'), generateDockerfile(model))
}

function generateAppSettings (): string {

    return expandToStringWithNL`
    {
        "Logging": {
            "LogLevel": {
                "Default": "Information",
                "Microsoft": "Warning",
                "Microsoft.Hosting.Lifetime": "Information"
            }
        },
        "AllowedHosts": "*"
    }`
}

function generateAppSettingsDevelopment() : string {

    return expandToStringWithNL`
    {
        "Logging": {
          "LogLevel": {
            "Default": "Information",
            "Microsoft.AspNetCore": "Warning"
          }
        }
      }
      `
}

function generatecsproj() : string {

    return expandToStringWithNL`
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <UserSecretsId>YOUR_SECRETS_USER_ID</UserSecretsId>
    <DockerDefaultTargetOS>Linux</DockerDefaultTargetOS>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="8.0.5" />
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="8.0.5" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.InMemory" Version="8.0.5" />
    <PackageReference Include="Microsoft.OpenApi" Version="1.6.14" />
    <PackageReference Include="Microsoft.VisualStudio.Azure.Containers.Tools.Targets" Version="1.19.6" />
    <PackageReference Include="Swashbuckle.AspNetCore.Swagger" Version="6.6.1" />
    <PackageReference Include="Swashbuckle.AspNetCore.SwaggerGen" Version="6.6.1" />
    <PackageReference Include="Swashbuckle.AspNetCore.SwaggerUI" Version="6.6.1" />
  </ItemGroup>

</Project>
`
}

function generatecsprojuser() : string {

    return expandToStringWithNL`
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="Current" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup>
    <ActiveDebugProfile>Container (Dockerfile)</ActiveDebugProfile>
  </PropertyGroup>
</Project>`
}

function generateDockerfile(model : Model) : string {
  return expandToStringWithNL`

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["${model.configuration?.name}/${model.configuration?.name}.csproj", "${model.configuration?.name}/"]
RUN dotnet restore "./${model.configuration?.name}/${model.configuration?.name}.csproj"
COPY . .
WORKDIR "/src/${model.configuration?.name}"
RUN dotnet build "./${model.configuration?.name}.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./${model.configuration?.name}.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "${model.configuration?.name}.dll"]`
}
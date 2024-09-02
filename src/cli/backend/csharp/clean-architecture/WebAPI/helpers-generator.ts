import { expandToString } from "langium/generate";
import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs";
import path from "path";

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder,"appsettings.json"), generateAppSettings())
    fs.writeFileSync(path.join(target_folder,"appsettings.Development.json"), generateAppSettingsDevelopment())
    fs.writeFileSync(path.join(target_folder, model.configuration?.name + ".WebAPI.http"), generateHttp(model))

}


function generateAppSettings () : string {
    return expandToString`
{
  "ConnectionStrings": {
    "SqlServer": ""
  },
  "Secrets": {
    "ApiKey": "",
    "JwtPrivateKey": "",
    "PasswordSaltKey": ""
  },
  "Email": {
    "DefaultFromEmail": "",
    "EmailApiKey": ""
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "Serilog": {
    "Using": [ "Serilog.Sinks.File" ],
    "MinimumLevel": {
      "Default": "Information"
    },
    "WriteTo": [
      {
        "Name": "Console"
      },
      {
        "Name": "File",
        "Args": {
          "path": "logs/webapi-.log",
          "rollingInterval": "Day",
          "outputTemplate": "[{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} {Level:u3}] {Message:lj}{NewLine}{Exception}"
        }
      }
    ]
  }
}`
}

function generateAppSettingsDevelopment() : string {
    return expandToString`
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}`
}

function generateHttp(model: Model): string {
    return expandToString`
@${model.configuration?.name}.WebApi_HostAddress = http://localhost:5068

###`
}
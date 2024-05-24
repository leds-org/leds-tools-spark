import path from "path";
import fs from "fs";
import { LocalEntity, Model, Module, isLocalEntity, isModule,  } from "../../../../../language/generated/ast.js";
import { expandToStringWithNL } from "langium/generate";

export function generateCrud(model: Model, target_folder: string) : void{

    fs.writeFileSync(path.join(target_folder, `Program.cs`), generateProgram(model, target_folder))
}

function generateProgram(model: Model, target_folder: string) : string {

    const modules = model.abstractElements.filter(isModule);

    return expandToStringWithNL`
    using Microsoft.EntityFrameworkCore;
    using Microsoft.AspNetCore.OpenApi;
    using MinimalAPI;
    // modules
    ${generateModuleNames(modules)}

    internal class Program
    {
        private static void Main(String[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddDbContext<${generateContextNames(modules)}>(opt => opt.UseInMemoryDatabase("db"));
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.environment.IsDevelopment()) 
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //mapgroups:
            ${generateMapGroups(modules)}

        }
    }
    `
}

function generateModuleNames(modules: Module[]) : string {
    let moduleNames = "";
    for (const mod of modules) {
      moduleNames += `using ${mod.name}; \n`;
    }
    return moduleNames;
  
}

function generateContextNames(modules: Module[]): string {
    let contextName = "";
    for (const mod of modules) {
      const mod_classes = mod.elements.filter(isLocalEntity);
      for (const classe of mod_classes) {
        contextName += `${classe.name}Db,`;
      }
    }
    // Remove the trailing comma
    return contextName.slice(0, -1) || "undefined";
  }
  
function generateMapGroups(modules : Module[]) : string {
    let mapGroups = "";
    for (const mod of modules) {
        mapGroups += `var ${mod.name.toLowerCase()} = app.MapGroup("/${mod.name}"); \n \n`;
        const mod_classes = mod.elements.filter(isLocalEntity);
        for (const classe of mod_classes) {
            mapGroups += `var ${classe.name.toLowerCase()} = ${mod.name.toLowerCase()}.MapGroup("/${classe.name}"); \n`
            mapGroups += `${classe.name.toLowerCase()}.MapGet("/", async (${classe.name}Db db) =>\n    await db.${classe.name}.ToListAsync());\n`
            mapGroups += `${classe.name.toLowerCase()}.MapGet("/{id}", async (int id, ${classe.name}Db db) =>\n    await db.${classe.name}.FindAsync(id) \n        is ${classe.name} ${classe.name.toLowerCase()} \n        ? Results.Ok(${classe.name.toLowerCase()}) \n        : Results.NotFound()); \n \n`
            mapGroups += `${classe.name.toLowerCase()}.MapPost("/", async (${classe.name} ${classe.name.toLowerCase()}, ${classe.name}Db db) => \n{ \n    db.${classe.name}.Add(${classe.name}); \n    await db.SavechangesAsync(); \n    return Results.Created($"/${classe.name.toLowerCase()}/{${classe.name.toLowerCase()}.Id}", ${classe.name.toLowerCase()});\n}); \n \n`
            mapGroups += `${classe.name.toLowerCase()}.MapPut("/{id}", async (int id, ${classe.name} input${classe.name}, ${classe.name}Db db) => \n{ \n    var ${classe.name.toLowerCase()} = await db.${classe.name}.FindAsync(id); \n    if (${classe.name.toLowerCase()} is null) return Results.NotFound(); ${generateInputs(classe)}\n    await db.SaveChangesAsync(); \n    return Results.NoContent(); \n}); \n \n`
            mapGroups += `${classe.name.toLowerCase()}.MapDelete("/{id}", async (int id, ${classe.name}Db db) => \n{ \n    if (await db.${classe.name}.FindAsync(id) is ${classe.name} ${classe.name.toLowerCase()}) { \n        db.${classe.name}.remover(${classe.name.toLowerCase()}); \n        await db.SaveChangesAsync(); \n        return Results.NoContent(); \n    } \n \n return Results.NotFound(); \n}); \n \n`

        }
    }
    return mapGroups;
}

function generateInputs(classe : LocalEntity) : string {    

    let inputs = "";
    for (const att of classe.attributes) {
        inputs += `\n        ${classe.name.toLowerCase()}.${att.name} = input${classe.name}.${att.name};`
    }
    return inputs;
}
import path from "path";
import fs from "fs";
import { LocalEntity, Model, Module, isLocalEntity, isModule,  } from "../../../../../language/generated/ast.js";
import { expandToStringWithNL } from "langium/generate";
import { capitalizeString } from "../../../../util/generator-utils.js";

export function generate(model: Model, target_folder: string) : void{

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
            builder.Services.AddDbContext<ContextDb>(opt => opt.UseInMemoryDatabase("db"));
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
  
function generateMapGroups(modules : Module[]) : string {
    let mapGroups = "";
    for (const mod of modules) {
        mapGroups += `var ${mod.name.toLowerCase()} = app.MapGroup("/${mod.name}"); \n \n`;
        const mod_classes = mod.elements.filter(isLocalEntity);
        for (const classe of mod_classes) {
            mapGroups += `var ${classe.name.toLowerCase()} = ${mod.name.toLowerCase()}.MapGroup("/${classe.name}"); \n`
            mapGroups += `${classe.name.toLowerCase()}.MapGet("/", async (ContextDb db) =>\n    await db.${classe.name}s.ToListAsync());\n`
            mapGroups += `${classe.name.toLowerCase()}.MapGet("/{id}", async (int id, ContextDb db) =>\n    await db.${classe.name}s.FindAsync(id) \n        is ${classe.name} ${classe.name.toLowerCase()} \n        ? Results.Ok(${classe.name.toLowerCase()}) \n        : Results.NotFound()); \n \n`
            mapGroups += `${classe.name.toLowerCase()}.MapPost("/", async (${classe.name} ${classe.name.toLowerCase()}, ContextDb db) => \n{ \n    db.${classe.name}s.Add(${classe.name.toLowerCase()}); \n    await db.SaveChangesAsync(); \n    return Results.Created($"/${classe.name.toLowerCase()}/{${classe.name.toLowerCase()}.Id}", ${classe.name.toLowerCase()});\n}); \n \n`
            mapGroups += `${classe.name.toLowerCase()}.MapPut("/{id}", async (int id, ${classe.name} input${classe.name}, ContextDb db) => \n{ \n    var ${classe.name.toLowerCase()} = await db.${classe.name}s.FindAsync(id); \n    if (${classe.name.toLowerCase()} is null) return Results.NotFound(); ${generateInputs(classe)}\n    await db.SaveChangesAsync(); \n    return Results.NoContent(); \n}); \n \n`
            mapGroups += `${classe.name.toLowerCase()}.MapDelete("/{id}", async (int id, ContextDb db) => \n{ \n    if (await db.${classe.name}s.FindAsync(id) is ${classe.name} ${classe.name.toLowerCase()}) { \n        db.${classe.name}s.Remove(${classe.name.toLowerCase()}); \n        await db.SaveChangesAsync(); \n        return Results.NoContent(); \n    } \n \n return Results.NotFound(); \n}); \n \n`

        }
    }
    return mapGroups;
}

function generateInputs(classe : LocalEntity) : string {    

    let inputs = "";
    for (const att of classe.attributes) {
        inputs += `\n        ${classe.name.toLowerCase()}.${capitalizeString(att.name)} = input${classe.name}.${capitalizeString(att.name)};`
    }
    return inputs;
}
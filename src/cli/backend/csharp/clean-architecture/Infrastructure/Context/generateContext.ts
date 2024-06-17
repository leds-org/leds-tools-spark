import path from "path";
import fs from "fs";
import { LocalEntity, Model, Module, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js";
import { RelationInfo, processRelations } from "../../../../../util/relations.js";
import { Generated, expandToStringWithNL, toString } from "langium/generate";

export function generateContext(model: Model, target_folder: string) : void {

  const modules =  model.abstractElements.filter(isModule);
  const all_entities = modules.map(module => module.elements.filter(isLocalEntity)).flat()
  const relation_maps = processRelations(all_entities)
  const name = model.configuration?.name + ""

  for(const mod of modules) {

    fs.writeFileSync(path.join(target_folder, `AppDbContext.cs`), toString(generateAppDbContext(mod, name, relation_maps)))
  }
}

function generateAppDbContext(mod : Module, package_name: string, relation_maps: Map<LocalEntity, RelationInfo[]>) : Generated {
  return expandToStringWithNL`
    namespace ${package_name}{

    using Microsoft.EntityFrameworkCore;

    public class AppDbContext : DbContext
        {
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

            protected override void OnModelCreating(ModelBuilder modelBuilder)
            {
                modelBuilder.ApplyConfigurationsFromAssembly(GetType().Assembly);
            }
            public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
            ${generateDbSet(mod)}
        }
    }
  `
}

function generateDbSet (mod : Module) : string {
    let dbsets = "";
    for(const cls of mod.elements.filter(isLocalEntity)) {
        dbsets += `public DbSet<${cls.name}> ${cls.name}s { get; set; } \n`
    }
    return dbsets
}
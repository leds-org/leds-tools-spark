import fs from "fs";
import {  Attribute, LocalEntity, Model, isLocalEntity, isModule,  } from "../../../../../language/generated/ast.js";
import { createPath } from "../../../../util/generator-utils.js";
import { Generated, expandToString, expandToStringWithNL } from "langium/generate";
import path from "path";

export function generateModules(model: Model, target_folder: string) : void {
    
    const modules = model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const MODULE_PATH = createPath(target_folder, mod.name.toLowerCase())
    
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {
            const class_name = cls.name

            if(!cls.is_abstract){
                fs.writeFileSync(path.join(MODULE_PATH, `${class_name}.cs`), generateClassEnt(cls, mod.name))
                fs.writeFileSync(path.join(MODULE_PATH, `${class_name}DB.cs`), generateClassDB(cls, mod.name))
            }
        }
    }

}

function generateClassEnt(cls: LocalEntity, mod_name: string) : string {
    return expandToStringWithNL`
    namespace ${mod_name}

        public class ${cls.name}
        {
            public int Id { get; set; }
            ${cls.attributes.map(attribute => generateAttribute(attribute)).join("\n")}
        }
    `

}

function generateClassDB(cls: LocalEntity, mod_name: string) : string {
    return expandToStringWithNL`
    namespace ${mod_name}

        using Microsoft.EntityFrameworkCore;
        internal class ${cls.name}Db
        {
            public DbSet<${cls.name}> ${cls.name}s { get; set; }

            public ${cls.name}Db(DbContextOptions<${cls.name}Db> options) 
                : base(options) { }
            public DbSet<${cls.name}> ${cls.name.toLowerCase()}s => Set<${cls.name}>();
        }
    `

}

function generateAttribute(attribute: Attribute): Generated{
    return expandToString`
    public ${attribute.type} ${attribute.name} { get; set; }
    `
}
import fs from "fs";
import {  Model, isLocalEntity, isModule,  } from "../../../../../language/generated/ast.js";
import { createPath } from "../../../../util/generator-utils.js";

export function generateModules(model: Model, target_folder: string) : void {
    
    const modules = model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const MODULE_PATH = createPath(target_folder, mod.name.toLowerCase())
    
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {
            const class_name = cls.name

            if(!cls.is_abstract){
                fs.writeFileSync(path.join())
            }
        }
    }

}
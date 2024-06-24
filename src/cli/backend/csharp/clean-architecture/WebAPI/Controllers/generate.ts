import path from "path"
import { Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import { generate as generateGenerics } from "./Generics/generate.js"
import { generate as generateCommand } from "./Command/generate.js"
import { generate as generateQuery } from "./Query/generate.js"

export function generate(model: Model, target_folder: string) : void {

    const command_folder = target_folder + "/Command"
    const query_folder = target_folder + "/Query"
    const generics_folder = target_folder + "/Generics"

    fs.mkdirSync(command_folder, {recursive: true})
    fs.mkdirSync(query_folder, {recursive: true})
    fs.mkdirSync(generics_folder, {recursive: true})

    generateGenerics(model, generics_folder)
    generateLoop(model, command_folder, query_folder)

}

function generateLoop(model: Model, command_folder: string, query_folder: string) : void {
    
    const modules =  model.abstractElements.filter(isModule);
    
    for(const mod of modules) {
        for(const cls of mod.elements.filter(isLocalEntity)) {
            fs.writeFileSync(path.join(command_folder, `${cls.name}CommandController.cs`), generateCommand(model, cls))
            fs.writeFileSync(path.join(query_folder, `${cls.name}QueryController.cs`), generateQuery(model, cls))
        }
        
    }
}
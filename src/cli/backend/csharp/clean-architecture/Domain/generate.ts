import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs"
import { generate as CommonGenerator } from "./Common/generate.js"
import { generate as EntitiesGenerator } from "./Entities/generate.js"
import { generate as ProjectGenerator} from "./project-generator.js"

export function generate(model: Model, target_folder: string) : void {
    
    const common_folder = target_folder + "/Common"
    const entities_folder = target_folder + "/Entities"

    fs.mkdirSync(common_folder, {recursive: true})
    fs.mkdirSync(entities_folder, {recursive: true})

    ProjectGenerator(model, target_folder)
    CommonGenerator(model, common_folder)
    EntitiesGenerator(model, entities_folder)
}
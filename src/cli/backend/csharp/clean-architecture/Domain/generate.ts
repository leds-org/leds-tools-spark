import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs"
import { generate as CommonGenerator } from "./Common/generate.js"
import { generate as EntitiesGenerator } from "./Entities/generate.js"
import { generate as ProjectGenerator} from "./project-generator.js"
import { generate as EnumGenerator } from "./Enums/generate.js"
import { generate as InterfaceGenerator } from "./Interfaces/generate.js"

export function generate(model: Model, target_folder: string) : void {
    
    const common_folder = target_folder + "/Common"
    const entities_folder = target_folder + "/Entities"
    const enums_folder = target_folder + "/Enums"
    const interfaces_folder = target_folder + "/Interfaces"

    fs.mkdirSync(common_folder, {recursive: true})
    fs.mkdirSync(entities_folder, {recursive: true})
    fs.mkdirSync(enums_folder, {recursive: true})
    fs.mkdirSync(interfaces_folder, {recursive: true})

    ProjectGenerator(model, target_folder)
    CommonGenerator(model, common_folder)
    EntitiesGenerator(model, entities_folder)
    EnumGenerator(model, enums_folder);
    InterfaceGenerator(model, interfaces_folder)
}
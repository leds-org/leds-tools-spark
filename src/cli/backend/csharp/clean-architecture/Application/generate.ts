import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs"
import { generate as projectGenerator} from "./project-generator.js"
import { generate as sharedGenerator} from "./Shared/generate.js"
import { generate as servicesGenerator} from "./Services/generate.js"

export function generate(model: Model, target_folder: string) : void {
    
    const Shared_folder = target_folder + "/Shared"
    const Services_Folder = target_folder + "/Services"

    fs.mkdirSync(Shared_folder, {recursive: true})
    fs.mkdirSync(Services_Folder, {recursive: true})

    projectGenerator(model, target_folder)
    sharedGenerator(model, Shared_folder)   
    servicesGenerator(model, Services_Folder)

}
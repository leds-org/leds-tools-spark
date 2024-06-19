import { Model } from "../../../../../language/generated/ast.js"
import { generate as projectGenerator} from "./project-generator.js"
import fs from "fs"
import { generate as sharedGenerator} from "./Shared/generate.js"

export function generate(model: Model, target_folder: string) : void {
    
    const Shared_folder = target_folder + "/Shared"

    fs.mkdirSync(Shared_folder, {recursive: true})

    projectGenerator(model, target_folder)
    sharedGenerator(model, Shared_folder)   

}
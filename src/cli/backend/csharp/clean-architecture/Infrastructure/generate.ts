import { Model } from "../../../../../language/generated/ast.js"
import { generate as projectGenerator} from "./project-generator.js"
import { generateContext } from "./Context/generateContext.js"
import fs from "fs"

export function generate(model: Model, target_folder: string) : void {
    
    const context_folder = target_folder + "/Context"

    fs.mkdirSync(context_folder, {recursive: true})
    
    projectGenerator(model, target_folder)

    generateContext(model, context_folder)

}
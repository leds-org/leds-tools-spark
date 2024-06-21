import { Model } from "../../../../../language/generated/ast.js"
import { generate as projectGenerator} from "./project-generator.js"
import { generate as helperGenerator } from "./helpers-generator.js"
import { generate as programGenerator } from "./program-generator.js"

export function generate(model: Model, target_folder: string) : void {
    
    projectGenerator(model, target_folder)
    helperGenerator(model, target_folder)
    programGenerator(model, target_folder)

}
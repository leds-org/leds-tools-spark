import { Model } from "../../../../../language/generated/ast.js"
import { generate as projectGenerator} from "./project-generator.js"

export function generate(model: Model, target_folder: string) : void {
    
    projectGenerator(model, target_folder)

}
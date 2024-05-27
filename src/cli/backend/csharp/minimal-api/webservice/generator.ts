import { Model } from "../../../../../language/generated/ast.js";
import fs from "fs";

import {generateModules} from "./module2.js"
import { generateCrud } from "./crud-generator.js";

export function generate(model: Model, target_folder: string) : void {
    fs.mkdirSync(target_folder, {recursive:true})
    
    generateModules(model, target_folder)
    generateCrud(model, target_folder)

}
  
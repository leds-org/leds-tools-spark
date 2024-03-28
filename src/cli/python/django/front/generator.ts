import { Model } from "../../../../language/generated/ast.js";
import fs from "fs";

export function generate(model: Model, target_folder: string) : void {
    fs.mkdirSync(target_folder, {recursive:true})
    
}
  
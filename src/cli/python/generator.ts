import { Model } from "../../language/generated/ast.js"
import fs from "fs";



export function generate(model: Model, target_folder: string) : void {
    const target_folder_back = target_folder+"/back"
    const target_folder_front = target_folder+"/front"

    //creating folders
    fs.mkdirSync(target_folder_back, {recursive:true})
    fs.mkdirSync(target_folder_front, {recursive:true})
    
    
}  
import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs"
import { generate as CommonGenerator } from "./Common/generate.js"

export function generate(model: Model, target_folder: string) : void {
    
    const common_folder = target_folder + "/Common"

    fs.mkdirSync(common_folder, {recursive: true})

    CommonGenerator(model, common_folder)
}
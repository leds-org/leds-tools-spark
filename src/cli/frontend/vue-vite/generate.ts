import { Model } from "../../../language/generated/ast.js"
import fs from "fs";
import { createPath } from "../../util/generator-utils.js";
import { generate as helpersGenerator } from "./helpers-generator.js"

export function generate(model: Model, target_folder: string) : void {

    const target_folder_front = createPath(target_folder, "frontend")

    fs.mkdirSync(target_folder_front, {recursive:true})

    helpersGenerator(model, target_folder_front)

}  
import {Model } from "../../../language/generated/ast.js"
import fs from "fs";
import { createPath } from "../../util/generator-utils.js";
import { generateRego } from "./rego-generator.js"

export function generate(model: Model, target_folder: string) : void {

    const target_folder_opa = createPath(target_folder, "opa")
    //creating folders
    fs.mkdirSync(target_folder_opa, {recursive:true})

    generateRego(model, target_folder_opa)
}
import { Model } from "../../../../language/generated/ast.js"
import fs from "fs";
import { createPath } from "../../../util/generator-utils.js";
import { generate as generatePageObjects } from "./pageObjects/generate.js";

export function generate(model: Model, target_folder: string) : void {

    const cypress_folder = createPath(target_folder, "cypress")
    const pageObjects_folder = createPath(cypress_folder, "pageObjects")

    fs.mkdirSync(cypress_folder, {recursive:true})
    fs.mkdirSync(pageObjects_folder, {recursive:true})

    generatePageObjects(model, pageObjects_folder);
}  


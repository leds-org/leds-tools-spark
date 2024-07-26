import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs";
import { createPath } from "../../../../util/generator-utils.js";
import { generate as generateModel } from "./model/generate.js";
import { generate as generateAuthentication } from "./authentication/generate.js";

export function generate(model: Model, target_folder: string) : void {

    const authentication_folder = createPath(target_folder, "authentication")
    const model_folder = createPath(target_folder, `${model.configuration?.name}`)
    const dashboard_folder = createPath(target_folder, "dashboards")

    fs.mkdirSync(authentication_folder, {recursive:true})
    fs.mkdirSync(model_folder, {recursive:true})
    fs.mkdirSync(dashboard_folder, {recursive:true})

    generateModel(model, model_folder)
    generateAuthentication(model, authentication_folder)

}  

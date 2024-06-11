import { Model } from "../../../language/generated/ast.js"
import fs from "fs";

import { generate as minimalApiGenerate } from "./minimal-api/generator.js";
import {generate as projectGenerate} from "./project-generator.js"
import { generate as generateDocker } from "./docker-generator.js"

export function generate(model: Model, target_folder: string) : void {
    const target_folder_back = target_folder+"/backend"
    const target_folder_projname = target_folder_back + "/" + model.configuration?.name

    //creating folders

    fs.mkdirSync(target_folder_back, {recursive:true})

    minimalApiGenerate(model, target_folder_projname)
    projectGenerate(model, target_folder_back)
    generateDocker(model, target_folder_back)

}
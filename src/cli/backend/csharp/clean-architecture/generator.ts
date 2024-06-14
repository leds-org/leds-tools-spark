import { Model } from "../../../../language/generated/ast.js"
import fs from "fs";
import { generate as generateInfra } from "./Infrastructure/generate.js"
import { generate as generateTest } from "./Test/generate.js"
import { generate as generateWeb } from "./WebAPI/generate.js"
import { generate as generateDomain } from "./Domain/generate.js"
import { generate as generateApplication } from "./Application/generate.js"

export function generate(model: Model, target_folder: string) : void {
    
    const target_folder_application = target_folder + `/${model.configuration?.name}.Application`
    const target_folder_domain = target_folder + `/${model.configuration?.name}.Domain`
    const target_folder_test = target_folder + `/${model.configuration?.name}.Test`
    const target_folder_webapi = target_folder + `/${model.configuration?.name}.WebAPI`
    const target_folder_infra = target_folder + `/${model.configuration?.name}.Infrastructure`

    fs.mkdirSync(target_folder_application, {recursive: true})
    fs.mkdirSync(target_folder_domain, {recursive: true})
    fs.mkdirSync(target_folder_test, {recursive: true})
    fs.mkdirSync(target_folder_webapi, {recursive: true})
    fs.mkdirSync(target_folder_infra, {recursive: true})
    
    generateInfra(model, target_folder_infra);
    generateTest(model, target_folder_test);
    generateWeb(model, target_folder_webapi);
    generateDomain(model, target_folder_domain);
    generateApplication(model, target_folder_application);

}
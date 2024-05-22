import fs from "fs";
import path from "path";
import { expandToStringWithNL } from "langium/generate";
import { Configuration, Model } from "../../../../../language/generated/ast.js";


export function generate(model: Model, target_folder: string) : void {
    fs.mkdirSync(target_folder, {recursive: true})

    if(model.configuration){
        fs.writeFileSync(path.join(target_folder, 'README.md'),createProjectReadme(model.configuration))
        fs.writeFileSync(path.join(target_folder, '.gitlab-ci.yml'),createGitLab())
    }
}

function createGitLab():string{
    return expandToStringWithNL`
    teste
    `
}

function stackREADME (): string {
    return expandToStringWithNL`
    1. Minimal API
    2. Swagger API
    `
}

function createProjectReadme(configuration : Configuration) : string{
    return expandToStringWithNL`
    # ${configuration.name}
    ## 🚀 Goal
    ${configuration.description}

    ## 📕 Domain Documentation
    
    Domain documentation can be found [here](./docs/README.md)

    ## ⚙️ Stack 
    ${stackREADME()}

    ## 🔧 Install

    ## 🔧 Usage

    `
}
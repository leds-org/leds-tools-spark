import fs from "fs";
import path from "path";
import { expandToStringWithNL } from "langium/generate";
import { Configuration, Model } from "../../../../../language/generated/ast.js";


export function generate(model: Model, target_folder: string) : void {
    fs.mkdirSync(target_folder, {recursive: true})

    if(model.configuration){
        fs.writeFileSync(path.join(target_folder, 'README.md'),createProjectReadme(model.configuration))
        fs.writeFileSync(path.join(target_folder, '.gitlab-ci.yml'),createGitLab(model))
    }
}

function createGitLab(model : Model):string{
    return expandToStringWithNL`
stages:
  - build

job:
  stage: build
  script:
  - echo "Restoring NuGet Packages..."
  - '"c:\\nuget\\nuget.exe" restore "${model.configuration?.name}.sln"'
  - ''
  - echo "Release build..."
  - C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\msbuild.exe /consoleloggerparameters:ErrorsOnly /maxcpucount /nologo /property:Configuration=Release /verbosity:quiet "MySolution.sln"
  tags:
  except:
  - tags
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
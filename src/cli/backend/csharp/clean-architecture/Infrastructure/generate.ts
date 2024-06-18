import { Model } from "../../../../../language/generated/ast.js"
import { generate as projectGenerator} from "./project-generator.js"
import { generateContext } from "./Context/generateContext.js"
import { generate as GenerateMigrations } from "./Migrations/generate.js"
import fs from "fs"

export function generate(model: Model, target_folder: string) : void {
    
    const context_folder = target_folder + "/Context"
    const migrations_folder = target_folder + "/Migrations"

    fs.mkdirSync(context_folder, {recursive: true})
    fs.mkdirSync(migrations_folder, {recursive: true})
    
    projectGenerator(model, target_folder)

    generateContext(model, context_folder)
    GenerateMigrations(model, migrations_folder)

}
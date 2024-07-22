import { isEnumX, isLocalEntity, isModule, Model } from "../../../../../../language/generated/ast.js"
import fs from "fs";
import path from "path";
import { createPath } from "../../../../../util/generator-utils.js";
import { generate as generateForms } from "./generateForms.js";
import { generate as generateIndex } from "./generateIndex.js";
import { generate as generateDetails } from "./generateDetails.js";

export function generate(model: Model, target_folder: string) : void {

    const modules =  model.abstractElements.filter(isModule);
    
    for(const mod of modules) {
      const enumx = mod.elements.filter(isEnumX)
      for(const cls of mod.elements.filter(isLocalEntity)) {

          const cls_folder = createPath(target_folder, `${cls.name}`)

          fs.mkdirSync(cls_folder, {recursive:true})

          fs.writeFileSync(path.join(cls_folder, `Form${cls.name}.vue`), generateForms(cls, enumx))
          fs.writeFileSync(path.join(cls_folder, `Index${cls.name}.vue`), generateIndex(cls))
          fs.writeFileSync(path.join(cls_folder, `Details${cls.name}.vue`), generateDetails(cls))
      }
        
    }
}  
import type { Model } from '../language/generated/ast.js';
import { GenerateOptions } from './main.js';
import { generate as pyhtonGenerate } from './backend/python/generator.js';
import { generate as javaGenerate } from './backend/java/generator.js';
import { generate as docGenerate} from './documentation/generator.js';
;
import { generate as csharp} from './backend/csharp/generator.js';

import path from 'path';

export function generate(model: Model,  filePath: string, destination: string | undefined,  opts: GenerateOptions): string {
    
    const final_destination  = extractDestination(filePath, destination);

    if (model.configuration?.language == 'python'){
        pyhtonGenerate(model,final_destination )
    }
    if (model.configuration?.language?.startsWith("csharp")){
        csharp(model,final_destination)
    }
    else{
        javaGenerate (model,final_destination )
    }
    

    docGenerate (model, final_destination)
    
    return final_destination ;
}

function extractDestination(filePath: string, destination?: string) : string {
    const path_ext = new RegExp(path.extname(filePath)+'$', 'g')
    filePath = filePath.replace(path_ext, '')
  
    return destination ?? path.join(path.dirname(filePath))
  }


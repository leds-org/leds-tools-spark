import type { Model } from '../language/generated/ast.js';
import { extractDestinationAndName } from './cli-util.js';
import { GenerateOptions } from './main.js';

export function generate(model: Model, filePath: string,   opts: GenerateOptions): string {
    
    const data = extractDestinationAndName(filePath, opts.destination);
    
    console.log ("Back:"+opts.only_back)
    console.log ("Front:"+opts.only_front)
    console.log ("Both:"+opts.all)

    return data.destination;
}

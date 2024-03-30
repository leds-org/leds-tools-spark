import type { Model } from '../language/generated/ast.js';
import chalk from 'chalk';
import { Command } from 'commander';
import { R2D2LanguageMetaData } from '../language/generated/module.js';
import { createR2D2Services } from '../language/r-2-d-2-module.js';
import { extractAstNode } from './cli-util.js';
import { generate } from './generator.js';
import { NodeFileSystem } from 'langium/node';
/*
import * as url from 'node:url';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const packagePath = path.resolve(__dirname, '..', '..', 'package.json');
const packageContent = await fs.readFile(packagePath, 'utf-8');
*/
export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createR2D2Services(NodeFileSystem).R2D2;
    const model = await extractAstNode<Model>(fileName, services);
    const generatedFilePath = generate(model, fileName, opts);
    console.log(chalk.green(`Code generated successfully: ${generatedFilePath}`));
};

export type GenerateOptions = {
    destination?: string;
    only_front?: boolean,
    only_back?: boolean,
    all?: boolean,
    only_Documentation?:boolean,
    only_Backlog?:boolean
}

export default function(): void {
    const program = new Command();

    program.version(require('../../package.json').version);

    const fileExtensions = R2D2LanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('Code Generate')
        .action(generateAction);

    program.parse(process.argv);
}

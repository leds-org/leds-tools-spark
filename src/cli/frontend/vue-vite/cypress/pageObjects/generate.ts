import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";

export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, `index.vue`), generateIndex())

}  

function generateIndex(): string {
    return expandToString`
<template>
</template>`
}

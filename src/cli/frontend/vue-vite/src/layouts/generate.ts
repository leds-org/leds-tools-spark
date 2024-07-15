import { Model } from "../../../../../language/generated/ast.js"
import fs from "fs";
import { createPath } from "../../../../util/generator-utils.js";
import { expandToString } from "langium/generate";
import path from "path";
import { generate as generateFull } from "./full/generate.js";

export function generate(model: Model, target_folder: string) : void {

    const blank_folder = createPath(target_folder, "blank")
    const full_folder =  createPath(target_folder, "full")

    fs.mkdirSync(blank_folder, {recursive:true})
    fs.mkdirSync(full_folder, {recursive:true})

    fs.writeFileSync(path.join(blank_folder, 'BlankLayout.vue'), generateBlankLayout());

    generateFull(model, full_folder)
}  

function generateBlankLayout(): string {
    return expandToString`
// ===============================|| Blank Layout ||=============================== //
<script setup lang="ts">
import { RouterView } from "vue-router";
import { useCustomizerStore } from '../../stores/customizer';
const customizer = useCustomizerStore();

</script>
<template>
  <!-----RTL LAYOUT------->
  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <v-app :theme="customizer.actTheme">
      <RouterView />
    </v-app>
  </v-locale-provider>

  <!-----LTR LAYOUT------->
  <v-locale-provider v-else>
    <v-app :theme="customizer.actTheme">
      <RouterView />
    </v-app>
  </v-locale-provider>
</template>`
}
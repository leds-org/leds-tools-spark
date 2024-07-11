import { Model } from "../../../language/generated/ast.js"
import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";
import { generatePackageLock } from "./packageLock.js"

export function generate(model: Model, target_folder: string) : void {

    generatePackageLock(target_folder)
    fs.writeFileSync(path.join(target_folder, 'vite.config.ts'),generateViteConfig());
    fs.writeFileSync(path.join(target_folder, 'package.json'),generatePackage());
    fs.writeFileSync(path.join(target_folder, 'tsconfig.json'),generateTsConfig());
    fs.writeFileSync(path.join(target_folder, 'tsconfig.vite-config.json'),generateTsConfigVite());
    fs.writeFileSync(path.join(target_folder, '.prettierrc'), generatePrettier());
    fs.writeFileSync(path.join(target_folder, '.npmrc'), generatenpmrc());
    fs.writeFileSync(path.join(target_folder, '.eslint.cjs'), generateeslint());
    fs.writeFileSync(path.join(target_folder, '.env'), generateEnv());
    fs.writeFileSync(path.join(target_folder, 'env.d.ts'), generateEnvd());
    fs.writeFileSync(path.join(target_folder, 'index.html'), generateIndex(model));

}  


function generateViteConfig(): string {
    return expandToString`
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
            styles: { configFile: 'src/scss/variables.scss' }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    optimizeDeps: {
        exclude: ['vuetify'],
        entries: ['./src/**/*.vue']
    }
});`
}

function generatePackage(): string {
    return expandToString`
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "src/**/*.js"],
  "compilerOptions": {
    "preserveValueImports": false,
    "importsNotUsedAsValues": "remove",
    "verbatimModuleSyntax": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "allowJs": true,
    "checkJs": true,
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "lib": ["esnext", "dom"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true
  },
  "references": [
    {
      "path": "./tsconfig.vite-config.json"
    }
  ]
}`
}

function generateTsConfig(): string {
    return expandToString`
{
  "extends": "@vue/tsconfig/tsconfig.web.json",
  "include": ["env.d.ts", "src/**/*", "src/**/*.vue", "src/**/*.js"],
  "compilerOptions": {
    "preserveValueImports": false,
    "importsNotUsedAsValues": "remove",
    "verbatimModuleSyntax": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "allowJs": true,
    "checkJs": true,
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "lib": ["esnext", "dom"],
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true
  },
  "references": [
    {
      "path": "./tsconfig.vite-config.json"
    }
  ]
}`
}

function generateTsConfigVite(): string {
    return expandToString`
{
  "extends": "@vue/tsconfig/tsconfig.node.json",
  "include": ["vite.config.*"],
  "compilerOptions": {
    "composite": true,
    "allowJs": true,
    "types": ["node"]
  }
}`
}

function generatePrettier(): string {
    return expandToString`
{
    "bracketSpacing": true,
    "printWidth": 140,
    "singleQuote": true,
    "trailingComma": "none",
    "tabWidth": 4,
    "useTabs": false
}`
}

function generatenpmrc(): string {
    return expandToString`
legacy-peer-deps=true`
}

function generateeslint(): string {
    return expandToString`
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    "prettier/prettier": ["error", { endOfLine: "off" }],
    "javascript.validate.enable": false,
  },
};`
}

function generateEnv(): string {
    return expandToString`
VITE_API_URL="/"`
}

function generateEnvd(): string {
    return expandToString`
/// <reference types="vite/client" />`
}

function generateIndex(model: Model): string {
    return expandToString`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="favicon.png"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
  />
  <title>
    ${model.configuration?.name}
  </title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`
}
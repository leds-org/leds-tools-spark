import { Model } from "../../../language/generated/ast.js"
import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";

export function generate(model: Model, target_folder: string) : void {

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
    "name": "flexy",
    "version": "3.0.0",
    "scripts": {
        "dev": "vite",
        "build": "vue --noEmit && vite build",
        "preview": "vite preview --port 5050",
        "typecheck": "vue-tsc --noEmit",
        "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
    },
    "dependencies": {
        "@fullcalendar/core": "6.1.10",
        "@fullcalendar/daygrid": "6.1.10",
        "@fullcalendar/interaction": "6.1.10",
        "@fullcalendar/timegrid": "6.1.10",
        "@fullcalendar/vue3": "6.1.10",
        "@tiptap/pm": "2.2.2",
        "@tiptap/starter-kit": "2.2.2",
        "@tiptap/vue-3": "2.2.2",
        "@types/aos": "3.0.7",
        "aos": "2.3.4",
        "apexcharts": "3.45.2",
        "axios": "1.6.7",
        "axios-mock-adapter": "1.22.0",
        "chance": "^1.1.8",
        "date-fns": "^2.29.3",
        "dayjs": "^1.11.11",
        "lodash": "^4.17.21",
        "maska": "^1.5.0",
        "pinia": "2.1.7",
        "remixicon": "4.1.0",
        "svgmap": "^2.10.1",
        "sweetalert2": "^11.12.2",
        "vee-validate": "4.6.7",
        "vite-plugin-vuetify": "2.0.1",
        "vue": "3.4.17",
        "vue-clipboard3": "2.0.0",
        "vue-draggable-next": "2.2.1",
        "vue-i18n": "^9.2.2",
        "vue-router": "4.0.12",
        "vue-scrollto": "2.20.0",
        "vue-tabler-icons": "^2.21.0",
        "vue3-apexcharts": "1.5.2",
        "vue3-carousel": "0.3.1",
        "vue3-easy-data-table": "1.5.47",
        "vue3-perfect-scrollbar": "^2.0.0",
        "vue3-print-nb": "0.1.4",
        "vuedraggable": "2.24.3",
        "vuetify": "3.5.3",
        "yup": "1.3.3"
    },
    "devDependencies": {
        "@mdi/font": "7.4.47",
        "@rushstack/eslint-patch": "1.7.2",
        "@types/chance": "^1.1.6",
        "@types/lodash": "^4.14.202",
        "@types/node": "20.11.17",
        "@vitejs/plugin-vue": "5.0.4",
        "@vue/eslint-config-prettier": "^9.0.0",
        "@vue/eslint-config-typescript": "^12.0.0",
        "@vue/tsconfig": "^0.1.3",
        "esbuild": "^0.20.2",
        "eslint": "^8.5.0",
        "eslint-plugin-vue": "^9.21.1",
        "prettier": "3.2.5",
        "sass": "1.70.0",
        "sass-loader": "14.1.0",
        "typescript": "^5.3.3",
        "vite": "^5.1.1",
        "vue-cli-plugin-vuetify": "2.5.8",
        "vue-tsc": "^2.0.26",
        "vuetify-loader": "1.9.2"
    }
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
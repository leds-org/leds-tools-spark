import { Model } from "../../../../../../language/generated/ast.js"
import fs from "fs";
import { createPath } from "../../../../../util/generator-utils.js";
import { expandToString } from "langium/generate";
import path from "path";
import { generate as generateCustomizer } from "./customizer/generate.js";
import { generate as generateHorizontalHeader } from "./horizontal-header/generate.js";
import { generate as generateHorizontalSideBar } from "./horizontal-sidebar/generate.js";
import { generate as generateLogo } from "./logo/generate.js";
import { generate as generateVerticalHeader } from "./vertical-header/generate.js";
import { generate as generateVerticalSidebar } from "./vertical-sidebar/generate.js";

export function generate(model: Model, target_folder: string) : void {

    const customizer_folder = createPath(target_folder, "customizer")
    const horizontal_header_folder =  createPath(target_folder, "horizontal-header")
    const horizontal_sidebar_folder = createPath(target_folder, "horizontal-sidebar")
    const logo_folder = createPath(target_folder, "logo")
    const vertical_header_folder = createPath(target_folder, "vertical-header")
    const vertical_sidebar_folder = createPath(target_folder, "vertical-sidebar")

    fs.mkdirSync(customizer_folder, {recursive:true})
    fs.mkdirSync(horizontal_header_folder, {recursive:true})
    fs.mkdirSync(horizontal_sidebar_folder, {recursive: true})
    fs.mkdirSync(logo_folder, {recursive:true})
    fs.mkdirSync(vertical_header_folder, {recursive:true})
    fs.mkdirSync(vertical_sidebar_folder, {recursive:true})

    fs.writeFileSync(path.join(target_folder, 'FullLayout.vue'), generateFullLayout());

    generateCustomizer(customizer_folder)
    generateHorizontalHeader(horizontal_header_folder)
    generateHorizontalSideBar(horizontal_sidebar_folder)
    generateLogo(logo_folder)
    generateVerticalHeader(vertical_header_folder)
    generateVerticalSidebar(model, vertical_sidebar_folder)
    
}  

function generateFullLayout(): string {
    return expandToString`
<script setup lang="ts">
import { RouterView } from 'vue-router';
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import HorizontalHeader from './horizontal-header/HorizontalHeader.vue';
import HorizontalSidebar from './horizontal-sidebar/HorizontalSidebar.vue';
import Customizer from './customizer/Customizer.vue';
import { useCustomizerStore } from '../../stores/customizer';
import { pl, zhHans } from 'vuetify/locale'
const customizer = useCustomizerStore();
</script>

<template>
    <!-----RTL LAYOUT------->
    <v-locale-provider v-if="customizer.setRTLLayout" rtl>
        <v-app :theme="customizer.actTheme" :class="[
            customizer.actTheme,
            customizer.mini_sidebar ? 'mini-sidebar' : '',
            customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
            customizer.setBorderCard ? 'cardBordered' : '',
            customizer.inputBg ? 'inputWithbg' : ''
        ]">
            <!---Customizer location left side--->
            <v-navigation-drawer app temporary elevation="10" location="left" v-model="customizer.Customizer_drawer"
                width="320" class="left-customizer">
                <Customizer />
            </v-navigation-drawer>
            <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
            <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
            <HorizontalHeader v-if="customizer.setHorizontalLayout" />
            <HorizontalSidebar v-if="customizer.setHorizontalLayout" />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div :class="customizer.boxed ? 'maxWidth' : ''">
                        <RouterView />
                        <v-btn class="customizer-btn" size="large" icon variant="flat" color="primary"
                            @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)">
                            <SettingsIcon />
                        </v-btn>
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
    <!-----LTR LAYOUT------->
    <v-locale-provider v-else>
        <v-app :theme="customizer.actTheme" :class="[
            customizer.actTheme,
            customizer.mini_sidebar ? 'mini-sidebar' : '',
            customizer.setHorizontalLayout ? 'horizontalLayout' : 'verticalLayout',
            customizer.setBorderCard ? 'cardBordered' : '',
            customizer.inputBg ? 'inputWithbg' : ''
        ]">
            <!---Customizer location left side--->
            <v-navigation-drawer app temporary elevation="10" location="right" v-model="customizer.Customizer_drawer"
                width="320">
                <Customizer />
            </v-navigation-drawer>
            <VerticalSidebarVue v-if="!customizer.setHorizontalLayout" />
            <VerticalHeaderVue v-if="!customizer.setHorizontalLayout" />
            <HorizontalHeader v-if="customizer.setHorizontalLayout" />
            <HorizontalSidebar v-if="customizer.setHorizontalLayout" />

            <v-main>
                <v-container fluid class="page-wrapper pb-sm-15 pb-10">
                    <div :class="customizer.boxed ? 'maxWidth' : ''">
                        <RouterView />
                        <v-btn class="customizer-btn" size="large" icon variant="flat" color="primary"
                            @click.stop="customizer.SET_CUSTOMIZER_DRAWER(!customizer.Customizer_drawer)">
                            <SettingsIcon />
                        </v-btn>
                    </div>
                </v-container>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>`
}
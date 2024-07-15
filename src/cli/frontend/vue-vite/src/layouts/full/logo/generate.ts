import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";

export function generate(target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, 'Logo.vue'), generateLogo());
    fs.writeFileSync(path.join(target_folder, 'LogoLight.vue'), generateLogoLight());
    fs.writeFileSync(path.join(target_folder, 'LogoDark.vue'), generateLogoDark());
    fs.writeFileSync(path.join(target_folder, 'RtlLogoDark.vue'), generateRtlLogoDark());
    fs.writeFileSync(path.join(target_folder, 'RtlLogoLight.vue'), generateRtlLogoLight());
}  

function generateLogo(): string {
    return expandToString`
<script setup>
import { computed } from "vue";
import LogoLight from "./LogoLight.vue";
import LogoDark from "./LogoDark.vue";
import RtlLogoDark from "./RtlLogoDark.vue";
import RtlLogoLight from "./RtlLogoLight.vue";
import { useCustomizerStore } from "@/stores/customizer";

const customizer = useCustomizerStore();

//const dark = ref(false);
const dark = computed(() => {
  if (
    customizer.actTheme === "DARK_BLUE_THEME" ||
    customizer.actTheme === "DARK_RED_THEME" ||
    customizer.actTheme === "DARK_ORANGE_THEME" ||
    customizer.actTheme === "DARK_PURPLE_THEME" ||
    customizer.actTheme === "DARK_GREEN_THEME" ||
    customizer.actTheme === "DARK_INDIGO_THEME"
  ) {
    return true;
  } else {
    return false;
  }
});
</script>
<template>
  <v-locale-provider v-if="customizer.setRTLLayout" rtl>
    <RtlLogoLight v-if="dark" />
    <RtlLogoDark v-else />
  </v-locale-provider>
  <v-locale-provider v-else>
    <LogoLight v-if="dark" />
    <LogoDark v-else />
  </v-locale-provider>
</template>`
}

function generateLogoDark(): string {
    return expandToString`
<script setup lang="ts">
import { RouterLink } from 'vue-router';
//import logo from '@/assets/images/logos/logo_fapes.png';
import logo from '@/assets/images/logos/logo_fapes.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="logo" alt="home" />
        </RouterLink>
    </div>
</template>`
}

function generateLogoLight(): string {
    return expandToString`
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Darklogo from '@/assets/images/logos/logo-white.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="Darklogo" alt="home" />
        </RouterLink>
    </div>
</template>`
}

function generateRtlLogoDark(): string {
    return expandToString`
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logos/rtl-logo-dark.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="logo" alt="home" />
        </RouterLink>
    </div>
</template>`
}

function generateRtlLogoLight(): string {
    return expandToString`
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/images/logos/rtl-logo-white.svg';
</script>
<template>
    <div class="logo">
        <RouterLink to="/">
            <img :src="logo" alt="home" />
        </RouterLink>
    </div>
</template>`
}
import { isLocalEntity, isModule, LocalEntity, Model } from "../../../../../../language/generated/ast.js"
import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";
import { createPath } from "../../../../../util/generator-utils.js";

export function generate(model: Model, target_folder: string) : void {

    const modules =  model.abstractElements.filter(isModule);
    
    for(const mod of modules) {
        for(const cls of mod.elements.filter(isLocalEntity)) {

            const cls_folder = createPath(target_folder, `${cls.name}`)

            fs.mkdirSync(cls_folder, {recursive:true})

            fs.writeFileSync(path.join(cls_folder, `Form${cls.name}.vue`), generateForms(cls))
        }
        
    }
}  

function generateForms(cls: LocalEntity): string {
    let forms = ""
    let formattr = ""
    for(const attr of cls.attributes) {
        formattr += `${attr.name}: '', \n`
        forms += `
<v-col cols="12">
    <v-label class="font-weight-medium mb-2">${attr.name}</v-label>
    <VTextField  type="text" placeholder="${attr.name} ${attr.$type}" hide-details v-model='form.${attr.name}' required></VTextField>
</v-col>`
    }
    const form = generateFormExport(cls, forms, formattr);
    return form
}

function generateFormExport(cls: LocalEntity, forms: string, formattr: string): string {
    return expandToString`
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >
                    ${forms}
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn type="button" color="primary" variant="outlined" class="mr-3" @click='navigateBack'>Voltar</v-btn>
                        <v-btn type="submit" color="primary" flat>{{ submitButtonText }}</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ${cls.name}Service from '../../../services/requires/${cls.name}Requires';
// @ts-ignore
import dayjs from 'dayjs';

const { post, getById, update } = ${cls.name}Service();
const route = useRoute();
const params = route.params;
const router = useRouter();

const form = reactive({
    ${formattr.slice(0, formattr.lastIndexOf(','))}
});

// @ts-ignore
const getPost = async (id) => {
    try {
        let response = await getById(id);
        Object.assign(form, response.value[0]);
    } catch (error) {
        console.error(error);
    }
};

const onSubmit = async () => {
    try {
        if (params.id) {
            // @ts-ignore
            form.id = params.id
            // @ts-ignore
            await update(form);
        } else {
            // @ts-ignore
            await post(form);
        }
        Swal.fire({
            title: "Salvo com sucesso!",
            icon: "success",
            confirmButtonColor: "#D3D3D3"
        }).then(()=>{
            router.push({ path: '/${cls.name}/Index${cls.name}' });
        }
        );
        
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Erro ao salvar!",
            confirmButtonColor: "#D3D3D3"
        });
    }
};

const page = ref({ title: 'Cadastrar ${cls.name}' });
const submitButtonText = ref('Cadastrar ${cls.name}');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar ${cls.name}';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar ${cls.name}';        
    }

});

const breadcrumbs = ref([
    {
        text: '${cls.name}',
        disabled: false,
        href: '/${cls.name}/Index${cls.name}'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/${cls.name}/Index${cls.name}' });
};

</script>`
}
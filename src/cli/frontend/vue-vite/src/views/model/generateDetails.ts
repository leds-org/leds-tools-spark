import { expandToString } from "langium/generate"
import { LocalEntity } from "../../../../../../language/generated/ast.js"
import { capitalizeString } from "../../../../../util/generator-utils.js"

export function generate(cls: LocalEntity): string {

    const path_formid =  "`" + `/${cls.name}/form${cls.name}/\${id}` +  "`"
    let formattr = ""
    let forms = ""

    for(const attr of cls.attributes) {
        formattr += `${capitalizeString(attr.name)}: '', \n`
        forms += `
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">${attr.name}</v-label>
            <VTextField  type="text" placeholder="${attr.name} ${attr.type}" hide-details v-model='form.${capitalizeString(attr.name)}' required></VTextField>
        </v-col>`
    }
    const index = generateDetailsText(cls,path_formid, formattr, forms);
    return index

}

function generateDetailsText(cls: LocalEntity, path_formid: string, formattr: string, forms: string): string{
    return expandToString`
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row justify="end" class="pa-3">
        <v-btn color="error" class="ma-2" variant="outlined" @click="confirmDelete">Excluir ${cls.name}</v-btn>
        <v-btn color="primary" class="ma-2" @click="edita${cls.name}(form.Id)">Editar ${cls.name}</v-btn>
    </v-row>

    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row>
                    <v-col cols="12">
                        <v-row>
                            ${forms}
                        </v-row>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </form>

    <!-- Diálogo de Confirmação de Exclusão -->
    <v-dialog v-model="dialogDelete" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta ${cls.name}?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleta${cls.name}">Confirmar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
// @ts-ignore
import dayjs from 'dayjs';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ${cls.name}Service from '../../../services/requires/${cls.name}Requires';

const { post, getById, update, remove } = ${cls.name}Service();
const route = useRoute();
const params = route.params;
const router = useRouter();
const dialogDelete = ref(false);

const form = reactive({
    ${formattr.slice(0, formattr.lastIndexOf(','))}
});

const getPost = async (id) => {
    try {
        const response = await getById(id);
        Object.assign(form, response.value[0]);
        console.log(response.value)
    } catch (error) {
        console.error(error);
    }
};

const onSubmit = async () => {
    try {
        if (params.id) {
            // @ts-ignore
            await update(form);
        } else {
            // @ts-ignore
            await post(form);
        }
        alert('Salvo com sucesso');
        router.push({ path: '/${cls.name}/Index${cls.name}' });
    } catch (error) {
        console.error(error);
        alert('Erro ao salvar');
    }
};

const page = ref({ title: 'Visualizar ${cls.name}' });

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        breadcrumbs.value[1].text = page.value.title;
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

// @ts-ignore
function edita${cls.name}(id) {
    router.push({ path: ${path_formid} });
}

function confirmDelete() {
    dialogDelete.value = true;
}

const deleta${cls.name} = async () => {
    try {
        await remove(form.Id);
        alert('Deletado com sucesso');
        router.push({ path: '/${cls.name}/Index${cls.name}' });
    } catch (error) {
        console.error(error);
        alert('Não foi possível apagar, pois a ${cls.name} está vinculada a um projeto');
    } finally {
        dialogDelete.value = false;
    }
};
</script>`
}
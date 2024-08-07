<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >

                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">sigla</v-label>
                        <VTextField  type="text" placeholder="sigla string" hide-details v-model='form.Sigla'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">reducao_vinculo</v-label>
                        <VTextField  type="text" placeholder="reducao_vinculo integer" hide-details v-model='form.Reducao_vinculo'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_inicio_vigencia</v-label>
                        <VTextField  type="text" placeholder="data_inicio_vigencia date" hide-details v-model='form.Data_inicio_vigencia'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_fim_vigencia</v-label>
                        <VTextField  type="text" placeholder="data_fim_vigencia date" hide-details v-model='form.Data_fim_vigencia'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">descricao</v-label>
                        <VTextField  type="text" placeholder="descricao string" hide-details v-model='form.Descricao'></VTextField>
                    </v-col>

                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn type="button" color="primary" variant="outlined" class="mr-3" @click='navigateBack'>Voltar</v-btn>
                        <v-btn type="submit" color="primary" flat>{{ submitButtonText }}</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Swal from 'sweetalert2';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import VersaoModalidadeService from '../../../services/requires/VersaoModalidadeRequires';

import dayjs from 'dayjs';


const { list, post, getById, update } = VersaoModalidadeService();
const route = useRoute();
const params = route.params;
const router = useRouter();


const form = reactive({
    id: '',
    ,
    Sigla: '',
    Reducao_vinculo: '',
    Data_inicio_vigencia: '',
    Data_fim_vigencia: '',
    Descricao: ''
});


const verificaArrayParams = () => {
    if (typeof params.id === 'string') {
        return params.id;
    } else if (Array.isArray(params.id)) {
        return params.id[0];
    }
    return '';
};

const getPost = async (id: any) => {
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

            form.id = verificaArrayParams()

            await update(form);
        } else {

            await post(form);
        }
        Swal.fire({
            title: "Salvo com sucesso!",
            icon: "success",
            confirmButtonColor: "#D3D3D3"
        }).then(()=>{
            router.push({ path: '/VersaoModalidade/IndexVersaoModalidade' });
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

const page = ref({ title: 'Cadastrar VersaoModalidade' });
const submitButtonText = ref('Cadastrar VersaoModalidade');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar VersaoModalidade';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar VersaoModalidade';
    }



});

const breadcrumbs = ref([
    {
        text: 'VersaoModalidade',
        disabled: false,
        href: '/VersaoModalidade/IndexVersaoModalidade'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/VersaoModalidade/IndexVersaoModalidade' });
};



</script>
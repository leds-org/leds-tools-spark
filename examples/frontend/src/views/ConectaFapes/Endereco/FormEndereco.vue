<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >

                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">logradouro</v-label>
                        <VTextField  type="text" placeholder="logradouro string" hide-details v-model='form.Logradouro'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">numero</v-label>
                        <VTextField  type="text" placeholder="numero string" hide-details v-model='form.Numero'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">complemento</v-label>
                        <VTextField  type="text" placeholder="complemento string" hide-details v-model='form.Complemento'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">cep</v-label>
                        <VTextField  type="text" placeholder="cep string" hide-details v-model='form.Cep'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">bairro</v-label>
                        <VTextField  type="text" placeholder="bairro string" hide-details v-model='form.Bairro'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">municipio</v-label>
                        <VTextField  type="text" placeholder="municipio string" hide-details v-model='form.Municipio'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">uf_localidade</v-label>
                        <VTextField  type="text" placeholder="uf_localidade string" hide-details v-model='form.Uf_localidade'></VTextField>
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
import EnderecoService from '../../../services/requires/EnderecoRequires';

import dayjs from 'dayjs';


const { list, post, getById, update } = EnderecoService();
const route = useRoute();
const params = route.params;
const router = useRouter();


const form = reactive({
    id: '',
    ,
    Logradouro: '',
    Numero: '',
    Complemento: '',
    Cep: '',
    Bairro: '',
    Municipio: '',
    Uf_localidade: ''
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
            router.push({ path: '/Endereco/IndexEndereco' });
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

const page = ref({ title: 'Cadastrar Endereco' });
const submitButtonText = ref('Cadastrar Endereco');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar Endereco';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar Endereco';
    }



});

const breadcrumbs = ref([
    {
        text: 'Endereco',
        disabled: false,
        href: '/Endereco/IndexEndereco'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/Endereco/IndexEndereco' });
};



</script>
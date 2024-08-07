<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >

                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">cidade</v-label>
                        <VTextField  type="text" placeholder="cidade string" hide-details v-model='form.Cidade'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">uf</v-label>
                        <VTextField  type="text" placeholder="uf string" hide-details v-model='form.Uf'></VTextField>
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
import NaturalidadeService from '../../../services/requires/NaturalidadeRequires';

import dayjs from 'dayjs';


const { list, post, getById, update } = NaturalidadeService();
const route = useRoute();
const params = route.params;
const router = useRouter();


const form = reactive({
    id: '',
    ,
    Cidade: '',
    Uf: ''
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
            router.push({ path: '/Naturalidade/IndexNaturalidade' });
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

const page = ref({ title: 'Cadastrar Naturalidade' });
const submitButtonText = ref('Cadastrar Naturalidade');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar Naturalidade';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar Naturalidade';
    }



});

const breadcrumbs = ref([
    {
        text: 'Naturalidade',
        disabled: false,
        href: '/Naturalidade/IndexNaturalidade'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/Naturalidade/IndexNaturalidade' });
};



</script>
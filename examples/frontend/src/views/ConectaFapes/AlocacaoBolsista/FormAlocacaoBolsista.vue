<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >

                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">inicio_atividade</v-label>
                        <VTextField  type="text" placeholder="inicio_atividade date" hide-details v-model='form.Inicio_atividade'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_prevista_fim_atividade</v-label>
                        <VTextField  type="text" placeholder="data_prevista_fim_atividade date" hide-details v-model='form.Data_prevista_fim_atividade'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_fim_atividade</v-label>
                        <VTextField  type="text" placeholder="data_fim_atividade date" hide-details v-model='form.Data_fim_atividade'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_solicitacao_cancelamento</v-label>
                        <VTextField  type="text" placeholder="data_solicitacao_cancelamento date" hide-details v-model='form.Data_solicitacao_cancelamento'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">justificativa_cancelamento</v-label>
                        <VTextField  type="text" placeholder="justificativa_cancelamento string" hide-details v-model='form.Justificativa_cancelamento'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">qtde_cotas</v-label>
                        <VTextField  type="text" placeholder="qtde_cotas integer" hide-details v-model='form.Qtde_cotas'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">qtde_cotas_pagas</v-label>
                        <VTextField  type="text" placeholder="qtde_cotas_pagas integer" hide-details v-model='form.Qtde_cotas_pagas'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">status</v-label>
                        <VTextField  type="text" placeholder="status string" hide-details v-model='form.Status'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">id_sig_tapes</v-label>
                        <VTextField  type="text" placeholder="id_sig_tapes integer" hide-details v-model='form.Id_sig_tapes'></VTextField>
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
import AlocacaoBolsistaService from '../../../services/requires/AlocacaoBolsistaRequires';

import dayjs from 'dayjs';


const { list, post, getById, update } = AlocacaoBolsistaService();
const route = useRoute();
const params = route.params;
const router = useRouter();


const form = reactive({
    id: '',
    ,
    Inicio_atividade: '',
    Data_prevista_fim_atividade: '',
    Data_fim_atividade: '',
    Data_solicitacao_cancelamento: '',
    Justificativa_cancelamento: '',
    Qtde_cotas: '',
    Qtde_cotas_pagas: '',
    Status: '',
    Id_sig_tapes: ''
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
            router.push({ path: '/AlocacaoBolsista/IndexAlocacaoBolsista' });
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

const page = ref({ title: 'Cadastrar AlocacaoBolsista' });
const submitButtonText = ref('Cadastrar AlocacaoBolsista');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar AlocacaoBolsista';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar AlocacaoBolsista';
    }



});

const breadcrumbs = ref([
    {
        text: 'AlocacaoBolsista',
        disabled: false,
        href: '/AlocacaoBolsista/IndexAlocacaoBolsista'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/AlocacaoBolsista/IndexAlocacaoBolsista' });
};



</script>
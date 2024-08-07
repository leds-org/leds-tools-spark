<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >

                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">nome</v-label>
                        <VTextField  type="text" placeholder="nome string" hide-details v-model='form.Nome'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_criacao</v-label>
                        <VTextField  type="text" placeholder="data_criacao date" hide-details v-model='form.Data_criacao'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">sincronizar</v-label>
                        <VTextField  type="text" placeholder="sincronizar boolean" hide-details v-model='form.Sincronizar'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_ultima_sincronizacao</v-label>
                        <VTextField  type="text" placeholder="data_ultima_sincronizacao date" hide-details v-model='form.Data_ultima_sincronizacao'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">id_sig_fapes</v-label>
                        <VTextField  type="text" placeholder="id_sig_fapes integer" hide-details v-model='form.Id_sig_fapes'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">StatusImportacao *</v-label>
                        <v-select
                            :items="StatusImportacao"
                            item-title="tipo"
                            item-value="value"
                            placeholder="Selecione StatusImportacao"
                            hide-details

                            v-model="form.StatusImportacao"
                        >
                        </v-select>
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
import EditalService from '../../../services/requires/EditalRequires';

import dayjs from 'dayjs';


const { list, post, getById, update } = EditalService();
const route = useRoute();
const params = route.params;
const router = useRouter();


const form = reactive({
    id: '',
    StatusImportacao: '' NÃO FUNCIONA,
    Nome: '',
    Data_criacao: '',
    Sincronizar: '',
    Data_ultima_sincronizacao: '',
    Id_sig_fapes: ''
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
            router.push({ path: '/Edital/IndexEdital' });
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

const page = ref({ title: 'Cadastrar Edital' });
const submitButtonText = ref('Cadastrar Edital');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar Edital';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar Edital';
    }



});

const breadcrumbs = ref([
    {
        text: 'Edital',
        disabled: false,
        href: '/Edital/IndexEdital'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/Edital/IndexEdital' });
};

const StatusImportacao = ref([

      {
          tipo: 'NaoImportado',
          value: 0
      },
      {
          tipo: 'AImportar',
          value: 1
      },
      {
          tipo: 'Importado',
          value: 2
      }
]);

</script>
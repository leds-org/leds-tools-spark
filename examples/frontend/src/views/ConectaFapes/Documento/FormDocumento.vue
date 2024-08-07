<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >

                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">numero</v-label>
                        <VTextField  type="text" placeholder="numero integer" hide-details v-model='form.Numero'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">uf_orgao_emissor</v-label>
                        <VTextField  type="text" placeholder="uf_orgao_emissor string" hide-details v-model='form.Uf_orgao_emissor'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">orgao_emissor</v-label>
                        <VTextField  type="text" placeholder="orgao_emissor integer" hide-details v-model='form.Orgao_emissor'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_emissao</v-label>
                        <VTextField  type="text" placeholder="data_emissao date" hide-details v-model='form.Data_emissao'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">TipoDocumento *</v-label>
                        <v-select
                            :items="TipoDocumento"
                            item-title="tipo"
                            item-value="value"
                            placeholder="Selecione TipoDocumento"
                            hide-details

                            v-model="form.TipoDocumento"
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
import DocumentoService from '../../../services/requires/DocumentoRequires';

import dayjs from 'dayjs';


const { list, post, getById, update } = DocumentoService();
const route = useRoute();
const params = route.params;
const router = useRouter();


const form = reactive({
    id: '',
    TipoDocumento: '' NÃO FUNCIONA,
    Numero: '',
    Uf_orgao_emissor: '',
    Orgao_emissor: '',
    Data_emissao: ''
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
            router.push({ path: '/Documento/IndexDocumento' });
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

const page = ref({ title: 'Cadastrar Documento' });
const submitButtonText = ref('Cadastrar Documento');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar Documento';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar Documento';
    }



});

const breadcrumbs = ref([
    {
        text: 'Documento',
        disabled: false,
        href: '/Documento/IndexDocumento'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/Documento/IndexDocumento' });
};

const TipoDocumento = ref([

      {
          tipo: 'CarteiraIdentidade',
          value: 0
      },
      {
          tipo: 'CarteiraTrabalhoPrevidenciaSocial',
          value: 1
      },
      {
          tipo: 'CarteiraHabilitacao',
          value: 2
      }
]);

</script>
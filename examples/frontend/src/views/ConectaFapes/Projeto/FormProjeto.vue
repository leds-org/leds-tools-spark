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
                        <v-label class="font-weight-medium mb-2">data_inicio</v-label>
                        <VTextField  type="text" placeholder="data_inicio date" hide-details v-model='form.Data_inicio'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_fim_prevista</v-label>
                        <VTextField  type="text" placeholder="data_fim_prevista date" hide-details v-model='form.Data_fim_prevista'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">id_sig_fapes</v-label>
                        <VTextField  type="text" placeholder="id_sig_fapes integer" hide-details v-model='form.Id_sig_fapes'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">PlanejamentoAlocacao</v-label>
                        <v-select :items="PlanejamentoAlocacaoOptions" item-title="Id" item-value="Id" placeholder="Select PlanejamentoAlocacao" hide-details v-model="form.PlanejamentoAlocacaoId"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">StatusPreenchimento *</v-label>
                        <v-select
                            :items="StatusPreenchimento"
                            item-title="tipo"
                            item-value="value"
                            placeholder="Selecione StatusPreenchimento"
                            hide-details

                            v-model="form.StatusPreenchimento"
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
import ProjetoService from '../../../services/requires/ProjetoRequires';
import PlanejamentoAlocacaoService from '../../../services/requires/PlanejamentoAlocacaoRequires';

import dayjs from 'dayjs';

const { list: listPlanejamentoAlocacao } = PlanejamentoAlocacaoService();

const { list, post, getById, update } = ProjetoService();
const route = useRoute();
const params = route.params;
const router = useRouter();

const PlanejamentoAlocacaoOptions = ref([]);

const form = reactive({
    id: '',
    StatusPreenchimento: '' NÃO FUNCIONA,
    Nome: '',
    Data_inicio: '',
    Data_fim_prevista: '',
    Id_sig_fapes: '',
    PlanejamentoAlocacaoId: ''
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
            router.push({ path: '/Projeto/IndexProjeto' });
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

const page = ref({ title: 'Cadastrar Projeto' });
const submitButtonText = ref('Cadastrar Projeto');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar Projeto';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar Projeto';
    }

    let response;

    response = await listPlanejamentoAlocacao();
    PlanejamentoAlocacaoOptions.value = response.value;

});

const breadcrumbs = ref([
    {
        text: 'Projeto',
        disabled: false,
        href: '/Projeto/IndexProjeto'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/Projeto/IndexProjeto' });
};

const StatusPreenchimento = ref([

      {
          tipo: 'Incompleto',
          value: 0
      },
      {
          tipo: 'Completo',
          value: 1
      }
]);

</script>
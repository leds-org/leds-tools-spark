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
                        <v-label class="font-weight-medium mb-2">cpfstring</v-label>
                        <VTextField  type="text" placeholder="cpfstring string" hide-details v-model='form.Cpfstring'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">emailstring</v-label>
                        <VTextField  type="text" placeholder="emailstring string" hide-details v-model='form.Emailstring'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">data_nascimento</v-label>
                        <VTextField  type="text" placeholder="data_nascimento date" hide-details v-model='form.Data_nascimento'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">nome_mae</v-label>
                        <VTextField  type="text" placeholder="nome_mae string" hide-details v-model='form.Nome_mae'></VTextField>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">Naturalidade</v-label>
                        <v-select :items="NaturalidadeOptions" item-title="Id" item-value="Id" placeholder="Select Naturalidade" hide-details v-model="form.NaturalidadeId"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">Endereco</v-label>
                        <v-select :items="EnderecoOptions" item-title="Id" item-value="Id" placeholder="Select Endereco" hide-details v-model="form.EnderecoId"></v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">EstadoCivil *</v-label>
                        <v-select
                            :items="EstadoCivil"
                            item-title="tipo"
                            item-value="value"
                            placeholder="Selecione EstadoCivil"
                            hide-details

                            v-model="form.EstadoCivil"
                        >
                        </v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">RegimeCasamento *</v-label>
                        <v-select
                            :items="RegimeCasamento"
                            item-title="tipo"
                            item-value="value"
                            placeholder="Selecione RegimeCasamento"
                            hide-details

                            v-model="form.RegimeCasamento"
                        >
                        </v-select>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">Sexo *</v-label>
                        <v-select
                            :items="Sexo"
                            item-title="tipo"
                            item-value="value"
                            placeholder="Selecione Sexo"
                            hide-details

                            v-model="form.Sexo"
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
import PessoaService from '../../../services/requires/PessoaRequires';
import NaturalidadeService from '../../../services/requires/NaturalidadeRequires';
import EnderecoService from '../../../services/requires/EnderecoRequires';

import dayjs from 'dayjs';

const { list: listNaturalidade } = NaturalidadeService();
const { list: listEndereco } = EnderecoService();

const { list, post, getById, update } = PessoaService();
const route = useRoute();
const params = route.params;
const router = useRouter();

const NaturalidadeOptions = ref([]);
const EnderecoOptions = ref([]);

const form = reactive({
    id: '',
    EstadoCivil: '' NÃO FUNCIONA,RegimeCasamento: '' NÃO FUNCIONA,Sexo: '' NÃO FUNCIONA,
    Nome: '',
    Cpfstring: '',
    Emailstring: '',
    Data_nascimento: '',
    Nome_mae: '',
    NaturalidadeId: '',
    EnderecoId: ''
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
            router.push({ path: '/Pessoa/IndexPessoa' });
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

const page = ref({ title: 'Cadastrar Pessoa' });
const submitButtonText = ref('Cadastrar Pessoa');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar Pessoa';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar Pessoa';
    }

    let response;

    response = await listNaturalidade();
    NaturalidadeOptions.value = response.value;
    response = await listEndereco();
    EnderecoOptions.value = response.value;

});

const breadcrumbs = ref([
    {
        text: 'Pessoa',
        disabled: false,
        href: '/Pessoa/IndexPessoa'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/Pessoa/IndexPessoa' });
};

const EstadoCivil = ref([

      {
          tipo: 'Solteiro',
          value: 0
      },
      {
          tipo: 'Casado',
          value: 1
      },
      {
          tipo: 'Separado',
          value: 2
      },
      {
          tipo: 'Viuvo',
          value: 3
      },
      {
          tipo: 'Divorciado',
          value: 4
      },
      {
          tipo: 'Outros',
          value: 5
      }
]);
const RegimeCasamento = ref([

      {
          tipo: 'Nenhum',
          value: 0
      },
      {
          tipo: 'ComunhaoParcial',
          value: 1
      },
      {
          tipo: 'ComunhaoTotal',
          value: 2
      },
      {
          tipo: 'SeparacaoDeBens',
          value: 3
      }
]);
const Sexo = ref([

      {
          tipo: 'Masculino',
          value: 0
      },
      {
          tipo: 'Feminino',
          value: 1
      }
]);

</script>
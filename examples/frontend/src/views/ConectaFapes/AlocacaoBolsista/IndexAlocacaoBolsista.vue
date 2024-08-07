<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="search"
          label="Buscar AlocacaoBolsista"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex align-start">
        <v-btn class="custom-width" color="primary" variant="flat" dark @click="searchAlocacaoBolsista">Buscar</v-btn>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        <v-btn class="custom-width-2" color="primary" variant="flat" dark @click="addAlocacaoBolsista">Cadastrar AlocacaoBolsista</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table class="border rounded-md" :headers="headers" :items="filteredAlocacaoBolsista">
          <template v-slot:top>
            <v-row>
              <v-col class="d-flex justify-end">
              </v-col>
            </v-row>
            <v-spacer />
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5 text-center py-6">Tem certeza que deseja deletar esse item?</v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" variant="outlined" dark @click="closeDelete">Cancelar</v-btn>
                  <v-btn color="primary" variant="flat" dark @click="deleteItem">OK</v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon color="primary" size="small" class="me-2" @click="editItem(item.Id)">
              mdi-pencil
            </v-icon>
            <v-icon color="error" size="small" @click="confirmDeleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <v-label>Sem dados!</v-label>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </template>


<script setup lang="ts">
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import AlocacaoBolsistaRequires from '../../../services/requires/AlocacaoBolsistaRequires';

const { list, remove, update, post } = AlocacaoBolsistaRequires();
const page = ref({ title: 'AlocacaoBolsista ' });
const breadcrumbs = ref([
  { text: 'AlocacaoBolsista', disabled: true, href: '#' },
  { text: '', disabled: true, href: '#' }
]);

const dialog = ref(false);
const router = useRouter();
const dialogDelete = ref(false);
const headers = ref([

  { title: 'inicio_atividade', sortable: false, key: 'Inicio_atividade' },
  { title: 'data_prevista_fim_atividade', sortable: false, key: 'Data_prevista_fim_atividade' },
  { title: 'data_fim_atividade', sortable: false, key: 'Data_fim_atividade' },
  { title: 'data_solicitacao_cancelamento', sortable: false, key: 'Data_solicitacao_cancelamento' },
  { title: 'justificativa_cancelamento', sortable: false, key: 'Justificativa_cancelamento' },
  { title: 'qtde_cotas', sortable: false, key: 'Qtde_cotas' },
  { title: 'qtde_cotas_pagas', sortable: false, key: 'Qtde_cotas_pagas' },
  { title: 'status', sortable: false, key: 'Status' },
  { title: 'id_sig_tapes', sortable: false, key: 'Id_sig_tapes' },

  { title: 'Ações', key: 'actions' },
]);
const AlocacaoBolsista = ref([]);
const filteredAlocacaoBolsista = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({});
const defaultItem = ref({});
const itemToDelete = ref<itemToDeleteInterface>();
const search = ref('');

interface AlocacaoBolsistaInterface {

Inicio_atividade: string;
Data_prevista_fim_atividade: string;
Data_fim_atividade: string;
Data_solicitacao_cancelamento: string;
Justificativa_cancelamento: string;
Qtde_cotas: string;
Qtde_cotas_pagas: string;
Status: string;
Id_sig_tapes: string;
}

interface itemToDeleteInterface {
  Id: string;
}

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Item' : 'Edit Item';
});

onMounted(() => {
  getPosts();
});

const getPosts = async () => {
  try {
    const data = await list();
    data.value.forEach((element: any) => {
      element.Data = dayjs(element.Data).format('DD/MM/YYYY');
    });
    AlocacaoBolsista.value = data.value;
    filteredAlocacaoBolsista.value = data.value;
  } catch (error) {
    console.error('Error fetching:', error);
  }
};

const deleteItem = async () => {
  if (itemToDelete.value) {
    try {
      await remove(itemToDelete.value.Id);
      Swal.fire({
        title: "Deletado com sucesso!",
        icon: "success",
        confirmButtonColor: "#D3D3D3"
      });
      await getPosts();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro ao salvar!",
        text: "Não foi possível apagar, pois a AlocacaoBolsista está vinculada a um projeto."
      });
    } finally {
      closeDelete();
    }
  }
};

function confirmDeleteItem(item) {
  itemToDelete.value = item;
  dialogDelete.value = true;
}

function addAlocacaoBolsista() {
  router.push('/AlocacaoBolsista/formAlocacaoBolsista');
}

function editItem(id: any) {
  router.push({ path: `/AlocacaoBolsista/formAlocacaoBolsista/${id}` });
}

function closeDelete() {
  dialogDelete.value = false;
  itemToDelete.value = null;
}

function close() {
  dialog.value = false;
  nextTick(() => {
    editedItem.value = Object.assign({}, defaultItem.value);
    editedIndex.value = -1;
  });
}

const searchAlocacaoBolsista = () => {
  filterAlocacaoBolsista();
};

const filterAlocacaoBolsista = () => {
  if (!search.value) {
    filteredAlocacaoBolsista.value = AlocacaoBolsista.value;
  } else {
    const searchQuery = search.value.toLowerCase();
    filteredAlocacaoBolsista.value = AlocacaoBolsista.value.filter(item =>
      item.Nome.toLowerCase().includes(searchQuery)
    );
  }
};

watch(dialog, val => {
  if (!val) close();
});
watch(dialogDelete, val => {
  if (!val) closeDelete();
});
</script>

<style scoped>
.ementa-cell {
  white-space: normal;
  word-break: break-word;
  max-width: 800px;
}

.custom-width {
  height: 48px;
  width: 100px
}

.custom-width-2 {
  height: 48px;
  width: 200px;
}
</style>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="search"
          label="Buscar PlanejamentoNivel"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex align-start">
        <v-btn class="custom-width" color="primary" variant="flat" dark @click="searchPlanejamentoNivel">Buscar</v-btn>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        <v-btn class="custom-width-2" color="primary" variant="flat" dark @click="addPlanejamentoNivel">Cadastrar PlanejamentoNivel</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table class="border rounded-md" :headers="headers" :items="filteredPlanejamentoNivel">
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
import PlanejamentoNivelRequires from '../../../services/requires/PlanejamentoNivelRequires';

const { list, remove, update, post } = PlanejamentoNivelRequires();
const page = ref({ title: 'PlanejamentoNivel ' });
const breadcrumbs = ref([
  { text: 'PlanejamentoNivel', disabled: true, href: '#' },
  { text: '', disabled: true, href: '#' }
]);

const dialog = ref(false);
const router = useRouter();
const dialogDelete = ref(false);
const headers = ref([

  { title: 'quantidade', sortable: false, key: 'Quantidade' },

  { title: 'Ações', key: 'actions' },
]);
const PlanejamentoNivel = ref([]);
const filteredPlanejamentoNivel = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({});
const defaultItem = ref({});
const itemToDelete = ref<itemToDeleteInterface>();
const search = ref('');

interface PlanejamentoNivelInterface {

Quantidade: string;
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
    PlanejamentoNivel.value = data.value;
    filteredPlanejamentoNivel.value = data.value;
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
        text: "Não foi possível apagar, pois a PlanejamentoNivel está vinculada a um projeto."
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

function addPlanejamentoNivel() {
  router.push('/PlanejamentoNivel/formPlanejamentoNivel');
}

function editItem(id: any) {
  router.push({ path: `/PlanejamentoNivel/formPlanejamentoNivel/${id}` });
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

const searchPlanejamentoNivel = () => {
  filterPlanejamentoNivel();
};

const filterPlanejamentoNivel = () => {
  if (!search.value) {
    filteredPlanejamentoNivel.value = PlanejamentoNivel.value;
  } else {
    const searchQuery = search.value.toLowerCase();
    filteredPlanejamentoNivel.value = PlanejamentoNivel.value.filter(item =>
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
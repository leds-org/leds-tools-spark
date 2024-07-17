import { isLocalEntity, isModule, LocalEntity, Model } from "../../../../../../language/generated/ast.js"
import fs from "fs";
import { expandToString } from "langium/generate";
import path from "path";
import { createPath } from "../../../../../util/generator-utils.js";

export function generate(model: Model, target_folder: string) : void {

    const modules =  model.abstractElements.filter(isModule);
    
    for(const mod of modules) {
        for(const cls of mod.elements.filter(isLocalEntity)) {

            const cls_folder = createPath(target_folder, `${cls.name}`)

            fs.mkdirSync(cls_folder, {recursive:true})

            fs.writeFileSync(path.join(cls_folder, `Form${cls.name}.vue`), generateForms(cls))
            fs.writeFileSync(path.join(cls_folder, `Index${cls.name}.vue`), generateIndex(cls))
            fs.writeFileSync(path.join(cls_folder, `Details${cls.name}.vue`), generateDetails(cls))
        }
        
    }
}  

function generateForms(cls: LocalEntity): string {
    let forms = ""
    let formattr = ""
    for(const attr of cls.attributes) {
        formattr += `${attr.name}: '', \n`
        forms += `
<v-col cols="12">
    <v-label class="font-weight-medium mb-2">${attr.name}</v-label>
    <VTextField  type="text" placeholder="${attr.name} ${attr.type}" hide-details v-model='form.${attr.name}' required></VTextField>
</v-col>`
    }
    const form = generateFormExport(cls, forms, formattr);
    return form
}

function generateFormExport(cls: LocalEntity, forms: string, formattr: string): string {
    return expandToString`
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >
                    ${forms}
                    <v-col cols="12" class="d-flex justify-end">
                        <v-btn type="button" color="primary" variant="outlined" class="mr-3" @click='navigateBack'>Voltar</v-btn>
                        <v-btn type="submit" color="primary" flat>{{ submitButtonText }}</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ${cls.name}Service from '../../../services/requires/${cls.name}Requires';
// @ts-ignore
import dayjs from 'dayjs';

const { post, getById, update } = ${cls.name}Service();
const route = useRoute();
const params = route.params;
const router = useRouter();

const form = reactive({
    ${formattr.slice(0, formattr.lastIndexOf(','))}
});

// @ts-ignore
const getPost = async (id) => {
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
            // @ts-ignore
            form.id = params.id
            // @ts-ignore
            await update(form);
        } else {
            // @ts-ignore
            await post(form);
        }
        Swal.fire({
            title: "Salvo com sucesso!",
            icon: "success",
            confirmButtonColor: "#D3D3D3"
        }).then(()=>{
            router.push({ path: '/${cls.name}/Index${cls.name}' });
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

const page = ref({ title: 'Cadastrar ${cls.name}' });
const submitButtonText = ref('Cadastrar ${cls.name}');

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        page.value.title = 'Editar ${cls.name}';
        breadcrumbs.value[1].text = page.value.title;
        submitButtonText.value = 'Editar ${cls.name}';        
    }

});

const breadcrumbs = ref([
    {
        text: '${cls.name}',
        disabled: false,
        href: '/${cls.name}/Index${cls.name}'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

const navigateBack = () => {
    router.push({ path: '/${cls.name}/Index${cls.name}' });
};

</script>`
}

function generateIndex(cls: LocalEntity): string {
    const regtext = `'^(https?:\\\\/\\\\/)?' + 
    '((([a-z\\\\d]([a-z\\\\d-]*[a-z\\\\d])*)\\\\.?)+[a-z]{2,}|' + 
    '((\\\\d{1,3}\\\\.){3}\\\\d{1,3}))' + 
    '(\\\\:\\\\d+)?(\\\\/[-a-z\\\\d%_.~+]*)*' + 
    '(\\\\?[;&a-z\\\\d%_.~+=-]*)?' + 
    '(\\\\#[-a-z\\\\d_]*)?$', 'i'`
    const path_form = "`/${cls.name}/form${cls.name}/${id}`"
    const path_details = "`/${cls.name}/details${cls.name}/${id}`"

    let headers = ""
    for(const attr of cls.attributes) {
        headers += `
{ title: '${attr.name}', sortable: false, key: '${attr.name.toLowerCase()}' },`
    }
    const index = generateIndexText(cls,path_form, path_details, regtext, headers);
    return index
    

}

function generateIndexText(cls: LocalEntity, path_form: string, path_details: string, regtext: string, headers: string): string {
    return expandToString`
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
    <v-row>
      <v-col cols="6">
        <v-text-field
          v-model="search"
          label="Buscar ${cls.name}"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="4" class="d-flex align-start">
        <v-btn class="custom-width" color="primary" variant="flat" dark @click="search${cls.name}">Buscar</v-btn>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        <v-btn class="custom-width-2" color="primary" variant="flat" dark @click="add${cls.name}">Cadastrar ${cls.name}</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table class="border rounded-md" :headers="headers" :items="filtered${cls.name}">
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
            <v-icon class="mdi mdi-link me-2" color="primary" size="small" @click="linkAcess(item.Link)" />
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
import ${cls.name}Requires from '../../../services/requires/${cls.name}Requires';

const { list, remove, update, post } = ${cls.name}Requires();
const page = ref({ title: '${cls.name} ' });
const breadcrumbs = ref([
  { text: '${cls.name}', disabled: true, href: '#' },
  { text: '', disabled: true, href: '#' }
]);

const dialog = ref(false);
const router = useRouter();
const dialogDelete = ref(false);
const headers = ref([
  ${headers}
]);
const ${cls.name} = ref([]);
const filtered${cls.name} = ref([]);
const editedIndex = ref(-1);
const editedItem = ref({}); 
const defaultItem = ref({}); 
const itemToDelete = ref(null);
const search = ref('');

const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'New Item' : 'Edit Item';
});

onMounted(() => {
  getPosts();
});

const getPosts = async () => {
  try {
    const data = await list();
    data.value.forEach((element) => {
      element.Data = dayjs(element.Data).format('DD/MM/YYYY');
    });
    ${cls.name}.value = data.value;
    filtered${cls.name}.value = data.value;
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
        text: "Não foi possível apagar, pois a ${cls.name} está vinculada a um projeto."
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

function linkAcess(link: string) {
  const urlPattern = new RegExp(${regtext}); 

  if (urlPattern.test(link)) {
    window.location.href = link;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Link inválido',
      text: 'O link fornecido não é válido.',
      confirmButtonColor: '#D3D3D3'
    });
  }
}

function add${cls.name}() {
  router.push('/${cls.name}/form${cls.name}');
}

function editItem(id: any) {
  router.push({ path: ${path_form} });
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

function goToDetail(id: any) {
  router.push({ path: ${path_details} });
}

const search${cls.name} = () => {
  filter${cls.name}();
};

const filter${cls.name} = () => {
  if (!search.value) {
    filtered${cls.name}.value = ${cls.name}.value;
  } else {
    const searchQuery = search.value.toLowerCase();
    filtered${cls.name}.value = ${cls.name}.value.filter(item => 
      item.Numero.toString().toLowerCase().includes(searchQuery)
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
</style>`
}

function generateDetails(cls: LocalEntity): string {

    const path_formid = "`/${cls.name}/form${cls.name}/${id}`"
    let formattr = ""
    let forms = ""

    for(const attr of cls.attributes) {
        formattr += `${attr.name}: '', \n`
        forms += `
        <v-col cols="12">
            <v-label class="font-weight-medium mb-2">${attr.name}</v-label>
            <VTextField  type="text" placeholder="${attr.name} ${attr.type}" hide-details v-model='form.${attr.name}' required></VTextField>
        </v-col>`
    }
    const index = generateDetailsText(cls,path_formid, formattr, forms);
    return index

}

function generateDetailsText(cls: LocalEntity, path_formid: string, formattr: string, forms: string): string{
    return expandToString`
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row justify="end" class="pa-3">
        <v-btn color="error" class="ma-2" variant="outlined" @click="confirmDelete">Excluir ${cls.name}</v-btn>
        <v-btn color="primary" class="ma-2" @click="edita${cls.name}(form.Id)">Editar ${cls.name}</v-btn>
    </v-row>

    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row>
                    <v-col cols="12">
                        <v-row>
                            ${forms}
                        </v-row>
            </v-card-text>
        </v-card>
    </form>

    <!-- Diálogo de Confirmação de Exclusão -->
    <v-dialog v-model="dialogDelete" persistent max-width="290">
        <v-card>
            <v-card-title class="headline">Confirmar Exclusão</v-card-title>
            <v-card-text>Tem certeza de que deseja excluir esta ${cls.name}?</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialogDelete = false">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="deleta${cls.name}">Confirmar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
// @ts-ignore
import dayjs from 'dayjs';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ${cls.name}Service from '../../../services/requires/${cls.name}Requires';

const { post, getById, update, remove } = ${cls.name}Service();
const route = useRoute();
const params = route.params;
const router = useRouter();
const dialogDelete = ref(false);

const form = reactive({
    ${formattr.slice(0, formattr.lastIndexOf(','))}
});

// @ts-ignore
const getPost = async (id) => {
    try {
        Object.assign(form, response.value[0]);
    } catch (error) {
        console.error(error);
    }
};

const onSubmit = async () => {
    try {
        if (params.id) {
            // @ts-ignore
            await update(form);
        } else {
            // @ts-ignore
            await post(form);
        }
        alert('Salvo com sucesso');
        router.push({ path: '/${cls.name}/Index${cls.name}' });
    } catch (error) {
        console.error(error);
        alert('Erro ao salvar');
    }
};

const page = ref({ title: 'Visualizar ${cls.name}' });

onMounted(async () => {
    if (params.id) {
        await getPost(params.id);
        breadcrumbs.value[1].text = page.value.title;
    }
});

const breadcrumbs = ref([
    {
        text: '${cls.name}',
        disabled: false,
        href: '/${cls.name}/Index${cls.name}'
    },
    {
        text: page.value.title,
        disabled: true,
        href: '#'
    }
]);

// @ts-ignore
function edita${cls.name}(id) {
    router.push({ path: ${path_formid} });
}

function confirmDelete() {
    dialogDelete.value = true;
}

const deleta${cls.name} = async () => {
    try {
        await remove(form.Id);
        alert('Deletado com sucesso');
        router.push({ path: '/${cls.name}/Index${cls.name}' });
    } catch (error) {
        console.error(error);
        alert('Não foi possível apagar, pois a ${cls.name} está vinculada a um projeto');
    } finally {
        dialogDelete.value = false;
    }
};
</script>`
}
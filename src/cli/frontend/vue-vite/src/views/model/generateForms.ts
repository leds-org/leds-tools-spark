import { expandToString } from "langium/generate"
import { EnumEntityAtribute, EnumX, LocalEntity } from "../../../../../../language/generated/ast.js"
import { capitalizeString } from "../../../../../util/generator-utils.js"
//import { processRelations } from "../../../../../util/relations.js"


export function generate(cls: LocalEntity, enumx: EnumX[]): string {
    let imports = ""
    let forms = ""
    let formattr = ""
    let relationGet = ""
    let relationOptions = ""
    let OnMounted = ""

    relationOptions += cls.relations.map(relations => `const ${relations.type.ref?.name}Options = ref([]);`).join('\n')+'\n'
    formattr += cls.relations.map(relations => `${relations.type.ref?.name}: '',`).join('\n')+'\n'
    formattr += `${cls.enumentityatributes.map(enumEntityAtribute => `${enumEntityAtribute.type.ref?.name}: '', \n`)}`

    for(const attr of cls.attributes) {
        
      formattr += `${capitalizeString(attr.name)}: '', \n`

      forms += `
<v-col cols="12">
    <v-label class="font-weight-medium mb-2">${attr.name}</v-label>
    <VTextField  type="text" placeholder="${attr.name} ${attr.type}" hide-details v-model='form.${attr.name}' required></VTextField>
</v-col>`
    }

    for(const rel of cls.relations){
        forms += `
<v-col cols="12">
    <v-label class="font-weight-medium mb-2">${capitalizeString(rel.type.ref?.name || '')}</v-label>
    <v-select :items="${capitalizeString(rel.type.ref?.name || '')}Options" item-title="Id" item-value="Id" placeholder="Select ${capitalizeString(rel.type.ref?.name || '')}" hide-details v-model="form.${capitalizeString(rel.type.ref?.name || '')}" required></v-select>
</v-col>`
        if(rel.type.ref?.name != cls.name) {
        imports += `import ${rel.type.ref?.name}Service from '../../../services/requires/${rel.type.ref?.name}Requires'; \n`
        relationGet += `const { list: list${rel.type.ref?.name} } = ${rel.type.ref?.name}Service(); \n`
        OnMounted += `
response = await list${rel.type.ref?.name}();
${rel.type.ref?.name}Options.value = response.value;`
        }
    }
    
    const form = generateFormExport(cls, forms, formattr, enumx, imports, relationGet, relationOptions, OnMounted);
    return form
}

function generateFormExport(cls: LocalEntity, forms: string, formattr: string, enumx: EnumX[], imports: string, relationGet: String, relationOptions: string, OnMounted: String): string {
    return expandToString`
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <form @submit.prevent="onSubmit">
        <v-card elevation="10" class="" rounded="md">
            <v-card-text class="pa-sm-6 pa-3 pb-sm-6 pb-6">
                <v-row >
                    ${forms}
                    ${generateEnum(cls)}
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
${imports}
import dayjs from 'dayjs';

${relationGet}
const { list, post, getById, update } = ${cls.name}Service();
const route = useRoute();
const params = route.params;
const router = useRouter();

${relationOptions}
const form = reactive({
    ${formattr.slice(0, formattr.lastIndexOf(','))}
});

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
        
            form.id = params.id
        
            await update(form);
        } else {
        
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
    
    ${onMountedRelations(OnMounted)}

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

${generateEnumValue(cls,enumx)}

</script>`
}

function generateEnumValue(cls: LocalEntity, enumx: EnumX[]): string {
    return expandToString`
  ${cls.enumentityatributes.map(enumEntityAtribute =>createEnumValue(enumEntityAtribute, enumx)).join("\n")}`
  }
  
  function createEnumValue(Enum: EnumEntityAtribute, Enumx: EnumX[]): string {
    let EnumText = "";
    let count = 0;
    for (const enumx of Enumx){
      if(Enum.type.ref?.name == enumx.name){
        for (const a of enumx.attributes){
          EnumText += `
  {
      tipo: '${a.name}',
      value: ${count}
  },`
          count++;
        }
        return expandToString`
        const ${Enum.type.ref?.name} = ref([
            ${EnumText.slice(0, EnumText.lastIndexOf(','))}
        ]);`
      }
    }
    return ""
  }
  
function generateEnum (cls: LocalEntity):string {
    return expandToString`
  ${cls.enumentityatributes.map(enumEntityAtribute =>createEnum(enumEntityAtribute)).join("\n")}`
}
  
function createEnum(Enum: EnumEntityAtribute): string {
return expandToString`
<v-col cols="12">
    <v-label class="font-weight-medium mb-2">${Enum.type.ref?.name} *</v-label>
    <v-select
        :items="${capitalizeString(Enum.type.ref?.name || "")}"
        item-title="tipo"
        item-value="value"
        placeholder="Selecione ${Enum.type.ref?.name}"
        hide-details
        required
        v-model="form.${capitalizeString(Enum.type.ref?.name || "")}"
    >
    </v-select>
</v-col>
`
}

function onMountedRelations(OnMounted: String): string {
    if (OnMounted.length > 5){
        return expandToString`
let response;
${OnMounted}`
    }
    return ''
}

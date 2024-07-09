import { CompositeGeneratorNode, Generated, expandToString, expandToStringWithNL, toString } from "langium/generate"
import { Attribute, Entity, EnumEntityAtribute, ImportedEntity, LocalEntity, ModuleImport, isLocalEntity } from "../../../../../language/generated/ast.js"
import { RelationInfo } from "../../../../util/relations.js"
import { capitalizeString } from "../../../../util/generator-utils.js"


export function generateModel(cls: LocalEntity, is_supertype: boolean, relations: RelationInfo[], package_name: string, importedEntities: Map<ImportedEntity, ModuleImport | undefined>, identity: boolean) : Generated {
  const supertype = cls.superType?.ref  
  const is_abstract = cls?.is_abstract

  const external_relations = relations.filter(relation => relation.tgt.$container != cls.$container)
  if (identity) {
    return expandToStringWithNL`
    namespace ${package_name}
    {
      using Microsoft.EntityFrameworkCore;

    ${external_relations.map(relation => `using ${package_name.replace(cls.$container.name,relation.tgt.$container.name)}.${relation.tgt.name};`).join('\n')}
    
    ${supertype ? generateImportSuperEntity(package_name, cls, supertype, importedEntities) : undefined}
    public ${is_abstract? `abstract` : undefined} class ${cls.name} ${supertype ? `extends ${supertype.name}` : ': AppUser'} {
          
      private DateTime createdAt = DateTime.Now;
      
      ${cls.attributes.map(a => generateAttribute(a,is_abstract)).join('\n')}
      ${generateRelations(cls, relations)}
      ${generateEnum(cls)}

    }
    }
  `
  }
  else{
  return expandToStringWithNL`
    namespace ${package_name}
    {
      using Microsoft.EntityFrameworkCore;

    ${external_relations.map(relation => `using ${package_name.replace(cls.$container.name,relation.tgt.$container.name)}.${relation.tgt.name};`).join('\n')}
    
    ${supertype ? generateImportSuperEntity(package_name, cls, supertype, importedEntities) : undefined}
    public ${is_abstract? `abstract` : undefined} class ${cls.name} ${supertype ? `extends ${supertype.name}` : ''} {
        
      ${is_abstract?`public Guid Id { get; set; }`: undefined}
      private DateTime createdAt = DateTime.Now;

      ${!supertype && !is_abstract?`public Guid Id { get; set; }`: undefined}
      
      ${cls.attributes.map(a => generateAttribute(a,is_abstract)).join('\n')}
      ${generateRelations(cls, relations)}
      ${generateEnum(cls)}

    }
    }
  `
  }
}

export function generateIdentityUser(cls: LocalEntity, package_name: string): string {
  return expandToStringWithNL`
  using Microsoft.AspNetCore.Identity;

  namespace ${package_name}
  {
      public class AppUser : IdentityUser<Guid>
      {
          public ${cls.name} ${cls.name} { get; set; }
      }
  
  }
  `
}

function generateImportSuperEntity (package_name: string, entity: Entity, supertype: Entity, importedEntities: Map<ImportedEntity, ModuleImport | undefined>):string {

  if (isLocalEntity(supertype)){
    return `using ${package_name.replace(entity.$container.name.toLowerCase(),generateImportEntity(supertype,importedEntities))}.${supertype.name};`
  }
  return `using ${generateImportEntity(supertype,importedEntities)}.${supertype.name};` 

} 

function generateImportEntity (entity: Entity, importedEntities: Map<ImportedEntity, ModuleImport | undefined>): string {
  if (isLocalEntity(entity)){
    return `${entity.$container.name.toLowerCase()}`
  }
  const moduleImport = importedEntities.get(entity)

  return `${moduleImport?.library.toLocaleLowerCase()}.${entity.$container.name.toLowerCase()}`
}

function generateAttribute(attribute:Attribute, is_abstract:Boolean): Generated{
  return expandToStringWithNL`
  ${generateUniqueCollumn(attribute)}
  ${is_abstract? `protected`: `public`} ${toString(generateTypeAttribute(attribute) ?? 'NOTYPE')} ${capitalizeString(attribute.name)} { get; set; }
  `
}

function generateUniqueCollumn(attribute: Attribute): Generated{
  if (attribute?.unique){
    return " "
  }
  return ""
}

function generateTypeAttribute(attribute:Attribute): Generated{

  if (attribute.type.toString().toLowerCase() === "date"){
    return "DateTime"
  }
  if (attribute.type.toString().toLowerCase() === "cpf"){
    return "String"
  }
  if (attribute.type.toString().toLowerCase() === "email"){
    return "String"
  }
  if (attribute.type.toString().toLowerCase() === "file"){
    return "Byte[]"
  }
  if (attribute.type.toString().toLowerCase() === "mobilephonenumber"){
    return "String"
  }
  if (attribute.type.toString().toLowerCase() === "zipcode"){
    return "String"
  }
  if (attribute.type.toString().toLowerCase() === "phonenumber"){
    return "String"
  }
  if (attribute.type.toString().toLowerCase() === "integer"){
    return "int"
  }
  return attribute.type

}

function generateRelations(cls: LocalEntity, relations: RelationInfo[]) : Generated {
  
  const node = new CompositeGeneratorNode()

  for(const rel of relations) {
    node.append(generateRelation(cls, rel))
    node.appendNewLine()
  }
  return node
}

function generateRelation(cls: LocalEntity, {tgt, card, owner}: RelationInfo) : Generated {
  switch(card) {
  case "OneToOne":
    if(owner) {
      return expandToStringWithNL`
        //OneToOne
        public Guid? ${tgt.name.toLowerCase()}Id {get; set; }
        public ${tgt.name}? ${tgt.name} { get; set; }
      `
    } else {
      return expandToStringWithNL`
      `
    }
  case "OneToMany":
    if(owner) {
      return ''
    } else {
      return expandToStringWithNL`
      //OneToMany
      public ICollection<${tgt.name}>? ${tgt.name}s { get; set;}
      `
    }
  case "ManyToOne":
    if(owner) {
      return expandToStringWithNL`
        //ManyToOne
        public ${tgt.name}? ${tgt.name} { get; set; }
        public Guid? ${tgt.name.toLowerCase()}Id {get; set; }
      `
    } else {
      return ''
    }
  case "ManyToMany":
    if(owner) {
      return expandToStringWithNL`
        //ManyToMany
        public ICollection<${tgt.name}>? ${tgt.name}s { get; set;}
      `
    } else {
      return expandToStringWithNL`
        public ICollection<${tgt.name}>? ${tgt.name}s { get; set;}
      `
    }
  }
}

function createEnum(enumEntityAtribute: EnumEntityAtribute):string {
  return expandToString`
  public ${enumEntityAtribute.type.ref?.name} ${enumEntityAtribute.type.ref?.name.toLowerCase()} { get; set; }
  `
}

function generateEnum (cls: LocalEntity):string {
  return expandToStringWithNL`
  ${cls.enumentityatributes.map(enumEntityAtribute =>createEnum(enumEntityAtribute)).join("\n")}
  `
}
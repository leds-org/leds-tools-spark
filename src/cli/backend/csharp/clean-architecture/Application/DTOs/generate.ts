import { CompositeGeneratorNode, Generated, expandToString, expandToStringWithNL } from "langium/generate"
import { Attribute, EnumEntityAtribute, LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path"
import { capitalizeString, createPath } from "../../../../../util/generator-utils.js"
import { RelationInfo, processRelations } from "../../../../../util/relations.js"
export function generate(model: Model, target_folder: string) : void {

    fs.writeFileSync(path.join(target_folder, "BaseDTO.cs"), generateBaseDTO(model))

    const modules =  model.abstractElements.filter(isModule);
    const all_entities = modules.map(module => module.elements.filter(isLocalEntity)).flat()
    const relation_maps = processRelations(all_entities)
    
    for(const mod of modules) {
        for(const cls of mod.elements.filter(isLocalEntity)) {
            const { relations } = getAttrsAndRelations(cls, relation_maps)
            const cls_name = `${cls.name}`
            const cls_path = createPath(target_folder, cls_name.replaceAll(".","/")) 
            fs.writeFileSync(path.join(cls_path, `${cls_name}ResponseDTO.cs`), generateResponseDTO(model, cls, relations))
            fs.writeFileSync(path.join(cls_path, `${cls_name}RequestDTO.cs`), generateRequestDTO(model, cls, relations))
        }
        
      }

}

function generateBaseDTO(model: Model) : string {
    return expandToStringWithNL`
namespace ${model.configuration?.name}.Application.DTOs
{
    public class BaseDTO
    {
        public Guid Id { get; set; }
    }
}`
}

function generateRequestDTO(model : Model, cls : LocalEntity, relations : RelationInfo[]) : string {
    return expandToStringWithNL`
using ${model.configuration?.name}.Application.DTOs.Response;
using MediatR;

namespace ${model.configuration?.name}.Application.DTOs.Request
{
    public class ${cls.name}RequestDTO : IRequest<${cls.name}ResponseDTO>
    {
        ${cls.attributes.map(a => generateAttribute(a)).join('\n')}
        ${generateEnum(cls)}
        ${generateRelationsRequest(cls, relations)}
    }
}`
}

function generateResponseDTO(model : Model, cls : LocalEntity, relations: RelationInfo[]) : string {
    return expandToStringWithNL`
namespace ${model.configuration?.name}.Application.DTOs.Response
{
    public class ${cls.name}ResponseDTO : BaseDTO
    {
        ${cls.attributes.map(a => generateAttribute(a)).join('\n')}
        ${generateRelationsResponse(cls, relations)}
        ${generateEnum(cls)}
    }
}`
}

function generateAttribute(attribute:Attribute): string{
    return expandToString`
    public ${generateTypeAttribute(attribute) ?? 'NOTYPE'} ${capitalizeString(attribute.name)} { get; set; }
    `
}

function generateTypeAttribute(attribute:Attribute): string | undefined {

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
    return attribute.type

}

function generateRelationsResponse(cls: LocalEntity, relations: RelationInfo[]) : Generated {
  
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
        return expandToString`
          public Guid ${tgt.name.toLowerCase()}Id { get; set; }
          public virtual ${tgt.name}ResponseDTO ${tgt.name} { get; set; }`
      } else {
        return ''
      }
    case "OneToMany":
      if(owner) {
        return ''
      } else {
        return ''
      }
    case "ManyToOne":
      if(owner) {
        return expandToString`
          public virtual ${tgt.name}ResponseDTO ${tgt.name} { get; set; }
          public Guid ${tgt.name.toLowerCase()}Id { get; set; }`
      } else {
        return ''
      }
    case "ManyToMany":
      if(owner) {
        return expandToString`
          public virtual ICollection<${tgt.name}ResponseDTO>? ${tgt.name}s { get; set;}`
      } else {
        return ''
      }
    }
  }

/**
 * Retorna todos os atributos e relações de uma Class, incluindo a de seus supertipos
 */
function getAttrsAndRelations(cls: LocalEntity, relation_map: Map<LocalEntity, RelationInfo[]>) : {attributes: Attribute[], relations: RelationInfo[]} {
    // Se tem superclasse, puxa os atributos e relações da superclasse
    if(cls.superType?.ref != null && isLocalEntity(cls.superType?.ref)) {
      const parent =  cls.superType?.ref
      const {attributes, relations} = getAttrsAndRelations(parent, relation_map)
  
      return {
        attributes: attributes.concat(cls.attributes),
        relations: relations.concat(relation_map.get(cls) ?? [])
      }
    } else {
      return {
        attributes: cls.attributes,
        relations: relation_map.get(cls) ?? []
      }
    }
  }

  function createEnum(enumEntityAtribute: EnumEntityAtribute):string {
    return expandToString`
    public ${enumEntityAtribute.type.ref?.name} ${enumEntityAtribute.type.ref?.name.toLowerCase()} { get; set; }
    `
  }
  
  function generateEnum (cls: LocalEntity):string {
    return expandToString`
    ${cls.enumentityatributes.map(enumEntityAtribute =>createEnum(enumEntityAtribute)).join("\n")}
    `
  }

  function generateRelationsRequest(cls: LocalEntity, relations: RelationInfo[]) : Generated {
  
    const node = new CompositeGeneratorNode()
  
    for(const rel of relations) {
      node.append(generateRelationRequest(cls, rel))
      node.appendNewLine()
    }
    return node
  }
  
  function generateRelationRequest(cls: LocalEntity, {tgt, card, owner}: RelationInfo) : Generated {
    switch(card) {
    case "OneToOne":
      if(owner) {
        return expandToString`
          public Guid ${tgt.name.toLowerCase()}Id { get; set; }`
      } else {
        return ''
      }
    case "OneToMany":
      if(owner) {
        return ''
      } else {
        return ''
      }
    case "ManyToOne":
      if(owner) {
        return expandToString`
          public Guid ${tgt.name.toLowerCase()}Id { get; set; }`
      } else {
        return ''
      }
    case "ManyToMany":
      if(owner) {
        return ''
      } else {
        return ''
      }
    }
  }
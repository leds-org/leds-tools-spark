import path from "path";
import fs from "fs";
import { Attribute, LocalEntity, Model, Module, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js";
import { RelationInfo, processRelations } from "../../../../../util/relations.js";
import { CompositeGeneratorNode, Generated, expandToStringWithNL } from "langium/generate";

export function generate(model: Model, target_folder: string) : void {

  const modules =  model.abstractElements.filter(isModule);
  const all_entities = modules.map(module => module.elements.filter(isLocalEntity)).flat()
  const relation_maps = processRelations(all_entities)

  for(const mod of modules) {
    
    // const package_name      = `${mod.name}` 
    const mod_classes = mod.elements.filter(isLocalEntity)

    for(const cls of mod_classes) {
      fs.writeFileSync(path.join(target_folder,`${cls.name}Repository.cs`), generateConfiguration(model, cls, mod, relation_maps))
    }

    // for (const enumx of mod.elements.filter(isEnumX)){
    //   fs.writeFileSync(path.join(MODULE_PATH,`${enumx.name}.cs`), generateEnum(enumx,package_name))
    // }
  }
}

function generateConfiguration(model: Model, cls: LocalEntity, mod : Module, relation_maps: Map<LocalEntity, RelationInfo[]>) : string{
    return expandToStringWithNL`
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ${model.configuration?.name}.Domain.Entities;

namespace ${model.configuration?.name}.Infrastructure.EntitiesConfiguration
{
    public class ${cls.name}Configuration : IEntityTypeConfiguration<${cls.name}>
    {
        public void Configure(EntityTypeBuilder<${cls.name}> builder)
        {
            ${generateRelations(mod, relation_maps)}
        }
    }
}
`
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

function generateRelations(mod : Module, relation_maps: Map<LocalEntity, RelationInfo[]>) : Generated {
    const node = new CompositeGeneratorNode()
    for (const cls of mod.elements.filter(isLocalEntity)) {
        const {relations} = getAttrsAndRelations(cls, relation_maps)

        for(const rel of relations) {
          node.append(generateRelation(cls, rel))
          node.appendNewLine()
        }
        
    }
    return node
}

function generateRelation(cls: LocalEntity, {tgt, card, owner}: RelationInfo) : Generated {
    switch(card) {
    case "OneToOne":
      if(owner) {
        return ""
      } else {
        return expandToStringWithNL`
            builder.Entity<${cls.name}>()
                .HasOne(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${tgt.name}s) 
                .WithOne(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${cls.name}) 
                .HasForeignKey(${cls.name.toLowerCase()} => ${cls.name.toLowerCase()}.${cls.name.toLowerCase()}Id);`
      }
    case "OneToMany":
      if(owner) {
        return ""
      } else {
        return expandToStringWithNL`
            builder.Entity<${cls.name}>()
                .HasMany(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${tgt.name}s) 
                .WithOne(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${cls.name}) 
                .HasForeignKey(${cls.name.toLowerCase()} => ${cls.name.toLowerCase()}.${cls.name.toLowerCase()}Id);`
      }
    case "ManyToOne":
      if(owner) {
        return ""
      } else {
        return expandToStringWithNL`
            builder.Entity<${cls.name}>()
                .HasMany(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${tgt.name}s) 
                .WithOne(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${cls.name}) 
                .HasForeignKey(${cls.name.toLowerCase()} => ${cls.name.toLowerCase()}.${cls.name.toLowerCase()}Id);`
      }
    case "ManyToMany":
      if(owner) {
        return expandToStringWithNL`
          builder.Entity<${cls.name}>()
            .HasMany(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${tgt.name}s) 
            .WithMany(${tgt.name.toLowerCase()} => ${tgt.name.toLowerCase()}.${cls.name}s);`
      } else {
        return ""
      }
    }
  }
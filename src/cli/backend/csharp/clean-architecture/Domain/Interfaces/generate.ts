import { expandToStringWithNL } from "langium/generate"
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path";
import { generate as GenerateSecurity} from "./Security/generate.js"

export function generate(model: Model, target_folder: string) : void {

    const modules =  model.abstractElements.filter(isModule);
  
    for(const mod of modules) {
      
      const package_name      = `${model.configuration?.name}` 
  
      const mod_classes = mod.elements.filter(isLocalEntity)
  
      for(const cls of mod_classes) {
        const class_name = cls.name
        fs.writeFileSync(path.join(target_folder,`I${class_name}Repository.cs`), generateRepository(model, cls, package_name))
        if (!cls.is_abstract){
        }
      }
    }

    fs.writeFileSync(path.join(target_folder,`IUnitOfWork.cs`), generateUnitOfWork(model))
    fs.writeFileSync(path.join(target_folder,`IBaseRepository.cs`), generateBaseRepository(model))

    const security_folder = target_folder + "/Security"
    fs.mkdirSync(security_folder, {recursive: true})
    GenerateSecurity(model, security_folder)
}

function generateRepository(model: Model, cls: LocalEntity, package_name: string) : string {
    return expandToStringWithNL`
using ${model.configuration?.name}.Domain.Entities;

namespace ${model.configuration?.name}.Domain.Interfaces
{
    public interface I${cls.name}Repository : IBaseRepository<${cls.name}>
    {
    }
}
`
}

function generateUnitOfWork(model: Model): string {
    return expandToStringWithNL`
namespace ${model.configuration?.name}.Domain.Interfaces
{
    public interface IUnitOfWork
    {
        Task Commit(CancellationToken cancellationToken);
    }
}`
}

function generateBaseRepository(model: Model): string {
    return expandToStringWithNL`
﻿using ${model.configuration?.name}.Domain.Common;

namespace ${model.configuration?.name}.Domain.Interfaces
{
    public interface IBaseRepository<T> where T : BaseEntity
    {
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        IQueryable<T> GetById(Guid id);
        IQueryable<T> GetByEntityId(T entity);
        IQueryable<T> GetAll();
    }
}
`
}
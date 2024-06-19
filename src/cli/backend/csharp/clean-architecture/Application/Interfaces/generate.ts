import { expandToString } from "langium/generate"
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path"

export function generate(model: Model, target_folder: string) : void {
    
    fs.writeFileSync(path.join(target_folder,`IBaseService.cs`), generateBaseService(model))

    const modules =  model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {
            fs.writeFileSync(path.join(target_folder,`I${cls.name}Service.cs`), generateService(model, cls))
        }
    }
}

function generateBaseService (model: Model): string {
    return expandToString`
namespace ${model.configuration?.name}.Application.Interfaces
{
    public interface IBaseService<Request, Response, Entity>
    {
        IQueryable<Response> GetAll();
        IQueryable<Response> GetById(Guid id);
        Task<Response> Create(Request entity, CancellationToken cancellationToken);
        Task Delete(Guid id, CancellationToken cancellationToken);
        Task<Response> Update(Guid id, Request entity, CancellationToken cancellationToken);

    }
}`
}

function generateService(model: Model, cls: LocalEntity) : string {
    return expandToString`
using ${model.configuration?.name}.Application.DTOs.Request;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Domain.Entitites;

namespace ${model.configuration?.name}.Application.Interfaces
{
    public interface I${cls.name}Service : IBaseService<${cls.name}RequestDTO, ${cls.name}ResponseDTO, ${cls.name}>
    {
    }
}`
}
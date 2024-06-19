import { expandToStringWithNL } from "langium/generate";
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path";
export function generate(model: Model, target_folder: string) : void {
    const modules =  model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {
            fs.writeFileSync(path.join(target_folder,`${cls.name}Service.cs`), generateService(model, cls))
        }
    }
}

function generateService(model: Model, cls: LocalEntity) : string {
    return expandToStringWithNL`
using AutoMapper;
using MediatR;
using ${model.configuration?.name}.Application.DTOs.Request;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.Interfaces;
using ${model.configuration?.name}.Application.ServiceWs;
using ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Create${cls.name};
using ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Delete${cls.name};
using ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Update${cls.name};
using ${model.configuration?.name}.Domain.Entities;
using ${model.configuration?.name}.Domain.Interfaces;

namespace ${model.configuration?.name}.Application.Services
{
    public class ${cls.name}Service : BaseService<
            ${cls.name}RequestDTO,
            ${cls.name}ResponseDTO,
            Create${cls.name}Request,
            Update${cls.name}Request,
            Delete${cls.name}Request,
            ${cls.name},
            I${cls.name}Repository>,
        I${cls.name}Service
    {
        public ${cls.name}Service(IMediator mediator, IMapper mapper, I${cls.name}Repository repository) : base(mediator, mapper, repository)
        {
        }
    }
}`
}

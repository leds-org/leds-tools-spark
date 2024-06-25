import { expandToString } from "langium/generate"
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path"

export function generate(model: Model, target_folder: string) : void {

    const modules =  model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {
            fs.writeFileSync(path.join(target_folder,`${cls.name}Mapper.cs`), generateMappers(model, cls))
        }
    }
}

function generateMappers(model: Model, cls: LocalEntity) : string {
    return expandToString`
using AutoMapper;
using ${model.configuration?.name}.Application.DTOs.Request;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Create${cls.name};
using ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Delete${cls.name};
using ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Update${cls.name};
using ${model.configuration?.name}.Domain.Entities;

namespace ${model.configuration?.name}.Application.Mappers
{
    public class ${cls.name}Mapper : Profile
    {
        public ${cls.name}Mapper()
        {
            #region Entidade e DTO's
            CreateMap<${cls.name}, ${cls.name}ResponseDTO>().ReverseMap();
            CreateMap<${cls.name}, ${cls.name}RequestDTO>().ReverseMap();
            #endregion

            #region Entidade e DTO's de caso de uso
            CreateMap<${cls.name}, Create${cls.name}Request>().ReverseMap();
            CreateMap<${cls.name}, Update${cls.name}Request>().ReverseMap();
            CreateMap<${cls.name}, Delete${cls.name}Request>().ReverseMap();
            #endregion

            #region DTO's e DTO´s de caso de uso
            CreateMap<${cls.name}RequestDTO, Create${cls.name}Request>().ReverseMap();
            CreateMap<${cls.name}RequestDTO, Update${cls.name}Request>().ReverseMap();
            CreateMap<${cls.name}RequestDTO, Delete${cls.name}Request>().ReverseMap();
            #endregion

        }
    }
}
`
}
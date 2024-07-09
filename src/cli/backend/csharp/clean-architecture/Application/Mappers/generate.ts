import { expandToString } from "langium/generate"
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path"

export function generate(model: Model, target_folder: string) : void {

    const entities_folder = target_folder + '/Entities'

    fs.mkdirSync(entities_folder, {recursive: true})

    const modules =  model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {
            fs.writeFileSync(path.join(entities_folder,`${cls.name}Mapper.cs`), generateMappers(model, cls))
        }
    }
}

function generateMappers(model: Model, cls: LocalEntity) : string {
    return expandToString`
using AutoMapper;
using ${model.configuration?.name}.Application.DTOs.Entities.Request;
using ${model.configuration?.name}.Application.DTOs.Entities.Response;
using ${model.configuration?.name}.Application.DTOs.Common;
using ${model.configuration?.name}.Application.UseCase.Entities.${cls.name}Case.Create;
using ${model.configuration?.name}.Application.UseCase.Entities.${cls.name}Case.Delete;
using ${model.configuration?.name}.Application.UseCase.Entities.${cls.name}Case.GetById;
using ${model.configuration?.name}.Application.UseCase.Entities.${cls.name}Case.Update;
using ${model.configuration?.name}.Domain.Entities;

namespace ${model.configuration?.name}.Application.Mappers.Entities
{
    public class ${cls.name}Mapper : Profile
    {
        public ${cls.name}Mapper()
        {
            #region Entidade para DTO's
            CreateMap<${cls.name}, ${cls.name}ResponseDTO>().ReverseMap();
            CreateMap<${cls.name}, ${cls.name}RequestDTO>().ReverseMap();
            #endregion

            #region Entidade para Commads de Caso de Uso
            CreateMap<${cls.name}, Create${cls.name}Command>().ReverseMap();
            CreateMap<${cls.name}, Update${cls.name}Command>().ReverseMap();
            CreateMap<${cls.name}, GetById${cls.name}Command>().ReverseMap();
            CreateMap<${cls.name}, Delete${cls.name}Command>().ReverseMap();
            #endregion

            #region DTO's para Commads de Caso de Uso
            CreateMap<${cls.name}RequestDTO, Create${cls.name}Command>().ReverseMap();
            CreateMap<${cls.name}RequestDTO, Update${cls.name}Command>().ReverseMap();
            CreateMap<${cls.name}RequestDTO, Delete${cls.name}Command>().ReverseMap();
            #endregion

            #region Conversão para api response
            CreateMap<ApiResponse, ${cls.name}RequestDTO>().ReverseMap();
            CreateMap<ApiResponse, Create${cls.name}Command>().ReverseMap();
            CreateMap<ApiResponse, Update${cls.name}Command>().ReverseMap();
            CreateMap<ApiResponse, Delete${cls.name}Command>().ReverseMap();
            #endregion
        }
    }
}`
}
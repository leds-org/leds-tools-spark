import { expandToString } from "langium/generate"
import { LocalEntity, Model } from "../../../../../../../language/generated/ast.js"

export function generate(model: Model, cls: LocalEntity): string {
    return expandToString`
using Microsoft.AspNetCore.Mvc;
using ${model.configuration?.name}.Application.DTOs.Request;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.Interfaces;
using ${model.configuration?.name}.Domain.Entities;
using ${model.configuration?.name}.WebApi.Controllers.Generics;

namespace ${model.configuration?.name}.WebApi.Controllers.Query
{
    [Route("/api/${cls.name.toLowerCase()}")]
    [ApiController]
    public class ${cls.name}Controller : QueryController<I${cls.name}Service, ${cls.name}RequestDTO, ${cls.name}ResponseDTO, ${cls.name}>
    {
        public ${cls.name}Controller(I${cls.name}Service service) : base(service)
        {
        }
    }
}`
}
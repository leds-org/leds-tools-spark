import { expandToString } from "langium/generate";
import { LocalEntity, Model } from "../../../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path";
import { RelationInfo } from "../../../../../../../util/relations.js";

export function generate(model: Model, target_folder: string, cls: LocalEntity, relations: RelationInfo[]) : void {
    fs.writeFileSync(path.join(target_folder,`Delete${cls.name}Handler.cs`), generateHandler(model, cls))
    fs.writeFileSync(path.join(target_folder,`Delete${cls.name}Request.cs`), generateRequest(model, cls, relations))
    fs.writeFileSync(path.join(target_folder,`Delete${cls.name}Validator.cs`), generateValidator(model, cls))
}

function generateHandler (model: Model, cls: LocalEntity): string {
    return expandToString`
using AutoMapper;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.UseCase.BaseCase;
using ${model.configuration?.name}.Domain.Entities;
using ${model.configuration?.name}.Domain.Interfaces;

namespace ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Delete${cls.name}
{
    public sealed class Delete${cls.name}Handler : DeleteHandler<I${cls.name}Repository, Delete${cls.name}Request, ${cls.name}ResponseDTO, ${cls.name}>
    {
        public Delete${cls.name}Handler(IUnitOfWork unitOfWork, I${cls.name}Repository repository, IMapper mapper) : base(unitOfWork, repository, mapper)
        {
        }
    }
}`
}

function generateValidator (model: Model, cls: LocalEntity): string {
    return expandToString`
using FluentValidation;

namespace ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Delete${cls.name}
{
    public class Delete${cls.name}Validator : AbstractValidator<Delete${cls.name}Request>
    {
        public Delete${cls.name}Validator()
        {

        }
    }
}`
}

function generateRequest (model: Model, cls: LocalEntity, relations : RelationInfo[]): string {
    return expandToString`
using MediatR;
using ${model.configuration?.name}.Application.DTOs.Response;

namespace ${model.configuration?.name}.Application.UseCase.${cls.name}Case.Delete${cls.name}
{
    public sealed record Delete${cls.name}Request(Guid Id) : IRequest<${cls.name}ResponseDTO>
    {
    }
}`
}
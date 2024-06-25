import { expandToStringWithNL } from "langium/generate";
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path";
export function generate(model: Model, target_folder: string) : void {
    const modules =  model.abstractElements.filter(isModule);

    fs.writeFileSync(path.join(target_folder,`BaseService.cs`), generateBaseService(model))

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
using ${model.configuration?.name}.Application.DTOs;
using ${model.configuration?.name}.Application.DTOs.Request;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.Interfaces;
using ${model.configuration?.name}.Application.Services;
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

function generateBaseService(model: Model): string {
    return expandToStringWithNL`
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using ${model.configuration?.name}.Application.DTOs;
using ${model.configuration?.name}.Application.DTOs.Request;
using ${model.configuration?.name}.Application.DTOs.Response;
using ${model.configuration?.name}.Application.Interfaces;
using ${model.configuration?.name}.Domain.Common;
using ${model.configuration?.name}.Domain.Interfaces;

namespace ${model.configuration?.name}.Application.Services
{
    public class BaseService<Request, Response, RequestCreateCommand, RequestUpdateCommand, RequestDeleteCommand, Entity, Repository> : IBaseService<Request, Response, Entity>
        where Entity : BaseEntity
        where Response : BaseDTO
        where Repository : IBaseRepository<Entity>
        where RequestCreateCommand : IRequest<Response>
        where RequestUpdateCommand : IRequest<Response>
        where RequestDeleteCommand : IRequest<Response>
    {
        private readonly IMediator _mediator;
        private readonly IMapper _mapper;
        private readonly Repository _repository;

        public BaseService(IMediator mediator, IMapper mapper, Repository repository)
        {
            _mediator = mediator;
            _mapper = mapper;
            _repository = repository;
        }

        public Task<Response> Create(Request entity, CancellationToken cancellationToken)
        {
            var request = _mapper.Map<RequestCreateCommand>(entity);
            return _mediator.Send(request, cancellationToken);
        }

        public Task Delete(Guid id, CancellationToken cancellationToken)
        {
            var request = _mapper.Map<RequestDeleteCommand>(id);
            return _mediator.Send(request, cancellationToken);
        }

        public IQueryable<Response> GetAll()
        {
            return _repository.GetAll().ProjectTo<Response>(_mapper.ConfigurationProvider); ;
        }

        public IQueryable<Response> GetById(Guid id)
        {
            return _repository.GetById(id).ProjectTo<Response>(_mapper.ConfigurationProvider);
        }

        public Task<Response> Update(Guid id, Request entity, CancellationToken cancellationToken)
        {
            #region Insere o Id na entidade
            var obj = _mapper.Map<Entity>(entity);
            obj.Id = id;
            #endregion

            var request = _mapper.Map<RequestUpdateCommand>(obj);
            return _mediator.Send(request, cancellationToken);
        }
    }
}`
}

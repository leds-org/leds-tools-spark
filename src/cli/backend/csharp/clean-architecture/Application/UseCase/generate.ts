import { expandToString } from "langium/generate";
import { Attribute, LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path";
import { RelationInfo, processRelations } from "../../../../../util/relations.js";
import { generate as generateCreate } from "./Case/CreateCase/generate.js"
import { generate as generateDelete } from "./Case/DeleteCase/generate.js"
import { generate as generateUpdate } from "./Case/UpdateCase/generate.js"

export function generate(model: Model, target_folder: string) : void {

    const BaseCase_Folder = target_folder + "/BaseCase"
    fs.mkdirSync(BaseCase_Folder, {recursive: true})
    generateBaseCase(model, BaseCase_Folder)

    const modules =  model.abstractElements.filter(isModule);

    for(const mod of modules) {
        const modules =  model.abstractElements.filter(isModule);
        const all_entities = modules.map(module => module.elements.filter(isLocalEntity)).flat()
        const relation_maps = processRelations(all_entities)
        const mod_classes = mod.elements.filter(isLocalEntity)
        for(const cls of mod_classes) {

            const { relations } = getAttrsAndRelations(cls, relation_maps)
            
            const Class_Folder = target_folder + `/${cls.name}Case`
            fs.mkdirSync(Class_Folder, {recursive: true})

            const Create_Folder = Class_Folder + `/Create${cls.name}`
            const Delete_Folder = Class_Folder + `/Delete${cls.name}`
            const Update_Folder = Class_Folder + `/Update${cls.name}`

            fs.mkdirSync(Create_Folder, {recursive: true})
            fs.mkdirSync(Delete_Folder, {recursive: true})
            fs.mkdirSync(Update_Folder, {recursive: true})

            generateCreate(model, Create_Folder, cls, relations)
            generateDelete(model, Delete_Folder, cls, relations)
            generateUpdate(model, Update_Folder, cls, relations)
        }
    }
}

function generateBaseCase (model: Model, target_folder: string): void {
    fs.writeFileSync(path.join(target_folder,`CreateHandler.cs`), BaseCreateHandler(model))
    fs.writeFileSync(path.join(target_folder,`DeleteHandler.cs`), BaseDeleteHandler(model))
    fs.writeFileSync(path.join(target_folder,`UpdateHandler.cs`), BaseUpdateHandler(model))
}

function BaseCreateHandler (model: Model): string {
    return expandToString`
using AutoMapper;
using MediatR;
using ${model.configuration?.name}.Application.DTOs;
using ${model.configuration?.name}.Domain.Common;
using ${model.configuration?.name}.Domain.Interfaces;

namespace ${model.configuration?.name}.Application.UseCase.BaseCase
{
    public class CreateHandler<IRepository, RequestCommand, ResponseDTO, DomainEntity> : IRequestHandler<RequestCommand, ResponseDTO>
        where DomainEntity : BaseEntity
        where IRepository : IBaseRepository<DomainEntity>
        where ResponseDTO : BaseDTO
        where RequestCommand : IRequest<ResponseDTO>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public CreateHandler(IUnitOfWork unitOfWork,
            IRepository repository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ResponseDTO> Handle(RequestCommand request,
            CancellationToken cancellationToken)
        {
            var entity = _mapper.Map<DomainEntity>(request);

            _repository.Create(entity);

            await _unitOfWork.Commit(cancellationToken);

            return _mapper.Map<ResponseDTO>(entity);
        }
    }
}`
}

function BaseDeleteHandler (model: Model): string {
    return expandToString`
using AutoMapper;
using MediatR;
using ${model.configuration?.name}.Application.DTOs;
using ${model.configuration?.name}.Domain.Common;
using ${model.configuration?.name}.Domain.Interfaces;

namespace ${model.configuration?.name}.Application.UseCase.BaseCase
{
    public class DeleteHandler<IRepository, RequestCommand, ResponseDTO, DomainEntity> : IRequestHandler<RequestCommand, ResponseDTO>
        where DomainEntity : BaseEntity
        where IRepository : IBaseRepository<DomainEntity>
        where ResponseDTO : BaseDTO
        where RequestCommand : IRequest<ResponseDTO>

    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public DeleteHandler(IUnitOfWork unitOfWork,
            IRepository repository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ResponseDTO> Handle(RequestCommand request,
                                                    CancellationToken cancellationToken)
        {

            var entity = _mapper.Map<DomainEntity>(request);
            entity = _repository.GetByEntityId(entity).Single();

            if (entity == null) return default;

            _repository.Delete(entity);
            await _unitOfWork.Commit(cancellationToken);

            return _mapper.Map<ResponseDTO>(entity);
        }
    }
}`
}

function BaseUpdateHandler (model: Model): string {
    return expandToString`
using AutoMapper;
using MediatR;
using ${model.configuration?.name}.Application.DTOs;
using ${model.configuration?.name}.Domain.Common;
using ${model.configuration?.name}.Domain.Interfaces;

namespace ${model.configuration?.name}.Application.UseCase.BaseCase
{
    public class UpdateHandler<IRepository, RequestCommand, ResponseDTO, DomainEntity> : IRequestHandler<RequestCommand, ResponseDTO>
        where DomainEntity : BaseEntity
        where IRepository : IBaseRepository<DomainEntity>
        where ResponseDTO : BaseDTO
        where RequestCommand : IRequest<ResponseDTO>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRepository _repository;
        private readonly IMapper _mapper;

        public UpdateHandler(IUnitOfWork unitOfWork,
            IRepository repository, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<ResponseDTO> Handle(RequestCommand command,
                                                     CancellationToken cancellationToken)
        {
            #region Busca a entidade no banco
            var entity = _mapper.Map<DomainEntity>(command);
            entity = _repository.GetByEntityId(entity).Single();
            if (entity is null) return default;


            #endregion

            #region Atualiza a entidade e salva as alterações no banco
            entity = _mapper.Map<DomainEntity>(command);
            _repository.Update(entity);
            #endregion

            await _unitOfWork.Commit(cancellationToken);

            return _mapper.Map<ResponseDTO>(entity);
        }
    }
}`
}

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
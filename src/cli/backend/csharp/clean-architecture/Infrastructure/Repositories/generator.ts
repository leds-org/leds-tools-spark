import { expandToStringWithNL } from "langium/generate"
import { LocalEntity, Model, isLocalEntity, isModule } from "../../../../../../language/generated/ast.js"
import fs from "fs"
import path from "path"

export function generate(model: Model, target_folder: string) : void {
    
    fs.writeFileSync(path.join(target_folder, `BaseRepository.cs`), generateBase(model))
    fs.writeFileSync(path.join(target_folder, `UnitOfWork.cs`), generateUnitOfWork(model))
    const modules =  model.abstractElements.filter(isModule);
  
    for(const mod of modules) {
        for(const cls of mod.elements.filter(isLocalEntity)) {
            fs.writeFileSync(path.join(target_folder,`${cls.name}Repository.cs`), generateEntityRepository(model, cls))
        }
    }
}

function generateBase (model: Model): string {
    return expandToStringWithNL`
using ${model.configuration?.name}.Domain.Common;
using ${model.configuration?.name}.Domain.Interfaces;
using ${model.configuration?.name}.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace ${model.configuration?.name}.Infrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext Context;
        public BaseRepository(AppDbContext context)
        {
            Context = context;
        }

        public async Task Create(T entity)
        {
            entity.Create();
            await Context.AddAsync(entity);
        }

        public async Task Delete(T entity)
        {
            entity.Delete();
            Context.Remove(entity);
        }

        public async Task Update(T entity)
        {
            entity.Update();
            Context.Update(entity);
        }

        public async Task<IQueryable<T>> GetAll()
        {
            return Context.Set<T>().ToList().AsQueryable();
        }

        public async Task<IQueryable<T>> GetByEntityId(T entity)
        {
            if (entity.Id.Equals(null)) return null;
            return Context.Set<T>().Where(x => x.Id == entity.Id).AsNoTracking().AsQueryable();
        }

        public async Task<IQueryable<T>> GetById(Guid id)
        {
            return Context.Set<T>().Where(x => x.Id == id).AsQueryable();
        }


    }
}
`
}

function generateUnitOfWork(model: Model) : string {
    return expandToStringWithNL`
using ${model.configuration?.name}.Domain.Interfaces;
using ${model.configuration?.name}.Infrastructure.Context;

namespace ${model.configuration?.name}.Infrastructure.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
        }
        public async Task Commit(CancellationToken cancellationToken)
        {
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}
`
}

function generateEntityRepository(model: Model, cls: LocalEntity): string {
    return expandToStringWithNL`
using ${model.configuration?.name}.Domain.Entities;
using ${model.configuration?.name}.Domain.Interfaces;
using ${model.configuration?.name}.Infrastructure.Context;

namespace ${model.configuration?.name}.Infrastructure.Repositories
{
    public class ${cls.name}Repository : BaseRepository<${cls.name}>, I${cls.name}Repository
    {
        public ${cls.name}Repository(AppDbContext context) : base(context) { }
    }
}
`
}


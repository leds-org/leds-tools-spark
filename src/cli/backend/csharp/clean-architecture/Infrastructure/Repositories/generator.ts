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
using Microsoft.EntityFrameworkCore;
using ${model.configuration?.name}.Domain.Common;
using ${model.configuration?.name}.Domain.Interfaces;
using ${model.configuration?.name}.Infrastructure.Context;

namespace ${model.configuration?.name}.Infrastructure.Repositories
{
    public class BaseRepository<T> : IBaseRepository<T> where T : BaseEntity
    {
        protected readonly AppDbContext Context;

        public BaseRepository(AppDbContext context)
        {
            Context = context;
        }

        public void Create(T entity)
        {
            entity.DateCreated = DateTimeOffset.UtcNow;
            Context.Add(entity);
        }

        public void Update(T entity)
        {
            entity.DateUpdated = DateTimeOffset.UtcNow;
            Context.Update(entity);
        }

        public void Delete(T entity)
        {
            entity.DateDeleted = DateTimeOffset.UtcNow;
            Context.Remove(entity);
        }

        public IQueryable<T> GetById(Guid id)
        {
            return Context.Set<T>().Where(x => x.Id == id).AsQueryable();
        }

        public IQueryable<T> GetAll()
        {
            return Context.Set<T>().ToList().AsQueryable();
        }

        public IQueryable<T> GetByEntityId(T entity)
        {
            if (entity.Id.Equals(null)) return null;
            return Context.Set<T>().Where(x => x.Id == entity.Id).AsNoTracking().AsQueryable();
        }
    }
}`
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


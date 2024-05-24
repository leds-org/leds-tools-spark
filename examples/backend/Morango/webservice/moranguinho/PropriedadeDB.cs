namespace Moranguinho
{
    using Microsoft.EntityFrameworkCore;
    internal class PropriedadeDb
    {
        public DbSet<Propriedade> Propriedades { get; set; }

        public PropriedadeDb(DbContextOptions<PropriedadeDb> options)
            : base(options) { }
        public DbSet<Propriedade> propriedades => Set<Propriedade>();
    }
}

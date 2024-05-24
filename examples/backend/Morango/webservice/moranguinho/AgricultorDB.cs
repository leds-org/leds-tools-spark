namespace Moranguinho
{
    using Microsoft.EntityFrameworkCore;
    internal class AgricultorDb
    {
        public DbSet<Agricultor> Agricultors { get; set; }

        public AgricultorDb(DbContextOptions<AgricultorDb> options)
            : base(options) { }
        public DbSet<Agricultor> agricultors => Set<Agricultor>();
    }
}

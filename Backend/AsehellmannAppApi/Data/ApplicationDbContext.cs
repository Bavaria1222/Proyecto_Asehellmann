using AsehellmannAppApi.Modelos;
using Microsoft.EntityFrameworkCore;

namespace AsehellmannAppApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        //Agregar los modelos
        public DbSet<Usuario> Usuario { get; set; }

    }
}

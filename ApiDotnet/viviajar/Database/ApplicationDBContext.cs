using Microsoft.EntityFrameworkCore;
using viviajar.Models;

namespace viviajar.Database {
    public class ApplicationDBContext : DbContext {

        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) 
            : base(options) {}

        public DbSet<Passagem> Passagens { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Destino> Destinos { get; set; }

    }   
}

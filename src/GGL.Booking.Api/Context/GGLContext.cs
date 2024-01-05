namespace GGL.Booking.Api
{
    using GGL.Booking.Api.Models;
    using Microsoft.EntityFrameworkCore;

    public class GGLContext : DbContext
	{
        public GGLContext(DbContextOptions options) : base(options)
        {
            Configuration.LazyLoadingEnabled = false;
            Database.SetInitializer<GGLContext>(null);
        }

        public DbSet<Booking> Bookings { get; set; }
		public DbSet<BookingEnquiry> BookingEnquires { get; set; }
		//public DbSet<Configuration> Configurations { get; set; }
		//public DbSet<Event> Events { get; set; }
		//public DbSet<EventService> EventServices { get; set; }
		//public DbSet<EventType> EventTypes { get; set; }
		//public DbSet<Service> Services { get; set; }
		//public DbSet<User> Users { get; set; }
		//public DbSet<ServiceCategory> ServiceCategoies { get; set; }
		//public DbSet<Payment> Payments { get; set; }
		//public DbSet<City> Cities { get; set; }
		//public DbSet<State> States { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

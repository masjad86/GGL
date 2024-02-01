namespace GGL.Booking.Api.Repositories
{
    using GGL.Booking.Api.Abstractions;
    using GGL.Booking.Api.Enums;
    using GGL.Booking.Api.Models;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class BookingEnquiryRepository : GenericRepository<BookingEnquiry>, IBookingEnquiryRepository
	{
		private readonly GGLContext _dbContext;
		public BookingEnquiryRepository(GGLContext dbContext) : base(dbContext)
		{
			_dbContext = dbContext;
		}

		public async Task<int> GetBookingCountByStatusAndDateAsync(BookingStatus bookingStatus, DateTime date)
		{
			return await _dbContext.BookingEnquires.CountAsync(x => x.EventDate.Month == date.Month
				&& x.EventDate.Year == date.Year
				&& x.BookingStatus == Convert.ToInt32(bookingStatus));
		}

		public async Task<int> GetBookingCountByStatusAsync(BookingStatus bookingStatus)
		{
			return await _dbContext.BookingEnquires.CountAsync(x => x.BookingStatus == Convert.ToInt32(bookingStatus));
		}

		public async Task<IEnumerable<BookingEnquiry>> GetByMonthAsync(DateTime date)
		{
			return await _dbContext.BookingEnquires.Where(x => x.EventDate.Month == date.Month
				&& x.EventDate.Year == date.Year).ToListAsync();
		}
	}
}

namespace GGL.Booking.Api.Abstractions
{
    using GGL.Booking.Api.Enums;
    using GGL.Booking.Api.Models;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IBookingEnquiryRepository : IGenericRepository<BookingEnquiry>
	{
		Task<IEnumerable<BookingEnquiry>> GetByMonthAsync(DateTime date);
		Task<int> GetBookingCountByStatusAsync(BookingStatus bookingStatus);
		Task<int> GetBookingCountByStatusAndDateAsync(BookingStatus bookingStatus, DateTime date);
	}
}

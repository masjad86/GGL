namespace GGL.Booking.Api.Abstractions
{
    using GGL.Booking.Api.Dtos;
    using GGL.Booking.Api.Enums;
    using GGL.Booking.Api.Models;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IBookingRepository : IGenericRepository<Booking>
	{
		Task<List<Booking>> GetAllByPagingAsync(PaginationDto paginationDto);
		Task<List<Booking>> GetAllAsync(bool includeEventType = false, bool includeState = false,
			bool includeCity = false, bool asNoTracking = true);
		Task<Booking> GetByIdAsync(long bookingId, bool includeEventType = false, bool includeState = false, bool includeCity = false, bool asNoTracking = false);
		Task<Booking> GetUpcomingEventAsync(DateTime date, EventTime eventTime);
		Task<IEnumerable<Booking>> GetByMonthAsync(DateTime date);
		Task<int> GetBookingCountByStatusAsync(BookingStatus bookingStatus);
		Task<int> GetBookingCountByStatusAndDateAsync(BookingStatus bookingStatus, DateTime date);
	}
}

namespace GGL.Booking.Api.Repositories
{
    using GGL.Booking.Api.Dtos;
    using GGL.Booking.Api.Enums;
    using GGL.Booking.Api.Models;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    /// <summary>
    /// Booking repository to book functions and find booking dates for celebration.
    /// </summary>
    public class BookingRepository : GenericRepository<Booking>, IBookingRepository
    {
        private readonly GGLContext _dbContext;
        public BookingRepository(GGLContext context) : base(context)
        {
            _dbContext = context;
        }

        public async Task<List<Booking>> GetAllByPagingAsync(PaginationDto paginationDto)
        {
            var query = GetQueryable(includeEventType: false, includeState: false, includeCity: false);
            // query.OrderBy(paginationDto.DefaultSortColumn);
            query = query.Skip((paginationDto.PageSize * paginationDto.PageIndex) - 1).Take(paginationDto.PageSize);
            return await query.ToListAsync();
        }

        public async Task<List<Booking>> GetAllAsync(bool includeEventType = false, bool includeState = false,
            bool includeCity = false, bool asNoTracking = false)
        {
            return await GetQueryable(includeEventType, includeState, includeCity, asNoTracking).ToListAsync();
        }

        public async Task<Booking> GetByIdAsync(long bookingId, bool includeEventType = false, bool includeState = false,
            bool includeCity = false, bool asNoTracking = false)
        {
            var query = GetQueryable(includeEventType, includeState, includeCity, asNoTracking);
            return await (from q in query
                          where q.Id == bookingId
                          select q).FirstOrDefaultAsync();
        }

        private IQueryable<Booking> GetQueryable(bool includeEventType = false, bool includeState = false,
            bool includeCity = false, bool asNoTracking = false)
        {
            var query = GetAllQuery();
            //if (includeEventType) { query = query.Include(x => x.EventType); }
            //if (includeState) { query = query.Include(x => x.State); }
            //if (includeCity) { query = query.Include(x => x.City); }
            if (asNoTracking) { query = query.AsNoTracking(); }

            return query;
        }

        public async Task<int> GetBookingCountByStatusAndDateAsync(BookingStatus bookingStatus, DateTime date)
        {
            return await _dbContext.Bookings.CountAsync(x => x.EventDate.Month == date.Month
                && x.EventDate.Year == date.Year
                && x.BookingStatus == Convert.ToInt32(bookingStatus));
        }

        public async Task<int> GetBookingCountByStatusAsync(BookingStatus bookingStatus)
        {
            return await _dbContext.Bookings.CountAsync(x => x.BookingStatus == Convert.ToInt32(bookingStatus));
        }

        public async Task<IEnumerable<Booking>> GetByMonthAsync(DateTime date)
        {
            return await _dbContext.Bookings.Where(x => x.EventDate.Month == date.Month
                && x.EventDate.Year == date.Year).ToListAsync();
        }

        /// <summary>
        /// get recent booking to display home page.
        /// </summary>
        /// <param name="date"></param>
        /// <param name="eventTime"></param>
        /// <returns></returns>
        public async Task<Booking> GetUpcomingEventAsync(DateTime date, EventTime eventTime)
        {
            return await _dbContext.Bookings.FirstOrDefaultAsync(x => x.EventTiming == eventTime && x.EventDate == date);
        }
    }
}

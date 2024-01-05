namespace GGL.Booking.Api.Dtos
{
    using GGL.Booking.Api.Enums;
    using System;

    public class BookingEnquiryDto
	{
		public long Id { get; set; }
		public DateTime EventDate { get; set; }
		public int EventTypeId { get; set; }
		public int NoOfGuestBudget { get; set; }
		public int NoOfGuestExpected { get; set; }
		public string Name { get; set; }
		public string Email { get; set; }
		public string Contact { get; set; }
		public string Address { get; set; }
		public DateTime BookingDate { get; set; }
		public Status Status { get; set; }
		public BookingStatus BookingStatus { get; set; }
	}
}

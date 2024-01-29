namespace GGL.Booking.Api.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
	using GGL.Booking.Api.Constants;
    
	[Table(Tables.BookingEnquiry, Schema = Schema.Default)]
	public class BookingEnquiry
	{
		[Column("booking_id", Order = 1), Key]
		public long Id { get; set; }

		[Column("event_date")]
		public DateTime EventDate { get; set; }

		[Column("event_type_id")]
		public int EventTypeId { get; set; }

		[Column("no_of_guest_budget"), Required]
		public int NoOfGuestBudget { get; set; }

		[Column("no_of_guest_expected"), Required]
		public int NoOfGuestExpected { get; set; }

		[Column("name")]
		public string Name { get; set; } = string.Empty;

		[Column("email")]
		public string Email { get; set; } = string.Empty;

		[Column("contact_number")]
		public string Contact { get; set; } = string.Empty;

        [Column("address")]
		public string Address { get; set; } = string.Empty;

        [Column("booking_date")]
		public DateTime BookingDate { get; set; }

		[Column("active")]
		public bool Status { get; set; } = false;

		[Column("booking_status")]
		public int BookingStatus { get; set; }
	}
}

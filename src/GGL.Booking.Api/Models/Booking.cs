namespace GGL.Booking.Api.Models
{
    using AutoMapper;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
	using GGL.Booking.Api.Enums;
    using GGL.Booking.Api.Constants;

    [Table(Tables.Booking, Schema = Schema.Default)]
	public class Booking : TrackableEntity
	{
		[Column("booking_id", Order = 1), Key]
		public long Id { get; set; }

		[Column("booking_number")]
		public string Number { get; set; }

		[Column("event_date"), Required]
		public DateTime EventDate { get; set; }

		[Column("event_shift"), Required]
		public EventTime EventTiming { get; set; }

		[Column("event_type_id"), Required]
		public long EventTypeId { get; set; }

		[Column("client_name"), Required]
		public string ClientName { get; set; }

		[Column("client_email")]
		public string ClientEmail { get; set; }

		[Column("client_address")]
		public string ClientAddress { get; set; }

		[Column("client_city")]
		public long ClientCity { get; set; }

		[Column("client_state")]
		public long ClientState { get; set; }

		[Column("client_pincode")]
		public string ClientPinCode { get; set; }

		[Column("client_mobile"), Required]
		public string ClientContact { get; set; }

		[Column("client_identity_type")]
		public int ClientIdentityType { get; set; }

		[Column("client_identity_number")]
		public string ClientIdentityNumber { get; set; }

		[Column("amount")]
		public decimal? BookingAmount { get; set; }

		[Column("advance_amount")]
		public decimal? AdvanceAmount { get; set; }

		[Column("confirmed_by")]
		public Guid ConfirmedBy { get; set; }

		[Column("confirmed_date")]
		public DateTime ConfirmedDate { get; set; }

		[Column("booking_status")]
		public int BookingStatus { get; set; }

		[Column("show_online")]
		[DefaultValue(true)]
		public bool ShowBookingOnline { get; set; }

		[Column("rejection_comment")]
		public string RejectionComment { get; set; }

		[Column("cancellation_amount")]
		public decimal? CancellationAmount { get; set; }

		[Column("cancellation_date")]
		public DateTime? CancellationDate { get; set; }

		//[ForeignKey("EventTypeId")]
		//public virtual EventType EventType { get; set; }

		//[ForeignKey("ClientState")]
		//public virtual State State { get; set; }

		//[ForeignKey("ClientCity")]
		//public virtual City City { get; set; }

		//public virtual ICollection<Event> Events { get; set; }

		//public virtual ICollection<EventService> EventServices { get; set; }

		//public virtual ICollection<Payment> Payments { get; set; }
	}

	public class BookingProfile : Profile
	{
		public BookingProfile()
		{
			//CreateMap<Booking, BookingDto>();
			//CreateMap<BookingDto, Booking>();
		}
	}
}

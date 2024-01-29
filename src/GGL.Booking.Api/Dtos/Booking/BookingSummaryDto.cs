namespace GGL.Booking.Api.Dtos
{
    using System;

    public class BookingSummaryDto
	{
		public long BookingId { get; set; }
		public string BookingNumber { get; set; }
		//event details
		public DateTime EventDate { get; set; }
		public int EventTypeId { get; set; }
		public string EventShift { get; set; }
		public string EventStartTime { get; set; }
		public string EventEndTime { get; set; }
		public int EventTypeName { get; set; }
		
		//client detail
		public string ClientName { get; set; }
		public string ClientEmail { get; set; }
		public string ClientCity { get; set; }
		public string ClientContact { get; set; }
		
		//booking details
		public decimal? BookingAmount { get; set; }
		public decimal? AdvanceAmount { get; set; }
		public decimal? CancellationPenaltyAmount { get; set; }
		public string BookingStatus { get; set; }
		public string RejectionComment { get; set; }
		public int NoOfGuestBudget { get; set; }
		public int NoOfGuestExpected { get; set; }
	}
}

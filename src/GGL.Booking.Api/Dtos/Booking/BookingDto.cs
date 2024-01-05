namespace GGL.Booking.Api.Dtos
{
    using System;
    using GGL.Booking.Api.Enums;

    public class BookingDto
    {
        public long Id { get; set; }
        public string Number { get; set; }
        public DateTime EventDate { get; set; }
        public long EventTypeId { get; set; }
        public string EventTypeName { get; set; }
        public string ClientName { get; set; }
        public string ClientEmail { get; set; }
        public string ClientAddress { get; set; }
        public string ClientCity { get; set; }
        public string ClientCityId { get; set; }
        public string ClientState { get; set; }
        public string ClientStateId { get; set; }
        public string ClientPinCode { get; set; }
        public string ClientContact { get; set; }
        public int ClientIdentityType { get; set; }
        public string ClientIdentityNumber { get; set; }
        public decimal? BookingAmount { get; set; }
        public decimal? AdvanceAmount { get; set; }
        public decimal? CancellationPenaltyAmount { get; set; }
        public Guid ConfirmedBy { get; set; }
        public DateTime ConfirmedDate { get; set; }
        public DateTime? CancellationDate { get; set; }
        public BookingStatus BookingStatus { get; set; }
        public bool ShowBookingOnline { get; set; }
        public string RejectionComment { get; set; }
        public Guid LastModifiedBy { get; set; }
        public DateTime LastModifiedDate { get; set; }

        //public EventDto EventDto { get; set; }
        //public PaymentDto PaymentDto { get; set; }
    }
}

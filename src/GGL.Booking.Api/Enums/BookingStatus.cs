using System.ComponentModel;

namespace GGL.Booking.Api.Enums
{
	public enum BookingStatus
	{
		[Description("Hold")]
		Hold = 1,
		[Description("Pending")]
		Pending,
		[Description("Confirmed")]
		Confirmed,
		[Description("Cancelled")]
		Cancelled
	}
}

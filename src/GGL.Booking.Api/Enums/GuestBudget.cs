using System.ComponentModel;

namespace GGL.Booking.Api.Enums
{
	public enum GuestBudget
	{
		[Description("Below 500 Guest")]
		Below_500 = 1,
		[Description("Between 500 to 750 Guest")]
		Between_500_750,
		[Description("Between 750 to 1000 Guest")]
		Between_750_1000,
		[Description("Between 1000 to 1500 Guest")]
		Between_1000_1500,
		[Description("Between 1500 to 2000 Guest")]
		Between_1500_2000,
		[Description("Between 2000 to 2500 Guest")]
		Between_2000_2500,
		[Description("Between 2500 to 3000 Guest")]
		Between_2500_3000,
		[Description("More 3000 Guest")]
		Above_3000
	}
}

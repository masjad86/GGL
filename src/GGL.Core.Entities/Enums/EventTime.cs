using System.ComponentModel;

namespace GGL.Core.Entities.Enums
{
	public enum EventTime
	{
		[Description ("Morning (7 am - 10 am)")]
		Morning = 1,
		[Description("Afternoon (11 am - 3:30 pm)")]
		Afternoon,
		[Description("Evening (4 pm - 7:30 pm)")]
		Evening,
		[Description("Night (7:30 pm - 11:30 pm)")]
		Night,
		[Description("Full Day (9 am - 6:30 pm)fdcv ")]
		FullDay
	}
}

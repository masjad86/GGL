using System;
using System.Configuration;

namespace GGL.Repository
{
	public class Tables
	{
		public const string Booking = "booking";
		public const string BookingEnquiry = "booking_enquiry";
		public const string Event = "event";
		public const string EventServices = "event_services";
		public const string EventType = "event_type";
		public const string User = "user";
		public const string Services = "services";
		public const string ServiceCategory = "service_category";
		public const string Payment = "payment";
		public const string City = "city";
		public const string State = "state";
	}
	public class Schema
	{
		public const string Default = "dbo";
	}

	public class Defaults
	{
		public const string ConnectionString = "GGLConnectionString";
	}

	public class ConfigKeys
	{
		public static string BookingNumber = "Booking Number";
	}
}

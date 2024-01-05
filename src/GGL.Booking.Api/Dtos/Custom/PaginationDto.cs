namespace GGL.Booking.Api.Dtos
{
	public class PaginationDto
	{
		public int PageSize { get; set; }
		public int PageIndex { get; set; }
		public string DefaultSortColumn { get; set; }
	}
}

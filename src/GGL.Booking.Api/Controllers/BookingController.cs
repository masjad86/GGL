namespace GGL.Booking.Api.Controllers
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/bookings")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        public BookingController() { }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Booking details available.");
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GGL.Booking.Api.Controllers
{
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

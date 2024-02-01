namespace GGL.Booking.Api.Models
{
    public interface IJwtOptions
    {
        string Issuer { get; set; }
        string Audience { get; set; }
        string Secret { get; set; }
    }

    public class JwtOptions : IJwtOptions
    {
        public string Issuer { get; set; } = string.Empty;  
        public string Audience { get; set; } = string.Empty;
        public string Secret { get; set; } = string.Empty;
    }
}

namespace GGL.OAuth.Api.Models
{
    public interface IJwtOptions
    {
        string Issuer { get; set; }
        string Audience { get; set; }
        string Secret { get; set; }
        int TokenExpirationInMinutes { get; set; }
    }

    public class JwtOptions : IJwtOptions
    {
        public string Issuer { get; set; } = string.Empty;  
        public string Audience { get; set; } = string.Empty;
        public string Secret { get; set; } = string.Empty;
        public int TokenExpirationInMinutes { get; set; } = 30;
    }
}

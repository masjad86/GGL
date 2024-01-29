namespace GGL.OAuth.Api.Models
{
    public interface IJwtOptions
    {
        string Issuer { get; set; }
        string Audience { get; set; }
        string SigningKey { get; set; }
        int TokenExpirationInMinutes { get; set; }
    }

    public class JwtOptions : IJwtOptions
    {
        public string Issuer { get; set; }
        public string Audience { get; set; }
        public string SigningKey { get; set; }
        public int TokenExpirationInMinutes { get; set; }
    }
}

namespace GGL.OAuth.Api.Models
{
    public class LoginResponse
    {
        public string Token { get; set; } = string.Empty;
        public DateTime Expiration { get; set; }
        public string Type { get; set; } = "Bearer";
    }
}

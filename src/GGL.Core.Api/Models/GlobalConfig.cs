namespace GGL.Core.Api.Models
{
    public interface IGlobalConfig
    {
        IJwtOptions JwtOptions { get; }
    }
    public class GlobalConfig : IGlobalConfig
    {
        public IJwtOptions JwtOptions { get; set; } = new JwtOptions();
    }
}

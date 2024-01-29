namespace GGL.OAuth.Api.Abstractions
{
    using GGL.OAuth.Api.Models;

    public interface IJsonTokenProvider
    {
        string GenerateToken(User user);
    }
}

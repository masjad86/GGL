namespace GGL.OAuth.Api.Abstractions
{
    using GGL.OAuth.Api.Models;

    public interface IUserRepository
    {
        Task<User> AuthenticateAsync(string username, string password);
    }
}

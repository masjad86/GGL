
namespace GGL.OAuth.Api.Repositories
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Models;

    public class UserRepository : IUserRepository
    {
        public UserRepository() { }

        public async Task<User> AuthenticateAsync(string username, string password) {
            return await Task.FromResult(new User()
            {
                Email = username,
                Name = username,
                Type = Enums.UserType.User,
                Permissions = new UserPermission[0],
                Id  = Guid.NewGuid()
            });
        }
    }
}

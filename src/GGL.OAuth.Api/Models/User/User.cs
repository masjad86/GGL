using GGL.OAuth.Api.Enums;
using GGL.OAuth.Api.Models;

namespace GGL.OAuth.Api.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public UserType Type { get; set; } = UserType.User;
        public UserPermission[] Permissions { get; set; } = new UserPermission[0];

    }
}

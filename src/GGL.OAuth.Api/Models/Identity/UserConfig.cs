using IdentityModel;
using IdentityServer4.Test;
using System.Security.Claims;

namespace GGL.OAuth.Api.Models.Identity
{
    public sealed class UserConfig
    {
        public static List<TestUser> GetTestUsers()
        {
            return new List<TestUser>
        {
            new TestUser
            {
                SubjectId = "56892347",
                Username = "greengardenlawn",
                Password = "ggl@2716",
                Claims = new List<Claim>
                {
                    new Claim(JwtClaimTypes.Email, "greengardenalawn@gmail.com"),
                    new Claim(JwtClaimTypes.Role, "admin"),
                    new Claim(JwtClaimTypes.WebSite, "http://www.greengardenlawn.com")
                }
            }
        };
        }
    }
}

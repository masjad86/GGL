namespace GGL.OAuth.Api.Models.Identity
{
    using IdentityServer4.Models;

    public sealed class ClientConfig
    {
        private ClientConfig() { }

        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>()
            {
                new Client()
                {
                    ClientId="GGL.Web.Client",
                    ClientName = "Green Garden Lawn Website",
                    ClientSecrets = new[]
                    {
                        new Secret("greengardenlawn2716secret".Sha256())
                    },
                    AllowedCorsOrigins = new[]
                    {
                        "http://localhost/ggl"
                    },
                    AllowedScopes = new[]
                    {
                        "openid",
                        "profile",
                        "read",
                        "write",
                        "delete"
                    },
                    AllowedGrantTypes = GrantTypes.ClientCredentials
                },
                new Client()
                {
                    ClientId="GGL.Mobile.Client",
                    ClientName = "Green Garden Lawn App",
                    AllowedScopes = new[]
                    {
                        "openid",
                        "profile",
                        "read",
                        "write",
                        "delete"
                    },
                    AllowedGrantTypes = GrantTypes.ClientCredentials
                }
            };
        }
    }
}

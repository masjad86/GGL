namespace GGL.OAuth.Api.Models.Identity
{
    using IdentityServer4.Models;
    using System.Security.Principal;

    public sealed class ResourceConfig
    {
        private ResourceConfig() { }

        public static IEnumerable<IdentityResource> GetResources()
        {
            return new List<IdentityResource>()
            {
                 new IdentityResources.OpenId(),
                 new IdentityResources.Email(),
                 new IdentityResources.Profile()
            };
        }
    }
}

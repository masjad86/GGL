using IdentityServer4.Models;

namespace GGL.OAuth.Api.Models.Identity
{
    public sealed class ApiResourceConfig
    {
        private ApiResourceConfig() { }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("booking", "Booking API")
                {
                    Scopes = { "booking.read" }
                }
            };
        }
    }
}

namespace GGL.OAuth.Api.Models.Identity
{
    using IdentityServer4.Models;

    public sealed class ApiScopeConfig
    {
        private ApiScopeConfig() { }

        public static IEnumerable<ApiScope> GetApiScopes()
        {
            return new List<ApiScope>
            {
                new ApiScope("read", "Read Operations."),
                new ApiScope("write", "Write Operations.", new List<string> { "user_level" }),
                new ApiScope("delete", "Delete Operations.", new List<string> { "user_level" })
            };
        }
    }
}

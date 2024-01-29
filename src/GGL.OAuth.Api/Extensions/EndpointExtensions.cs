namespace GGL.OAuth.Api.Extensions
{
    using GGL.OAuth.Api.Endpoints;

    public static class EndpointExtensions
    {
        public static void MapEndpoints(this WebApplication app)
        {
            TokenEndpoint.MapTokenEndpoints(app);
            AccountEndpoints.MapAccountEndpoints(app);
        }
    }
}

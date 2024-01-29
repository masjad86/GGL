namespace GGL.OAuth.Api.Endpoints
{
    using GGL.OAuth.Api.Constants;
    using GGL.OAuth.Api.Models;
    using GGL.OAuth.Api.Providers;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Http.HttpResults;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Routing;
    using System.Text.Json;
    using System.Text.Json.Nodes;

    public static class TokenEndpoint
    {
        /// <summary>
        /// Map all the Token related endpoints.
        /// </summary>
        /// <param name="app">The application builder.</param>
        public static void MapTokenEndpoints(this WebApplication app)
        {
            app.MapPost(EndpointConstant.CONNECT_TOKEN_URL,
                    (HttpContext httpContext, 
                        [FromServices] IJwtOptions options) => CreateAccessToken(httpContext, options))
                .AllowAnonymous();
        }

        private async static Task<IResult> CreateAccessToken(HttpContext httpContext, IJwtOptions options)
        {
            var body = string.Empty;
            var requestBody = httpContext.Request.Body;
            using (var stream = new StreamReader(requestBody))
            {
                body = await stream.ReadToEndAsync();
            }

            var request = JsonSerializer.Deserialize<LoginRequest>(body, new JsonSerializerOptions()
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                PropertyNameCaseInsensitive = false
            });
            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                return Results.BadRequest("Username or password is incorret.");
            }

            var user = new User
            {
                Email = "m.asjad@gmail.com",
                Name = "Mohd Asjad",
                Type = Enums.UserType.User,
                Id = Guid.NewGuid(),
                Permissions = new UserPermission[0]
            };

            var tokenProvider = new JsonTokenProvider(options);

            var token = tokenProvider.GenerateToken(user);

            return Results.Ok(token);
        }
    }
}

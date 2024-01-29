namespace GGL.OAuth.Api.Endpoints
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Constants;
    using GGL.OAuth.Api.Enums;
    using GGL.OAuth.Api.Models;
    using GGL.OAuth.Api.Providers;
    using GGL.OAuth.Api.Shared;
    using Microsoft.AspNetCore.Mvc;

    public static class AccountEndpoints
    {
        public static void MapAccountEndpoints(this WebApplication app)
        {
            app.MapPost(EndpointConstant.Account.LOGIN_URL, 
                async (
                [FromBody] LoginRequest loginRequest, 
                [FromServices] IUserRepository userRepository) => await LoginAsync(loginRequest));
        }

        private static async Task<IResult> LoginAsync(LoginRequest loginRequest, IUserRepository userRepository)
        {
            if (loginRequest == null)
            {
                return Results.BadRequest("Login user name and password not provided.");
            }

            var user = userRepository.AuthenticateAsync(loginRequest.Username, loginRequest.Password)
            var tokenProvider = new JsonTokenProvider(GlobalConfig.JwtOptions);
            var token = tokenProvider.GenerateToken();
            

            return Results.Ok<LoginResponse>(new LoginResponse
            {
                Token = token,
                Type = UserType.User,
                Expiration = DateTime.UtcNow,
            })
        }
    }
}

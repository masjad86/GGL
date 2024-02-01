namespace GGL.OAuth.Api.Controllers
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Commands;
    using GGL.OAuth.Api.Models;
    using GGL.OAuth.Api.Repositories;
    using GGL.OAuth.Api.Providers;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Http.HttpResults;
    using GGL.OAuth.Api.Constants;

    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IMediator mediator;
        private readonly IConfiguration configuration;
        private readonly IUserRepository userRepository;
        private readonly IGlobalConfig config;

        public AccountController(IMediator mediator,
            IConfiguration configuration,
            IUserRepository userRepository,
            IGlobalConfig config)
        {
            this.mediator = mediator;
            this.configuration = configuration;
            this.userRepository = userRepository;
            this.config = config;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        {
            if (request == null)
            {
                return BadRequest("Login user name and password not provided.");
            }

            var user = await this.userRepository.AuthenticateAsync(request.Username, request.Password);

            if (user == null)
            {
                return NotFound("User not found. Please check the user name and password.");
            }

            var tokenProvider = new JsonTokenProvider(this.config.JwtOptions);
            var token = tokenProvider.GenerateToken(user);


            return Ok(new LoginResponse
            {
                Token = token,
                Type = EndpointConstant.BEARER_TAG,
                Expiration = DateTime.UtcNow,
            });
        }
    }
}

namespace GGL.OAuth.Api.Controllers
{
    using GGL.OAuth.Api.Commands;
    using GGL.OAuth.Api.Models;
    using GGL.OAuth.Api.Providers;
    using MediatR;
    using Microsoft.AspNetCore.Mvc;

    [Route("api/")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IMediator _mediator;
        private readonly IConfiguration _configuration;

        public AccountController(IMediator mediator,
            IConfiguration configuration)
        {
            this._mediator = mediator;
            this._configuration = configuration;
        }

        //[HttpGet("login")]
        //public Task<IActionResult> LoginAsync([FromBody] LoginRequest request)
        //{
        //    //if (string.IsNullOrEmpty(request.UserName || string.IsNullOrEmpty(request.Password)))
        //    //{
        //    //    return Results.BadRequest("Username or password is incorret.");
        //    //}

        //    //var cancellationToken = new CancellationToken();
        //    //var user = await this._mediator.Send(new LoginCommand(request.Username, request.Password), cancellationToken);

        //    //if (user == null)
        //    //{
        //    //    return Unauthorized();
        //    //}

        //    //var tokenOptions = this._configuration.GetSection("JwtOptions").Get<JwtOptions>();
        //    //var tokenProvider = new JsonTokenProvider(tokenOptions);

        //    //var token = tokenProvider.GenerateToken(user);

        //    return Ok();
        //}
    }
}

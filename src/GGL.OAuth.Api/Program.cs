using GGL.OAuth.Api.Extensions;
using GGL.OAuth.Api.Models;
using GGL.OAuth.Api.Shared;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
//var cookieTimeout = builder.Configuration.GetValue<int>("CookieTimeoutInMinutes");
//var useLoadTest = builder.Configuration.GetValue<bool>("IsLoadTest");

////// Add identity server to the pipeline
////builder.Services.Add()
////    .AddInMemoryClients(ClientConfig.GetClients())
////    .AddInMemoryIdentityResources(ResourceConfig.GetResources())
////    .AddInMemoryApiScopes(ApiScopeConfig.GetApiScopes())
////    .AddDeveloperSigningCredential()
////    .AddTestUsers(UserConfig.GetTestUsers());

//var identitySection = builder.Configuration.GetSection("IdentityServer");
//var identityUrl = identitySection.GetValue<string>("IdentityUrl");
//var callBackUrl = identitySection.GetValue<string>("LogoutCallBackUrl");
//var sessionCookieLifetime = identitySection.GetValue("SessionCookieLifetimeMinutes", 60);

// Add Authentication services
var jwtOptions = builder.Configuration
    .GetSection("JwtOptions")
    .Get<JwtOptions>();

builder.Services.AddSingleton<IJwtOptions>(jwtOptions);

builder.Services.AddAuthentication(options =>
{
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(setup =>
{
    var signingKeyBytes = Encoding.UTF8.GetBytes(jwtOptions.SigningKey);
    var signingKey = new SymmetricSecurityKey(signingKeyBytes);
    setup.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = jwtOptions.Issuer,
        ValidateAudience = true,
        ValidAudience = jwtOptions.Audience,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = signingKey
    };
    //setup.RefreshTokenProtector = new TicketDataFormat(new BearerTokenProtector().CreateProtector("RefreshToken"));
    //setup.BearerTokenProtector = new TicketDataFormat(new BearerTokenProtector().CreateProtector("BearerToken"));
});
//.AddOpenIdConnect(options =>
//{
//    options.SignInScheme = BearerTokenDefaults.AuthenticationScheme;
//    options.Authority = identityUrl.ToString();
//    options.SignedOutRedirectUri = callBackUrl.ToString();
//    options.ClientId = "GGL.Auth.Api";
//    options.ClientSecret = "greengardenlawnauthsecret";
//    options.ResponseType = useLoadTest ? "code id_token token" : "code id_token";
//    options.SaveTokens = true;
//    options.GetClaimsFromUserInfoEndpoint = true;
//    options.RequireHttpsMetadata = false;
//    options.Scope.Add("openid");
//    options.Scope.Add("profile");
//    // microservices 
//    options.Scope.Add("core");
//    options.Scope.Add("bookings");
//    options.Scope.Add("payments");
//    options.Scope.Add("payments.signalrhub");
//    options.Scope.Add("services");
//});

// Configuring the Authorization Service
builder.Services.AddAuthorization();

// Add services to the container.
builder.Services.AddControllers().AddJsonOptions(options =>
{
    // Force Camel Case to JSON
    options.JsonSerializerOptions.PropertyNameCaseInsensitive = false;
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IMediator, Mediator>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.DocumentTitle = "Green Garden Lawn OAuth Api";
    });
}

app.UseAuthentication();
app.UseAuthorization();
app.MapEndpoints();
app.Run();

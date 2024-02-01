using GGL.OAuth.Api.Models;
using GGL.OAuth.Api.Shared;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

// Add Authentication services
var config = builder.Configuration.GetSection("GlobalConfig").Get<GlobalConfig>();

// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(options =>
{
    // Force Camel Case to JSON
    options.JsonSerializerOptions.PropertyNameCaseInsensitive = false;
    options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(setup =>
{
    setup.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = config.JwtOptions.Issuer,
        ValidAudience = config.JwtOptions.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config.JwtOptions.Secret))
    };
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

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCustomDependencies(config);

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
app.MapControllers();
app.Run();

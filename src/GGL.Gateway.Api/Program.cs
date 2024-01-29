using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.BearerToken;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Configuration.AddJsonFile("ocelot.json");

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddOcelot(builder.Configuration);
//builder.Services.AddAuthentication(options =>
//    {
//        options.DefaultAuthenticateScheme = BearerTokenDefaults.AuthenticationScheme;
//    })
//    .AddBearerToken(options =>
//    {
//        options.BearerTokenProtector = new TicketDataFormat(),
//        options.RefreshTokenProtector = new TicketDataFormat()
//    });

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseOcelot();
app.UseAuthorization();
app.MapControllers();
app.Run();

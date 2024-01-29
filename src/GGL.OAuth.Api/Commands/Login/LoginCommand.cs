namespace GGL.OAuth.Api.Commands
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Models;

    public record LoginCommand(string Username, string Password) : ICommand<User>
    {
    }
}

namespace GGL.OAuth.Api.Handlers
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Commands;
    using GGL.OAuth.Api.Models;
    using MediatR;
    using System.Threading.Tasks;

    public class LoginCommandHandler : AbstractCommandHandler<LoginCommand, User>
    {
        private readonly IUserRepository _userRepository;
        
        public LoginCommandHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public override async Task<User> HandleCommandAsync(LoginCommand command)
        {
            var user = await _userRepository.AuthenticateAsync(command.Username, command.Password);

            if (user == null)
            {
                throw new UnauthorizedAccessException();
            }

            return user;
        }
    }
}

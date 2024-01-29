namespace GGL.OAuth.Api.Handlers
{
    using GGL.OAuth.Api.Abstractions;
    using MediatR;

    public abstract class AbstractCommandHandler<TCommand, TResponse> : ICommandHandler<TCommand, TResponse>
        where TCommand : ICommand<TResponse>
        where TResponse : class, new()
    {
        public virtual Task<bool> ValidateAsync(TCommand command)
        {
            return Task.FromResult(true);
        }

        /// <summary>
        /// Handle the command which needs to be executed by the handler.
        /// </summary>
        /// <param name="command">The command to be executed.</param>
        /// <returns>Returns the expected response otherwise throw an exception.</returns>
        public abstract Task<TResponse> HandleCommandAsync(TCommand command);

        public async Task<TResponse> Handle(TCommand command, CancellationToken token)
        {
            if (command == null)
            {
                throw new ArgumentNullException();
            }

            var isValid = await this.ValidateAsync(command);
            if (!isValid)
            {
                throw new InvalidOperationException();
            }

            var result = await this.HandleCommandAsync(command);

            return result;
        }
    }
}

namespace GGL.OAuth.Api.Abstractions
{
    using MediatR;

    public interface ICommandHandler<TCommand, TResponse> : IRequestHandler<TCommand, TResponse>
        where TCommand : ICommand<TResponse>
        where TResponse: class, new()
    {
    }
}

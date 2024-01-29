using MediatR;

namespace GGL.OAuth.Api.Abstractions
{
    public interface ICommand : IRequest
    {
    }

    public interface ICommand<TResponse> : IRequest<TResponse>
        where TResponse : class, new()
    {

    }
}

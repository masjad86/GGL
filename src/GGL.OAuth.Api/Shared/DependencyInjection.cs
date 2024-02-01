namespace GGL.OAuth.Api.Shared
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Models;
    using GGL.OAuth.Api.Repositories;
    using MediatR;

    public static class DependencyInjectionExtensions
    {
        public static void AddCustomDependencies(this IServiceCollection services, GlobalConfig config)
        {
            services.AddSingleton<IGlobalConfig>(config);
            services.AddScoped<IMediator, Mediator>();
            services.AddTransient<IUserRepository, UserRepository>();
        }
    }
}

using Autofac;
using AutoMapper;
using System.Collections.Generic;
using Module = Autofac.Module;

namespace GGL.Repository
{
	public class RepositoryModule : Module
	{
		protected override void Load(ContainerBuilder builder)
		{
			builder.RegisterType<GGLContext>()
				.As<GGLContext>()
				.InstancePerLifetimeScope();

			builder.RegisterAssemblyTypes(ThisAssembly).AssignableTo(typeof(Profile)).As<Profile>();
			builder.RegisterAssemblyTypes(ThisAssembly).Where(x => x.Name.EndsWith("Repository"))
				.AsImplementedInterfaces();
		}
	}
}

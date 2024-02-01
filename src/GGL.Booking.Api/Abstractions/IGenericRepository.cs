namespace GGL.Booking.Api.Abstractions
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetAllQuery(bool asNoTracking = true);
        Task<List<TEntity>> GetAllAsync();
        Task<TEntity> GetByIdAsync<TType>(TType id);
        Task<TEntity> CreateAsync(TEntity entity);
        Task<TEntity> UpdateAsync<TType>(TType id, TEntity entity);
        Task<bool> DeleteAsync(object id);
    }
}

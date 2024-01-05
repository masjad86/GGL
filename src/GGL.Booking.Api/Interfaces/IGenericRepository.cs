namespace GGL.Booking.Api.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public interface IGenericRepository<TEntity> where TEntity : class
    {
        IQueryable<TEntity> GetAllQuery(bool asNoTracking = true);
        Task<List<TEntity>> GetAllAsync();
        Task<TEntity> GetByIdAsync(object id);
        Task<TEntity> CreateAsync(TEntity entity);
        Task<TEntity> UpdateAsync(object id, TEntity entity);
        Task<bool> DeleteAsync(object id);
    }
}

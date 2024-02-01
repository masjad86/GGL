namespace GGL.Booking.Api.Repositories
{
    using GGL.Booking.Api;
    using GGL.Booking.Api.Abstractions;
    using Microsoft.EntityFrameworkCore;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Linq.Expressions;
    using System.Threading.Tasks;

    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
    {
        private readonly GGLContext _dbContext;
        private readonly DbSet<TEntity> _entities;
        public GenericRepository(GGLContext dbContext)
        {
            _dbContext = dbContext;
            _entities = _dbContext.Set<TEntity>();
        }

        public IQueryable<TEntity> GetAllQuery(bool asNoTracking = true)
        {
            if (asNoTracking)
            {
                return _entities.AsQueryable().AsNoTracking();
            }
            return _entities.AsQueryable();
        }

        public async Task<List<TEntity>> GetAllAsync()
        {
            return await _entities.ToListAsync();
        }

        public async Task<TEntity> GetByIdAsync<TType>(TType id)
        {
            return await _entities.FindAsync(id);
        }

        public async Task<TEntity> CreateAsync(TEntity entity)
        {
            UpdateBaseEntityFieldsAsync(null, entity, isCreated: true);
            var currentEntity = _entities.Add(entity);
            await _dbContext.SaveChangesAsync();
            return currentEntity?.Entity;
        }

        public async Task<bool> DeleteAsync(object id)
        {
            var entity = await _entities.FindAsync(id);
            _entities.Remove(entity);
            await _dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<TEntity> UpdateAsync<TType>(TType id, TEntity entity)
        {
            var existing = GetByIdQuery(id)
                .AsNoTracking()
                .FirstOrDefault();
            var updateEntity = _entities.Attach(entity).Entity;
            
            UpdateBaseEntityFieldsAsync(existing, updateEntity);
            
            _dbContext.Entry(updateEntity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return entity;
        }

        private void UpdateBaseEntityFieldsAsync(TEntity existing, TEntity entity, bool isCreated = false)
        {
            var userId = Guid.NewGuid();
            if (isCreated)
            {
                var createdUserId = entity.GetType().GetProperty("CreatedUserId");
                var createdDate = entity.GetType().GetProperty("CreatedDate");
                if (createdUserId != null) createdUserId.SetValue(entity, userId);
                if (createdDate != null) createdDate.SetValue(entity, DateTime.Now);
            }
            else
            {
                var id = typeof(TEntity).GetProperty("Id")?.GetValue(existing);
                typeof(TEntity).GetProperty("Id")?.SetValue(entity, id);
                var createdUserId = typeof(TEntity).GetProperty("CreatedUserId")?.GetValue(existing);
                typeof(TEntity).GetProperty("CreatedUserId")?.SetValue(entity, createdUserId);

                var createdDate = typeof(TEntity).GetProperty("CreatedDate")?.GetValue(existing);
                typeof(TEntity).GetProperty("CreatedDate")?.SetValue(entity, createdDate);
            }

            var modifiedUserId = entity.GetType().GetProperty("LastModifiedUserId");
            var modifiedDate = entity.GetType().GetProperty("LastModifiedDate");
            modifiedUserId?.SetValue(entity, userId);
            modifiedDate?.SetValue(entity, DateTime.Now);
        }

        private IQueryable<TEntity> GetByIdQuery(object id)
        {
            var param = Expression.Parameter(typeof(TEntity));
            var idProperty = typeof(TEntity).GetProperty("Id");
            var idExpression = Expression.Equal(Expression.Property(param, idProperty ?? throw new InvalidOperationException()), Expression.Constant(id));
            var fullExpression = idExpression;
            var lambda = Expression.Lambda<Func<TEntity, bool>>(fullExpression, param);

            return _entities.Where(lambda);
        }
    }
}

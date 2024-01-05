using System.ComponentModel.DataAnnotations.Schema;

namespace GGL.Booking.Api.Models
{
    public interface IEntity
    {
    }

    public class TrackableEntity : IEntity
    {
        [Column("created_user_id")]
        public Guid CreatedUserId { get; set; }

        [Column("created_date")]
        public DateTime CreatedDate { get; set; }

        [Column("last_modified_user_id")]
        public Guid LastModifiedUserId { get; set; }

        [Column("last_modified_date")]
        public DateTime LastModifiedDate { get; set; }
    }
}

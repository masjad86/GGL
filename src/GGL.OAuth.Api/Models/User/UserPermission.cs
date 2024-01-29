namespace GGL.OAuth.Api.Models
{
    public class UserPermission
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public Guid GroupId { get; set; }
    }
}

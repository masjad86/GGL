namespace GGL.OAuth.Api.Providers
{
    using GGL.OAuth.Api.Abstractions;
    using GGL.OAuth.Api.Models;
    using Microsoft.IdentityModel.Tokens;
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;

    public class JsonTokenProvider : IJsonTokenProvider
    {
        private readonly IJwtOptions options;

        public JsonTokenProvider(IJwtOptions options)
        {
            this.options = options;
        }

        /// <summary>
        /// Generate token for given user details.
        /// </summary>
        /// <param name="user">The user information.</param>
        /// <returns>Returns the JWT token for the user.</returns>
        public string GenerateToken(User user)
        {
            var claimsIdentity = new ClaimsIdentity(new Claim[]
            {
                 new Claim(ClaimTypes.Name, user.Name),
            });
            
            var roleClaims = user.Permissions.Select(x => new Claim("role", x.Id.ToString()));
            claimsIdentity.AddClaims(roleClaims);

            var keyBytes = Encoding.UTF8.GetBytes(this.options.Secret);
            var symmetricKey = new SymmetricSecurityKey(keyBytes);

            var signingCredentials = new SigningCredentials(
                symmetricKey,
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: this.options.Issuer,
                audience: this.options.Audience,
                claims: claimsIdentity.Claims,
                expires: DateTime.Now.AddMinutes(this.options.TokenExpirationInMinutes),
                signingCredentials: signingCredentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

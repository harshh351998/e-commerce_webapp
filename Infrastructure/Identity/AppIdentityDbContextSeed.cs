using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName="Harsh",
                    Email="patelharshh.hp@gmail.com",
                    UserName="harsh351998",
                    Address = new Address 
                    {
                        FirstName="Harsh",
                        LastName="Mendapara",
                        Street="Tembhode Road",
                        City="Palghar",
                        State="Maharashtra",
                        ZipCode="401404"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");

            }
        }
    }
}
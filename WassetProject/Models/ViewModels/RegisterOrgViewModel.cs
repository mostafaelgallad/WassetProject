using WassetPortal_DAL.Models;

namespace WassetPortal.Models.ViewModels
{
    public class RegisterOrgViewModel
    {
        public UserViewModel UserViewModel { get; set; }
        public Organization Organization { get; set; }
    }
}
using System.Collections.Generic;
using WassetPortal_DAL.Models;
using Actions = WassetPortal_DAL.Models.Action;

namespace WassetPortal.Models.ViewModels
{
    public class UserViewModel
    {
        public User User { get; set; }
        public List<ActionsVM> Actions { get; set; }
        public List<RolesVM> Roles { get; set; }
        public List<UserActionVM> UserActions { get; set; }
        public List<UserRoleVM> User_Roles { get; set; }
    }
}
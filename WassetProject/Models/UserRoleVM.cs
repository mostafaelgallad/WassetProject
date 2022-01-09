namespace WassetPortal.Models
{
    public class UserRoleVM
    {
        public long UserRoleID { get; set; }
        public long? FK_UserID { get; set; }
        public int? FK_RoleID { get; set; }
        public bool? UserRoleStatus { get; set; }
    }
}
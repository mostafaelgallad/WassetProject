namespace WassetPortal.Models
{
    public class UserActionVM
    {
        public long UserActionID { get; set; }
        public long? FK_UserID { get; set; }
        public int? FK_ActionID { get; set; }
        public bool? UserActionStatus { get; set; }
    }
}
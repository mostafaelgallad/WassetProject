using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using WassetPortal_DAL.Models;
using Actions = WassetPortal_DAL.Models.Action;
namespace WassetPortal_DAL.Repositories
{
    public class UserRepository
    {
        private readonly WassetPortalDBEntities _DBContext;

        public UserRepository()
        {
            _DBContext = new WassetPortalDBEntities();
        }

        #region Create Methods
        public User CreateUser(User user)
        {
            try
            {
                var createdUser = _DBContext.Users.Add(user);
                _DBContext.SaveChanges();
                return createdUser;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Organization CreateOrganization(Organization organization)
        {
            try
            {
                var createdOrg = _DBContext.Organizations.Add(organization);
                _DBContext.SaveChanges();
                return createdOrg;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Role CreateRole(Role role)
        {
            try
            {
                var createdRole = _DBContext.Roles.Add(role);
                _DBContext.SaveChanges();
                return createdRole;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Actions CreateAction(Actions action)
        {
            try
            {
                var createdAction = _DBContext.Actions.Add(action);
                _DBContext.SaveChanges();
                return createdAction;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion

        #region Insert many to many Methods
        public bool InsertUserAction(List<UserAction> userActions)
        {
            try
            {
                foreach (var userAction in userActions)
                {
                    _DBContext.UserActions.Add(userAction);
                }
                _DBContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool InsertUserRole(List<User_Role> user_Roles)
        {
            try
            {
                foreach (var user_Role in user_Roles)
                {
                    _DBContext.User_Role.Add(user_Role);
                }
                _DBContext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion

        #region Get Methods
        public User GetUserByID(long userID)
        {
            try
            {
                var user = _DBContext.Users.FirstOrDefault(u => u.UserID == userID && u.UserStatus == true);
                return user;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<User> GetUsersList(int orgID)
        {
            try
            {
                var user = _DBContext.Users.Where(u => u.FK_OrgID == orgID)?.ToList();
                return user;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<Actions> GetActionsList()
        {
            try
            {
                return _DBContext.Actions.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<Role> GetRolesList()
        {
            try
            {
                return _DBContext.Roles.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<Organization> GetOrgsList()
        {
            try
            {
                return _DBContext.Organizations.ToList();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Actions GetActionByName(string actionName)
        {
            try
            {
                if (!string.IsNullOrEmpty(actionName))
                    return _DBContext.Actions.FirstOrDefault(a => a.ActionName.ToLower().Trim() == actionName.ToLower().Trim());

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Role GetRoleByName(string roleName)
        {
            try
            {
                if (!string.IsNullOrEmpty(roleName))
                    return _DBContext.Roles.FirstOrDefault(a => a.RoleName.ToLower().Trim() == roleName.ToLower().Trim());

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Organization GetOrgByName(string orgName)
        {
            try
            {
                if (!string.IsNullOrEmpty(orgName))
                    return _DBContext.Organizations.FirstOrDefault(a => a.OrgName.ToLower().Trim() == orgName.ToLower().Trim());

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public User GetUserByName(string userName)
        {
            try
            {
                if (!string.IsNullOrEmpty(userName))
                    return _DBContext.Users.FirstOrDefault(u => u.UserName.ToLower().Trim() == userName.ToLower().Trim());

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Organization GetOrgByID(int? orgID)
        {
            try
            {
                if (orgID != null)
                    return _DBContext.Organizations.FirstOrDefault(a => a.OrgID == orgID);

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<UserAction> GetUserAction(long? userID)
        {
            try
            {
                if (userID != null)
                    return _DBContext.UserActions.Where(a => a.FK_UserID == userID).ToList();

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public List<User_Role> GetUserRoles(long? userID)
        {
            try
            {
                if (userID != null)
                    return _DBContext.User_Role.Where(a => a.FK_UserID == userID).ToList();

                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion

        #region Update Methods
        public User UpdateUser(User user)
        {
            try
            {
                if (user != null)
                {
                    _DBContext.Entry(user).State = System.Data.Entity.EntityState.Modified;
                    _DBContext.SaveChanges();
                    var returnedUser = _DBContext.Users.FirstOrDefault(u => u.UserID == user.UserID);
                    if (returnedUser != null)
                    {
                        return returnedUser;
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Role UpdateRole(Role role)
        {
            try
            {
                if (role != null)
                {
                    _DBContext.Entry(role).State = System.Data.Entity.EntityState.Modified;
                    _DBContext.SaveChanges();
                    var returnedRole = _DBContext.Roles.FirstOrDefault(r => r.RoleID == role.RoleID);
                    if (returnedRole != null)
                    {
                        return returnedRole;
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Actions UpdateAction(Actions action)
        {
            try
            {
                if (action != null)
                {
                    _DBContext.Entry(action).State = System.Data.Entity.EntityState.Modified;
                    _DBContext.SaveChanges();
                    var returnedAction = _DBContext.Actions.FirstOrDefault(a => a.ActionID == action.ActionID);
                    if (returnedAction != null)
                    {
                        return returnedAction;
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public Organization UpdateOrg(Organization organization)
        {
            try
            {
                if (organization != null)
                {
                    _DBContext.Entry(organization).State = System.Data.Entity.EntityState.Modified;
                    _DBContext.SaveChanges();
                    var returnedOrg = _DBContext.Organizations.FirstOrDefault(o => o.OrgID == organization.OrgID);
                    if (returnedOrg != null)
                    {
                        return returnedOrg;
                    }
                }
                return null;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool UpdateUserRole(List<User_Role> user_Roles)
        {
            try
            {
                if (user_Roles != null && user_Roles.Count > 0)
                {
                    foreach (var userRole in user_Roles)
                    {
                        var returnedUserAction = _DBContext.User_Role.FirstOrDefault(u => u.FK_UserID == userRole.FK_UserID &&
                                                                                  u.FK_RoleID == userRole.FK_RoleID);
                        if (returnedUserAction != null)
                        {
                            returnedUserAction.UserRoleStatus = userRole.UserRoleStatus;
                        }
                        else
                        {
                            _DBContext.User_Role.Add(userRole);
                        }
                    }
                    _DBContext.SaveChanges();
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool UpdateUserAction(List<UserAction> userActions)
        {
            try
            {
                if (userActions != null && userActions.Count > 0)
                {
                    foreach (var userAction in userActions)
                    {
                        var returnedUserAction = _DBContext.UserActions.FirstOrDefault(u => u.FK_UserID == userAction.FK_UserID &&
                                                                                u.FK_ActionID == userAction.FK_ActionID);
                        if (returnedUserAction != null)
                        {
                            returnedUserAction.UserActionStatus = userAction.UserActionStatus;
                            _DBContext.SaveChanges();
                        }
                        else
                        {
                            _DBContext.UserActions.Add(userAction);
                            _DBContext.SaveChanges();
                        }
                    }
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        #endregion
    }
}

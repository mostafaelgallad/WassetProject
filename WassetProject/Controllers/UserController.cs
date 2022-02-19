using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using WassetPortal.Models;
using WassetPortal.Models.ViewModels;
using WassetPortal_DAL.Models;
using WassetPortal_DAL.Repositories;
using Actions = WassetPortal_DAL.Models.Action;

namespace WassetPortal.Controllers
{
    public class UserController : Controller
    {
        private readonly UserRepository _userRepository;
        public UserController()
        {
            _userRepository = new UserRepository();
        }
        // GET: User
        public ActionResult Index()
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            try
            {
                return View();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            //  }
            //  return RedirectToAction("LogIn", "login", new { area = "" });
        }

        #region Create Methods
        [HttpGet]
        public ActionResult CreateUser()
        {
            // to Do == add check for user permission to create new user
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            try
            {
                UserViewModel model = new UserViewModel();
                //model.User = new User()
                //{
                //    FK_OrgID = orgID
                //};
                model.Actions = MapToActionsVM(_userRepository.GetActionsList()?.Where(a => a.ActionStatus == true).ToList());
                model.Roles = MapToRolesVM(_userRepository.GetRolesList()?.Where(r => r.RoleStatus == true).ToList());
                model.User = new User();
                return View(model);
            }
            catch (Exception)
            {
                return RedirectToAction("Index");
            }
            //}
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult CreateUser(UserViewModel model)
        {
            // to Do == add check for user permission to create new user
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            try
            {
                if (model != null)
                {
                    var createdUser = _userRepository.CreateUser(model.User);
                    if (createdUser != null)
                    {
                        _userRepository.InsertUserAction(MapUserAction(model.UserActions, createdUser.UserID));
                        _userRepository.InsertUserRole(MapUserRole(model.User_Roles, createdUser.UserID));
                        return Json(new
                        {
                            Success = true
                        }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "User not created please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //}
            //// return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpGet]
        public ActionResult CreateAction(string actionName)
        {
            // to Do == add check for user permission to create new action
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            var action = new Actions();
            if (!string.IsNullOrEmpty(actionName))
            {
                ViewBag.IsEditMode = "true";
                action = _userRepository.GetActionByName(actionName);
            }
            //partial view
            return PartialView("PV_CreateAction", action);
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult CreateAction(WassetPortal_DAL.Models.Action model)
        {
            // to Do == add check for user permission to create new action
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            try
            {
                if (model != null)
                {
                    var createdAction = _userRepository.CreateAction(model);
                    if (createdAction != null)
                    {
                        return Json(new
                        {
                            Success = true,
                            user = JsonConvert.SerializeObject(createdAction, Formatting.Indented,
                                                                new JsonSerializerSettings
                                                                {
                                                                    ReferenceLoopHandling = ReferenceLoopHandling.Serialize
                                                                })
                        }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "action not created please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpGet]
        public ActionResult CreateRole(string roleName)
        {
            // to Do == add check for user permission to create new role
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            var role = new Role();
            if (!string.IsNullOrEmpty(roleName))
            {
                ViewBag.IsEditMode = "true";
                role = _userRepository.GetRoleByName(roleName);
            }
            //partial view
            return PartialView("PV_CreateRole", role);
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult CreateRole(Role role)
        {
            // to Do == add check for user permission to create new role
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            try
            {
                if (role != null)
                {
                    var createdRole = _userRepository.CreateRole(role);
                    if (createdRole != null)
                    {
                        return Json(new
                        {
                            Success = true,
                            user = JsonConvert.SerializeObject(createdRole, Formatting.Indented,
                                                                new JsonSerializerSettings
                                                                {
                                                                    ReferenceLoopHandling = ReferenceLoopHandling.Serialize
                                                                })
                        }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "Role not created please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpGet]
        public ActionResult CreateOrg(int? OrgID)
        {
            // to Do == add check for user permission to create new org
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            var org = new Organization();
            if (OrgID != null)
            {
                ViewBag.IsEditMode = "true";
                org = _userRepository.GetOrgByID(OrgID);
            }
            //partial view
            return PartialView("PV_CreateOrg", org);
            //  }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult CreateOrg(Organization organization)
        {
            // to Do == add check for user permission to create new org
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            try
            {
                if (organization != null)
                {
                    var createdOrganization = _userRepository.CreateOrganization(organization);
                    if (createdOrganization != null)
                    {
                        return Json(new { Success = true, user = JsonConvert.SerializeObject(createdOrganization) }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "Organization not created please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }
        #endregion

        #region Registration Method
        [HttpGet]
        public ActionResult RegisterOrg()
        {
            try
            {
                RegisterOrgViewModel model = new RegisterOrgViewModel();
                model.UserViewModel.Actions = MapToActionsVM(_userRepository.GetActionsList()?.Where(a => a.ActionStatus == true).ToList());
                model.UserViewModel.Roles = MapToRolesVM(_userRepository.GetRolesList()?.Where(r => r.RoleStatus == true).ToList());
                return View(model);
            }
            catch (Exception)
            {
                return RedirectToAction("Index");
            }
        }

        [HttpPost]
        public ActionResult RegisterOrg(RegisterOrgViewModel model)
        {
            if (model != null)
            {
                try
                {
                    var org = _userRepository.CreateOrganization(model.Organization);
                    if (org != null)
                    {
                        model.UserViewModel.User.FK_OrgID = org.OrgID;
                        var createdUser = _userRepository.CreateUser(model.UserViewModel.User);
                        _userRepository.InsertUserAction(MapUserAction(model.UserViewModel.UserActions, createdUser.UserID));
                        _userRepository.InsertUserRole(MapUserRole(model.UserViewModel.User_Roles, createdUser.UserID));

                        return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
                    }
                    return Json(new { Success = false, Message = "The Orgnization not Created Please try again" }, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
                }
            }
            return View();
        }
        #endregion

        #region Update Methods
        [HttpGet]
        public ActionResult UpdateUser(long? userID)
        {
            // to Do == add check for user permission to update user
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            if (userID != null)
            {
                try
                {
                    var user = _userRepository.GetUserByID((long)userID);
                    if (user != null)
                    {
                        UserViewModel model = new UserViewModel();
                        model.Actions = MapToActionsVM(_userRepository.GetActionsList()?.Where(a => a.ActionStatus == true).ToList());
                        model.Roles = MapToRolesVM(_userRepository.GetRolesList()?.Where(r => r.RoleStatus == true).ToList());
                        model.UserActions = MapUserActionVM(_userRepository.GetUserAction(userID), (long)userID);
                        model.User_Roles = MapUserRoleVM(_userRepository.GetUserRoles(userID), (long)userID);
                        model.User = user;
                        ViewBag.EditMode = "True";
                        return View("CreateUser", model);
                    }
                }
                catch (Exception)
                {
                    return RedirectToAction("Index");
                }
            }
            return RedirectToAction("Index");
            //  }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult UpdateUser(UserViewModel model)
        {
            // to Do == add check for user permission to udate user
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            try
            {
                if (model != null)
                {
                    var returnedUser = _userRepository.UpdateUser(model.User);
                    if (returnedUser != null)
                    {
                        _userRepository.UpdateUserAction(MapUserAction(model.UserActions, returnedUser.UserID));
                        _userRepository.UpdateUserRole(MapUserRole(model.User_Roles, returnedUser.UserID));
                        return Json(new
                        {
                            Success = true
                        }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "User not updated please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //  }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpGet]
        public ActionResult UpdateOrg(int? organizationID)
        {
            // to Do == add check for user permission to create new user
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            if (organizationID != null)
            {
                var org = _userRepository.GetOrgByID(organizationID);
                if (org != null)
                {
                    return PartialView("", org);
                }
            }
            return RedirectToAction("Index");
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult UpdateOrg(Organization organization)
        {
            // to Do == add check for user permission to update org
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            try
            {
                if (organization != null)
                {
                    var returnedOrg = _userRepository.UpdateOrg(organization);
                    if (returnedOrg != null)
                    {
                        return Json(new
                        {
                            Success = true
                        }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "Organization not updated please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpGet]
        public ActionResult UpdateAction(string actionName)
        {
            // to Do == add check for user permission to upadet action 
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            if (!string.IsNullOrEmpty(actionName))
            {
                var action = _userRepository.GetActionByName(actionName);
                if (action != null)
                {
                    return PartialView("", action);
                }
            }
            return RedirectToAction("Index");
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult UpdateAction(Actions model)
        {
            // to Do == add check for user permission to update action 
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            try
            {
                if (model != null)
                {
                    var returnedAction = _userRepository.UpdateAction(model);
                    if (returnedAction != null)
                    {
                        return Json(new
                        {
                            Success = true
                        }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "Action not updated please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //}
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpGet]
        public ActionResult UpdateRole(string roleName)
        {
            // to Do == add check for user permission to upadet action 
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            if (!string.IsNullOrEmpty(roleName))
            {
                try
                {
                    var role = _userRepository.GetRoleByName(roleName);
                    if (role != null)
                    {
                        return PartialView("", role);
                    }
                }
                catch (Exception)
                {
                    return RedirectToAction("Index");
                }
            }
            return RedirectToAction("Index");
            // }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        [HttpPost]
        public ActionResult UpdateRole(Role role)
        {
            // to Do == add check for user permission to update action 
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            try
            {
                if (role != null)
                {
                    var returnedRole = _userRepository.UpdateRole(role);
                    if (returnedRole != null)
                    {
                        return Json(new { Success = true }, JsonRequestBehavior.AllowGet);
                    }
                }
                return Json(new { Success = false, Message = "Action not updated please try again" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //}
            // return RedirectToAction("login", "login", new { area = "" });
        }
        #endregion

        public ActionResult GetUsersList() 
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            try
            {
                var users = _userRepository.GetUsersList(1);
                return PartialView("PV_UsersList", users);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            //  }
            //  return RedirectToAction("LogIn", "login", new { area = "" });
        }

        public ActionResult GetRolesList()
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            try
            {
                var roles = _userRepository.GetRolesList();
                return PartialView("PV_RolesList", roles);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            // }
            // return RedirectToAction("LogIn", "login", new { area = "" });
        }

        public ActionResult GetActionsList()
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            try
            {
                var actions = _userRepository.GetActionsList();
                return PartialView("PV_ActionsList", actions);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            //  }
            // return RedirectToAction("LogIn", "login", new { area = "" });
        }

        public ActionResult GetOrgsList()
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //  {
            try
            {
                var orgs = _userRepository.GetOrgsList();
                return PartialView("PV_OrgsList", orgs);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            // }
            // return RedirectToAction("LogIn", "login", new { area = "" });
        }

        #region Check if exist methods
        public ActionResult CheckForActionName(string actionName)
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //   {
            try
            {
                if (!string.IsNullOrEmpty(actionName))
                {
                    var action = _userRepository.GetActionByName(actionName);
                    if (action == null)
                        return Json(new { Success = true, Message = "Action Not exist" }, JsonRequestBehavior.AllowGet);

                }
                return Json(new { Success = false, Message = "Action already exist" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //}
            // return RedirectToAction("login", "login", new { area = "" });
        }

        public ActionResult CheckForRoleName(string roleName)
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            //{
            try
            {
                if (!string.IsNullOrEmpty(roleName))
                {
                    var role = _userRepository.GetRoleByName(roleName);
                    if (role == null)
                        return Json(new { Success = true, Message = "Role Not exist" }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { Success = false, Message = "Role already exist" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //  }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        public ActionResult CheckForUserName(string userName)
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            try
            {
                if (!string.IsNullOrEmpty(userName))
                {
                    var user = _userRepository.GetUserByName(userName);
                    if (user == null)
                        return Json(new { Success = true, Message = "User Not exist" }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { Success = false, Message = "User already exist" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //  }
            // return RedirectToAction("login", "login", new { area = "" });
        }

        public ActionResult CheckForOrgName(string orgName)
        {
            // var cookie_orgID = Request.Cookies["orgID"]?.Value;
            // if (!string.IsNullOrEmpty(cookie_orgID) && int.TryParse(cookie_orgID, out int orgID))
            // {
            try
            {
                if (!string.IsNullOrEmpty(orgName))
                {
                    var org = _userRepository.GetOrgByName(orgName);
                    if (org == null)
                        return Json(new { Success = true, Message = "Org Not exist" }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { Success = false, Message = "Org already exist" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { Success = false, ex.Message }, JsonRequestBehavior.AllowGet);
            }
            //  }
            // return RedirectToAction("login", "login", new { area = "" });
        }
        #endregion

        #region Helpers
        private List<UserAction> MapUserAction(List<UserActionVM> userActionVMs, long userID)
        {
            List<UserAction> userActions = new List<UserAction>();
            foreach (var userAction in userActionVMs)
            {
                UserAction tempUserAction = new UserAction()
                {
                    FK_ActionID = userAction.FK_ActionID,
                    FK_UserID = userID,
                    UserActionStatus = userAction.UserActionStatus
                };
                userActions.Add(tempUserAction);
            }
            return userActions;
        }

        private List<User_Role> MapUserRole(List<UserRoleVM> userRoleVMs, long userID)
        {
            List<User_Role> userActions = new List<User_Role>();
            foreach (var userRole in userRoleVMs)
            {
                User_Role tempUserRole = new User_Role()
                {
                    FK_RoleID = userRole.FK_RoleID,
                    FK_UserID = userID,
                    UserRoleStatus = userRole.UserRoleStatus
                };
                userActions.Add(tempUserRole);
            }
            return userActions;
        }

        private List<UserActionVM> MapUserActionVM(List<UserAction> userActions, long userID)
        {
            List<UserActionVM> userActionsVM = new List<UserActionVM>();
            foreach (var userAction in userActions)
            {
                UserActionVM tempUserAction = new UserActionVM()
                {
                    FK_ActionID = userAction.FK_ActionID,
                    FK_UserID = userID,
                    UserActionStatus = userAction.UserActionStatus
                };
                userActionsVM.Add(tempUserAction);
            }
            return userActionsVM;
        }

        private List<UserRoleVM> MapUserRoleVM(List<User_Role> userRoles, long userID)
        {
            List<UserRoleVM> userRolesVM = new List<UserRoleVM>();
            foreach (var userRole in userRoles)
            {
                UserRoleVM tempUserRole = new UserRoleVM()
                {
                    FK_RoleID = userRole.FK_RoleID,
                    FK_UserID = userID,
                    UserRoleStatus = userRole.UserRoleStatus
                };
                userRolesVM.Add(tempUserRole);
            }
            return userRolesVM;
        }

        private List<Role> MapToRoles(List<RolesVM> roleVMs)
        {
            List<Role> roles = new List<Role>();
            foreach (var role in roleVMs)
            {
                Role tempRole = new Role()
                {
                    RoleID = role.RoleID,
                    RoleName = role.RoleName,
                    RoleStatus = role.RoleStatus
                };
                roles.Add(tempRole);
            }
            return roles;
        }

        private List<Actions> MapToActions(List<ActionsVM> actionsVMs)
        {
            List<Actions> actions = new List<Actions>();
            foreach (var action in actionsVMs)
            {
                Actions tempAction = new Actions()
                {
                    ActionID = action.ActionID,
                    ActionName = action.ActionName,
                    ActionStatus = action.ActionStatus
                };
                actions.Add(tempAction);
            }
            return actions;
        }

        private List<RolesVM> MapToRolesVM(List<Role> roles)
        {
            List<RolesVM> rolesVm = new List<RolesVM>();
            foreach (var role in roles)
            {
                RolesVM tempRole = new RolesVM()
                {
                    RoleID = role.RoleID,
                    RoleName = role.RoleName,
                    RoleStatus = role.RoleStatus
                };
                rolesVm.Add(tempRole);
            }
            return rolesVm;
        }

        private List<ActionsVM> MapToActionsVM(List<Actions> actions)
        {
            List<ActionsVM> actionsVM = new List<ActionsVM>();
            foreach (var action in actions)
            {
                ActionsVM tempAction = new ActionsVM()
                {
                    ActionID = action.ActionID,
                    ActionName = action.ActionName,
                    ActionStatus = action.ActionStatus,
                    Description = action.Description
                };
                actionsVM.Add(tempAction);
            }
            return actionsVM;
        }
        #endregion
    }
}
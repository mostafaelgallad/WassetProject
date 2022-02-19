"user strict"

let _UserIndexHandler = function () {

    let _GetUsersList = function () {
        $.ajax({
            url: "/user/GetUsersList",
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
            },
            error: function (e) {
                console.log(e)
            }
        })
    }

    let _GetRolesList = function () {
        $.ajax({
            url: "/user/GetRolesList",
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
            },
            error: function (e) {
                console.log(e)
            }
        })
    }

    let _GetActionsList = function () {
        $.ajax({
            url: "/user/GetActionsList",
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
            },
            error: function (e) {
                console.log(e)
            }
        })
    }

    let _GetOrgsList = function () {
        $.ajax({
            url: "/user/GetOrgsList",
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
            },
            error: function (e) {
                console.log(e)
            }
        })
    }

    let _CreateOrg = function (orgID = "") {
        $.ajax({
            url: "/user/CreateOrg?OrgID=" + orgID,
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
                $('form[id="OrgForm"]').validate(orgFormValidation)
            },
            error: function (e) {
                console.log(e)
            }
        })

        let orgFormValidation = {
            rules: {
                OrgName: 'required',
                OrgAddress: 'required',
            },
            messages: {
                OrgName: 'This field is required',
                OrgAddress: 'This field is required',
            },
            submitHandler: function (form) {
                let url = '/user/CreateOrg'
                if ($("#EditMode").val() === 'true')
                    url = '/user/updateOrg'
                $.ajax({
                    url: url,
                    type: "post",
                    data: $("#OrgForm").serialize(),
                    success: function (res) {
                        _GetOrgsList()
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            }
        }
    }

    let _CreateAction = function (actionName = "") {
        $.ajax({
            url: "/user/CreateAction?actionName=" + actionName,
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
                $('form[id="ActionForm"]').validate(actionFormValidation)
            },
            error: function (e) {
                console.log(e)
            }
        })

        let actionFormValidation = {
            rules: {
                ActionName: 'required',
            },
            messages: {
                ActionName: 'This field is required',
            },
            submitHandler: function (form) {
                let url = '/user/CreateAction'
                if ($("#EditMode").val() === 'true')
                    url = 'user/updateAction'
                $.ajax({
                    url: url,
                    type: "post",
                    data: $("#ActionForm").serialize(),
                    success: function (res) {
                        _GetActionsList()
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            }
        }
    }

    let _CreateRole = function (roleName = "") {
        $.ajax({
            url: "/user/CreateRole?roleName=" + roleName,
            type: "get",
            contentType: "html",
            success: function (res) {
                $("#Review-Section").html("")
                $("#Review-Section").html(res)
                $('form[id="RoleForm"]').validate(roleFormValidation)
            },
            error: function (e) {
                console.log(e)
            }
        })

        let roleFormValidation = {
            rules: {
                RoleName: 'required',
            },
            messages: {
                RoleName: 'This field is required',
            },
            submitHandler: function (form) {
                let url = '/user/CreateRole'
                if ($("#EditMode").val() === 'true')
                    url = '/user/updateRole'
                $.ajax({
                    url: url,
                    type: "post",
                    data: $("#RoleForm").serialize(),
                    success: function (res) {
                        _GetRolesList()
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            }
        }
    }

    return {
        init: function () {
            _GetUsersList();
        },
        GetOrgsList: function () {
            _GetOrgsList();
        },
        GetUsersList: function () {
            _GetUsersList();
        },
        GetRolesList: function () {
            _GetRolesList();
        },
        GetActionsList: function () {
            _GetActionsList();
        },
        CreateOrg: function (orgID) {
            _CreateOrg(orgID);
        },
        CreateAction: function (actionName) {
            _CreateAction(actionName);
        },
        CreateRole: function (roleName) {
            _CreateRole(roleName);
        },
    }
}()

$(document).ready(function () {
    _UserIndexHandler.init();
})
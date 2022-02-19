"user strict"

let _UserHandler = function () {

    let validateOptions = {
        rules: {
            Address: 'required',
            UserCode: 'required',
            Email: {
                required: true,
                email: true,
            },
            UserName: {
                required: true,
                minlength: 3,
            },
            Mobile: 'required',
            Password: {
                required: true,
                minlength: 3,
            }
        },
        messages: {
            Address: 'This field is required',
            UserCode: 'This field is required',
            Mobile: 'This field is required',
            Email: 'Enter a valid email',
            Password: {
                minlength: 'Password must be at least 8 characters long'
            },
            UserName: {
                minlength: 'User Name must be at least 8 characters long'
            }
        },
        submitHandler: function (form) {
            //console.log(form, form.valid())
            _SubmitForm()
        }
    }

    let _Roles = JSON.parse($("#roleList").html());
    let _Actions = JSON.parse($("#actionList").html());
    let _UserRoles = JSON.parse($("#UserRole-Edit").html())
    let _UserActions = JSON.parse($("#UserAction-Edit").html())

    let _SubmitForm = function () {
        console.log(new _UserModel())
        let url = "/user/CreateUser"
        if ($("#EditMode").val() === 'True')
            url = '/user/updateUser';
        try {
            $.ajax({
                url: url,
                type: "post",
                data: { model: new _UserModel() },
                success: function (res) {
                    if (res.Success) {
                        let message = $("#EditMode").val() === 'True' ? "User Updated" : "User Created";
                        alert(message)
                        window.location.href = "/user/index"
                    } else {
                        alert(res.Message)
                    }
                },
                error: function (e) {
                    console.log(e)
                }
            })
        } catch (e) {
            console.log(e)
        }

    }

    let _PageEvents = function () {
        $("#role").on('change', function () {
            if (_UserRoles === null)
                _UserRoles = []
            let role = _Roles.filter(r => r.RoleID == $("#role").val())[0]
            let roleIndex = _UserRoles.findIndex(r => r.FK_RoleID === role.RoleID)
            if (Number.parseInt(roleIndex) === -1) {
                $("#UserRole").append(`<p id='${role.RoleID}'>${role.RoleName}</p>`)
                _UserRoles.push({
                    FK_RoleID: role.RoleID,
                    UserRoleStatus: true
                });
            }
            $("#role").val("")
        })

        $("#action").on('change', function () {
            if (_UserActions === null)
                _UserActions = []
            let action = _Actions.filter(r => r.ActionID == $("#action").val())[0]
            let actionIndex = _UserActions.findIndex(a => a.FK_ActionID === action.ActionID)
            if (Number.parseInt(actionIndex) === -1) {
                _UserActions.push({
                    FK_ActionID: action.ActionID,
                    UserActionStatus: true
                });
                $("#UserAction").append(`<p id='${action.ActionID}'>${action.ActionName}</p> <spna>${action.Description}</span>`)
            }
            $("#action").val("")
        })

        $("#UserName").on('blur', function () {
            let userName = $("#UserName").val()
            if (typeof userName !== 'undefined' && userName.trim() !== '') {
                $.ajax({
                    url: "/user/CheckForUserName",
                    type: "get",
                    data: { userName: userName.trim() },
                    success: function (res) {
                        if (!res.Success) {
                            alert(res.Message)
                            $("#UserName").val("")
                        }
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            }
        })
    }

    let _UserModel = function () {
        return {
            User: {
                UserName: $("#UserName").val(),
                UserCode: $("#UserCode").val(),
                Mobile: $("#Mobile").val(),
                Email: $("#Email").val(),
                Address: $("#Address").val(),
                UserStatus: true,
                FK_OrgID: $("#FK_OrgID").val(),
                Password: $("#Password").val(),
                UserID: $("#UserID").val(),
            },
            User_Roles: _UserRoles,
            UserActions: _UserActions
        }
    }

    let _BindUserAuth = function () {
        if (_UserActions !== null && _UserActions.length > 0) {
            let actions = _Actions.filter(r => _UserActions.findIndex(a => a.FK_ActionID === r.ActionID) !== -1)
            actions.map(a => {
                $("#UserAction").append(`<p id='${a.ActionID}'>${a.ActionName}</p> <spna>${a.Description}</span>`)
            })
        }

        if (_UserRoles !== null && _UserRoles.length > 0) {
            let roles = _Roles.filter(u => _UserRoles.findIndex(r => r.FK_RoleID === u.RoleID) !== -1)
            roles.map(a => {
                $("#UserRole").append(`<p id='${a.RoleID}'>${a.RoleName}</p>`)
            })
        }
    }

    return {
        init: function () {
            let actionOptions = ""
            //_Actions?.map(item => {
            //    actionOptions += `<option value="${item.actionID}">${item.actionName}</option>`
            //})
            //$("#action").html(actionOptions)
            //let roleOptions = ""
            //_Roles?.map(item => {
            //    roleOptions += `<option value="${item.roleID}">${item.roleName}</option>`
            //})
            //$("#action").html(roleOptions)
            $('form[id="userForm"]').validate(validateOptions)
            _PageEvents();
            _BindUserAuth();
        }
    }
}()

$(document).ready(function () {
    _UserHandler.init();
})
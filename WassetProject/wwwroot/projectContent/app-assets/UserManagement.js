toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

var userObject = {
    "Name": "",
    "UserName": "",
    "Mobile": "",
    "Email": "",
    "UserId": "",
    "Roles": ""
};

function PrepareUserObject() {
    userObject.Name = $('#inpt_name').val();
    userObject.Email = $('#inpt_email').val();
    userObject.Mobile = $('#inpt_phone').val();
    userObject.UserName = $('#inpt_userName').val();
    var s = $('#inpt_roles').val();
    //debugger;
    for (var i = 0; i < s.length; i++) {
        if (userObject.Roles != "") {
            userObject.Roles += "," + s[i].trim();
        }
        else {
            userObject.Roles += s[i].trim();
        }
    }

}

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}

function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}

function SubmitUser() {
    var profileType = $("#inpt_profileType").val();
    var profileID = $("#inpt_profileID").val();
    PrepareUserObject();
    Swal.fire({
        title: 'You are about to save the user data, Are you sure ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Save`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Saving User Data',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Preparing the user data'
                        }
                    }
                    $.ajax({
                        url: '/Users/AddOrUpdateUser',
                        data: { 'user': userObject, "profileType": profileType, "profileID": profileID },
                        type: "Post",
                        success: function (data) {
                            if (data.succeded == "exist") {
                                $('#UserModal').modal('hide');
                                Swal.fire('This email already registered before', '', 'error');
                                toastr["error"]("This email already registered before");
                                return;
                            }
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Users/UpdateUserList',
                                data: { "_profileType": profileType, "_profileID": profileID },
                                type: "Get",
                                success: function (data) {
                                    $('#UserListDiv').html(data);
                                    Swal.fire('New user added successfully', '', 'success');
                                    $('#UserModal').modal('hide');
                                    toastr["success"]("New user added successfully");
                                },
                                error: function () {
                                    toastr["error"]("Error occurred while adding the new user")
                                },
                                complete: function () {
                                }
                            });
                        },
                        error: function () {
                            toastr["error"]("Error occurred while adding the new user")
                        }
                    });
                },
                willClose: () => {
                    swal.stopLoading();
                }
            })
        }
    });
}

function ShowModalOfUser(userID) {
    ResetUserInputs();
    userObject.UserId = userID;
    Swal.fire({
        title: 'Preparing User Form',
        html: 'Process <b></b> ....',
        confirmButtonText: 'Managing Users',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                    b.textContent = 'User Information'
                }
            }
        },
        willClose: () => {
        }
    }).then((result) => {
        $('#modalTitle').html("New User");
        $('#UserModal').modal('show');
        ValidateInputs();
    });
}

function ResetUserInputs() {
    $('#inpt_name').val("");
    $('#inpt_email').val("");
    $('#inpt_phone').val("");
    $('#inpt_userName').val("");
    $("#inpt_roles").val("");
    $(".select2-selection__choice").remove();
}

function ResetPassword(Email, mobile) {
    Swal.fire({
        title: 'Do you want to reset the password for this user ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Reset Password`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Change The user Password',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    $.ajax({
                        url: '/Users/ResetPassword',
                        data: { 'loginID': Email, 'mobile': mobile },
                        type: "Post",
                        success: function (data) {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = 'Changing the user Password';
                                }
                            }
                            var millisecondsToWait = 2000;
                            setTimeout(function () {
                                toastr["success"]("The password has been reset successfully");
                                Swal.close();
                                Swal.fire('The password has been reset successfully', '', 'success');
                            }, millisecondsToWait);
                        },
                        error: function () {
                            toastr["error"]("Error occurred while resetting the user password");
                            Swal.close();
                            Swal.fire('Error occurred while resetting the user password', '', 'error');
                        }

                    });
                },
                willClose: () => {
                }
            })
        }
    });
}

function DeleteUser(userID) {
    Swal.fire({
        title: 'Do you want to Delete this user ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Delete User`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Deleting The User',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    $.ajax({
                        url: '/Users/DeleteUser',
                        data: { 'userID': userID },
                        type: "Post",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Users/UpdateUserList',
                                type: "Get",
                                success: function (data) {
                                    $('#UserListDiv').html(data);
                                    $('#UserModal').modal('hide');
                                },
                                complete: function () {

                                }
                            });
                            var millisecondsToWait = 2000;
                            setTimeout(function () {

                                Swal.close();
                                Swal.fire('The user has been deleted successfully', '', 'success');
                                toastr["success"]("The user has been deleted successfully");
                            }, millisecondsToWait);
                        }
                        ,
                        error: function () {
                            toastr["error"]("Error occurred while deleting the user");
                            Swal.close();
                            Swal.fire('Error occurred while deleting the user', '', 'error');
                        }
                    });
                },
                willClose: () => {
                }
            })
        }
    });
}

function ActivateUser(userID) {
    Swal.fire({
        title: 'Do you want to Activate this user ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Activate User`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Activating The user',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    $.ajax({
                        url: '/Users/ReactivateUser',
                        data: { 'userID': userID },
                        type: "Post",
                        success: function (data) {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = 'Completing the user activation';
                                }
                            }
                            var millisecondsToWait = 2000;
                            setTimeout(function () {
                                toastr["success"]("The user has been activated successfully");
                                Swal.close();
                                Swal.fire('The user has been activated successfully', '', 'success');
                            }, millisecondsToWait);
                        },
                        error: function () {
                            toastr["error"]("Error occurred while activating the user");
                            Swal.close();
                            Swal.fire('Error occurred while activating the user', '', 'error');
                        }
                    });
                },
                willClose: () => {
                }
            })
        }
    });
}

function DeactivateUser(userID) {
    Swal.fire({
        title: 'Do you want to Deactivate this user ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Deactivate User`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Deactivate The user',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    $.ajax({
                        url: '/Users/DeactivateUser',
                        data: { 'userID': userID },
                        type: "Post",
                        success: function (data) {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = 'Completing the user Deactivation';
                                }
                            }
                            var millisecondsToWait = 2000;
                            setTimeout(function () {
                                toastr["success"]("The user deactivated successfully");
                                Swal.close();
                                Swal.fire('The user deactivated successfully', '', 'success');
                            }, millisecondsToWait);
                        },
                        error: function () {
                            toastr["error"]("Error occurred while deactivating the user");
                            Swal.close();
                            Swal.fire('Error occurred while deactivating the user', '', 'error');
                        }
                    });
                },
                willClose: () => {
                }
            })
        }
    });
}

function ShowModalOfUserForEdit(userID) {
    userObject.UserId = userID;
    Swal.fire({
        title: 'Preparing User Form',
        html: 'Process <b></b> ....',
        confirmButtonText: 'Managing Users',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                    b.textContent = 'Preparing User Information'
                }
            }
            
            $.ajax({
                url: '/Users/GetCustomerUserByID',
                data: { 'userID': userID },
                type: "Post",
                success: function (data) {
                    if (data.success == "success") {
                        var inpt_name = document.getElementById('inpt_name');
                        inpt_name.value = data.data.Name;

                        var inpt_email = document.getElementById('inpt_email');
                        inpt_email.value = data.data.Email;

                        var inpt_phone = document.getElementById('inpt_phone');
                        inpt_phone.value = data.data.Mobile;

                        var inpt_userName = document.getElementById('inpt_userName');
                        inpt_userName.value = data.data.UserName;
                        //var inpt_roles = document.getElementById('inpt_roles');

                        var Values = new Array();
                        $("#inpt_roles").val('');
                        $.each(data.data.Roles.split(","), function (i, e) {
                            Values.push(e.trim());
                        });
                        $('#inpt_roles').val(Values).trigger('change');
                    }
                }
            });
        },
        willClose: () => {
        }
    }).then((result) => {
        $('#modalTitle').html("Edit User");
        $('#UserModal').modal('show');
        ValidateInputs();
    });
}

function ValidateInputs() {
    var isvaild = true;
    var inpt_userName = $('#inpt_userName').val();
    if (inpt_userName === "") {
        isvaild = false;
        showSpan('#inpt_userName_span');
    } else {
        hideSpan('#inpt_userName_span');
    }

    var inpt_name = $('#inpt_name').val();
    if (inpt_name === "") {
        isvaild = false;
        showSpan('#inpt_name_span');
    } else {
        hideSpan('#inpt_name_span');
    }

    var inpt_phone = $('#inpt_phone').val();
    if (inpt_phone === "") {
        isvaild = false;
        showSpan('#inpt_phone_span');
        hideSpan('#inpt_phone_span1');
    } else {
        var englishReg = /^[A-Za-z0-9]*$/;
        var isEnglish = englishReg.test(inpt_phone);
        if (!isEnglish) {
            isvaild = false;
            showSpan('#inpt_phone_span');
            hideSpan('#inpt_phone_span1');
        }
        else {
            hideSpan('#inpt_phone_span');
            hideSpan('#inpt_phone_span1');
        }
        var x = !inpt_phone.startsWith('9665');
        if (x || inpt_phone.length < 12) {
            isvaild = false;
            showSpan('#inpt_phone_span1');
            hideSpan('#inpt_phone_span');
        } else {
            hideSpan('#inpt_phone_span');
            hideSpan('#inpt_phone_span1');
        }
    }

    var inpt_roles = $('#inpt_roles').val();
    if (inpt_roles === "") {
        isvaild = false;
        showSpan('#inpt_roles_span');
    } else {
        hideSpan('#inpt_roles_span');
    }

    var inpt_email = $('#inpt_email').val();
    if (inpt_email === "") {
        isvaild = false;
        showSpan('#inpt_email_span');
        hideSpan('#inpt_email_span1');
    } else {
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var testRsult = reg.test(inpt_email)
        if (!testRsult) {
            isvaild = false;
            hideSpan('#inpt_email_span');
            showSpan('#inpt_email_span1');
        }
        else {
            hideSpan('#inpt_email_span');
            hideSpan('#inpt_email_span1');
        }
    }

    return isvaild;
}

$(document).ready(function () {
    $('#inpt_name').keyup(function () {
        ValidateInputs();
    });

    $('#inpt_userName').keyup(function () {
        ValidateInputs();
    });

    $('#inpt_phone').keyup(function () {
        ValidateInputs();
    });

    $('#inpt_email').keyup(function () {
        ValidateInputs();
    });

    $('#inpt_roles').keyup(function () {
        ValidateInputs();
    });

});

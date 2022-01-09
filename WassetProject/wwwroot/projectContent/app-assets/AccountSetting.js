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
var passwordObject =
{
    "CurrentPassword": "",
    "NewPassword": "",
    "LoginID": "",
    "Mobile": "",
    "ConfirmPassword": ""
}
function PreparePasswordObject() {
    passwordObject.CurrentPassword = $('#inpt_currentPassword').val();
    passwordObject.NewPassword = $('#inpt_newPassword').val();
    passwordObject.ConfirmPassword = $('#inpt_confirmPassword').val();
    passwordObject.Mobile = $('#inpt_phone').val();
    passwordObject.LoginID = $('#inpt_email').val();
}

function ResetInputs() {
    $('#inpt_currentPassword').val('');
    $('#inpt_newPassword').val('');
    $('#inpt_confirmPassword').val('');
}

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}

function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}

function SubmitChangePasswordRequest() {
    var valid = ValidateInputs();
    if (valid) {
        PreparePasswordObject();
        Swal.fire({
            title: 'You are about to change your password, Are you sure ?!',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Change Password`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Changing Your Password',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Completing change password'
                            }
                        }
                        $.ajax({
                            url: '/Users/ChangePassword',
                            data: { 'changePasswordModel': passwordObject },
                            type: "Post",
                            success: function (data) {
                                if (data.success == "success") {
                                    var millisecondsToWait = 2000;
                                    setTimeout(function () {
                                        Swal.close();
                                        ResetInputs();
                                        Swal.fire('The password has been changed successfully', '', 'success');
                                        toastr["success"]("The password has been changed successfully")
                                    }, millisecondsToWait);
                                } else if (data.success == "error") {
                                    var millisecondsToWait = 2000;
                                    setTimeout(function () {
                                        Swal.close();
                                        Swal.fire('Your current password is wrong ', '', 'error');
                                    }, millisecondsToWait);
                                }
                                else if (data.success == "validation") {
                                    var millisecondsToWait = 2000;
                                    setTimeout(function () {
                                        Swal.close();
                                        Swal.fire('The password must be more than 3 digits', '', 'Info');
                                        toastr["info"]("The password must be more than 3 digits")

                                    }, millisecondsToWait);
                                }
                                else {
                                    var millisecondsToWait = 2000;
                                    setTimeout(function () {
                                        Swal.close();
                                        Swal.fire(data.data, '', 'error');
                                        toastr["error"]("Error occurred while changing the  password..")

                                    }, millisecondsToWait);
                                }

                            }
                        });
                    },
                    willClose: () => {

                    }
                })
            }
        });
    }

}

function ValidateInputs() {
    var isvaild = true;
    var inpt_currentPassword = $('#inpt_currentPassword').val();
    if (inpt_currentPassword === "") {
        isvaild = false;
        showSpan('#inpt_currentPassword_span');
    } else {
        hideSpan('#inpt_currentPassword_span');
    }

    var inpt_newPassword = $('#inpt_newPassword').val();
    if (inpt_newPassword === "") {
        isvaild = false;
        showSpan('#inpt_newPassword_span');
    } else {
        hideSpan('#inpt_newPassword_span');
    }

    var inpt_confirmPassword = $('#inpt_confirmPassword').val();
    if (inpt_confirmPassword === "") {
        isvaild = false;
        showSpan('#inpt_confirmPassword_span');
    } else {
        hideSpan('#inpt_confirmPassword_span');
    }

    return isvaild;
}

$(document).ready(function () {
    $('#inpt_currentPassword').keyup(function () {
        ValidateInputs();
    });

    $('#inpt_confirmPassword').keyup(function () {
        var inpt_newPassword = $('#inpt_newPassword').val();
        var inpt_confirmPassword = $('#inpt_confirmPassword').val();
        if (inpt_newPassword == "") {
            showSpan("#inpt_confirmPassword_span1")
        } else if (inpt_newPassword != inpt_confirmPassword) {
            showSpan("#inpt_confirmPassword_span1")
        } else {
            hideSpan("#inpt_confirmPassword_span1")
        }
        if (inpt_confirmPassword === "") {
            isvaild = false;
            showSpan('#inpt_confirmPassword_span');
        } else {
            hideSpan('#inpt_confirmPassword_span');
        }
    });

    $('#inpt_newPassword').keyup(function () {
        ValidateInputs();
    });
})
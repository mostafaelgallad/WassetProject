var subscription = {
    "FkAppId": "",
    "SubName": "",
    "FkCustUserId": "",
    "FkMstrProfileTypeId": "",
    "FkMstrProfileId": "",
    "CreationDate": "",
    "Token": "",
    "ValidFrom": "",
    "ValidUntil": "",
    "FkSubStatusId": "",
    "IsDeleted": ""
}
var nextStep = true;

function GenerateToken() {
    Swal.fire({
        title: 'Do you want to generate Toeken ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Generate`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Generate The Token',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    $.ajax({
                        url: '/Subscription/GenerateNewToken',
                        data: { 'subscriptionID': 15 },
                        type: "Post",
                        success: function (data) {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = 'Waiting until token generation';
                                }
                            }
                            var millisecondsToWait = 2000;
                            setTimeout(function () {
                                $('#token').val(data.data);
                                toastr["success"]("The token generate successfully");
                                Swal.close();
                                Swal.fire('The token generate successfully', '', 'success');
                            }, millisecondsToWait);
                        },
                        error: function () {
                            toastr["error"]("Error occurred while activating the user");
                            Swal.close();
                            Swal.fire('Error occurred while generate the token', '', 'error');
                        }
                    });
                },
                willClose: () => {
                }
            })
        }
    });
}

function CopyToken() {
    var copyText = document.getElementById("token");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function SaveSubscriptionDate() {
    CheckValidation();
    if (nextStep == true) {
        BuildModelSubscription();
        Swal.fire({
            title: 'Do you want to save data ?!',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Save`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Saveing Data',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        $.ajax({
                            url: '/Subscription/CreateSubscription',
                            data: { 'subscription': subscription },
                            type: "Post",
                            success: function (data) {
                                if (data.data != "") {
                                    const content = Swal.getContent()
                                    if (content) {
                                        const b = content.querySelector('b')
                                        if (b) {
                                            b.textContent = 'Completing the subscription creation';
                                        }
                                    }
                                    var millisecondsToWait = 2000;
                                    setTimeout(function () {

                                    }, millisecondsToWait);

                                    $.ajax({
                                        url: '/Subscription/PartialProviderIndex',
                                        data: { "providerID": subscription.FkMstrProfileId },
                                        type: "Get",
                                        success: function (data) {

                                            $('#SubscriptionListTable').html(data);
                                            Swal.fire('Data save successfully', '', 'success');
                                            $('#SubscriptionModal').modal('hide');
                                            toastr["success"]("Data save successfully");
                                        },
                                        error: function () {
                                            toastr["error"]("Error occurred while saving data")
                                        },
                                        complete: function () {
                                        }
                                    });
                                }
                                else {
                                    toastr["info"]("Application Name Exsist");
                                    Swal.fire('Application Name Exsist', '', 'info');
                                    $('#SubscriptionModal').modal('hide');
                                }
                            },
                            error: function () {
                                toastr["error"]("Error occurred while saving data");
                                Swal.close();
                                Swal.fire('Error occurred while saveing data', '', 'error');
                            }
                        });
                    },
                    willClose: () => {
                        RestModalValues();
                        $('#SubscriptionModal').modal('hide');
                        swal.stopLoading();
                    }
                })
            }
        });
    }
}

function BuildModelSubscription() {
    subscription.FkAppId = $('#FkAppId').val();
    subscription.SubName = $('.SubName').val();
    subscription.FkMstrProfileTypeId = $('#FkMstrProfileTypeId').val();
    subscription.FkMstrProfileId = $('#FkMstrProfileId').val();
    subscription.Token = $('#token').val();
}

function RestModalValues() {
    $('#SubName').val('');
}

function SelectSubscription(subscriptionId) {
    $.ajax({
        url: '/Subscription/SelectSubscription',
        data: { 'subscriptionID': subscriptionId },
        type: "Post",
        success: function (data) {
            $('#provName').val(data.data.FkMstrProfileName);
            $('#provCategory').val(data.data.ProviderCategoryName);
            $('#provCountry').val(data.data.ProviderCountry);
            $('#profileStatus').val(data.data.ProfileStatusName);
            $('#provCity').val(data.data.ProviderCity);
            $('#SubName').val(data.data.SubName);
            $('#AppId').val(data.data.FkApp.AppName);
            $('#SubscriptionModalView').modal('show');
        },
        error: function () {
        }
    });
}

function DeleteSubscription(subscriptionId, FkMstrProfileId) {
    Swal.fire({
        title: 'Are you sure you want to delete this subscription ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Delete`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Delete Data',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    $.ajax({
                        url: '/Subscription/DeleteSubscription',
                        data: { 'subscriptionID': subscriptionId },
                        type: "Post",
                        success: function (data) {
                            const content = Swal.getContent()
                            if (content) {
                                const b = content.querySelector('b')
                                if (b) {
                                    b.textContent = 'Delete subscription';
                                }
                            }
                            var millisecondsToWait = 2000;
                            setTimeout(function () {

                            }, millisecondsToWait);

                            $.ajax({
                                url: '/Subscription/PartialProviderIndex',
                                data: { "providerID": FkMstrProfileId },
                                type: "Get",
                                success: function (data) {
                                    $('#SubscriptionListTable').html(data);
                                    Swal.fire('Data deleted successfully', '', 'success');
                                    $('#SubscriptionModal').modal('hide');
                                    toastr["success"]("Data deleted successfully");
                                },
                                error: function () {
                                    toastr["error"]("Error occurred while deleting data")
                                },
                                complete: function () {
                                }
                            });
                        },
                        error: function () {
                            toastr["error"]("Error occurred while deleting data");
                            Swal.close();
                            Swal.fire('Error occurred while saveing data', '', 'error');
                        }
                    });
                },
                willClose: () => {
                    RestModalValues();
                    $('#SubscriptionModal').modal('hide');
                    swal.stopLoading();
                }
            })
        }
    });
}


function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}
function CheckValidation() {
    nextStep = true;
    var SubName = $('.SubName').val();
    if (SubName === "") {
        nextStep = false;
        showSpan('#SubName_span');
    }
    else {
        hideSpan('#SubName_span');
    }

    var FkAppId = $('#FkAppId').val();
    if (FkAppId === "") {
        nextStep = false;
        showSpan('#FkAppId_span');
    } else {
        hideSpan('#FkAppId_span');
    }

    var token = $('#token').val();
    if (token === "") {
        nextStep = false;
        showSpan('#token_span');
    }
    else {
        hideSpan('#token_span');
    }
}
window.addEventListener("DOMContentLoaded", function () {
    $('#FkAppId').on('change', function () {
        var FkAppId = $('#FkAppId').val();
        if (FkAppId === "") {
            nextStep = false;
            showSpan('#FkAppId_span');
            $('#FkAppIdDiv').removeClass(" MandatoryDDLNormal");
        } else {
            hideSpan('#FkAppId_span');
            $('#FkAppIdDiv').addClass(" MandatoryDDLNormal");
        }
    });
    $('#token').keyup(function () {
        var token = $('#token').val();
        if (token === "") {
            nextStep = false;
            showSpan('#token_span');
        }
        else {
            hideSpan('#token_span');
        }
    });
    $('.SubName').keyup(function () {
        var SubName = $('.SubName').val();
        if (SubName === "") {
            nextStep = false;
            showSpan('#SubName_span');
        }
        else {
            hideSpan('#SubName_span');
        }
    });
    $(".MandatoryInput").on("input", function () {
        var MandatoryValue = $(this).val();
        if (MandatoryValue == "") {
            $(this).removeClass("NormalInput");
        }
        else {
            $(this).addClass("NormalInput");
        }
    });
});




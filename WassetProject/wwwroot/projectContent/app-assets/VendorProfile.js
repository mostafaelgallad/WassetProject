//toastr.options = {
//    "closeButton": false,
//    "debug": false,
//    "newestOnTop": false,
//    "progressBar": false,
//    "positionClass": "toast-top-right",
//    "preventDuplicates": false,
//    "onclick": null,
//    "showDuration": "300",
//    "hideDuration": "1000",
//    "timeOut": "5000",
//    "extendedTimeOut": "1000",
//    "showEasing": "swing",
//    "hideEasing": "linear",
//    "showMethod": "fadeIn",
//    "hideMethod": "fadeOut"
//}

var modelobject = {
    TeamInfoModel: {
        "Ceo": "",
        "Ceophone": "",
        "Ceoemail": "",
        "Itmanager": "",
        "ItmanagerPhone": "",
        "ItmanagerEmail": "",
        "IntegrationProjectManager": "",
        "IntegrationProjectManagerPhone": "",
        "IntegrationProjectManagerEmail": "",
        "BusinessDevelopmentManager": "",
        "BusinessDevelopmentManagerPhone": "",
        "BusinessDevelopmentManagerEmail": "",
        "FinanceManager": "",
        "FinanceManagerPhone": "",
        "FinanceManagerEmail": "",
    },
    CompanyInformationsModel: {
        "ContactPerson": "",
        "ContactEmail": "",
        "ContactMobile": "",
        "ContactJobTitle": "",
        "NumberOfEmployees": "",
        "FkVendorTypeId": "",
        "NumberOfActiveCustomers": "",
        "FkInsuranceKnowledgeLevelId": "",
        "FkIntegrationKnowledgeLevelId": "",
        "NumberOfDedicatedIntegrationSpecialists": "",
        "NumberOfIntegrationProjectsCompleted": "",
        "NameOfIntegratedParties": "",
        "ExperienceInTheGcc": ""
    },
    general: {
        "NameEn": $('#NameEN').val(),
        "NameAr": $('#NameAr').val(),
        "Website": $('#Website').val(),
        "CustomerPortalId": $('#custVendid').val(),
    }
};

var validationFlag = true;

function ReplaceContentsOfDiv(partialViewToInsert) {
    //debugger
    var currentPage = $(".Liactive").attr('id');
    if (currentPage != partialViewToInsert) {
        if (currentPage == "PV_ManagementTeamInfo") {
            SaveTeamInfoModelPageData();
        } else if (currentPage == "PV_CompanyInformations") {
            SaveCompanyInformationsModelPageData();
            //} else if (currentPage == "PV_VendorWorkOrders") {
            //    SaveIntegrationPageData();
            //} else if (currentPage == "PV_Sales") {
            //    SavesalesPageData();
        }
        $.ajax({
            url: '/Vendor/ChangePartial',
            data: { id: partialViewToInsert, local: modelobject, current: currentPage },
            type: "POST",
            success: function (data) {
                $('#placeHolderDiv').empty();
                $('#placeHolderDiv').html(data);
                $('#loadingDiv2').hide();
            },
            error: function () {
                //alert('Error');
            }
        });
    }
}

function SaveTeamInfoModelPageData() {
    modelobject.TeamInfoModel = {
        "Ceo": $('#Ceo').val(),
        "Ceophone": $('#Ceophone').val(),
        "Ceoemail": $('#Ceoemail').val(),
        "Itmanager": $('#Itmanager').val(),
        "ItmanagerPhone": $('#ItmanagerPhone').val(),
        "ItmanagerEmail": $('#ItmanagerEmail').val(),
        "IntegrationProjectManager": $('#IntegrationProjectManager').val(),
        "IntegrationProjectManagerPhone": $('#IntegrationProjectManagerPhone').val(),
        "IntegrationProjectManagerEmail": $('#IntegrationProjectManagerEmail').val(),
        "BusinessDevelopmentManager": $('#BusinessDevelopmentManager').val(),
        "BusinessDevelopmentManagerPhone": $('#BusinessDevelopmentManagerPhone').val(),
        "BusinessDevelopmentManagerEmail": $('#BusinessDevelopmentManagerEmail').val(),
        "FinanceManager": $('#FinanceManager').val(),
        "FinanceManagerPhone": $('#FinanceManagerPhone').val(),
        "FinanceManagerEmail": $('#FinanceManagerEmail').val(),
    }
}

function SaveCompanyInformationsModelPageData() {
    BindNameOfIntegration();
    modelobject.CompanyInformationsModel = {
        "ContactPerson": $('#ContactPerson').val(),
        "ContactEmail": $('#ContactEmail').val(),
        "ContactMobile": $('#ContactMobile').val(),
        "ContactJobTitle": $('#ContactJobTitle').val(),
        "NumberOfEmployees": $('#NumberOfEmployees').val(),
        "FkVendorTypeId": $('#FkVendorTypeId').val(),
        "NumberOfActiveCustomers": $('#NumberOfActiveCustomers').val(),
        "FkInsuranceKnowledgeLevelId": $('#FkInsuranceKnowledgeLevelId').val(),
        "FkIntegrationKnowledgeLevelId": $('#FkIntegrationKnowledgeLevelId').val(),
        "NumberOfDedicatedIntegrationSpecialists": $('#NumberOfDedicatedIntegrationSpecialists').val(),
        "NumberOfIntegrationProjectsCompleted": $('#NumberOfIntegrationProjectsCompleted').val(),
        "NameOfIntegratedParties": $('#NameOfIntegratedParties').val(),
        "ExperienceInTheGcc": $('#ExperienceInTheGcc').val()
    }
}

function ValidateContactInformation() {
    if (modelobject.CompanyInformationsModel.ContactPerson == "") {
        showSpan('ContactPerson_span');
        validationFlag = false;
    }
    if (modelobject.CompanyInformationsModel.ContactMobile == "") {
        showSpan('ContactMobile_span');
        validationFlag = false;
    }
    if (modelobject.CompanyInformationsModel.ContactEmail == "") {
        showSpan('ContactEmail_span');
        validationFlag = false;
    }
}

function SaveProfileData() {
    validationFlag = true;
    var currentPage = $(".Liactive").attr('id');
    if (currentPage == "PV_ManagementTeamInfo") {
        SaveTeamInfoModelPageData();
    }
    else if (currentPage == "PV_CompanyInformations") {
        SaveCompanyInformationsModelPageData();
    }
    ValidateContactInformation();
    if (validationFlag == true) {
        Swal.fire({
            title: 'Are you sure you want to save the changes ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Update`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                var currentPage = $(".Liactive").attr('id');
                let x = $('#custVendid').val();
                modelobject.general = {
                    "NameEn": $("#NameEN").val(),
                    "NameAr": $("#NameAr").val(),
                    "Website": $("#Website").val(),
                    "CustomerPortalId": $('#custVendid').val()
                }

                var ManagementInfo = $("#ManagementInfo")[0];
                if (ManagementInfo) {
                    SaveTeamInfoModelPageData();
                }
                var CopmanyInformations = $("#CopmanyInformations")[0];
                if (CopmanyInformations) {
                    SaveCompanyInformationsModelPageData();
                }
                Swal.fire({
                    title: 'Send Update Request..',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Updating the profile'
                            }
                        }
                        $.ajax({
                            url: "/Vendor/SendVendorData",
                            contentType: 'application/json; charset=utf-8',
                            type: 'POST',
                            dataType: "json",
                            data: JSON.stringify({ 'AllData': modelobject }),
                            success: function (data) {
                                if (data.success == 'success') {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        //Swal.fire('Profile Updated Successfully', '', 'success');
                                    }, millisecondsToWait);
                                }
                                $.ajax({
                                    url: "/Vendor/VendorProfilePartial",
                                    type: 'POST',
                                    data: { 'custVenId': modelobject.general.CustomerPortalId },
                                    beforeSend: function () {
                                        //toastr["info"]("we will save the data please wait...")
                                    },
                                    success: function (data) {
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Updated Successfully', '', 'success');
                                        //$("#loadingDiv").hide();
                                        toastr["success"]("The data has been saved successfully")
                                    },
                                    error: function (xhr, status, error) {
                                        alert(xhr.responseText);
                                        //$("#loadingDiv").hide();
                                        $('#lastFourNumber').val("");
                                        toastr["error"](err + 2)
                                    }
                                });
                            },
                            error: function () {
                                Swal.fire('Error occurred while updating the profile', '', 'error');
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
    else {
        toastr.error('Please make sure that contact information is provided');
    }
}

function ApproveVendorProfile() {
    //debugger;
    var vendorID = $('#MasterVendID').val();
    var Approvalnotes = $('#Approvalnotes').val();
    Swal.fire({
        title: 'Do you want to approve the vendor profile ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Approve profile`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Approving the profile',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the profile status'
                        }
                    }
                    $('#ApproveProfileModal').modal('hide');
                    $.ajax({
                        url: '/Vendor/ApproveVendorProfile',
                        data: { 'vendID': vendorID, 'notes': Approvalnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Vendor/VendorProfilePartial",
                                    type: 'POST',
                                    data: { 'custVenId': modelobject.general.CustomerPortalId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Approved Successfully', '', 'success');
                                        toastr.success('The profile has been approved successfully');
                                    },
                                    error: function (xhr, status, error) {
                                        alert(xhr.responseText);
                                        $("#loadingDiv").hide();
                                        $('#lastFourNumber').val("");
                                        toastr["error"](err + 2)
                                    }
                                });
                            }
                        },
                        error: function () {
                            $('#ApproveProfileModal').modal('hide');
                            Swal.fire('Error occurred while approving the profile', '', 'error');
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

function ShowApproveModal(VendortID) {
    $('#MasterVendID').val(VendortID);
}

$(document).ready(function () {
    setTimeout(function () {
        $('#spinnerdiv').fadeOut('fast');

    }, 1500); // <-- time in milliseconds

    setTimeout(function () {
        $('#afterspinner').fadeIn('slow');

    }, 1501); // <-- time in milliseconds

    $('.select2').select2();

    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress'
    });
    $('.pie_progress').asPieProgress('start');

    $('.count').countTo();
    $('.circle-prog').circleProgress({
        size: 45,
        startAngle: 4.3,
        thickness: 5,
        lineCap: "round",
        emptyFill: "rgba(247, 247, 247, 1)",
        animationStartValue: 0.1,
        animation: {
            duration: 2000
        },
        fill: {
            gradient: ["#0d8f2f", "#76b219"]
        }
    });
    $('.circle-progGreen ,.circle-progGray, .circle-progBlue').circleProgress({
        size: 55,
        startAngle: 4.3,
        thickness: 5,
        lineCap: "round",
        emptyFill: "rgba(247, 247, 247, 1)",
        animationStartValue: 0.1,
        animation: {
            duration: 0
        },
        fill: {
            gradient: ["#abb1b9", "#abb1b9"]
        }
    });
    $('.circle-progGreen').circleProgress({
        fill: {
            gradient: ["#0d8f2f", "#0d8f2f"]
        }
    });
    $('.circle-progBlue').circleProgress({
        fill: {
            gradient: ["#3297DB", "#3297DB"]
        }
    });
    //// var vendorId = document.getElementById("VendId").value;
    //$.ajax({
    //    url: "/CustomerVendor/GetVendorProfileHealth",
    //    contentType: 'application/json; charset=utf-8',
    //    type: 'POST',
    //    dataType: "json",
    //    //data: JSON.stringify({ id: vendorId }),
    //    success: function (result) {
    //        //alert(result);
    //        $('.circle-prog').circleProgress({
    //            value: "0." + result,
    //        });
    //        //var x = document.getElementById('VendorHealthValue').getAttribute('data-to');
    //        //alert(x);
    //        // document.getElementById('VendorHealthValue').setAttribute('data-to', result);
    //        // $('#VendorHealthValue').attr('data-to', result);
    //        //  console.log(x);
    //    }
    //});

    //$("#submitAll").on("click", function () {

    //    var MainPortalAccountMobile = $('#MainContactMobile').val();
    //    var FkContStateID = $('#FkContStateID').val();

    //    //if (FkContStateID == 3) {
    //    Swal.fire({
    //        title: 'Are you sure you want to save the changes ?',
    //        showDenyButton: false,
    //        showCancelButton: true,
    //        confirmButtonText: `Save`,
    //        //denyButtonText: `Don't save`,
    //    }).then((result) => {
    //        if (result.isConfirmed) {
    //            var currentPage = $(".Liactive").attr('id');
    //            //if (currentPage == 'PV_CompanyInformations') {
    //            //    SaveCompanyInformationsModelPageData();
    //            //}
    //            //else if (currentPage == 'PV_ManagementTeamInfo') {
    //            //    SaveTeamInfoModelPageData();
    //            //}
    //            SaveProfileData();
    //        }
    //    });
    //});
});

function SetInitialProfileObjectValues(modelObject) {
    modelobject = modelObject;
}

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}

function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}

function BindNameOfIntegration() {
    var NameOfIntegration = "";
    //debugger;
    $('#optionList li').each(function (i) {
        var text = $(this).text();
        text = text.trim().slice(0, -1);
        NameOfIntegration += text + ",";
    });
    document.getElementById('NameOfIntegratedParties').value = NameOfIntegration;
}
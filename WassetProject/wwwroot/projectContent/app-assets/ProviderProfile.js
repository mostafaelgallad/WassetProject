var file = "";
var modelobject = {
    MasterProvider: {
        'ProvId': '',
        'FaGroupId': '',
        'CalssicId': '',
        'CloudId': '',
        'ErpId': '',
        'DynamicId': '',
        'FkParentProvId': '',
        'FkNewProvId': '',
        'FkCatId': '',
        'FkVendId': '',
        'FkVendSysId': '',
        'FkFacTypId': '',
        'FkProUserId': '',
        'Cchinumber': '',
        'CchiExpiryDate': '',
        'NameEn': '',
        'NameAr': '',
        'CommercialRegistration': '',
        'FkCityId': '',
        'Address': '',
        'CloudFusionAuthGroupId': '',
        'Logo': [],
        'IsDeleted': '',
        'Dhscode': '',
        'FkProvStatusId': '',
        'WorkingFrom': '',
        'WorkingTo': '',
        'EmailAddress': '',
        'MobileNo': '',
        'ClassicTelNo': '',
        'Gpslocation': '',
        'ClassicDetailsProDetailId': '',
        'EboxIpaddress': '',
        'EboxTeamViewerId': '',
        'EboxTeamViewerPass': '',
        'EboxWindowsPass': '',
        'EboxWindowsUserName': '',
        'EboxSerialNo': '',
        'EboxDeliverDate': '',
        'FkEboxDeliveryByTypeId': '',
        'EboxAssetId': '',
        'ErpCustomerOid': '',
        'ErpCustomerCustomerCode': '',
        'BupaCode': '',
        'ErpCustomerMemberSince': '',
        'ErpCustomerAccountsReceivable': '',
        'ErpCustomerDownPaymentClearingAccount': '',
        'ErpCustomerBankName': '',
        'ErpCustomerBankAccountName': '',
        'ErpCustomerBankAccountNumber': '',
        'ErpCustomerIban': '',
        'ErpCustomerSwift': '',
        'ErpCustomerBankDetails': '',
        'ErpCustomerBankAddress': '',
        'ErpCustomerSalesEmployee': '',
        'ErpCustomerContractNo': '',
        'ErpCustomerRegistrationFee': '',
        'ErpCustomerClaimRate': '',
        'ErpCustomerRemarks': '',
        'ErpCustomerOptimisticLockField': '',
        'ErpCustomerGcrecord': '',
        'ErpCustomerObjectType': '',
        'Vatno': '',
        'ErpCustomerInternalRefNo': '',
        'ErpCustomerTitle': '',
        'ErpCustomerMaritalStatus': '',
        'ErpCustomerDateofBirth': '',
        'ErpCustomerGender': '',
        'ErpCustomerReligion': '',
        'ErpCustomerNationality': '',
        'ErpCustomerSocialId': '',
        'ErpCustomerTelephone2': '',
        'Fax': '',
        'Website': '',
        'ProvPhoneNumber': '',
        'ProvDistrict': '',
        'ProvStreet': '',
        'ErpCustomerReferredBy': '',
        'ErpCustomerIsCreditCustomer': '',
        'ErpCustomerCreditLimit': '',
        'ErpCustomerRating': '',
        'ErpCustomerRatingComments': '',
        'ErpCustomerTaxMode': '',
        'ErpCustomerCustomerType': '',
        'ErpCustomerCategory': '',
        'ErpCustomerPrimaryContact': '',
        'ErpCustomerEnableAutoEmailInvoice': '',
        'ErpCustomerEmailInvoiceDistributionList': '',
        'ErpCustomerPaymentDueIn': '',
        'ErpCustomerTaxCode': '',
        'ErpCustomerCurrency': '',
        'ErpCustomerCategoryOid': '',
        'ErpCustomerTypesOid': '',
        'CustomerPortalProvId': '',
        'CustomerPortalProvCrnumber': '',
        'CustomerPortalProvCrnumberExpiration': '',
        'CustomerPortalProvMedicalLicenseNumber': '',
        'CustomerPortalProvMedicalLicenseNumberExpiration': '',
        'CustomerPortalProvCcnumber': '',
        'CustomerPortalProvMailBox': '',
        'ZipCode': '',
        'CustomerPortalProvFaGuid': '',
        'CustomerPortalProvGmname': '',
        'CustomerPortalProvGmmobile': '',
        'CustomerPortalProvGmemail': '',
        'CustomerPortalProvCfoname': '',
        'CustomerPortalProvCfomobile': '',
        'CustomerPortalProvCfoemail': '',
        'CustomerPortalProvDateTimeStamp': '',
        'LastModifiedDate': '',
        'UpdateReason': '',
        'RejectionReason': '',
        'FkUserId': '',
        'IsActive': '',
        'ProfileApproved': '',
        'ProfileApprovedDate': '',
        'FkProfileApprovedUserId': '',
        'Loasigned': '',
        'LoasignedDate': '',
        'FkLoasignedByUserId': '',
        'HasAcontract': '',
        'HasAcontractDate': '',
        'FkContractSignedByUserId': '',
        'EnvironmentReady': '',
        'EnvironmentReadyDate': '',
        'FkEnvironmentPreparedByUserId': '',
        'Mtsinstallation': '',
        'MtsinstallationDate': '',
        'FkMtsinstalledByUserId': '',
        'Integrated': '',
        'IntegrationDate': '',
        'FkIntegratedByUserId': '',
        'FirstSubmission': '',
        'FirstSubmissionDate': '',
        'FkFirstSubmissionByUserId': '',
        'Training': '',
        'TrainingDate': '',
        'FkTrainedByUserId': '',
        'Live': '',
        'LiveDate': '',
        'FkWentLiveByUserId': '',
        'TotalAverageClaims': '',
        'Remarks': '',
        'CreationDate': '',
        'ProvTaxnumber': '',
        'Discount': '',
    },
    ProviderContract: {
        'ContId': '',
        'FkReqTypId': '',
        'FkProvId': '',
        'FkParentContId': '',
        'FkNewContId': '',
        'ContRequestDate': '',
        'ContRegistrationNumber': '',
        'ContClaimInChargeContactName': '',
        'ContClaimInChargeContactMobile': '',
        'ContClaimInChargeContactEmail': '',
        'ContCommunicationContactName': '',
        'ContCommunicationContactMobile': '',
        'ContCommunicationContactEmail': '',
        'ContNotificationMobile': '',
        'ContNotificationEmail': '',
        'ContMainUserName': '',
        'ContMainUserIdnumber': '',
        'ContMainUserMobile': '',
        'ContMainUserEmail': '',
        'FkLangId': '',
        'ContIsAgreementApproved': '',
        'ContAccreditedByName': '',
        'ContAccreditedByIdnumber': '',
        'ContAccreditedByMobile': '',
        'ContAccreditedByEmail': '',
        'ContAccreditedByTitle': '',
        'ContIsSigned': '',
        'ContChamberOfCommerceIsSent': '',
        'ContMainUserMessageIsSent': '',
        'FkContStatId': '',
        'ContRejectionReason': '',
        'FkVendorId': '',
        'FkVendSysId': '',
        'FkPricPlnId': '',
        'OtpDate': '',
        'OtpIsSent': '',
        'OtpCode': '',
        'OtpConfirmed': '',
        'OldContId': '',
        'Status': '',
        'RejectedReason': '',
        'ValidFrom': '',
        'ValidUntil': '',
        'IsActive': '',
        'OtherLang': '',
    }
}

var ProviderPayerModel = {
    'FkPayerId': '',
    'FkSubmissionStatusId': '',
    'FkNetworkStatusWithPayerId': '',
    'ProviderCodeAtPayer': '',
    'ProviderNameEnAtPayer': '',
    'ProviderNameArAtPayer': '',
    'ClaimAverage': '',
    'TargetDateBatchSubmission': '',
    'ActualDateBatchSubmission': '',
    'FkDoneByProUserId': '',
}

function RemoveLogo() {
    $.ajax({
        url: '/Provider/RemoveLogo',
        type: "Post",
        contentType: false,
        processData: false,
        success: function (result) {
            $("#loadingDiv").hide();
            if (result.succeded) {
                toastr["info"]("Logo removed successfully");
                document.getElementById("Provider_Logo_image").src = "/imgs/uploadLogoImage.jpg";
            } else {
                toastr["warning"]('Error....')
            }
        },
        error: function (err) {
            $("#loadingDiv").hide();
            toastr["error"](err)
        }
    });

}

$("#Provider_Logo_input").change(function (e) {
    file = $("#Provider_Logo_input").get(0).files;
    //console.log(file[0].size);
    var fileData = new FormData();
    fileData.append("img", file[0]);
    if (file[0] != null) {
        if (file[0].size <= 1048576) {
            $("#loadingDiv").show();
            $.ajax({
                url: '/Provider/PassImage',
                type: "Post",
                data: fileData,
                contentType: false,
                processData: false,
                success: function (result) {
                    $("#loadingDiv").hide();
                    if (result.succeded) {
                        toastr["info"]("Image uploaded successfully");
                    } else {
                        toastr["warning"]('Error....')
                    }
                },
                error: function (err) {
                    $("#loadingDiv").hide();
                    toastr["error"](err)
                }
            });
        }
        else {
            toastr["error"]("Max size 1MB");
        }
    }
    else {
        toastr["error"]("There is not file selected");
    }
    $("#loadingDiv").hide();
});

function replaceContentsOfDiv(partialViewToInsert) {
    //debugger;
    var currentPage = $(".Liactive").attr('id');
    if (currentPage != partialViewToInsert || currentPage == 'PV_Payers') {
        if (currentPage == "PV_BasicInformation") {
            SaveBasicInformationPageData();
        }
        else if (currentPage == "PV_ContactInformation") {
            SaveContactInformationPageData();
        }
        else if (currentPage == "PV_Financial") {
            SaveFinicialPageData();
        }
        else if (currentPage == "PV_Integration") {
            SaveIntegrationPageData();
        }
        else if (currentPage == "PV_Licences") {
            SaveLicencesPageData();
        }
        else if (currentPage == "PV_Payers") {
        }
        //debugger;
        $.ajax({
            url: '/Provider/ChangePartial',
            data: { id: partialViewToInsert, local: modelobject, cuurent: currentPage },
            type: "POST",
            success: function (data) {
                $('#placeHolderDiv').empty();
                $('#placeHolderDiv').html(data);
            },
            error: function (er) {
                //console.log(er);
            }
        });
    }

}

$('#FkVendorId').change(function () {
    //debugger;
    //master vendor
    $.getJSON('/CRM_Contracts/SystemNameList/' + $('#FkVendorId').val(), function (data) {
        var select = $("#FkVendSysId");
        select.empty();
        //select.append($('<option/>', {
        //    value: 0,
        //    text: "Select a State"
        //}));
        $.each(data, function (index, itemData) {
            //console.log(itemData);
            select.append($('<option/>', {
                value: itemData.Value,
                text: itemData.Text
            }));
        });
    });
});


$(document).ready(function () {
    setTimeout(function () {
        $('#spinnerdiv').fadeOut('fast');

    }, 1500); // <-- time in milliseconds

    setTimeout(function () {
        $('#afterspinner').css("display", "block");

    }, 1501); // <-- time in milliseconds


    $('#CchiExpiryDate,#CustomerPortalProvCrnumberExpiration,#CustomerPortalProvMedicalLicenseNumberExpiration,#EboxDeliverDate').datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'd/m/Y',
        value: '',
        scrollMonth: false,
        scrollInput: false
    })
    $('#WorkingFromDateNew,#WorkingToDateNew').datetimepicker({
        timepicker: true,
        datepicker: false,
        format: 'H:i A',
        value: '',
        //hours12:true,
        //step:5,
    })

    jQuery(function ($) {
        $('.pie_progress').asPieProgress({
            namespace: 'pie_progress'
        });
        $('.pie_progress').asPieProgress('start');
    });

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
    $('.InfoClick1').on('click', function () {
        $(".InfoClick1 .tooltipClick .tooltiptextClick").toggleClass("tooltiptextClickVisible");
    });

    $('#TargetDatePatchSubmission,#ActualDatePatchSubmission').datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'd/m/Y',
        value: '',
        scrollMonth: false,
        scrollInput: false
    });
    $('.zero-configuration').DataTable();
    $('.select2').select2();

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

    var providerId = document.getElementById("ProvId").value;
    //console.log("provder id is: " + providerId)

    $.ajax({
        url: "/Provider/GetProviderProfileHealth",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({ id: providerId }),
        success: function (result) {
            $('.circle-prog').circleProgress({
                value: "0." + result,
            });
            var x = $('#ProviderHealthValue').text(result);
        }
    });

});

function SaveBasicInformationPageData() {
    //debugger;
    modelobject.MasterProvider.FkCatId = $('#FkCatId').val();
    modelobject.MasterProvider.FkFacTypId = $('#FacTypId').val();
    modelobject.MasterProvider.FkProUserId = $('#UserId').val();
    modelobject.MasterProvider.WorkingFrom = $('#WorkingFromDateNew').val();
    modelobject.MasterProvider.WorkingTo = $('#WorkingToDateNew').val();
    //modelobject.MasterProvider.Logo =$('#UserId').val();
    modelobject.MasterProvider.Remarks = $('#Remarks').val();
}

function SaveContactInformationPageData() {
    modelobject.MasterProvider.FkCityId = $('#CityId').val();
    modelobject.MasterProvider.ZipCode = $('#ZipCode').val();
    modelobject.MasterProvider.CustomerPortalProvMailBox = $('#CustomerPortalProvMailBox').val();
    modelobject.MasterProvider.Address = $('#Address').val();
    modelobject.MasterProvider.Gpslocation = $('#GPSLocation').val();
    modelobject.MasterProvider.MobileNo = $('#MobileNo').val();
    modelobject.MasterProvider.ProvPhoneNumber = $('#ProvPhoneNumber').val();
    modelobject.MasterProvider.Fax = $('#Fax').val();
    modelobject.MasterProvider.EmailAddress = $('#EmailAddress').val();
    modelobject.MasterProvider.Website = $('#Website').val();
    modelobject.MasterProvider.CustomerPortalProvGmname = $('#CustomerPortalProvGmname').val();
    modelobject.MasterProvider.CustomerPortalProvGmemail = $('#CustomerPortalProvGmemail').val();
    modelobject.MasterProvider.CustomerPortalProvGmmobile = $('#CustomerPortalProvGmmobile').val();
    modelobject.MasterProvider.CustomerPortalProvCfoname = $('#CustomerPortalProvCfoname').val();
    modelobject.MasterProvider.CustomerPortalProvCfoemail = $('#CustomerPortalProvCfoemail').val();
    modelobject.MasterProvider.CustomerPortalProvCfomobile = $('#CustomerPortalProvCfomobile').val();
}

function SaveFinicialPageData() {
    modelobject.MasterProvider.ErpCustomerBankName = $('#ErpCustomerBankName').val();
    modelobject.MasterProvider.ErpCustomerBankDetails = $('#ErpCustomerBankDetails').val();
    modelobject.MasterProvider.ErpCustomerBankAddress = $('#ErpCustomerBankAddress').val();
    modelobject.MasterProvider.ErpCustomerBankAccountName = $('#ErpCustomerBankAccountName').val();
    modelobject.MasterProvider.ErpCustomerBankAccountNumber = $('#ErpCustomerBankAccountNumber').val();
    modelobject.MasterProvider.ErpCustomerIban = $('#ErpCustomerIban').val();
    modelobject.MasterProvider.ErpCustomerSwift = $('#ErpCustomerSwift').val();
    modelobject.MasterProvider.Discount = $('#Discount').val();
}

function SaveIntegrationPageData() {
    modelobject.MasterProvider.FkVendSysId = $('#FkVendSysId').val();
    modelobject.MasterProvider.EboxIpaddress = $('#EboxIpaddress').val();
    modelobject.MasterProvider.EboxTeamViewerId = $('#EboxTeamViewerId').val();
    modelobject.MasterProvider.EboxTeamViewerPass = $('#EboxTeamViewerPass').val();
    modelobject.MasterProvider.EboxWindowsPass = $('#EboxWindowsPass').val();
    modelobject.MasterProvider.EboxWindowsUserName = $('#EboxWindowsUserName').val();
    modelobject.MasterProvider.EboxSerialNo = $('#EboxSerialNo').val();
    modelobject.MasterProvider.EboxDeliverDate = $('#EboxDeliverDate').val();
    modelobject.MasterProvider.FkEboxDeliveryByTypeId = $('#FkEboxDeliveryByTypeId').val();
    modelobject.MasterProvider.EboxAssetId = $('#EboxAssetId').val();;
}

function SaveLicencesPageData() {
    modelobject.MasterProvider.Cchinumber = $('#Cchinumber').val();
    modelobject.MasterProvider.CchiExpiryDate = getDateTimeIfDateTime($('#CchiExpiryDate').val());
    modelobject.MasterProvider.CustomerPortalProvMedicalLicenseNumber = $('#CustomerPortalProvMedicalLicenseNumber').val();
    modelobject.MasterProvider.CustomerPortalProvMedicalLicenseNumberExpiration = getDateTimeIfDateTime($('#CustomerPortalProvMedicalLicenseNumberExpiration').val());
    modelobject.MasterProvider.CustomerPortalProvCcnumber = $('#CustomerPortalProvCcnumber').val();
    modelobject.MasterProvider.CommercialRegistration = $('#CommercialRegistration').val();
    modelobject.MasterProvider.Vatno = $('#Vatno').val();
    modelobject.MasterProvider.ProvTaxnumber = $('#ProvTaxnumber').val();
    modelobject.MasterProvider.CustomerPortalProvCrnumber = $('#CustomerPortalProvCrnumber').val();
    modelobject.MasterProvider.CustomerPortalProvCrnumberExpiration = getDateTimeIfDateTime($('#CustomerPortalProvCrnumberExpiration').val());
    //debugger;
}

$("#CountryId").on('change', function () {
    //debugger;
    $.ajax({
        url: '/VendorContracts/CountryChange/' + $('#CountryId').val(),
        type: "Get",
        beforeSend: function () {
            $('#loadingDiv').show();
        },
        success: function (data) {
            $('#loadingDiv').hide();
            var select = $("#CityId");
            select.empty();
            $.each(data, function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.Value,
                    text: itemData.Text
                }));
            });
        }
    });

    if ($(this).val() == "") {
        $('#CountryListDiv').removeClass(" MandatoryDDLNormal");
    }
    else {
        $('#CountryListDiv').addClass(" MandatoryDDLNormal");
    }
});

function SavesalesPageData() {
    modelobject.MasterProvider.ErpCustomerSalesEmployee = $("#SalesEmployee").val();
    modelobject.MasterProvider.ErpCustomerRegistrationFee = $("#registrationFee").val();
    modelobject.MasterProvider.FkProId = $("#FkProId").val();
}

function SendOtp_Profile() {
    $('#lastFourNumber').val("");
    var lastFourNumber = $('#lastFourNumber').val()
    let errorMessage = document.getElementById("erorr_message1");
    if (errorMessage != null) {
        errorMessage.innerHTML = " ";
    }
    var numberAcrridet = $('#AccreditedNumber').val();
    $.ajax({
        url: "/Provider/SendOTP",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({ number: numberAcrridet }),
        beforeSend: function () {

            $("#loadingDiv").show();
        },
        success: function (result) {
            $("#loadingDiv").hide();
            if (result.succeded) {
                toastr.success('OTP has been Sent Successfully')
            } else {
                $("#ModalCenter").modal('hide');
                $('#lastFourNumber').val("");
                toastr["error"](result.error)
            }
        },
        error: function (err) {
            $("#loadingDiv").hide();
            $('#lastFourNumber').val("");
            toastr["error"](err)
        }
    });

}

function SaveProviderData() {
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
            if (currentPage == "PV_BasicInformation") {
                SaveBasicInformationPageData();
            } else if (currentPage == "PV_ContactInformation") {
                SaveContactInformationPageData();
            } else if (currentPage == "PV_Financial") {
                SaveFinicialPageData();
            } else if (currentPage == "PV_Integration") {
                SaveIntegrationPageData();
            } else if (currentPage == "PV_Licences") {
                SaveLicencesPageData();
            }
            $.ajax({
                url: "/Provider/SaveProviderData",
                type: 'POST',
                dataType: "json",
                data: { 'managementProvider': modelobject },
                success: function (data) {
                    if (data.success == 'success') {
                        var millisecondsToWait = 3000;
                        setTimeout(function () {
                            Swal.fire('Provider profile has been updated successfully', '', 'success');
                        }, millisecondsToWait);
                    }
                    $.ajax({
                        url: "/Provider/ProviderProfilePartial",
                        type: 'POST',
                        data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                        beforeSend: function () {
                        },
                        success: function (data) {
                            $('#profileContainerDiv').html(data);
                            Swal.fire('Provider Contract Updated Successfully', '', 'success');
                            //$("#loadingDiv").hide();
                            toastr["success"]("The data has been saved successfully")
                        },
                        error: function (xhr, status, error) {
                            alert(xhr.responseText);
                            toastr["error"](err + 2)
                        }
                    });
                },
                error: function () {
                    Swal.fire('Something worng haappened while updating provider profile', '', 'error');
                }
            });
        }
    });
}

function SetInitialProfileObjectValues(modelObject) {
    //debugger;
    modelObject.MasterProvider.CchiExpiryDate = getDateTimeIfDateTime(modelObject.MasterProvider.CchiExpiryDate);
    modelObject.MasterProvider.CustomerPortalProvCrnumberExpiration = getDateTimeIfDateTime(modelObject.MasterProvider.CustomerPortalProvCrnumberExpiration);
    modelObject.MasterProvider.CustomerPortalProvMedicalLicenseNumberExpiration = getDateTimeIfDateTime(modelObject.MasterProvider.CustomerPortalProvMedicalLicenseNumberExpiration);
    modelObject.MasterProvider.CreationDate = getDateTimeIfDateTime(modelObject.MasterProvider.CreationDate);
    if (modelObject.MasterProvider.LastModifiedDate != null || modelObject.MasterProvider.LastModifiedDate != undefined)
        modelObject.MasterProvider.LastModifiedDate = getDateTimeIfDateTime(modelObject.MasterProvider.LastModifiedDate);
    if (modelObject.MasterProvider.EboxDeliverDate != null || modelObject.MasterProvider.EboxDeliverDate != undefined)
        modelObject.MasterProvider.EboxDeliverDate = getDateTimeIfDateTime(modelObject.MasterProvider.EboxDeliverDate);
    if (modelObject.MasterProvider.HasAcontractDate != null || modelObject.MasterProvider.HasAcontractDate != undefined)
        modelObject.MasterProvider.HasAcontractDate = getDateTimeIfDateTime(modelObject.MasterProvider.HasAcontractDate);
    if (modelObject.MasterProvider.EnvironmentReadyDate != null || modelObject.MasterProvider.EnvironmentReadyDate != undefined)
        modelObject.MasterProvider.EnvironmentReadyDate = getDateTimeIfDateTime(modelObject.MasterProvider.EnvironmentReadyDate);
    if (modelObject.MasterProvider.MtsinstallationDate != null || modelObject.MasterProvider.MtsinstallationDate != undefined)
        modelObject.MasterProvider.MtsinstallationDate = getDateTimeIfDateTime(modelObject.MasterProvider.MtsinstallationDate);
    if (modelObject.MasterProvider.IntegrationDate != null || modelObject.MasterProvider.IntegrationDate != undefined)
        modelObject.MasterProvider.IntegrationDate = getDateTimeIfDateTime(modelObject.MasterProvider.IntegrationDate);
    if (modelObject.MasterProvider.FirstSubmissionDate != null || modelObject.MasterProvider.FirstSubmissionDate != undefined)
        modelObject.MasterProvider.FirstSubmissionDate = getDateTimeIfDateTime(modelObject.MasterProvider.FirstSubmissionDate);
    if (modelObject.MasterProvider.TrainingDate != null || modelObject.MasterProvider.TrainingDate != undefined)
        modelObject.MasterProvider.TrainingDate = getDateTimeIfDateTime(modelObject.MasterProvider.TrainingDate);
    if (modelObject.MasterProvider.LiveDate != null || modelObject.MasterProvider.LiveDate != undefined)
        modelObject.MasterProvider.LiveDate = getDateTimeIfDateTime(modelObject.MasterProvider.LiveDate);

    //debugger;
    modelobject = modelObject;
}

function getDateTimeIfDateTime(d) {
    var m = d.match(/\/Date\((\d+)\)\//);
    return m ? (new Date(+m[1])).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : d;
}

function ShowNewProviderPayerModal() {
    $('#NewPayerModal').modal('show');
}

function AddNewProviderPayer() {
    CheckNewPayerValidation();
    if (Flage == true) {
        //debugger;
        ProviderPayerModel.FkPayerId = $('#PayerId').val();
        ProviderPayerModel.FkProvId = $('#provID').val();
        ProviderPayerModel.FkSubmissionStatusId = $('#SubmissionStatusId').val();
        ProviderPayerModel.FkNetworkStatusWithPayerId = $('#NetworkStatusWithPayerId').val();
        ProviderPayerModel.ProviderCodeAtPayer = $('#ProviderCodeAtPayer').val();
        ProviderPayerModel.ProviderNameEnAtPayer = $('#ProviderNameEnAtPayer').val();
        ProviderPayerModel.ProviderNameArAtPayer = $('#ProviderNameArAtPayer').val();
        ProviderPayerModel.ClaimAverage = $('#ClaimAverage').val();
        ProviderPayerModel.TargetDateBatchSubmission = $('#TargetDatePatchSubmission').val();
        ProviderPayerModel.TargetDateBatchSubmission = $('#ActualDatePatchSubmission').val();
        ProviderPayerModel.FkDoneByProUserId = $('#UserId').val();

        Swal.fire({
            title: 'Are you sure you want to add new provider payer ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Save`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: "/Provider/AddNewProviderPayer",
                    type: 'POST',
                    dataType: "json",
                    data: { 'providerPayer': ProviderPayerModel },
                    success: function (data) {
                        if (data.success == 'success') {
                            var millisecondsToWait = 3000;
                            setTimeout(function () {
                                Swal.fire('New provider payer has been addeded successfully', '', 'success');
                            }, millisecondsToWait);
                        }
                        $('#NewPayerModal').modal('hide');
                        replaceContentsOfDiv('PV_Payers');
                    },
                    error: function () {
                        $('#NewPayerModal').modal('hide');
                        Swal.fire('Something worng haappened while updating provider profile', '', 'error');
                    }
                });
            }
        });
    }
}


function ShowApproveProfileModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#ApproveProfileModal').modal('show');
}

function ShowHasAcontractModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#ActiveContractModal').modal('show');
}

function ShowEnvironmentReadyModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#EnvironmentReadyModal').modal('show');
}

function ShowMTSInstallationModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#MTSInstallationModal').modal('show');
}

function ShowFirstSubmissionModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#FirstSubmissionModal').modal('show');
}

function ShowTrainingModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#TrainingModal').modal('show');
}

function ShowLiveModal(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#LiveModal').modal('show');
}

function ApproveProviderProfile() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var Approvalnotes = $('#Approvalnotes').val();
    Swal.fire({
        title: 'Do you want to approve the provider profile ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Approve profile`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            $('#loadingDiv2').hide();
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
                    $.ajax({
                        url: '/Provider/ApproveProviderProfile',
                        data: { 'provID': provID, 'notes': Approvalnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $('#ApproveProfileModal').modal('hide');
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Approved Successfully', '', 'success');
                                        toastr.success('Profile Approved Successfully');
                                    },
                                    error: function (xhr, status, error) {
                                        debugger;
                                        alert(xhr.responseText);
                                        $('#loadingDiv2').hide();
                                        $("#loadingDiv").hide();
                                        $('#lastFourNumber').val("");
                                        toastr["error"](err + 2)
                                    }
                                });
                            }
                        },
                        error: function () {
                            $('#loadingDiv2').hide();
                            $('#ApproveProfileModal').modal('hide');
                            Swal.fire('Error occurred while approving the profile', '', 'error');
                        }
                    });
                },
                willClose: () => {
                    $('#loadingDiv2').hide();
                    swal.stopLoading();
                    swal.stopLoading();
                }
            })
        }
    });
}

function UpdateMasterProviderHasAnActiveFlag() {
    var provID = $('#customerProviderID').val();
    var HasAnActivenotes = $('#HasAnActivenotes').val();
    Swal.fire({
        title: 'Do you want to sign the contract ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Sign`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            $('#loadingDiv2').hide();
            Swal.fire({
                title: 'Starting update status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $('#ActiveContractModal').modal('hide');
                    $.ajax({
                        url: '/Provider/UpdateMasterProviderHasAnActiveFlag',
                        data: { 'provID': provID, 'notes': HasAnActivenotes },
                        type: "Post",
                        success: function (data) {
                            toastr["success"]("The Contract status Updated Successfully");
                            if (data.success == 'success') {
                                var millisecondsToWait = 3000;
                                setTimeout(function () {
                                    Swal.fire('The Contract status Updated Successfully', '', 'success');
                                }, millisecondsToWait);
                                var url = "/CRM_Contracts/Index";
                                location.href = url;
                               
                            } else {
                                swal.stopLoading();
                                $('#loadingDiv2').hide();
                                $('#ActiveContractModal').modal('hide');
                                Swal.fire('Error occurred whiel updating the contract', '', 'error');
                                toastr["error"]("Error occurred whiel updating the contract");
                            }
                        },
                        error: function () {
                            swal.stopLoading();
                            $('#loadingDiv2').hide();
                            $('#ActiveContractModal').modal('hide');
                            Swal.fire('Error occurred whiel updating the contract', '', 'error');
                        }
                    });
                },
                willClose: () => {
                    $('#loadingDiv2').hide();
                    swal.stopLoading();
                    swal.stopLoading();
                }
            })
        }
    });
}

function UpdateMasterProviderEnvironmentFlag() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var Environmentnotes = $('#Environmentnotes').val();
    Swal.fire({
        title: 'Do you want to confirm the environment has been ready ?! ',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting update status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $('#loadingDiv').hide();
                    $('#EnvironmentReadyModal').modal('hide');
                    //console.log('EnvironmentReadyModal')
                    $.ajax({
                        url: '/Provider/UpdateMasterProviderEnvironmentFlag',
                        data: { 'provID': provID, 'notes': Environmentnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        //console.log('profileContainerDiv')

                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
                                        toastr.success('The data has been saved successfully');
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
                            $('#EnvironmentReadyModal').modal('hide');
                            Swal.fire('Profile Status Updated Successfully', '', 'error');
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

function UpdateMasterProviderMTSFlag() {
    var provID = $('#customerProviderID').val();
    var MTSnotes = $('#MTSnotes').val();
    Swal.fire({
        title: 'Do you want to confirm MTS has been install ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting update status',
                html: 'Process <b></b> ....',
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    //LoadResources();
                    $('#loadingDiv').hide();
                    $('#MTSInstallationModal').modal('hide');
                    $.ajax({
                        url: '/Provider/UpdateMasterProviderMTSFlag',
                        data: { 'provID': provID, 'notes': MTSnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
                                        toastr.success('The data has been saved successfully');
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
                            Swal.fire('Profile Status Updated Successfully', '', 'error');
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

function UpdateMasterProviderFirstSubmissionFlag() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var FirstSubmissionnotes = $('#FirstSubmissionnotes').val();
    Swal.fire({
        title: 'Do you want to confirm the first batch has been submission ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting update status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $('#FirstSubmissionModal').modal('hide');
                    $.ajax({
                        url: '/Provider/UpdateMasterProviderFirstSubmissionFlag',
                        data: { 'provID': provID, 'notes': FirstSubmissionnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
                                        toastr.success('The data has been saved successfully');
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
                            Swal.fire('Profile Status Updated Successfully', '', 'error');
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

function UpdateMasterProviderTrainingFlag() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var Trainingnotes = $('#Trainingnotes').val();
    Swal.fire({
        title: 'Do you want to confirm the traning has been completed ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting update status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $('#TrainingModal').modal('hide');
                    $.ajax({
                        url: '/Provider/UpdateMasterProviderTrainingFlag',
                        data: { 'provID': provID, 'notes': Trainingnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
                                        toastr.success('The data has been saved successfully');
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
                            Swal.fire('Profile Status Updated Successfully', '', 'error');
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


function UpdateMasterProviderLiveFlag() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var Livenotes = $('#Livenotes').val();
    Swal.fire({
        title: 'Do you want to confirm to go live ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting go live',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $('#LiveModal').modal('hide');
                    $("#loadingDiv").hide();
                    $.ajax({
                        url: '/Provider/UpdateMasterProviderLiveFlag',
                        data: { 'provID': provID, 'notes': Livenotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $('#LiveModal').modal('hide');
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        $('#LiveModal').modal('hide');
                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
                                        toastr.success('The data has been saved successfully');
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
                            $('#LiveModal').modal('hide');
                            Swal.fire('Profile Status Updated Successfully', '', 'error');
                        }
                    });
                },
                willClose: () => {
                    $('#LiveModal').modal('hide');
                    swal.stopLoading();
                }
            })
        }
    });
}



//function UpdateMasterProviderLiveFlag() {
//    //debugger;
//    var provID = $('#customerProviderID').val();
//    var Livenotes = $('#Livenotes').val();
//    Swal.fire({
//        title: 'Do you want to confirm to go live ?!',
//        showDenyButton: true,
//        showCancelButton: false,
//        confirmButtonText: `Update Status`,
//        denyButtonText: `Cancel`,
//        showLoaderOnConfirm: true,
//        allowOutsideClick: () => !Swal.isLoading()
//    }).then((result) => {
//        if (result.isConfirmed) {
//            Swal.fire({
//                title: 'Starting go live',
//                html: 'Process <b></b> ....',
//                //timer: 2000,
//                timerProgressBar: true,
//                didOpen: () => {
//                    Swal.showLoading()
//                    const content = Swal.getContent()
//                    if (content) {
//                        const b = content.querySelector('b')
//                        if (b) {
//                            b.textContent = 'Updating the status'
//                        }
//                    }
//                    $('#LiveModal').modal('hide');
//                    $.ajax({
//                        url: '/Provider/UpdateMasterProviderLiveFlag',
//                        data: { 'provID': provID, 'notes': Livenotes },
//                        type: "Post",
//                        success: function (data) {
//                            if (data.success == 'success') {
//                                $.ajax({
//                                    url: "/Provider/ProviderProfilePartial",
//                                    type: 'POST',
//                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
//                                    beforeSend: function () {
//                                    },
//                                    success: function (data) {
//                                        $('#profileContainerDiv').html(data);
//                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
//                                        toastr.success('The data has been saved successfully');
//                                    },
//                                    error: function (xhr, status, error) {
//                                        alert(xhr.responseText);
//                                        $("#loadingDiv").hide();
//                                        $('#lastFourNumber').val("");
//                                        toastr["error"](err + 2)
//                                    }
//                                });
//                            }
//                        },
//                        error: function () {
//                            $('#ApproveProfileModal').modal('hide');
//                            Swal.fire('Profile Status Updated Successfully', '', 'error');
//                        }
//                    });
//                },
//                willClose: () => {
//                    swal.stopLoading();
//                }
//            })
//        }
//    });
//}

function ShowNDAModel(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#ProviderNDASignedModal').modal('show');
}

function ShowLOAModel(customerProviderID) {
    $('#customerProviderID').val(customerProviderID);
    $('#ShowLOAModel').modal('show');
}

function UpdateMasterNDAFlag() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var NDAnotes = $('#NDASignednotes').val();
    Swal.fire({
        title: 'Confirm the NDA is signed ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating the NDA status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $.ajax({
                        url: '/Provider/UpdateMasterNDAFlag',
                        data: { 'provID': provID, 'notes': NDAnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $('#ProviderNDASignedModal').modal('hide');
                                toastr.success('The NDA status updated successfully');
                                var millisecondsToWait = 3000;
                                setTimeout(function () {
                                    Swal.fire('The NDA status updated successfully', '', 'success');
                                }, millisecondsToWait);
                                var url = "/CRM_Contracts/Index";
                                location.href = url;
                            }
                        },
                        error: function () {
                            $('#ProviderNDASignedModal').modal('hide');
                            Swal.fire('Error occurred while updating the profile', '', 'error');
                            toastr.error('Error occurred while updating the profile');
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

function UpdateMasterLOAFlag() {
    //debugger;
    var provID = $('#customerProviderID').val();
    var LOAnotes = $('#LOASignednotes').val();
    Swal.fire({
        title: 'Confirm the LOA is signed ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting updating status...',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();

                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $.ajax({
                        url: '/Provider/UpdateMasterLOAFlag',
                        data: { 'provID': provID, 'notes': LOAnotes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $('#ShowLOAModel').modal('hide');
                                var millisecondsToWait = 3000;
                                setTimeout(function () {
                                    Swal.fire('Profile updated Successfully', '', 'success');
                                }, millisecondsToWait);
                                var url = "/CRM_Contracts/Index";
                                location.href = url;
                                //const content2 = Swal.getContent()
                                //if (content2) {
                                //    const b2 = content2.querySelector('b')
                                //    if (b2) {
                                //        b2.textContent = 'Refreshing the list'
                                //    }
                                //}
                                //$('#ShowLOAModel').modal('hide');
                                //$.ajax({
                                //    url: '/CRM_Contracts/GetContractsListPartial',
                                //    type: "Get",
                                //    success: function (data) {
                                //        var millisecondsToWait = 2000;
                                //        setTimeout(function () {
                                //            $('#contractsTable').html(data);
                                //            Swal.fire('Contracts List Updated Successfully', '', 'success');
                                //            toastr.success('The data has been saved successfully');
                                //        }, millisecondsToWait);

                                //    },
                                //    complete: function () {
                                //    }
                                //});
                            }
                        },
                        error: function () {
                            $('#ShowLOAModel').modal('hide');
                            Swal.fire('Updating the Profile Status Failed', '', 'error');
                            toastr.error('Updating the Profile Status Failed');
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

function SendWorkOrderRequest(cutomerProvID) {
    Swal.fire({
        title: 'Do you want to send work order request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Request`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting sending work order...',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Sending'
                        }
                    }
                    $('#WorkorderRequestModal').modal('hide');
                    //debugger;
                    //console.log('EnvironmentReadyModal')
                    $.ajax({
                        url: '/Provider/SendWorkOrderRequest',
                        data: { 'custprovID': cutomerProvID, 'custvendID': modelobject.ProviderContract.FkVendorId },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Provider/ProviderProfilePartial",
                                    type: 'POST',
                                    data: { 'providerID': modelobject.MasterProvider.CustomerPortalProvId },
                                    beforeSend: function () {
                                    },
                                    success: function (data) {
                                        //console.log('profileContainerDiv')

                                        $('#profileContainerDiv').html(data);
                                        Swal.fire('Profile Status Updated Successfully', '', 'success');
                                        toastr.success('The data has been saved successfully');
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
                            $('#EnvironmentReadyModal').modal('hide');
                            Swal.fire('Profile Status Updated Successfully', '', 'error');
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


//-----------------------New Payer Validation-------------------------

var Flage = true;

$(document).ready(function () {
    $('#PayerId').on('change', function () {
        var PayerId = $('#PayerId').val();
        if (PayerId === "") {
            Flage = false;
            showSpan('#PayerId_span');
        } else {
            hideSpan('#PayerId_span');
        }
    });
    $('#SubmissionStatusId').on('change', function () {
        var SubmissionStatusId = $('#SubmissionStatusId').val();
        if (SubmissionStatusId === "") {
            Flage = false;
            showSpan('#SubmissionStatusId_span');
        } else {
            hideSpan('#SubmissionStatusId_span');
        }
    });
    $('#NetworkStatusWithPayerId').on('change', function () {
        var NetworkStatusWithPayerId = $('#NetworkStatusWithPayerId').val();
        if (NetworkStatusWithPayerId === "") {
            Flage = false;
            showSpan('#NetworkStatusWithPayerId_span');
        } else {
            hideSpan('#NetworkStatusWithPayerId_span');
        }
    });
    $('#UserId').on('change', function () {
        var UserId = $('#UserId').val();
        if (UserId === "") {
            Flage = false;
            showSpan('#UserId_span');
        } else {
            hideSpan('#UserId_span');
        }
    });
    $('#ProviderCodeAtPayer').keyup(function () {
        var ProviderCodeAtPayer = $('#ProviderCodeAtPayer').val();
        if (ProviderCodeAtPayer === "") {
            Flage = false;
            showSpan('#ProviderCodeAtPayer_span');
        }
        else {
            hideSpan('#ProviderCodeAtPayer_span');
        }
    });
    $('#ProviderNameEnAtPayer').keyup(function () {
        var ProviderNameEnAtPayer = $('#ProviderNameEnAtPayer').val();
        if (ProviderNameEnAtPayer === "") {
            Flage = false;
            showSpan('#ProviderNameEnAtPayer_span');
        }
        else {
            hideSpan('#ProviderNameEnAtPayer_span');
        }
    });
    $('#ProviderNameArAtPayer').keyup(function () {
        var ProviderNameArAtPayer = $('#ProviderNameArAtPayer').val();
        if (ProviderNameArAtPayer === "") {
            Flage = false;
            showSpan('#ProviderNameArAtPayer_span');
        }
        else {
            hideSpan('#ProviderNameArAtPayer_span');
        }
    });
    $('#ClaimAverage').keyup(function () {
        var ClaimAverage = $('#ClaimAverage').val();
        if (ClaimAverage === "") {
            Flage = false;
            showSpan('#ClaimAverage_span');
        }
        else {
            hideSpan('#ClaimAverage_span');
        }
    });
    $('#TargetDatePatchSubmission').keyup(function () {
        var TargetDatePatchSubmission = $('#TargetDatePatchSubmission').val();
        if (TargetDatePatchSubmission === "") {
            Flage = false;
            showSpan('#TargetDatePatchSubmission_span');
        }
        else {
            hideSpan('#TargetDatePatchSubmission_span');
        }
    });
    $("#TargetDatePatchSubmission").on('change', function (arg) {
        var TargetDatePatchSubmission = $('#TargetDatePatchSubmission').val();
        if (TargetDatePatchSubmission === "") {
            Flage = false;
            showSpan('#TargetDatePatchSubmission_span');
        }
        else {
            hideSpan('#TargetDatePatchSubmission_span');
        }
    });
    $('#ActualDatePatchSubmission').keyup(function () {
        var ActualDatePatchSubmission = $('#ActualDatePatchSubmission').val();
        if (ActualDatePatchSubmission === "") {
            Flage = false;
            showSpan('#ActualDatePatchSubmission_span');
        }
        else {
            hideSpan('#ActualDatePatchSubmission_span');
        }
    });
    $("#ActualDatePatchSubmission").on('change', function (arg) {
        var ActualDatePatchSubmission = $('#ActualDatePatchSubmission').val();
        if (ActualDatePatchSubmission === "") {
            Flage = false;
            showSpan('#ActualDatePatchSubmission_span');
        }
        else {
            hideSpan('#ActualDatePatchSubmission_span');
        }
    });
});// document ready

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}

function CheckNewPayerValidation() {
    Flage = true;
    var PayerId = $('#PayerId').val();
    if (PayerId === "") {
        Flage = false;
        showSpan('#PayerId_span');
    } else {
        hideSpan('#PayerId_span');
    }
    var SubmissionStatusId = $('#SubmissionStatusId').val();
    if (SubmissionStatusId === "") {
        Flage = false;
        showSpan('#SubmissionStatusId_span');
    } else {
        hideSpan('#SubmissionStatusId_span');
    }
    var NetworkStatusWithPayerId = $('#NetworkStatusWithPayerId').val();
    if (NetworkStatusWithPayerId === "") {
        Flage = false;
        showSpan('#NetworkStatusWithPayerId_span');
    } else {
        hideSpan('#NetworkStatusWithPayerId_span');
    }
    var UserId = $('#UserId').val();
    if (UserId === "") {
        Flage = false;
        showSpan('#UserId_span');
    } else {
        hideSpan('#UserId_span');
    }
    var ProviderCodeAtPayer = $('#ProviderCodeAtPayer').val();
    if (ProviderCodeAtPayer === "") {
        Flage = false;
        showSpan('#ProviderCodeAtPayer_span');
    }
    else {
        hideSpan('#ProviderCodeAtPayer_span');
    }
    var ProviderNameEnAtPayer = $('#ProviderNameEnAtPayer').val();
    if (ProviderNameEnAtPayer === "") {
        Flage = false;
        showSpan('#ProviderNameEnAtPayer_span');
    }
    else {
        hideSpan('#ProviderNameEnAtPayer_span');
    }
    var ProviderNameArAtPayer = $('#ProviderNameArAtPayer').val();
    if (ProviderNameArAtPayer === "") {
        Flage = false;
        showSpan('#ProviderNameArAtPayer_span');
    }
    else {
        hideSpan('#ProviderNameArAtPayer_span');
    }
    var ClaimAverage = $('#ClaimAverage').val();
    if (ClaimAverage === "") {
        Flage = false;
        showSpan('#ClaimAverage_span');
    }
    else {
        hideSpan('#ClaimAverage_span');
    }
    var TargetDatePatchSubmission = $('#TargetDatePatchSubmission').val();
    if (TargetDatePatchSubmission === "") {
        Flage = false;
        showSpan('#TargetDatePatchSubmission_span');
    }
    else {
        hideSpan('#TargetDatePatchSubmission_span');
    }

    var ActualDatePatchSubmission = $('#ActualDatePatchSubmission').val();
    if (ActualDatePatchSubmission === "") {
        Flage = false;
        showSpan('#ActualDatePatchSubmission_span');
    }
    else {
        hideSpan('#ActualDatePatchSubmission_span');
    }
}




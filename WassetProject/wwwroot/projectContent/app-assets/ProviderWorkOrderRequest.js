var ValidationFlag = true;

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

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
};

function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
};

function getDateIfDate(d) {
    var m = d.match(/\/Date\((\d+)\)\//);
    return m ? (new Date(+m[1])).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : d;
};

function getDateTimeIfDateTime(d) {
    var m = d.match(/\/Date\((\d+)\)\//);
    return m ? (new Date(+m[1])).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : d;
};

var modelobject = {
    "IntegReqRefNumber": "",
    "FkIntegReqReasonId": "",
    "Remarks": "",
    "Name": "",
    "Version": "",
    "Modules": "",
    "FkVersionSituationId": "",
    "GoLiveEta": "",
    "FkOperatingSystemId": "",
    "Databases": "",
    "FrontendLanguageUsed": "",
    "BackendLanguagesUsed": "",
    "ApplicationDeploymentOptions": "",
    "IntegrationOptionsAvailable": "",
    "CustomizationOptions": "",
    "ApplicationLanguages": "",
    "ApplicationSupport": ""
};

var modelObjectForTechnicalEvaluation = {
    "FkIntegReqId": "",
    "FkDhssystemId": "",
    "FkIntegrationTypeId": "",
    "FkTransIds": "",
    "FkPracticeTypeIds": "",
    "ThirdPartySoftwareNeeded": "",
    "EstimatedCompletionDate": "",
    "HowManyHours": "",
    "ManHour": "",
    "OtherCost": "",
    "Remarks": ""
};

function showTechnicalEvaluation(IntegReqId) {
    $.ajax({
        url: '/Vendor/GetTechnicalEvaluationByRequestID',
        type: "Get",
        data: { 'intReqId': IntegReqId },
        success: function (data) {
            $('#TE_vendorNameR').val(data.data.FkIntegReq.FkVenCont.FkVendor.VendorName);
            $('#TE_systemNameR').val(data.data.FkIntegReq.FkVendSys.Name);
            $('#TE_systemVersionR').val(data.data.FkIntegReq.FkVendSys.Version);
            $('#TE_requestDateR').val(getDateIfDate(data.data.FkIntegReq.IntegReqDate));
            $('#DHSSystemR').val(data.data.FkDhssystem.DhssystemValue);
            $('#IntegrationTypeR').val(data.data.FkIntegrationType.IntegrationTypeName);
            var Transactions = data.data.FkTransIds;
            var transactionsRes = Transactions.split(',');
            for (var i = 0; i < transactionsRes.length; i++) {
                if (transactionsRes[i] == "1") {
                    document.getElementById("MSVPSVR").checked = true;
                }
                else if (transactionsRes[i] == "2") {
                    document.getElementById("ApprovalR").checked = true;
                }
                else if (transactionsRes[i] == "3") {
                    document.getElementById("Approval").checked = true;
                }
            }
            var PracticeTypes = data.data.FkPracticeTypeIds;
            var PracticeTypesRes = PracticeTypes.split(',');
            for (var i = 0; i < PracticeTypesRes.length; i++) {
                if (PracticeTypesRes[i] == "1") {
                    document.getElementById("IPR").checked = true;
                }
                else if (PracticeTypesRes[i] == "2") {
                    document.getElementById("OPR").checked = true;
                }
            }
            $('#TE_thirdPartyR').val(data.data.ThirdPartySoftwareNeeded);
            $('#EstimatedCompletionDateR').val(getDateIfDate(data.data.EstimatedCompletionDate));
            $('#EffortR').val(data.data.HowManyHours);
            $('#ManHourR').val(data.data.ManHour);
            $('#OtherCostsR').val(data.data.OtherCost);
            $('#RemarksR').val(data.data.Remarks);


        },
        complete: function () {

        }
    });
    $('#technicalReadOnlyModal').modal('show');
}

var modelObjectForWorkshop = {
    "FkIntegReqId": "",
    "FkWsatId": "",
    "WsaDatetime": "",
    "WsaReason": "",
    "WsaParticipants": "",
    "WsaActivity": "",
    "WsaRemarks": ""
};

function PrePareIntegrationRequestModel() {
    //debugger;
    ValidationFlag = true;
    modelobject.IntegReqRefNumber = $('#IRN').val();
    modelobject.FkIntegReqReasonId = $('#IntegrationRequestReason').val();
    modelobject.Remarks = $('#Remarks').val();
    modelobject.Name = $('#SystemName').val();
    if (modelobject.Name == "") {
        showSpan('#SystemName_span');
        ValidationFlag = false;
    }
    modelobject.Version = $('#Version').val();
    GetModules();
    if (modelobject.Modules == "") {
        showSpan('#Modules_span');
        ValidationFlag = false;
    }
    modelobject.FkVersionSituationId = $('#VersionSituation').val();
    modelobject.GoLiveEta = $('#GoLiveETA').val();
    if ($('#GoLiveETA').val() === "") {
        showSpan('#GoLiveETA_span');
        ValidationFlag = false;
    }
    GetDatabases();
    if (modelobject.Databases == "") {
        showSpan('#Database_span');
        ValidationFlag = false;
    }
    else
        GetFrontendLanguageUsed();
    if (modelobject.FrontendLanguageUsed == "") {
        showSpan('#Front_span');
        ValidationFlag = false;
    }

    GetBackendLanguagesUsed();
    if (modelobject.BackendLanguagesUsed == "") {
        showSpan('#Back_span');
        ValidationFlag = false;
    }
    GetApplicationDeploymentOptions();
    if (modelobject.ApplicationDeploymentOptions == "") {
        showSpan('#Deployment_span');
        ValidationFlag = false;
    }
    GetIntegrationOptionsAvailable();
    if (modelobject.IntegrationOptionsAvailable == "") {
        showSpan('#Integration_span');
        ValidationFlag = false;
    }
    GetCustomizationOptions();
    GetApplicationLanguages();
    if (modelobject.ApplicationLanguages == "") {
        showSpan('#AppLanguages_span');
        ValidationFlag = false;
    }
    GetApplicationSupport();
    if (modelobject.ApplicationLanguages == "") {
        showSpan('#AppSupport_span');
        ValidationFlag = false;
    }
    modelobject.FkOperatingSystemId = $('#OperatingSystem').val();
    if (modelobject.FkOperatingSystemId == "") {
        showSpan('#OperatingSystem_span');
        ValidationFlag = false;
    }
    if (modelobject.FkVersionSituationId == "") {
        showSpan('#VersionSituation_span');
        ValidationFlag = false;
    }
    if (modelobject.FkIntegReqReasonId == "") {
        showSpan('#IntegrationRequestReason_span');
        ValidationFlag = false;
    }
}

function GetModules() {
    //debugger;
    modelobject.Modules = "";
    if (document.getElementById('Insurance').checked) {
        //$('#Insurance').checke
        modelobject.Modules += "1,";
    }
    if (document.getElementById('Frontoffice').checked) {
        modelobject.Modules += "2,";
    }
    if (document.getElementById('EMR').checked) {
        modelobject.Modules += "3,";
    }
    if (document.getElementById('LIS').checked) {
        modelobject.Modules += "4,";
    }
    if (document.getElementById('RIS').checked) {
        modelobject.Modules += "5,";
    }
    if (document.getElementById('Finance').checked) {
        modelobject.Modules += "6,";
    }
    if (document.getElementById('MasterSettings').checked) {
        modelobject.Modules += "7,";
    }
    if (document.getElementById('Billing').checked) {
        modelobject.Modules += "8,";
    }
    if (document.getElementById('Integration').checked) {
        modelobject.Modules += "9,";
    }
    if (document.getElementById('Others').checked) {
        modelobject.Modules += "10,";
    }
}

function GetDatabases() {
    modelobject.Databases = "";
    if (document.getElementById('Oracle').checked) {
        modelobject.Databases += "1,";
    }
    if (document.getElementById('MySQL').checked) {
        modelobject.Databases += "2,";
    }
    if (document.getElementById('MSSQLServer').checked) {
        modelobject.Databases += "3,";
    }
    if (document.getElementById('PostgreSQL').checked) {
        modelobject.Databases += "4,";
    }
    if (document.getElementById('DB2').checked) {
        modelobject.Databases += "5,";
    }
    if (document.getElementById('NoSQL').checked) {
        modelobject.Databases += "6,";
    }
    if (document.getElementById('Others').checked) {
        modelobject.Databases += "7,";
    }

}

function GetFrontendLanguageUsed() {
    modelobject.FrontendLanguageUsed = "";
    if (document.getElementById('HTML').checked) {
        modelobject.FrontendLanguageUsed += "1,";
    }
    if (document.getElementById('JavaScript').checked) {
        modelobject.FrontendLanguageUsed += "2,";
    }
    if (document.getElementById('OthersLang').checked) {
        modelobject.FrontendLanguageUsed += "3,";
    }
}

function GetBackendLanguagesUsed() {
    modelobject.BackendLanguagesUsed = "";
    if (document.getElementById('PHP').checked) {
        modelobject.BackendLanguagesUsed += "1,";
    }
    if (document.getElementById('Python').checked) {
        modelobject.BackendLanguagesUsed += "2,";
    }
    if (document.getElementById('Java').checked) {
        modelobject.BackendLanguagesUsed += "3,";
    }
    if (document.getElementById('DotNET').checked) {
        modelobject.BackendLanguagesUsed += "4,";
    }
    if (document.getElementById('Ruby').checked) {
        modelobject.BackendLanguagesUsed += "5,";
    }
    if (document.getElementById('NodeJs').checked) {
        modelobject.BackendLanguagesUsed += "6,";
    }
    if (document.getElementById('OthersBackLang').checked) {
        modelobject.BackendLanguagesUsed += "7,";
    }
}

function GetApplicationDeploymentOptions() {
    modelobject.ApplicationDeploymentOptions = "";
    if (document.getElementById('OnPremises').checked) {
        modelobject.ApplicationDeploymentOptions += "1,";
    }
    if (document.getElementById('Cloud').checked) {
        modelobject.ApplicationDeploymentOptions += "2,";
    }
    if (document.getElementById('Hybrid').checked) {
        modelobject.ApplicationDeploymentOptions += "3,";
    }
    if (document.getElementById('OthersAppOption').checked) {
        modelobject.BackendLanguagesUsed += "4,";
    }
}

function GetIntegrationOptionsAvailable() {
    modelobject.IntegrationOptionsAvailable = "";
    if (document.getElementById('DatabaseIntegration').checked) {
        modelobject.IntegrationOptionsAvailable += "1,";
    }
    if (document.getElementById('RESTAPI').checked) {
        modelobject.IntegrationOptionsAvailable += "2,";
    }
    if (document.getElementById('SOAPAPI').checked) {
        modelobject.IntegrationOptionsAvailable += "3,";
    }
    if (document.getElementById('HL7').checked) {
        modelobject.IntegrationOptionsAvailable += "4,";
    }
    if (document.getElementById('NotAvailable').checked) {
        modelobject.IntegrationOptionsAvailable += "5,";
    }
    if (document.getElementById('OthersIntegration').checked) {
        modelobject.IntegrationOptionsAvailable += "6,";
    }
}

function GetCustomizationOptions() {
    if (document.getElementById('Customizable').checked) {
        modelobject.CustomizationOptions = "1";
    }
    else {
        modelobject.CustomizationOptions = "2";
    }
}

function GetApplicationLanguages() {
    modelobject.ApplicationLanguages = "";
    if (document.getElementById('English').checked) {
        modelobject.ApplicationLanguages = "1,";
    }
    if (document.getElementById('Arabic').checked) {
        modelobject.ApplicationLanguages = "2,";
    }
    if (document.getElementById('OthersAppLang').checked) {
        modelobject.ApplicationLanguages = "3,";
    }
}

function GetApplicationSupport() {
    modelobject.ApplicationSupport = "";
    if (document.getElementById('OnlineSupport').checked) {
        modelobject.ApplicationSupport = "1,";
    }
    if (document.getElementById('OnSiteSupport').checked) {
        modelobject.ApplicationSupport = "2,";
    }
    if (document.getElementById('OtherSupport').checked) {
        modelobject.ApplicationSupport = "3,";
    }
}

function SubmitIntegrationRequest() {
    PrePareIntegrationRequestModel();
    if (ValidationFlag == true) {
        var CustomerPortalId = $('#CustVendIdForInteg').val();

        Swal.fire({
            title: 'Do you want to Send Integration Request?!',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Update Status`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Send Integration Request..',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Submitting the request'
                            }
                        }
                        $.ajax({
                            url: '/Vendor/IntegrationRequest',
                            data: { integrationRequestModel: modelobject, 'goLiveEta': modelobject.GoLiveEta, 'CustomerPortalId': CustomerPortalId },
                            type: "POST",
                            success: function (data) {
                                if (data.success == 'success') {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        Swal.fire('Integration Request Sent Successfully', '', 'success');
                                    }, millisecondsToWait);
                                    var url = "/Vendor/IntegrationRequests";
                                    location.href = url;
                                }
                            },
                            error: function () {
                                Swal.fire('Error occurred while sending the request', '', 'error');
                            }
                        });
                    },
                    willClose: () => {
                        swal.stopLoading();
                    }
                })
            }
        });




        //$.ajax({
        //    url: '/Vendor/IntegrationRequest',
        //    data: { integrationRequestModel: modelobject, 'goLiveEta': modelobject.GoLiveEta, 'CustomerPortalId': CustomerPortalId },
        //    type: "POST",
        //    success: function (data) {
        //        $('#placeHolderDiv').empty();
        //        $('#placeHolderDiv').html(data);
        //    }
        //});
    }
}

function StartTechnicalEvaluation(IntegReqId) {
    //debugger;
    Swal.fire({
        title: 'Do you want to start the technical evaluation for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Start`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating Integration Request',
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
                    $.ajax({
                        url: '/Provider/StartTechnicalEvaluation',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 2000;
                                    setTimeout(function () {
                                        toastr['success']('Integration Requests Updated Successfully', "Success");
                                        //$('#VendorIntegrationRequestsTable').empty();
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                    }, millisecondsToWait);
                                },
                                complete: function () {

                                }
                            });
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
//var IntegReqID = IntegReqId;

function ShowModalOfFillTechnicalEvaluation(IntegReqId) {
    IntegReqID = IntegReqId;
    ResetTechnicalEvaluationInputs();
    modelObjectForTechnicalEvaluation.FkIntegReqId = IntegReqID;
    Swal.fire({
        title: 'Preparing Technical Evaluation Form',
        html: 'Process <b></b> ....',
        confirmButtonText: 'Start Evaluation',
        //timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                    b.textContent = 'Fetching System Information'
                }
            }
            $.ajax({
                url: '/provider/GetProviderIntegrationRequestById',
                data: { 'intReqId': IntegReqId },
                type: "Get",
                success: function (data) {
                    const content2 = Swal.getContent()
                    if (content2) {
                        const b2 = content2.querySelector('b')
                        if (b2) {
                            b2.textContent = 'Binding the Data'
                        }
                        Swal.hideLoading()
                        //setting the default values
                        var TE_vendorName = document.getElementById('TE_vendorName');
                        TE_vendorName.value = data.data.FkVenCont.FkVendor.VendorName;

                        var TE_systemName = document.getElementById('TE_systemName');
                        TE_systemName.value = data.data.FkVendSys.Name;

                        var TE_systemVersion = document.getElementById('TE_systemVersion');
                        TE_systemVersion.value = data.data.FkVendSys.Version;

                        var TE_evaluationDate = document.getElementById('TE_requestDate');
                        TE_evaluationDate.value = getDateIfDate(data.data.IntegReqDate);

                        var TE_evaluationDate = document.getElementById('DHSSystems');
                        TE_evaluationDate.value = data.data.FkDhssystemId;

                        var TE_evaluationDate = document.getElementById('IntegrationTypes');
                        TE_evaluationDate.value = data.data.FkIntegrationTypeId;

                        var TE_evaluationDate = document.getElementById('IntegrationTypes');
                        TE_evaluationDate.value = data.data.FkIntegrationTypeId;
                    }
                }
            });
        },
        willClose: () => {
        }
    }).then((result) => {
        $('#technicalModal').modal('show');
        ValidateTechnicalEvaluationInputs();
    });
}

function ShowModalOfLogWorkshopActivity(IntegReqId) {
    ResetWorkshopActivityInputs();
    modelObjectForWorkshop.FkIntegReqId = IntegReqId;
    Swal.fire({
        title: 'Preparing Log Activity Form',
        html: 'Process <b></b> ....',
        confirmButtonText: 'Log Activity',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                    b.textContent = 'Fetching Request Information'
                }
            }
        },
        willClose: () => {
        }
    }).then((result) => {
        $('#WorkshopModal').modal('show');
        ValidateWorkshopInputs();
    });
}

function ShowModalOfAllWorkshopActivities(IntegReqId) {
    /*debugger*/;

    //ResetAllWorkshopActivities();
    Swal.fire({
        title: 'Preparing Log Activities List',
        html: 'Process <b></b> ....',
        //timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                    b.textContent = 'Fetching Workshop Activities'
                }
            }

            $.ajax({
                url: '/Vendor/GetIntegrationWorkshopActivitiesByIntegrationRequestID',
                data: { 'intReqId': IntegReqId },
                type: "Post",
                success: function (data) {
                    if (data.result == "success") {
                        //toastr['success']('Workshop Activities success to View', "Success");
                        $.each(data.data, function (key, item) {
                            var table = $('#TableModalallWorkshopModal').DataTable();
                            table.row.add($(
                                '<tr onclick="ViewActivityDetails(this)" id="' + item.WsaId + '">' +
                                '<td visibility: hidden>' + item.FkCreatorUser.WsaId + '</td>' +
                                '<td>' + item.FkCreatorUser.Name + '</td>' +
                                '<td>' + getDateTimeIfDateTime(item.WsaDatetime) + '</td>' +
                                '<td>' + item.FkWsat.WsatNameEn + '</td>' +
                                '<td>' + item.WsaParticipants + '</td>' +
                                '<td>' + item.WsaReason + '</td>' +
                                '<td>' + item.WsaActivity + '</td>' +
                                '<td><span><span class="tooltip"><a href="#" class="bx bx-show-alt blueActionBtn"  ></a><span class="tooltiptext" style="min-width: 95px;"> View Activity Details </span></td></span></span>' +
                                '</tr>'
                            )).draw(false);
                        });
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Workshop Activities are Ready to View'
                            }
                        }
                        var millisecondsToWait = 2000;
                        setTimeout(function () {
                            Swal.close();
                        }, millisecondsToWait);

                    }
                    else {
                        Swal.fire('Error occurred while retrieving the activities', '', 'error');
                    }
                }
            })
        },
        willClose: () => {
        }
    }).then((result) => {
        $('#ModalallWorkshopModal').modal('show');
    });
}



$("#DHSSystems").on('change', function () {
    $.ajax({
        url: '/Vendor/ChangeDHSSystem/' + $('#DHSSystems').val(),
        type: "Get",
        beforeSend: function () {
            $('#loadingDiv').show();
        },

        success: function (data) {
            $('#loadingDiv').hide();
            var select = $("#IntegrationTypes");
            select.empty();
            $.each(data, function (index, itemData) {
                select.append($('<option/>', {
                    value: itemData.Value,
                    text: itemData.Text
                }));
            });
        }
    });

    //if ($(this).val() == "") {
    //    $('#CountryListDiv').removeClass(" MandatoryDDLNormal");
    //}
    //else {
    //    $('#CountryListDiv').addClass(" MandatoryDDLNormal");
    //}
});

function PrePareModelForTechnicalEvaluation() {

    modelObjectForTechnicalEvaluation.FkDhssystemId = $('#DHSSystems').val();
    modelObjectForTechnicalEvaluation.FkIntegrationTypeId = $('#IntegrationTypes').val();

    if (document.getElementById('MSVPSV').checked) {
        modelObjectForTechnicalEvaluation.FkTransIds += "1,";
    }
    if (document.getElementById('Approval').checked) {
        modelObjectForTechnicalEvaluation.FkTransIds += "2,";
    }
    if (document.getElementById('ElectronicClaims').checked) {
        modelObjectForTechnicalEvaluation.FkTransIds += "3,";
    }
    if (document.getElementById('IP').checked) {
        //$('#Insurance').checke
        modelObjectForTechnicalEvaluation.FkPracticeTypeIds += "2,";
    }
    if (document.getElementById('OP').checked) {
        //$('#Insurance').checke
        modelObjectForTechnicalEvaluation.FkPracticeTypeIds += "1,";
    }
    modelObjectForTechnicalEvaluation.ThirdPartySoftwareNeeded = $('#TE_thirdParty').val();
    modelObjectForTechnicalEvaluation.EstimatedCompletionDate = $('#TEstimatedCompletionDate').val();
    modelObjectForTechnicalEvaluation.HowManyHours = $('#Effort').val();
    modelObjectForTechnicalEvaluation.ManHour = $('#ManHour').val();
    modelObjectForTechnicalEvaluation.OtherCost = $('#OtherCosts').val();
    modelObjectForTechnicalEvaluation.Remarks = $('#Remarks').val();
}

function PrePareModelForWorkshopActivity() {

    modelObjectForWorkshop.FkWsatId = $('#ActivityType').val();
    modelObjectForWorkshop.WsaDatetime = $('#ActivityDate').val();
    modelObjectForWorkshop.WsaReason = $('#ActivityReaseon').val();
    modelObjectForWorkshop.WsaActivity = $('#Activity').val();
    modelObjectForWorkshop.WsaRemarks = $('#WorkshopRemarks').val();


    var participantsList = [];
    $('#optionList li').each(function () {
        participantsList.push($(this).text());
    });

    var participantsListLength = participantsList.length;

    if (participantsListLength > 0) {
        for (var i = 0; i < participantsListLength; i++) {
            modelObjectForWorkshop.WsaParticipants += participantsList[i] + ",";
        }
    } else {
        modelObjectForWorkshop.WsaParticipants = "";
    }
}

$(document).ready(function () {
    $('#DHSSystems').keyup(function () {
        var DHSSystems = $('#DHSSystems').val();
        if (DHSSystems === "") {
            ValidationFlag = false;
            showSpan('#DHSSystems_span');
        }
        else {
            hideSpan('#DHSSystems_span');
        }
    })
});

$(document).ready(function () {
    //debugger;
    ValidateTechnicalEvaluationInputs();
    $('#DHSSystems').on('change', function () {
        ValidateTechnicalEvaluationInputs();
    });

    $('#IntegrationTypes').on('change', function () {
        ValidateTechnicalEvaluationInputs();
    });

    $('#Effort').keyup(function () {
        ValidateTechnicalEvaluationInputs();
    });

    $("#TEstimatedCompletionDate").on('change', function (arg) {
        ValidateTechnicalEvaluationInputs();
    });

    $('#MSVPSV').change(function () {
        ValidateTechnicalEvaluationInputs();
    });
    $('#Approval').change(function () {
        ValidateTechnicalEvaluationInputs();
    });
    $('#ElectronicClaims').change(function () {
        ValidateTechnicalEvaluationInputs();
    });
    $('#IP').change(function () {
        ValidateTechnicalEvaluationInputs();
    });
    $('#OP').change(function () {
        ValidateTechnicalEvaluationInputs();
    });


    //register the workshop listners to update the vaildation
    ValidateWorkshopInputs();
    $('#ActivityType').on('change', function () {
        ValidateWorkshopInputs();
    });

    $('#ActivityDate').on('change', function () {
        ValidateWorkshopInputs();
    });

    $('#Activity').keyup(function () {
        ValidateWorkshopInputs();
    });

});

$(document).ready(function () {
    //$('#IntegrationrequestsList').DataTable({
    //    "order": [[1, "desc"]]
    //});
    if ($.fn.dataTable.isDataTable('#IntegrationrequestsList')) { table = $('#IntegrationrequestsList').DataTable(); } else { table = $('#IntegrationrequestsList').DataTable({ "order": [[3, "desc"]] }); }
    $('#ActivityDate').datetimepicker({
        timepicker: true,
        datepicker: true,
        format: 'd/m/Y H:i',
        value: '',
        scrollMonth: false,
        scrollInput: false
    });
    $('#TEstimatedCompletionDate').datetimepicker({
        timepicker: false,
        datepicker: true,
        format: 'd/m/Y',
        value: '',
        scrollMonth: false,
        scrollInput: false
    });
    $('#optionList').on('click', '.itemDelete', function () {
        $(this).closest('li').remove();
        if ($('.itemDelete').length == 0) {
            $('#optionList').addClass("d-none");
            $('#optionList').removeClass("d-inherit");
        }
    });
    $('.select2').select2();
});

function SubmitTechnicalEvaluation() {
    if (ValidateTechnicalEvaluationInputs() == true) {
        Swal.fire({
            title: 'Are you sure you want to submit your final evaluation ?!',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Submit`,
            denyButtonText: `Cancel`,
            //showLoaderOnConfirm: true,
            //allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                PrePareModelForTechnicalEvaluation();
                Swal.fire({
                    title: 'Submitting Your Evaluation',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()

                        const content3 = Swal.getContent()
                        if (content3) {
                            const b3 = content3.querySelector('b')
                            if (b3) {
                                b3.textContent = 'Preparing evaluation data'
                            }
                        }

                        $.ajax({
                            url: '/Provider/SubmitIntegrationTechnicalEvaluation',
                            data: { 'integrationTechnicalEvaluation': modelObjectForTechnicalEvaluation, 'completionDate': modelObjectForTechnicalEvaluation.EstimatedCompletionDate },
                            type: "Post",
                            success: function (data) {
                                if (data.result == "success") {
                                    $('#technicalModal').modal('hide');

                                    const content3 = Swal.getContent()
                                    if (content3) {
                                        const b3 = content3.querySelector('b')
                                        if (b3) {
                                            b3.textContent = 'Refreshing the list'
                                        }
                                    }
                                    $.ajax({
                                        url: '/provider/UpdateWorkOrders',
                                        type: "Get",
                                        success: function (data) {
                                            var millisecondsToWait = 3000;
                                            setTimeout(function () {
                                                $('#VendorIntegrationRequestsTable').empty();
                                                $('#VendorIntegrationRequestsTable').html(data);
                                                Swal.fire('Your technical evaluation has been submitted successfully', '', 'success');
                                                toastr["success"]("Your technical evaluation has been submitted successfully");
                                            }, millisecondsToWait);
                                        }, error: function () {
                                            Swal.fire('Error occurred while updating the request list', '', 'error');
                                            toastr["error"]("Error occurred while updating the request list");
                                        },
                                        complete: function () {

                                        }
                                    });
                                }
                                else {
                                    Swal.fire('Error occurred while saving the evaluation', '', 'error');
                                }
                            }
                        })
                    },
                    willClose: () => {
                    }
                });
            }
        });
    }
}

function SubmitWorkshopActivity() {
    if (ValidateWorkshopInputs() == true) {
        Swal.fire({
            title: 'Are you sure you want to log this activity ?!',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Log`,
            denyButtonText: `Cancel`,
            //showLoaderOnConfirm: true,
            //allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                PrePareModelForWorkshopActivity();
                Swal.fire({
                    title: 'Logging Your Activity',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()

                        const content3 = Swal.getContent()
                        if (content3) {
                            const b3 = content3.querySelector('b')
                            if (b3) {
                                b3.textContent = 'Preparing activity data'
                            }
                        }

                        $.ajax({
                            url: '/Vendor/AddIntegrationWorkshopActivity',
                            data: { 'integrationWorkshopActivity': modelObjectForWorkshop, 'activityDate': modelObjectForWorkshop.WsaDatetime },
                            type: "Post",
                            success: function (data) {
                                if (data.result == "success") {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#WorkshopModal').modal('hide');
                                        Swal.fire('Your activity has been logged successfully', '', 'success');
                                        toastr["success"]("Your activity has been logged successfully");
                                    }, millisecondsToWait);
                                }
                                else {
                                    Swal.fire('Error occurred while saving the activity', '', 'error');
                                    toastr["error"]("Error occurred while saving the activity");
                                }
                            }
                        })
                    },
                    willClose: () => {
                    }
                });
            }
        });
    }
}

function ValidateTechnicalEvaluationInputs() {
    var isvaild = true;

    var DHSSystems = $('#DHSSystems').val();
    if (DHSSystems === "") {
        isvaild = false;
        showSpan('#DHSSystems_span');
        showSpan('#IntegrationTypes_span');
    } else {
        hideSpan('#DHSSystems_span');
        hideSpan('#IntegrationTypes_span');
    }

    var IntegrationTypes = $('#IntegrationTypes').val();
    if (IntegrationTypes === "") {
        isvaild = false;
        showSpan('#IntegrationTypes_span');
    } else {
        hideSpan('#IntegrationTypes_span');
    }

    var Effort = $('#Effort').val();
    if (Effort === "") {
        isvaild = false;
        showSpan('#Effort_span');
    }
    else {
        hideSpan('#Effort_span');
    }

    var EstimatedCompletionDate = $('#TEstimatedCompletionDate').val();
    if (EstimatedCompletionDate === "") {
        isvaild = false;
        showSpan('#EstimatedCompletionDate_span');
    }
    else {
        hideSpan('#EstimatedCompletionDate_span');
    }

    var EstimatedCompletionDate = $('#TEstimatedCompletionDate').val();
    if (EstimatedCompletionDate === "") {
        isvaild = false;
        showSpan('#EstimatedCompletionDate_span');
    }
    else {
        hideSpan('#EstimatedCompletionDate_span');
    }

    if (document.getElementById('MSVPSV').checked == false && document.getElementById('Approval').checked == false && document.getElementById('ElectronicClaims').checked == false) {
        isvaild = false;
        showSpan('#Transactions_span');
    }
    else {
        hideSpan('#Transactions_span');
    }

    if (document.getElementById('IP').checked == false && document.getElementById('OP').checked == false) {
        isvaild = false;
        showSpan('#Practice_span');
    }
    else {
        hideSpan('#Practice_span');
    }

    return isvaild;
}

function ValidateWorkshopInputs() {
    var isvaild = true;

    var ActivityType = $('#ActivityType').val();
    if (ActivityType === "") {
        isvaild = false;
        showSpan('#ActivityType_span');
    } else {
        hideSpan('#ActivityType_span');
    }

    var ActivityDate = $('#ActivityDate').val();
    if (ActivityDate === "") {
        isvaild = false;
        showSpan('#ActivityDate_span');
    }
    else {
        hideSpan('#ActivityDate_span');
    }

    var Activity = $("#Activity").val();

    if (Activity === "") {
        isvaild = false;
        showSpan('#Activity_span');
    }
    else {
        hideSpan('#Activity_span');
    }

    return isvaild;
}

function ResetTechnicalEvaluationInputs() {
    //to Resrt dropdownlists -- pendding
    document.getElementById('MSVPSV').checked = false;
    document.getElementById('Approval').checked = false;
    document.getElementById('ElectronicClaims').checked = false;
    document.getElementById('IP').checked = false;
    document.getElementById('OP').checked = false;
    $('#TE_thirdParty').val('');
    $('#TEstimatedCompletionDate').val('');
    $('#Effort').val('');
    $('#ManHour').val('');
    $('#OtherCosts').val('');
    $('#Remarks').val('');
}

function ResetWorkshopActivityInputs() {
    //to Resrt dropdownlists -- pendding
    //document.getElementById('MSVPSV').checked = false;
    //document.getElementById('Approval').checked = false;
    //document.getElementById('ElectronicClaims').checked = false;
    //document.getElementById('IP').checked = false;
    //document.getElementById('OP').checked = false;
    $('#ActivityType').val('');
    $('#ActivityDate').val('');
    $('#ActivityReaseon').val('');
    $('#Activity').val('');
    $('#WorkshopRemarks').val('');

    $('#optionList').empty()
}

function ResetAllWorkshopActivities() {
    $("#activitiesTable tr").remove();

}

function ResetIntegrationProgress() {
    $("#integReqProgressTableBody tr").remove();
}

function MarkAsReadyForIntegration(IntegReqId) {
    Swal.fire({
        title: 'Do you want to set this request as ready for integration workshop ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Ready for workshop`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating Integration Request',
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
                    $.ajax({
                        url: '/Provider/MarkAsReadyForIntegration',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        //toastr['success']('Integration Requests Updated Successfully', "Success");
                                        //$('#VendorIntegrationRequestsTable').empty();
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);

                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function StartIntegrationWorkshop(IntegReqId) {
    Swal.fire({
        title: 'You are about to start the integration workshop for this request, are you sure ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Start the workshop`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating Integration Request',
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
                    $.ajax({
                        url: '/Provider/StartIntegrationWorkshop',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Updating the integration list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        ///toastr['success']('Integration Requests Updated Successfully', "Success");
                                        //$('#VendorIntegrationRequestsTable').empty();
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);
                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function ViewActivityDetails(selectedrow) {
    //alert("Row index is: " + selectedrow.rowIndex);
    var FkCreatorUser = document.getElementById("TableModalallWorkshopModal").rows[selectedrow.rowIndex].cells[1].innerHTML;
    var DateTimeIfDateTime = document.getElementById("TableModalallWorkshopModal").rows[selectedrow.rowIndex].cells[2].innerHTML;
    var WsatNameEn = document.getElementById("TableModalallWorkshopModal").rows[selectedrow.rowIndex].cells[3].innerHTML;
    var WsaParticipants = document.getElementById("TableModalallWorkshopModal").rows[selectedrow.rowIndex].cells[4].innerHTML;
    var WsaReason = document.getElementById("TableModalallWorkshopModal").rows[selectedrow.rowIndex].cells[5].innerHTML;
    var WsaActivity = document.getElementById("TableModalallWorkshopModal").rows[selectedrow.rowIndex].cells[6].innerHTML;

    $('#ReActivityType').val(WsatNameEn);
    $('#ReActivity').val(WsaActivity);
    $('#ReActivityDate').val(DateTimeIfDateTime);
    if (WsaReason != 'null' && WsaReason != undefined && WsaReason != '') {
        $('#ReActivityReaseon').val(WsaReason);
    }
    else {
        $('#ReActivityReaseon').val('N/A');
    }
    if (WsaParticipants != null && WsaParticipants != undefined && WsaParticipants != '') {
        $('#ReParticipants').val(WsaParticipants);
    }
    else {
        $('#ReParticipants').val('N/A');
    }
    $('#WorkshopReadonlyModal').modal('show');
}

function CompleteWorkshop(IntegReqId) {

    Swal.fire({
        title: 'Do you want to complete the integration workshop for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Update Status`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Completing the Integration workshop',
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
                    $.ajax({
                        url: '/Provider/CompleteWorkshop',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);
                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function StartIntegrationQualityCheck(IntegReqId) {

    Swal.fire({
        title: 'Do you want to start the integration quality check for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Update Status`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting the Integration Quality Check',
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
                    $.ajax({
                        url: '/Provider/StartIntegrationQualityCheck',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);
                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function CompleteIntegrationQualityCheck(IntegReqId) {

    Swal.fire({
        title: 'Do you want to complete the integration quality check for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Update Status`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Completing the Integration Quality Check',
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
                    $.ajax({
                        url: '/Provider/CompleteIntegrationQualityCheck',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);

                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function StartFirstBatchQualityCheck(IntegReqId) {

    Swal.fire({
        title: 'Do you want to start first batch quality check for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Update Status`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Starting First Batch Quality Check',
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
                    $.ajax({
                        url: '/Provider/StartFirstBatchQualityCheck',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);
                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function CompleteFirstBatchQualityCheck(IntegReqId) {

    Swal.fire({
        title: 'Do you want to complete first batch quality check for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Update Status`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Completing First Batch Quality Check',
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
                    $.ajax({
                        url: '/Provider/CompleteFirstBatchQualityCheck',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);

                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function GoLive(IntegReqId) {

    Swal.fire({
        title: 'Do you want to go live for this request ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Go Live`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Going Live',
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
                    $.ajax({
                        url: '/Provider/GoLive',
                        data: { 'IntegReqId': IntegReqId },
                        type: "Get",
                        success: function (data) {
                            const content2 = Swal.getContent()
                            if (content2) {
                                const b2 = content2.querySelector('b')
                                if (b2) {
                                    b2.textContent = 'Refreshing the list'
                                }
                            }
                            $.ajax({
                                url: '/Provider/UpdateWorkOrders',
                                type: "Get",
                                success: function (data) {
                                    var millisecondsToWait = 3000;
                                    setTimeout(function () {
                                        $('#VendorIntegrationRequestsTable').html(data);
                                        Swal.fire('Integration Request Updated Successfully', '', 'success');
                                        toastr["success"]("Integration Request Updated Successfully");
                                    }, millisecondsToWait);

                                },
                                error: function () {
                                    Swal.fire('Error occurred while updating the integration request', '', 'error');
                                    toastr["error"]("Error occurred while updating the integration request");
                                },
                                complete: function () {

                                }
                            });
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

function ViewIntegrationRequestStatus(IntegReqId) {
    ResetIntegrationProgress();
    Swal.fire({
        title: 'Preparing Log Integration Progress List',
        html: 'Process <b></b> ....',
        //timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                    b.textContent = 'Fetching Integration Progress'
                }
            }
            $.ajax({
                url: '/Vendor/GetIntegrationRequestProgressByRequestID',
                data: { 'intReqId': IntegReqId },
                type: "Post",
                success: function (data) {
                    //alert(data.result);
                    if (data.result == "success") {
                        //debugger;
                        var html = '';
                        $.each(data.data, function (key, item) {
                            var integrationNote = '';
                            if (item.IntegReqProgressNotes != null) {
                                integrationNote = item.IntegReqProgressNotes;
                            }
                            else {
                                integrationNote = 'N/A';
                            }
                            var table = $('#IntegrationInfoTable').DataTable();
                            table.row.add($(
                                '<tr class="text-center">' +
                                '<td>' + item.FkUser.Name + '</td>' +
                                '<td>' + item.FkIntegReqStat.IntegReqStatValueEn + '</td>' +
                                '<td>' + getDateTimeIfDateTime(item.IntegReqProgressDate) + '</td>' +
                                '<td>' + integrationNote + '</td>' +
                                '</tr>'
                            )).draw(false);
                        });
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Integration Progress are Ready to View'
                            }
                        }
                        var millisecondsToWait = 2000;
                        setTimeout(function () {
                            Swal.close();
                        }, millisecondsToWait);

                    }
                    else {
                        Swal.close();
                        Swal.fire('Error occurred while retrieving the progress', '', 'error');
                    }
                }, error: function () {
                    Swal.close();
                    Swal.fire('Error occurred while retrieving the progress', '', 'error');
                }
            })
        },
        willClose: () => {
        }
    }).then((result) => {
        $('#IntegrationRequestStatusModal').modal('show');
    });
}

$(document).ready(function () {
    $('#SystemName').keyup(function () {
        modelobject.Name = $('#SystemName').val();
        if (modelobject.Name == "") {
            showSpan('#SystemName_span');
            ValidationFlag = false;
        }
        else {
            hideSpan('#SystemName_span');
        }
    });
});
$('#VersionSituation').on('change', function () {
    var VersionSituation = $('#VersionSituation').val();
    if (VersionSituation === "") {
        ValidationFlag = false;
        showSpan('#VersionSituation_span');
    }
    else {
        hideSpan('#VersionSituation_span');
    }
})
$('#OperatingSystem').on('change', function () {
    var OperatingSystem = $('#OperatingSystem').val();
    if (OperatingSystem === "") {
        ValidationFlag = false;
        showSpan('#OperatingSystem_span');
    }
    else {
        hideSpan('#OperatingSystem_span');
    }
})
$('#IntegrationRequestReason').on('change', function () {
    var IntegrationRequestReason = $('#IntegrationRequestReason').val();
    if (IntegrationRequestReason === "") {
        ValidationFlag = false;
        showSpan('#IntegrationRequestReason_span');
    }
    else {
        hideSpan('#IntegrationRequestReason_span');
    }
})

$("#GoLiveETA").on('dp.change', function (arg) {
    var GoLiveETA = $('#GoLiveETA').val();
    if (GoLiveETA === "") {
        ValidationFlag = false;
        showSpan('#GoLiveETA_span');
    }
    else {
        hideSpan('#GoLiveETA_span');
    }
});

function CheckModulesRequired() {
    GetModules();
    if (modelobject.Modules == "") {
        showSpan('#Modules_span');
    }
    else {
        hideSpan('#Modules_span');

    }
}

function CheckDatabaseRequired() {
    GetDatabases();
    if (modelobject.Databases == "") {
        showSpan('#Database_span');
    }
    else {
        hideSpan('#Database_span');

    }
}

function CheckFrontEndLanguageRequired() {
    GetFrontendLanguageUsed();
    if (modelobject.FrontendLanguageUsed == "") {
        showSpan('#Front_span');
    }
    else {
        hideSpan('#Front_span');

    }
}

function CheckBackEndLanguageRequired() {
    GetBackendLanguagesUsed();
    if (modelobject.BackendLanguagesUsed == "") {
        showSpan('#Back_span');
    }
    else {
        hideSpan('#Back_span');

    }
}

function CheckApplicationDeploymentOptionsRequired() {
    GetApplicationDeploymentOptions();
    if (modelobject.ApplicationDeploymentOptions == "") {
        showSpan('#Deployment_span');
    }
    else {
        hideSpan('#Deployment_span');

    }
}

function CheckIntegrationOptionsAvailableRequired() {
    GetIntegrationOptionsAvailable();
    if (modelobject.IntegrationOptionsAvailable == "") {
        showSpan('#Integration_span');
    }
    else {
        hideSpan('#Integration_span');

    }
}

function CheckApplicationLanguagesRequired() {
    GetApplicationLanguages();
    if (modelobject.ApplicationLanguages == "") {
        showSpan('#AppLanguages_span');
    }
    else {
        hideSpan('#AppLanguages_span');

    }
}

function CheckApplicationSupportRequired() {
    GetApplicationSupport();
    if (modelobject.ApplicationSupport == "") {
        showSpan('#AppSupport_span');
    }
    else {
        hideSpan('#AppSupport_span');

    }
}
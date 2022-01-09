var filesCCHI = [];
var fileCR = [];
var fileLicense = [];
var fileCC = [];
var loadingDiv = $("#loadingDiv");

$('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').datetimepicker({
    timepicker: false,
    datepicker: true,
    format: 'd/m/Y',
    value: '',
    scrollMonth: false,
    scrollInput: false
})

$(document).ready(function () {
    $("#mainForm").submit(function (e) {
        //return(validate());
        return ValidateInputs(e);
    });

    $("#filescchi").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') && this.files[i].size <= 1048576) {
                filesCCHI.push(this.files[i]);
                var path = this.files[i].name + " ";
                fullPath += " " + path;
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector1").html(fullPath);
        if (invalidFiles.length != 0) {
            alert("Only PDF files are supported & Max Size is 1MB!");

        }
        console.log(invalidFiles.length)
    });

    $("#filescr").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') && this.files[i].size <= 1048576) {
                fileCR.push(this.files[i]);
                var path = this.files[i].name;
                fullPath += "  " + path;
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector2").html(fullPath);
        if (invalidFiles.length != 0) {
            alert("Only PDF files are supported & Max Size is 1MB!");

        }

    });

    $("#fileslic").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') && this.files[i].size <= 1048576) {
                fileLicense.push(this.files[i]);
                var path = this.files[i].name;
                fullPath += "  " + path;
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector3").html(fullPath);
        if (invalidFiles.length != 0) {
            alert("Only PDF files are supported & Max Size is 1MB!");
        }

    });

    $("#licFiCC").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') && this.files[i].size <= 1048576) {
                fileCC.push(this.files[i]);
                var path = this.files[i].name;
                fullPath += "  " + path;
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector4").html(fullPath);
        if (invalidFiles.length != 0) {
            alert("Only PDF files are supported & Max Size is 1MB!");
        }
    });

    $("#filesNDABtn").on("click", function (e) {
        e.preventDefault();
        var fKVendorContId = $("#venContId").val();
        $.ajax({
            url: '/CRM_Contracts/DownloadFile',
            type: "GET",
            dataType: "json",
            data: { 'fKVendorContId': fKVendorContId, 'FileType': 7 },
            beforeSend: function () {
                loadingDiv.show();
            },
            success: function (result) {
                loadingDiv.hide();
                console.log(result)
                openPDF(result)
                $("#selector1").text(result.fileName)
            },
            error: function () {
                loadingDiv.hide();
                $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
            }
        });
    });

    $("#filescrBtn").on("click", function (e) {
        e.preventDefault();
        var fKVendorContId = $("#venContId").val();
        $.ajax({
            url: '/CRM_Contracts/DownloadFile',
            type: "GET",
            dataType: "json",
            data: { 'fKVendorContId': fKVendorContId, 'FileType': 5 },
            beforeSend: function () {
                loadingDiv.show();
            },
            success: function (result) {
                loadingDiv.hide();
                console.log(result)
                openPDF(result)
                $("#selector2").text(result.fileName)
            },
            error: function () {
                loadingDiv.hide();
                $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
            }
        });
    });

    $("#filesVATBtn").on("click", function (e) {

        e.preventDefault();
        var fKVendorContId = $("#venContId").val();
        $.ajax({
            url: '/CRM_Contracts/DownloadFile',
            type: "GET",
            dataType: "json",
            data: { 'fKVendorContId': fKVendorContId, 'FileType': 6 },
            beforeSend: function () {
                loadingDiv.show();
            },
            success: function (result) {
                loadingDiv.hide();
                console.log(result)
                openPDF(result)
                $("#selector3").text(result.fileName)
            },
            error: function () {
                loadingDiv.hide();
                $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
            }
        });
    });
});

function UploadFiles() {
    var out = { "succeded": false, "message": "" };

    if (window.FormData !== undefined) {
        //var fileUploadCCHI = $("#FileCCHI").get(0);
        //var fileUploadCR = $("#FileCR").get(0);
        //var fileUploadLicense = $("#FileLicense").get(0);
        //var fileUploadCC = $("#licFiCC").get(0);

        var filesCCHI = filesCCHI;
        var filesCR = filesCR;
        var filesLicense = filesLicense;
        var licFiCC = fileCC;

        //var filesCCHI = fileUploadCCHI.files;
        //var filesCR = fileUploadCR.files;
        //var filesLicense = fileUploadLicense.files;
        //var licFiCC = fileUploadCC.files;

        // Create FormData object
        var fileData = new FormData();

        // Looping over all filesCCHI and add it to FormData object
        // Looping over all filesCCHI and add it to FormData object
        for (var i = 0; i < filesCCHI.length; i++) {
            fileData.append("1_" + filesCCHI[i].name, "1_" + filesCCHI[i]);
        }


        // Looping over all filesCR and add it to FormData object
        for (var i = 0; i < filesCR.length; i++) {
            fileData.append("2_" + filesCR[i].name, "2_" + filesCR[i]);
        }

        // Looping over all filesLicense and add it to FormData object
        for (var i = 0; i < filesLicense.length; i++) {
            fileData.append("3_" + filesLicense[i].name, "3_" + filesLicense[i]);
        }

        for (var i = 0; i < licFiCC.length; i++) {
            fileData.append("4_" + licFiCC[i].name, "4_" + licFiCC[i]);
        }


        $.ajax({
            url: '/Contracts/UploadFiles',
            type: "POST",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: fileData,
            success: function (result) {
                if (result.succeded) {
                    out = { "succeded": true, "message": "" };
                } else {
                    out = { "succeded": false, "message": result.message };
                }
            },
            error: function (err) {
                out = { "succeded": false, "message": err };
            }
        });
    }
    return out;
}

function SendOtp() {
    var contractId = $("#contID").text();
    $.ajax({
        url: "/OTP/SendOTP",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({ contractId: contractId }),
        beforeSend: function () {
            //loadingDiv.show();
        },
        success: function (result) {
            $("#loadingDiv").hide();
            if (result.succeded) {
                alert("OTP Sent Successfully")
            } else {
                alert(result.error);
            }
        },
        error: function (err) {
            $("#loadingDiv").hide();
            alert(err);
        }
    });
}

function VerifyOTP() {
    var contractId = $("#contID").text();
    var otp = $('#OTPCode').val();

    $.ajax({
        url: "/OTP/VerifyOTP",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({ contractId: contractId, otp: otp }),
        beforeSend: function () {
            //loadingDiv.show();
        },
        success: function (result) {
            $("#loadingDiv").hide();
            if (result.succeded) {
                $("#submit").click();
            } else {
                alert(result.error);
                window.location.href = '/Login/Login';
            }
        },
        error: function (err) {
            $("#loadingDiv").hide();
            alert(err);
            window.location.href = '/Login/Login';
        }
    });
}

function Rejected() {
    var contractId = $("#contID").text();
    var RejectReason = $('#RejectReason').val();

    $.ajax({
        url: "/CRM_Contracts/Rejected",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({ ContractID: contractId, RejectReason: RejectReason }),
        beforeSend: function () {
            //loadingDiv.show();
        },
        success: function (result) {
            loadingDiv.hide();
            if (result.succeded) {
                $("#submit").click();
            } else {
                //alert(result.error);
            }
        },
        error: function (err) {
            loadingDiv.hide();
            //alert(err);
        }
    });
}

function ValidateInputs(form) {
    var valid = true;
    var message = [];


    //var FK_PricPln_ID = $('#FK_PricPln_ID').val();
    //if (FK_PricPln_ID === "") {
    //    message.push("لم يتم إختيار شريحة سعرية");
    //    valid = false;
    //}

    //var rd_ReqTypeNew = $('#rd_ReqTypeNew').is(':checked');
    //var rd_ReqTypeRenew = $('#rd_ReqTypeRenew').is(':checked');

    //if (rd_ReqTypeNew === false && rd_ReqTypeRenew === false) {
    //    message.push("يجب إختيار نوع الطلب");
    //    valid = false;
    //}
    //var planId = $("#FK_PricPln_ID").val();
    //if (planId == 6) {

    //}
    //else {
    //    var Cont_RegistrationNumber = $('#Cont_RegistrationNumber').val();
    //    if (Cont_RegistrationNumber === "") {
    //        message.push("رقم الإشتراك مفقود");
    //        valid = false;
    //    }
    //}

    //var Prov_CCHINumber = $('#Prov_CCHINumber').val();
    //if (Prov_CCHINumber === "") {
    //    message.push("رقم مجلس الضمان مفقود");
    //    valid = false;
    //} else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Prov_CCHINumber);
    //    if (!isEnglish) {
    //        message.push("رقم مجلس الضمان يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }
    //}

    //var Prov_CCHINumberExpiration = $('#Prov_CCHINumberExpirationDate').val();
    //if (Prov_CCHINumberExpiration === "") {
    //    message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
    //    valid = false;
    //}
    //if (planId == 6) {

    //}
    //else {
    //    var Prov_CRNumber = $('#Prov_CRNumber').val();
    //    if (Prov_CRNumber === "") {
    //        message.push("رقم السجل التجاري مفقود");
    //        valid = false;
    //    } else {
    //        var englishReg = /^[A-Za-z0-9]*$/;
    //        var isEnglish = englishReg.test(Prov_CRNumber);
    //        if (!isEnglish) {
    //            message.push("رقم السجل التجاري يجب أن يكون باللغة الإنجليزية");
    //            valid = false;
    //        }

    //        if (Prov_CRNumber.length < 10) {
    //            message.push("رقم السجل التجاري يجب أن يكون 10 أرقام");
    //            valid = false;
    //        }
    //    }

    //    var Prov_CRNumberExpiration = $('#Prov_CRNumberExpirationDate').val();
    //    if (Prov_CRNumberExpiration === "") {
    //        message.push("يجب إختيار تاريخ إنتهاء السجل التجاري");
    //        valid = false;
    //    }

    //    var Prov_MedicalLicenseNumber = $('#Prov_MedicalLicenseNumber').val();
    //    if (Prov_MedicalLicenseNumber === "") {
    //        message.push("رقم الترخيص الطبي مفقود");
    //        valid = false;
    //    } else {
    //        var englishReg = /^[A-Za-z0-9]*$/;
    //        var isEnglish = englishReg.test(Prov_MedicalLicenseNumber);
    //        if (!isEnglish) {
    //            message.push("رقم الترخيص الطبي يجب أن يكون باللغة الإنجليزية");
    //            valid = false;
    //        }

    //        if (Prov_MedicalLicenseNumber.length < 20) {
    //            message.push("رقم الترخيص الطبي يجب أن يكون 20 رقم");
    //            valid = false;
    //        }
    //    }

    //    var Prov_MedicalLicenseNumberExpiration = $('#Prov_MedicalLicenseNumberExpirationDate').val();
    //    if (Prov_MedicalLicenseNumberExpiration === "") {
    //        message.push("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
    //        valid = false;
    //    }

    //    var Prov_TAXNumber = $('#Prov_TAXNumber').val();
    //    if (Prov_TAXNumber === "") {
    //        message.push("الرقم الضريبي مفقود");
    //        valid = false;
    //    } else {
    //        var englishReg = /^[A-Za-z0-9]*$/;
    //        var isEnglish = englishReg.test(Prov_TAXNumber);
    //        if (!isEnglish) {
    //            message.push("الرقم الضريبي يجب أن يكون باللغة الإنجليزية");
    //            valid = false;
    //        }

    //        if (Prov_TAXNumber.length < 15) {
    //            message.push("الرقم الضريبي يجب أن يكون 15 رقم");
    //            valid = false;
    //        }
    //    }

    //    var Prov_CCNumber = $('#Prov_CCNumber').val();
    //    if (Prov_CCNumber === "") {
    //        message.push("رقم الغرفة التجارية مفقود");
    //        valid = false;
    //    } else {
    //        var englishReg = /^[A-Za-z0-9]*$/;
    //        var isEnglish = englishReg.test(Prov_CCNumber);
    //        if (!isEnglish) {
    //            message.push("رقم الغرفة التجارية يجب أن يكون باللغة الإنجليزية");
    //            valid = false;
    //        }

    //        if (Prov_CCNumber.length < 6) {
    //            message.push("رقم الغرفة التجارية يجب أن يكون 6 أرقام");
    //            valid = false;
    //        }
    //    }
    //}



    //var rd_FacTyp1 = $('#rd_FacTyp1').is(':checked');
    //var rd_FacTyp2 = $('#rd_FacTyp2').is(':checked');
    //var rd_FacTyp3 = $('#rd_FacTyp3').is(':checked');
    //var rd_FacTyp4 = $('#rd_FacTyp4').is(':checked');
    //var rd_FacTyp5 = $('#rd_FacTyp5').is(':checked');

    //if (rd_FacTyp1 === false && rd_FacTyp2 === false && rd_FacTyp3 === false && rd_FacTyp4 === false && rd_FacTyp5 === false) {
    //    message.push("يجب إختيار نوع المنشأة");
    //    valid = false;
    //}

    //var Prov_NameAr = $('#Prov_NameAr').val();
    //if (Prov_NameAr === "") {
    //    message.push("الإسم العربي للمنشأة مفقود");
    //    valid = false;
    //}

    //var Prov_NameEn = $('#Prov_NameEn').val();
    //if (Prov_NameEn === "") {
    //    message.push("اللإسم الإنجليزي للمنشأة مفقود");
    //    valid = false;
    //}

    //var Prov_City = $('#Prov_City').val();
    //if (Prov_City === "") {
    //    message.push("بيان المدينة مفقود");
    //    valid = false;
    //}

    //var Prov_PhoneNumber = $('#Prov_PhoneNumber').val();
    //if (Prov_PhoneNumber === "") {
    //    message.push("بيان الهاتف مفقود");
    //    valid = false;
    //} else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Prov_PhoneNumber);
    //    if (!isEnglish) {
    //        message.push("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }

    //    if (Prov_PhoneNumber.length < 12) {
    //        message.push("بيان الهاتف يجب أن يكون 12 أرقام");
    //        valid = false;
    //    }
    //}

    //var Prov_FaxNumber = $('#Prov_FaxNumber').val();
    //if (Prov_FaxNumber === "") {
    //    message.push("بيان الفاكس مفقود");
    //    valid = false;
    //} else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Prov_FaxNumber);
    //    if (!isEnglish) {
    //        message.push("بيان الفاكس يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }

    //    if (Prov_FaxNumber.length < 12) {
    //        message.push("بيان الفاكس يجب أن يكون 12 أرقام");
    //        valid = false;
    //    }
    //}

    //var Prov_District = $('#Prov_District').val();
    //if (Prov_District === "") {
    //    message.push("بيان الحي مفقود");
    //    valid = false;
    //}

    //var Prov_Street = $('#Prov_Street').val();
    //if (Prov_Street === "") {
    //    message.push("بيان الشارع مفقود");
    //    valid = false;
    //}

    //var Prov_MailBox = $('#Prov_MailBox').val();
    //if (Prov_MailBox === "") {
    //    message.push("بيان الصندوق البريدي مفقود");
    //    valid = false;
    //} else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Prov_MailBox);
    //    if (!isEnglish) {
    //        message.push("بيان الصندوق البريدي يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }
    //}

    //var Prov_ZipCode = $('#Prov_ZipCode').val();
    //if (Prov_ZipCode === "") {
    //    message.push("بيان الرمز البريدي مفقود");
    //    valid = false;
    //} else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Prov_ZipCode);
    //    if (!isEnglish) {
    //        message.push("بيان الرمز البريدي يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }

    //}

    //var Prov_Website = $('#Prov_Website').val();
    //if (Prov_Website === "") {
    //    message.push("بيان موقع المنشأة مفقود");
    //    valid = false;
    //}

    //var Prov_GMName = $('#Prov_GMName').val();
    //if (Prov_GMName === "") {
    //    message.push("بيان إسم المدير العام مفقود");
    //    valid = false;
    //}

    //var Prov_GMMobile = $('#Prov_GMMobile').val();
    //if (Prov_GMMobile === "") {
    //    message.push("بيان جوال المدير العام مفقود");
    //    valid = false;
    //}else {
    //    if (Prov_GMMobile.length != 12 || !Prov_GMMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Prov_GMEmail = $('#Prov_GMEmail').val();
    //if (Prov_GMEmail === "") {
    //    message.push("بيان البريد الإلكتروني للمدير العام مفقود");
    //    valid = false;
    //}else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Prov_GMEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var Prov_CFOName = $('#Prov_CFOName').val();
    //if (Prov_CFOName === "") {
    //    message.push("بيان إسم المدير المالي مفقود");
    //    valid = false;
    //}

    //var Prov_CFOMobile = $('#Prov_CFOMobile').val();
    //if (Prov_CFOMobile === "") {
    //    message.push("بيان جوال المدير المالي مفقود");
    //    valid = false;
    //} else {
    //    if (Prov_CFOMobile.length != 12 || !Prov_CFOMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Prov_CFOEmail = $('#Prov_CFOEmail').val();

    //            if (Prov_CFOEmail === "") {
    //    message.push("بيان البريد الإلكتروني للمدير المالي مفقود");
    //    valid = false;
    //} else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Prov_CFOEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var Cont_ClaimInChargeContactName = $('#Cont_ClaimInChargeContactName').val();
    //if (Cont_ClaimInChargeContactName === "") {
    //    message.push("بيان إسم مسؤول المطالبات مفقود");
    //    valid = false;
    //}

    //var Cont_ClaimInChargeContactMobile = $('#Cont_ClaimInChargeContactMobile').val();
    //if (Cont_ClaimInChargeContactMobile === "") {
    //    message.push("بيان جوال مسؤول المطالبات مفقود");
    //    valid = false;
    //}else {
    //    if (Cont_ClaimInChargeContactMobile.length != 12 || !Cont_ClaimInChargeContactMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Cont_ClaimInChargeContactEmail = $('#Cont_ClaimInChargeContactEmail').val();
    //if (Cont_ClaimInChargeContactEmail === "") {
    //    message.push("بيان البريد الإلكتروني لمسؤول المطالبات مفقود");
    //    valid = false;
    //}else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Cont_ClaimInChargeContactEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var Cont_CommunicationContactName = $('#Cont_CommunicationContactName').val();
    //if (Cont_CommunicationContactName === "") {
    //    message.push("بيان إسم مسؤول الإتصال مفقود");
    //    valid = false;
    //}

    //var Cont_CommunicationContactMobile = $('#Cont_CommunicationContactMobile').val();
    //if (Cont_CommunicationContactMobile === "") {
    //    message.push("بيان جوال مسؤول الإتصال مفقود");
    //    valid = false;
    //}else {
    //    if (Cont_CommunicationContactMobile.length != 12 || !Cont_CommunicationContactMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Cont_CommunicationContactEmail = $('#Cont_CommunicationContactEmail').val();
    //if (Cont_CommunicationContactEmail === "") {
    //    message.push("بيان البريد الإلكتروني لمسؤول الإتصال مفقود");
    //    valid = false;
    //}else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Cont_CommunicationContactEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var Cont_NotificationMobile = $('#Cont_NotificationMobile').val();
    //if (Cont_NotificationMobile === "") {
    //    message.push("رقم جوال الإشعارات مفقود");
    //    valid = false;
    //}else {
    //    if (Cont_NotificationMobile.length != 12 || !Cont_NotificationMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Cont_NotificationEmail = $('#Cont_NotificationEmail').val();
    //if (Cont_NotificationEmail === "") {
    //    message.push("البريد الإلكتروني للإشعارات مفقود");
    //    valid = false;
    //}else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Cont_NotificationEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var Cont_MainUserName = $('#Cont_MainUserName').val();
    //if (Cont_MainUserName === "") {
    //    message.push("إسم المستخدم الرئيسي مفقود");
    //    valid = false;
    //}

    //var Cont_MainUserIDNumber = $('#Cont_MainUserIDNumber').val();
    //if (Cont_MainUserIDNumber === "") {
    //    message.push("رقم هوية المستخدم الرئيسي مفقود");
    //    valid = false;
    //}else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Cont_MainUserIDNumber);
    //    if (!isEnglish) {
    //        message.push("رقم هوية المستخدم يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }

    //    if (Cont_MainUserIDNumber.length != 10) {
    //        message.push("رقم هوية المستخدم يجب أن يكون 10 أرقام");
    //        valid = false;
    //    }
    //}

    //var Cont_MainUserMobile = $('#Cont_MainUserMobile').val();
    //if (Cont_MainUserMobile === "") {
    //    message.push("رقم جوال المستخدم الرئيسي مفقود");
    //    valid = false;
    //}else {
    //    if (Cont_MainUserMobile.length != 12 || !Cont_MainUserMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Cont_MainUserEmail = $('#Cont_MainUserEmail').val();
    //if (Cont_MainUserEmail === "") {
    //    message.push("بيان البريد الإلكتروني للمستخدم الرئيسي مفقود");
    //    valid = false;
    //}else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Cont_MainUserEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var otherLang = $('#otherLang').val();

    //var rd_Lang1 = $('#rd_Lang1').is(':checked');
    //var rd_Lang2 = $('#rd_Lang2').is(':checked');

    //if (rd_Lang1 === false && rd_Lang2 === false && otherLang === "") {
    //    message.push("يجب إختيار اللغة المفضلة");
    //    valid = false;
    //}

    //var Cont_IsAgreementApproved = $('#Cont_IsAgreementApproved');
    //if (!Cont_IsAgreementApproved.is(":checked")) {
    //    message.push("يجب الموافقة على الإقرار");
    //    valid = false;
    //}

    //var Cont_AccreditedByName = $('#Cont_AccreditedByName').val();
    //if (Cont_AccreditedByName === "") {
    //    message.push("إسم المعتمد مفقود");
    //    valid = false;
    //}

    //var Cont_AccreditedByIDNumber = $('#Cont_AccreditedByIDNumber').val();
    //if (Cont_AccreditedByIDNumber === "") {
    //    message.push("رقم هوية المعتمد مفقود");
    //    valid = false;
    //}else {
    //    var englishReg = /^[A-Za-z0-9]*$/;
    //    var isEnglish = englishReg.test(Cont_AccreditedByIDNumber);
    //    if (!isEnglish) {
    //        message.push("رقم هوية المعتمد يجب أن يكون باللغة الإنجليزية");
    //        valid = false;
    //    }

    //    if (Cont_AccreditedByIDNumber.length != 10) {
    //        message.push("رقم هوية المعتمد يجب أن يكون 10 أرقام");
    //        valid = false;
    //    }
    //}

    //var Cont_AccreditedByMobile = $('#Cont_AccreditedByMobile').val();
    //if (Cont_AccreditedByMobile === "") {
    //    message.push("رقم جوال المعتمد مفقود");
    //    valid = false;
    //}else {
    //    if (Cont_AccreditedByMobile.length != 12 || !Cont_AccreditedByMobile.startsWith("9665")) {
    //        message.push("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
    //        valid = false;
    //    }
    //}

    //var Cont_AccreditedByTitle = $('#Cont_AccreditedByTitle').val();
    //if (Cont_AccreditedByTitle === "") {
    //    message.push("منصب المعتمد مفقود");
    //    valid = false;
    //}


    //var Cont_AccreditedByEmail = $('#Cont_AccreditedByEmail').val();
    //if (Cont_AccreditedByEmail === "") {
    //    message.push("بيان البريد الإلكتروني للمستخدم المعتمد مفقود");
    //    valid = false;
    //}else {
    //    var reg = /^([\w-\.]+)@@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    //    var testRsult = reg.test(Cont_AccreditedByEmail)
    //    if (!testRsult) {
    //        message.push("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
    //        valid = false;
    //    }
    //}

    //var filescchi = $('#filescchi').get(0);
    //if (filescchi.files.length == 0) {
    //    message.push("ملف إعتماد المنشأة غير مرفق");
    //    valid = false;
    //}

    if (planId == 6) {

    }
    //else {
    //     var filescr = $('#filescr').get(0);
    //    if (filescr.files.length == 0) {
    //        message.push("ملف السجل التجاري غير مرفق");
    //        valid = false;
    //    }

    //    var fileslic = $('#fileslic').get(0);
    //    if (fileslic.files.length == 0) {
    //        message.push("ملف الترخيص الطبي غير مرفق");
    //        valid = false;
    //    }
    //}

    $('#errorListId li').remove();
    if (!valid) {
        form.preventDefault();

        //alertify.alert("خطأ فى المدخلات",message);
        //@*style="display:none"*@ id = "validationDivId"

        if (message.length > 0) {
            $('#validationDivId').show();
        }
        var list = $('#errorListId');
        for (var i = 0; i < message.length; i++) {
            list.append("<li>" + message[i] + "</li>");
        }
    } else {
        $('#validationDivId').hide();
        var loadingDiv = $('#loadingDiv');
        loadingDiv.show();
    }
}

//function openPDF(res) {
//    if (res == "") {
//        $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
//    } else {
//        var ieEDGE = navigator.userAgent.match(/Edge/g);
//        var ie = navigator.userAgent.match(/.NET/g); // IE 11+
//        var oldIE = navigator.userAgent.match(/MSIE/g);
//        var bytes = new Uint8Array(res.file); //use this if data is raw bytes else directly pass resData
//        var blob = new window.Blob([bytes], { type: 'application/pdf' });

//        //if (ie || oldIE || ieEDGE) {
//        //    window.navigator.msSaveBlob(blob, res.fileName);
//        //}
//        //else {
//        //    var fileURL = URL.createObjectURL(blob);

//        //    // $("#CreateSection").html('<iframe src="' + fileURL + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')
//        //    $("#CreateSection").html('<object data ="' + fileURL + '" type="application/pdf" width="100%" height="450px" style="border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"><p>Oops! Your browser doesnt support PDFs!</p ><p><a href="' + fileURL + '" target="_blank">Download Instead</a></p></object >');

//        //}
//        //$("#selector1").text(res.fileName)

//        $("#CreateSection").html('<iframe src="data:application/pdf;base64,' + res.base64 + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')

//    }
//}

function openPDF(res) {
    if (res == "") {
        $("#CreateDiv").css("display", "none");
        $("#CreateSection").css("display", "block");
        $("#CanvaceDiv").css("display", "none");

        $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");

    }
    else {
        var ieEDGE = navigator.userAgent.match(/Edge/g);
        var ie = navigator.userAgent.match(/.NET/g); // IE 11+
        var oldIE = navigator.userAgent.match(/MSIE/g);
        var bytes = new Uint8Array(res.file); //use this if data is raw bytes else directly pass resData
        console.log(bytes);
        var blob = new window.Blob([bytes], { type: 'application/pdf' });

        //if (ie || oldIE || ieEDGE) {
        //    window.navigator.msSaveBlob(blob, res.fileName);
        //}
        //else {
        //    var fileURL = URL.createObjectURL(blob);

        //    $("#CreateSection").html('<iframe src="' + fileURL + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')

        //}
        //$("#selector1").text(res.fileName)

        // $("#CreateSection").html('<iframe src="data:application/pdf;base64,' + res.base64 + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')
        $("#CreateDiv").css("display", "inline-block");
        $("#CanvaceDiv").css("display", "inline-block");

        $("#CreateSection").css("display", "none");
        var fileURL = URL.createObjectURL(blob);
        handlePDFFile(fileURL, res.base64);

    }
}

function handlePDFFile(file, base64) {
    var reader = new FileReader();
    reader.onload = (function (reader) {
        return function () {
            var contents = "data:application/pdf;base64," + base64;
            var loadingTask = pdfjsLib.getDocument(contents);

            loadingTask.promise.then(function (pdf) {
                pdf.getPage(1).then(function (page) {
                    var scale = 1.5;
                    var viewport = page.getViewport({
                        scale: scale,
                    });

                    var canvas = document.getElementById('CreateDiv');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            });
        }
    })(reader);

    var blob = new window.Blob([file], { type: 'application/pdf' });
    reader.readAsDataURL(blob);
}
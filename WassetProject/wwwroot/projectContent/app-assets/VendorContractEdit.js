var partiesOptions = [];
var nextStep = true;
var valid = false;
//$("#mainForm").submit(function (e) {
//    //return(validate());
//    return ValidateInputs(e);
//});
function ValidateInputs() {
    valid = true;
    var message = [];
    var NameAr = $('#NameAr').val();
    var NameEn = $('#NameEn').val();
    $.ajax({
        url: '/VendorRegistration/CheckCustomerNameEnglish',
        data: { name: NameEn },
        type: "POST",
        success: function (data) {
            if (data == "True") {
                //debugger
                nextStep = false;
                showSpan('#NameEn_span1');
                valid = false;
            } else {
                hideSpan('#NameEn_span1');
            }
        }
    });
    $.ajax({
        url: '/VendorRegistration/CheckMasterNameEnglish',
        data: { name: NameEn },
        type: "POST",
        success: function (data) {
            if (data == "True") {
                //debugger
                nextStep = false;
                showSpan('#NameEn_span1');
                valid = false;
            } else {
                hideSpan('#NameEn_span1');
            }
        }
    });
    $.ajax({
        url: '/VendorRegistration/CheckMasterNameArabic',
        data: { name: NameAr },
        type: "POST",
        success: function (data) {
            if (data == "True") {
                //debugger
                nextStep = false;
                showSpan('#NameAr_span1');
                valid = false;
            } else {
                hideSpan('#NameAr_span1');
            }
        }
    });


    var NameAr = $('#NameAr').val();
    if (NameAr === "") {
        nextStep = false;
        showSpan('#NameAr_span');
        valid = false;
        //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
    }
    else {
        hideSpan('#NameAr_span');
        //valid = true;
    }
    //=================================

    var NameEn = $('#NameEn').val();
    if (NameEn === "") {
        nextStep = false;
        showSpan('#NameEn_span');
        valid = false;
        //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
    }
    else {
        hideSpan('#NameEn_span');
    }
    //=========================
    var CityList = $('#CityList').val();
    if (CityList === "" || CityList == null) {
        nextStep = false;
        showSpan('#CityList_span');
        valid = false;
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#CityList_span');
    }
    //==================================
    var CountryList = $('#CountryList').val();
    if (CountryList === "") {
        nextStep = false;
        showSpan('#CountryList_span');
        valid = false;
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#CountryList_span');
    }
    //==================================
    //var Website = $('#Website').val();
    //if (Website === "") {
    //    nextStep = false;
    //    showSpan('#Website_span');
    //    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    //} else {
    //    hideSpan('#Website_span');
    //}
    //==================================
    var VendorTypeList = $('#VendorTypeList').val();
    if (VendorTypeList === "") {
        nextStep = false;
        showSpan('#VendorTypeList_span');
        valid = false;
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#VendorTypeList_span');
    }
    //==================================
    //var rd_Lang1 = $('#rd_Lang1').is(':checked');
    //var rd_Lang2 = $('#rd_Lang2').is(':checked');
    //var OtherLang = $('#OtherLang').val();
    //if (rd_Lang1 === false && rd_Lang2 === false && OtherLang === "") {
    //    nextStep = false;
    //    showSpan('#User_Language_Span');
    //    valid = false;
    //}
    //else {
    //    hideSpan('#User_Language_Span');
    //}
    ///==================================================start
    var MainContractName = $('#MainContractName').val();
    if (MainContractName === "") {
        nextStep = false;
        showSpan('#MainContractName_span');
        valid = false;
        //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
    }
    else {
        hideSpan('#MainContractName_span');
        //valid = true;
    }
    //=================================
    var MainContactMobile = $('#MainContactMobile').val();
    if (MainContactMobile === "") {
        nextStep = false;
        showSpan('#MainContactMobile_span');
        valid = false;
        //$('#Prov_PhoneNumber_Span').text("بيان الهاتف مفقود");
    } else {
        var englishReg = /^[A-Za-z0-9]*$/;
        var isEnglish = englishReg.test(MainContactMobile);
        if (!isEnglish) {

            nextStep = false;
            showSpan('#MainContactMobile_span');
            valid = false;
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
        }
        else {
            hideSpan('#MainContactMobile_span');
        }
        var x = !MainContactMobile.startsWith('9665');
        if (x || MainContactMobile.length < 12) {
            nextStep = false;
            showSpan('#MainContactMobile_span');
            valid = false;
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون 12 أرقام");
        } else {
            hideSpan('#MainContactMobile_span');
        }
    }
    //=====================
    var MainContactEmail = $('#MainContactEmail').val();
    if (MainContactEmail === "") {
        nextStep = false;
        showSpan('#MainContactEmail_span');
        valid = false;
    } else {
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var testRsult = reg.test(MainContactEmail)
        if (!testRsult) {
            nextStep = false;
            hideSpan('#MainContactEmail_span');
            showSpan('#MainContactEmail_span1');
            valid = false;
            //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
        }
        else {
            hideSpan('#MainContactEmail_span');
            hideSpan('#MainContactEmail_span1');
        }
    }
    //==========================
    var ContactPerson = $('#ContactPerson').val();
    if (ContactPerson === "") {
        nextStep = false;
        showSpan('#ContactPerson_span');
        valid = false;
        //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
    }
    else {
        hideSpan('#ContactPerson_span');
    }
    //=========================
    var ContactJobTitle = $('#ContactJobTitle').val();
    if (ContactJobTitle === "") {
        nextStep = false;
        showSpan('#ContactJobTitle_span');
        valid = false;
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#ContactJobTitle_span');
    }
    //==================================
    var ContactEmail = $('#ContactEmail').val();
    if (ContactEmail === "") {
        nextStep = false;
        valid = false;
        showSpan('#ContactEmail_span');
    } else {
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var testRsult = reg.test(ContactEmail)
        if (!testRsult) {
            nextStep = false;
            valid = false;
            hideSpan('#ContactEmail_span');
            showSpan('#ContactEmail_span1');
            //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
        }
        else {
            hideSpan('#ContactEmail_span');
            hideSpan('#ContactEmail_span1');
        }
    }
    //=============================
    //=================================
    var ContactMobile = $('#ContactMobile').val();
    if (ContactMobile === "") {
        nextStep = false;
        showSpan('#ContactMobile_span');
        valid = false;
        //$('#Prov_PhoneNumber_Span').text("بيان الهاتف مفقود");
    } else {
        var englishReg = /^[A-Za-z0-9]*$/;
        var isEnglish = englishReg.test(ContactMobile);
        if (!isEnglish) {
            nextStep = false;
            showSpan('#ContactMobile_span');
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
        }
        else {
            hideSpan('#ContactMobile_span');
        }

        var x = !ContactMobile.startsWith('9665');
        if (x || ContactMobile.length < 12) {
            nextStep = false;
            showSpan('#ContactMobile_span');
            valid = false;
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون 12 أرقام");
        } else {
            hideSpan('#ContactMobile_span');
        }
    }


    //==========Type Request================
    var rd_ReqTypeNew = $('#rd_ReqTypeNew').is(':checked');
    var rd_ReqTypeRenew = $('#rd_ReqTypeRenew').is(':checked');
    if (rd_ReqTypeNew === false && rd_ReqTypeRenew === false) {
        nextStep = false;
        showSpan('#ReqType_Span');
        valid = false;
        // $(".starInvalid").text("يجب إختيار نوع الطلب")
    }
    else {
        hideSpan('#ReqType_Span');
    }
    //==================================
    var rd_Lang1 = $('#rd_Lang1').is(':checked');
    var rd_Lang2 = $('#rd_Lang2').is(':checked');
    var OtherLang = $('#OtherLang').val();
    if (rd_Lang1 === false && rd_Lang2 === false && OtherLang === "") {
        nextStep = false;
        showSpan('#User_Language_Span');
        valid = false;
    }
    else {
        hideSpan('#User_Language_Span');
    }
    ///=============================
    var agreement = $("input[type=checkbox]").val() ? 1 : 0;
    if (agreement == 0) {
        nextStep = false;
        showSpan('#Cont_IsAgreementApproved_Span');
    } else {
        hideSpan('#Cont_IsAgreementApproved_Span');
    }
    ///=============================


    if (!valid) { //false
        //console.log("Form not Submitted");
        form.preventDefault();
        //if (message.length > 0) {
        //    $('#validationDivId').show();
        //}
        //var list = $('#errorListId');
        //for (var i = 0; i < message.length; i++) {
        //    list.append("<li>" + message[i] + "</li>");
        //}
    }
    else {
        //console.log("Form Submitted");
        //$('#validationDivId').hide();
        //var loadingDiv = $('#loadingDiv');
        //form.preventDefault();
        //SendOtp();
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

$(document).ready(function () {
    $(".MandatoryInput").addClass("NormalInput");
    $('#CountryListDiv').addClass(" MandatoryDDLNormal");
    $('#CityListDiv').addClass(" MandatoryDDLNormal");
    $('#VendorTypeDiv').addClass(" MandatoryDDLNormal");

    $('#MainContractName').keyup(function () {
        var MainContractName = $('#MainContractName').val();
        if (MainContractName === "") {
            nextStep = false;
            showSpan('#MainContractName_span');
        }
        else {
            hideSpan('#MainContractName_span');
        }
    })
    $('#MainContactMobile').keyup(function () {
        var MainContactMobile = $('#MainContactMobile').val();
        if (MainContactMobile === "") {
            nextStep = false;
            showSpan('#MainContactMobile_span');
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(MainContactMobile);
            if (!isEnglish) {

                nextStep = false;
                showSpan('#MainContactMobile_span');
            }
            else {
                hideSpan('#MainContactMobile_span');
            }
            var x = !MainContactMobile.startsWith('9665');
            if (x || MainContactMobile.length < 12) {
                nextStep = false;
                showSpan('#MainContactMobile_span');
            } else {
                hideSpan('#MainContactMobile_span');
            }
        }
    })
    $('#MainContactEmail').keyup(function () {
        var MainContactEmail = $('#MainContactEmail').val();
        if (MainContactEmail === "") {
            nextStep = false;
            showSpan('#MainContactEmail_span');
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(MainContactEmail)
            if (!testRsult) {
                nextStep = false;
                hideSpan('#MainContactEmail_span');
                showSpan('#MainContactEmail_span1');
            }
            else {
                hideSpan('#MainContactEmail_span');
                hideSpan('#MainContactEmail_span1');
            }
        }
    })
    $('#ContactPerson').keyup(function () {
        var ContactPerson = $('#ContactPerson').val();
        if (ContactPerson === "") {
            nextStep = false;
            showSpan('#ContactPerson_span');
        }
        else {
            hideSpan('#ContactPerson_span');
        }
    })
    $('#ContactJobTitle').keyup(function () {
        var ContactJobTitle = $('#ContactJobTitle').val();
        if (ContactJobTitle === "") {
            nextStep = false;
            showSpan('#ContactJobTitle_span');
        } else {
            hideSpan('#ContactJobTitle_span');
        }
    })
    $('#ContactEmail').keyup(function () {
        var ContactEmail = $('#ContactEmail').val();
        if (ContactEmail === "") {
            nextStep = false;
            showSpan('#ContactEmail_span');
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContactEmail)
            if (!testRsult) {
                nextStep = false;
                hideSpan('#ContactEmail_span');
                showSpan('#ContactEmail_span1');
            }
            else {
                hideSpan('#ContactEmail_span');
                hideSpan('#ContactEmail_span1');
            }
        }
    })
    $('#ContactMobile').keyup(function () {
        var ContactMobile = $('#ContactMobile').val();
        if (ContactMobile === "") {
            nextStep = false;
            showSpan('#ContactMobile_span');
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(ContactMobile);
            if (!isEnglish) {

                nextStep = false;
                showSpan('#ContactMobile_span');
            }
            else {
                hideSpan('#ContactMobile_span');
            }
            var x = !ContactMobile.startsWith('9665');
            if (x || ContactMobile.length < 12) {
                nextStep = false;
                showSpan('#ContactMobile_span');
            } else {
                hideSpan('#ContactMobile_span');
            }
        }
    })
    $("#Ceo").keyup(function () {
        if (this.val() == "") {
            showSpan("#Ceo_span")
        } else {
            hideSpan("#Ceo_span")
        }
    })
    $("#Ceophone").keyup(function () {
        var ceoPhone = $("#Ceophone").val();
        if (ceoPhone == "") {
            hideSpan("#Ceophone_span")
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(ceoPhone);
            if (!isEnglish) {
                showSpan('#Ceophone_span');
            }
            else {
                hideSpan('#Ceophone_span');
            }
            var x = !ceoPhone.startsWith('9665');
            if (x || ceoPhone.length < 12) {

                showSpan('#Ceophone_span');
            } else {
                hideSpan('#Ceophone_span');
            }
        }
    })
    $("#Ceoemail").keyup(function () {
        var Ceoemail = $("#Ceoemail").val();
        if (Ceoemail == "") {
            hideSpan('#Ceoemail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Ceoemail)
            if (!testRsult) {
                showSpan('#Ceoemail_span');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                hideSpan('#Ceoemail_span');
            }
        }

    })
    $("#ItmanagePhone").keyup(function () {
        var ItmanagePhone = $("#ItmanagePhone").val();
        if (ItmanagePhone == "") {
            hideSpan("#ItmanagePhone_span")
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(ItmanagePhone);
            if (!isEnglish) {
                showSpan('#ItmanagePhone_span');
            }
            else {
                hideSpan('#ItmanagePhone_span');
            }
            var x = !ItmanagePhone.startsWith('9665');
            if (x || ItmanagePhone.length < 12) {

                showSpan('#ItmanagePhone_span');
            } else {
                hideSpan('#ItmanagePhone_span');
            }
        }

    })
    $("#ItmanagerEmail").keyup(function () {
        var ItmanagerEmail = $("#ItmanagerEmail").val();
        if (ItmanagerEmail == "") {
            hideSpan('#ItmanagerEmail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ItmanagerEmail)
            if (!testRsult) {
                showSpan('#ItmanagerEmail_span');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                hideSpan('#ItmanagerEmail_span');
            }
        }
    })
    $("#IntegrationProjectManagerPhone").keyup(function () {
        var IntegrationProjectManagerPhone = $("#IntegrationProjectManagerPhone").val();
        if (IntegrationProjectManagerPhone == "") {
            hideSpan("#IntegrationProjectManagerPhone_span")
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(IntegrationProjectManagerPhone);
            if (!isEnglish) {
                showSpan('#IntegrationProjectManagerPhone_span');
            }
            else {
                hideSpan('#IntegrationProjectManagerPhone_span');
            }
            var x = !IntegrationProjectManagerPhone.startsWith('9665');
            if (x || IntegrationProjectManagerPhone.length < 12) {

                showSpan('#IntegrationProjectManagerPhone_span');
            } else {
                hideSpan('#IntegrationProjectManagerPhone_span');
            }

        }
    })
    $("#IntegrationProjectManagerEmail").keyup(function () {
        var IntegrationProjectManagerEmail = $("#IntegrationProjectManagerEmail").val();
        if (IntegrationProjectManagerEmail == "") {
            hideSpan('#IntegrationProjectManagerEmail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(IntegrationProjectManagerEmail)
            if (!testRsult) {
                showSpan('#IntegrationProjectManagerEmail_span');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                hideSpan('#IntegrationProjectManagerEmail_span');
            }
        }
    })
    $("#BusinessDevelopmentManagerPhone").keyup(function () {
        var BusinessDevelopmentManagerPhone = $("#BusinessDevelopmentManagerPhone").val();
        if (BusinessDevelopmentManagerPhone == "") {
            hideSpan("#BusinessDevelopmentManagerPhone_span")
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(BusinessDevelopmentManagerPhone);
            if (!isEnglish) {
                showSpan('#BusinessDevelopmentManagerPhone_span');
            }
            else {
                hideSpan('#BusinessDevelopmentManagerPhone_span');
            }
            var x = !BusinessDevelopmentManagerPhone.startsWith('9665');
            if (x || BusinessDevelopmentManagerPhone.length < 12) {

                showSpan('#BusinessDevelopmentManagerPhone_span');
            } else {
                hideSpan('#BusinessDevelopmentManagerPhone_span');
            }
        }
    })
    $("#BusinessDevelopmentManagerEmail").keyup(function () {
        var BusinessDevelopmentManagerEmail = $("#BusinessDevelopmentManagerEmail").val();
        if (BusinessDevelopmentManagerEmail == "") {
            hideSpan('#BusinessDevelopmentManagerEmail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(BusinessDevelopmentManagerEmail)
            if (!testRsult) {
                showSpan('#BusinessDevelopmentManagerEmail_span');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                hideSpan('#BusinessDevelopmentManagerEmail_span');
            }
        }

    })
    $("#FinanceManagerPhone").keyup(function () {
        var FinanceManagerPhone = $("#FinanceManagerPhone").val();
        if (FinanceManagerPhone == "") {
            hideSpan("#FinanceManagerPhone_span")
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(FinanceManagerPhone);
            if (!isEnglish) {
                showSpan('#FinanceManagerPhone_span');
            }
            else {
                hideSpan('#FinanceManagerPhone_span');
            }
            var x = !FinanceManagerPhone.startsWith('9665');
            if (x || FinanceManagerPhone.length < 12) {

                showSpan('#FinanceManagerPhone_span');
            } else {
                hideSpan('#FinanceManagerPhone_span');
            }
        }
    })
    $("#FinanceManagerEmail").keyup(function () {
        var FinanceManagerEmail = $("#FinanceManagerEmail").val();
        if (FinanceManagerEmail == "") {
            hideSpan('#FinanceManagerEmail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(FinanceManagerEmail)
            if (!testRsult) {
                showSpan('#FinanceManagerEmail_span');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                hideSpan('#FinanceManagerEmail_span');
            }
        }
    })


    //start second page----------------------------
    $('#NameAr').keyup(function () {
        var NameAr = $('#NameAr').val();
        if (NameAr === "") {
            nextStep = false;
            showSpan('#NameAr_span');
        }
        else {
            hideSpan('#NameAr_span');
        }
    })
    //=================================
    $('#NameEn').keyup(function () {
        var NameEn = $('#NameEn').val();
        if (NameEn === "") {
            nextStep = false;
            showSpan('#NameEn_span');
        }
        else {
            hideSpan('#NameEn_span');
        }
    })
    //==================================
    //$('#CountryList').on('change', function () {
    //    var CountryList = $('#CountryList').val();
    //    if (CountryList === "") {
    //        nextStep = false;
    //        showSpan('#CountryList_span');
    //        showSpan('#CityList_span');
    //    } else {
    //        hideSpan('#CountryList_span');
    //        hideSpan('#CityList_span');
    //    }
    //});
    $('#CountryList').on('change', function () {
        var CountryList = $('#CountryList').val();
        if (CountryList === "") {
            nextStep = false;
            showSpan('#CountryList_span');
        } else {
            hideSpan('#CountryList_span');
        }
    });
    $('#CityList').on('change', function () {
        var CityList = $('#CityList').val();
        if (CityList === "" || CityList == null) {
            nextStep = false;
            showSpan('#CityList_span');
            $('#CityListDiv').removeClass(" MandatoryDDLNormal");
        } else {
            hideSpan('#CityList_span');
            $('#CityListDiv').addClass(" MandatoryDDLNormal");
        }
    });
    //==================================
    $('#VendorTypeList').on('change', function () {
        var VendorTypeList = $('#VendorTypeList').val();
        if (VendorTypeList === "") {
            nextStep = false;
            showSpan('#VendorTypeList_span');
        } else {
            hideSpan('#VendorTypeList_span');
        }
    });
    //==================================
    $("#rd_Lang1 , #rd_Lang2 , #rd_Lang3").change(function () {
        var rd_ReqTypeNew = $('#rd_Lang1').is(':checked');
        var rd_ReqTypeRenew = $('#rd_Lang2').is(':checked');
        var rd_ReqTypeother = $('#rd_Lang3').is(':checked');
        var OtherLang = $('#OtherLang').val();
        if (rd_ReqTypeNew === false && rd_ReqTypeRenew === false && rd_ReqTypeother === false) {
            nextStep = false;
            showSpan('#User_Language_Span');
            // $(".starInvalid").text("يجب إختيار نوع الطلب")
        }
        else {
            hideSpan('#User_Language_Span');
        }
    });
    $('#OtherLang').keyup(function () {
        var OtherLang = $('#OtherLang').val();
        if (OtherLang === "") {
            nextStep = false;
            showSpan('#User_Language_Span');
            //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
        }
        else {
            hideSpan('#User_Language_Span');
        }
    })




    $(".MandatoryInput").on("input", function () {
        var value = $(this).val();
        if (value == "") {
            $(this).removeClass("NormalInput");
        }
        else {
            $(this).addClass("NormalInput");
        }
    })

    $("#VendorTypeList").on('change', function () {
        if ($(this).val() == "") {
            $('#VendorTypeDiv').removeClass(" MandatoryDDLNormal");
        }
        else {
            $('#VendorTypeDiv').addClass(" MandatoryDDLNormal");
        }
    });

    $("#CountryList").on('change', function () {
        //debugger;
        $.ajax({
            url: '/VendorContracts/CountryChange/' + $('#CountryList').val(),
            type: "Get",
            beforeSend: function () {
                $('#loadingDiv').show();
            },
            success: function (data) {
                $('#loadingDiv').hide();
                var select = $("#CityList");
                select.empty();
                $.each(data, function (index, itemData) {
                    select.append($('<option/>', {
                        value: itemData.Value,
                        text: itemData.Text
                    }));
                });
                if ($("#CityList").val() != null) {
                    hideSpan('#CityList_span');
                    $('#CityListDiv').addClass(" MandatoryDDLNormal");
                }
                else {
                    showSpan('#CityList_span');
                    $('#CityListDiv').removeClass(" MandatoryDDLNormal");
                }
            }
        });

        if ($(this).val() == "") {
            $('#CountryListDiv').removeClass(" MandatoryDDLNormal");
        }
        else {
            $('#CountryListDiv').addClass(" MandatoryDDLNormal");
        }
    });

    $('#optionList').on('click', '.itemDelete', function () {
        $(this).closest('li').remove();
        if ($('.itemDelete').length == 0) {
            $('.optionList').addClass("d-none");
            $('.optionList').removeClass("d-inherit");
        }
    });
    $("#AddOption").on('click', function () {
        //debugger;
        // console.log("btn click");
        var OptionTxt = $('#OptionTxt').val();
        var isExist = partiesOptions.indexOf(OptionTxt) > -1;
        if (OptionTxt != "" && !isExist) {
            partiesOptions.push(OptionTxt);
            $('#optionList').removeClass("d-none");
            $('#optionList').addClass("d-inherit");
            $("#optionList").append('<li>' + OptionTxt + '<a title="delete" class="itemDelete">x</a> </li>');
            $("#OptionTxt").text("");
            $('#OptionTxt').val('');
        }
        else {
            toastr['error']('Invaild value', '<p>Integration Parties</p>', 'Error');

            //toastr["error"]("<p class='text-bold-700'>Invaild value</p>", "<p>Integration Parties</p>")
        }
    })

}); //document ready


$(document).ready(function () {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
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
});

var loadingDiv = $("#loadingDiv");



$('#submitFormButton').on('click', function (e) {

    event.preventDefault();
    ValidateInputs();
    var self = $(this);
    if (valid) {
        var formData = $("#mainForm").serialize();

        Swal.fire({
            title: 'You are about to change contract information, are you sure ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Save`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Start Saving data...',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Save Data..'
                            }
                        }
                        $("#mainForm").submit();
                    },
                    willClose: () => {
                        swal.stopLoading();
                    }
                })
            }
        });
    }
});




//$('#submitFormButton').on('click', function (e) {
//    event.preventDefault();
//    ValidateInputs();
//    var self = $(this);
//    if (valid) {
//        var formData = $("#mainForm").serialize();
//        Swal.fire({
//            title: 'You are about to change contract information, are you sure ?',
//            showDenyButton: true,
//            showCancelButton: false,
//            confirmButtonText: `Save`,
//            denyButtonText: `Cancel`,
//            showLoaderOnConfirm: true,
//            allowOutsideClick: () => !Swal.isLoading()
//        }).then((result) => {
//            if (result.isConfirmed) {
//                Swal.fire({
//                    title: 'Start Saving data...',
//                    html: 'Process <b></b> ....',
//                    //timer: 2000,
//                    timerProgressBar: true,
//                    didOpen: () => {
//                        Swal.showLoading()
//                        const content = Swal.getContent()
//                        if (content) {
//                            const b = content.querySelector('b')
//                            if (b) {
//                                b.textContent = 'Save Data..'
//                            }
//                        }
//                        $("#mainForm").submit();
//                    },
//                    willClose: () => {
//                        swal.stopLoading();
//                    }
//                })
//            }
//        });
//    }
//});
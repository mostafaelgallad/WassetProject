$(document).ready(function () {
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
    $("#ItmanagerPhone").keyup(function () {
        var ItmanagePhone = $("#ItmanagerPhone").val();
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
});
function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}
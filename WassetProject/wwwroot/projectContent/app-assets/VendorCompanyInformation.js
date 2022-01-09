window.addEventListener('load', (event) => {
    $('#ContactPerson').keyup(function () {
        var ContactPerson = $('#ContactPerson').val();
        if (ContactPerson === "") {
            nextStep = false;
            showSpan('#ContactPerson_span');
            //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
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
            //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
        } else {
            hideSpan('#ContactJobTitle_span');
        }
    })
    $('#ContactEmail').keyup(function () {
        var ContactEmail = $('#ContactEmail').val();
        if (ContactEmail === "") {
            nextStep = false;
            showSpan('#ContactEmail_span');
            hideSpan('#ContactEmail_span1');
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContactEmail)
            if (!testRsult) {
                nextStep = false;
                hideSpan('#ContactEmail_span');
                showSpan('#ContactEmail_span1');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
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
                //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون 12 أرقام");
            } else {
                hideSpan('#ContactMobile_span');
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
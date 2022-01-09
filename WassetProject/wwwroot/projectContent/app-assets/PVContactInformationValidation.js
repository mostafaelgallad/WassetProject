function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}

$(document).ready(function () {
    var nextStep = true;
    $("#EmailAddress").keyup(function () {
        var EmailAddress = $("#EmailAddress").val();
        if (EmailAddress == "") {
            showSpan('#EmailAddress_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(EmailAddress)
            if (!testRsult) {
                showSpan('#EmailAddress_span');
            }
            else {
                hideSpan('#EmailAddress_span');
            }
        }
    });
    //====================================================done
    $('#MobileNo').keyup(function () {
        var MobileNo = $('#MobileNo').val();
        if (MobileNo === "") {
            nextStep = false;
            showSpan('#MobileNo_span');
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(MobileNo);
            if (!isEnglish) {
                nextStep = false;
                showSpan('#MobileNo_span');
            }
            else {
                hideSpan('#MobileNo_span');
            }
            var x = !MobileNo.startsWith('9665');
            if (x || MobileNo.length < 12) {
                nextStep = false;
                showSpan('#MobileNo_span');
            } else {
                hideSpan('#MobileNo_span');
            }
        }
    })
     //====================================================done
    $('#CustomerPortalProvGmmobile').keyup(function () {
        var CustomerPortalProvGmmobile = $('#CustomerPortalProvGmmobile').val();
        if (CustomerPortalProvGmmobile === "") {
            nextStep = false;
            showSpan('#CustomerPortalProvGmmobile_span');
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(CustomerPortalProvGmmobile);
            if (!isEnglish) {
                nextStep = false;
                showSpan('#CustomerPortalProvGmmobile_span');
            }
            else {
                hideSpan('#CustomerPortalProvGmmobile_span');
            }
            var x = !CustomerPortalProvGmmobile.startsWith('9665');
            if (x || CustomerPortalProvGmmobile.length < 12) {
                nextStep = false;
                showSpan('#CustomerPortalProvGmmobile_span');
            } else {
                hideSpan('#CustomerPortalProvGmmobile_span');
            }
        }
    })
    //====================================================done
    $("#CustomerPortalProvGmemail").keyup(function () {
        var CustomerPortalProvGmemail = $("#CustomerPortalProvGmemail").val();
        if (CustomerPortalProvGmemail == "") {
            showSpan('#CustomerPortalProvGmemail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(CustomerPortalProvGmemail)
            if (!testRsult) {
                showSpan('#CustomerPortalProvGmemail_span');
            }
            else {
                hideSpan('#CustomerPortalProvGmemail_span');
            }
        }
    })
     //====================================================done
    $('#CustomerPortalProvCfomobile').keyup(function () {
        console.log("test");
        var CustomerPortalProvCfomobile = $('#CustomerPortalProvCfomobile').val();
        if (CustomerPortalProvCfomobile === "") {
            nextStep = false;
            showSpan('#CustomerPortalProvCfomobile_span');
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(CustomerPortalProvCfomobile);
            if (!isEnglish) {
                nextStep = false;
                showSpan('#CustomerPortalProvCfomobile_span');
            }
            else {
                hideSpan('#CustomerPortalProvCfomobile_span');
            }
            var x = !CustomerPortalProvCfomobile.startsWith('9665');
            if (x || CustomerPortalProvCfomobile.length < 12) {
                nextStep = false;
                showSpan('#CustomerPortalProvCfomobile_span');
            } else {
                hideSpan('#CustomerPortalProvCfomobile_span');
            }
        }
    })
    //====================================================done
    $("#CustomerPortalProvCfoemail").keyup(function () {
        var CustomerPortalProvCfoemail = $("#CustomerPortalProvCfoemail").val();
        if (CustomerPortalProvCfoemail == "") {
            showSpan('#CustomerPortalProvCfoemail_span');
        }
        else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(CustomerPortalProvCfoemail)
            if (!testRsult) {
                showSpan('#CustomerPortalProvCfoemail_span');
            }
            else {
                hideSpan('#CustomerPortalProvCfoemail_span');
            }
        }
    });
});// document ready

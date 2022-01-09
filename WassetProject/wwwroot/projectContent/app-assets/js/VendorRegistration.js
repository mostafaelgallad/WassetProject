var nextStep = true;
var base_color = "rgb(160,157,157)";
var active_color = "rgb(42, 181, 74)";
//var active_color ="rgb(247,149,28)";
var partiesOptions = [];
var child = 1;
var length = $("section").length - 1;
$("#prev").addClass("disabled");
$("#submitFormButton").addClass("disabled");
//console.log(child);


$("section").not("section:nth-of-type(1)").hide();
$("section").not("section:nth-of-type(1)").css('transform', 'translateX(100px)');

var svgWidth = length * 200 + 24;
$("#svg_wrap").html(
    '<svg version="1.1" id="svg_form_time" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 ' +
    svgWidth +
    ' 24" xml:space="preserve"></svg>'
);

function makeSVG(tag, attrs) {
    var el = document.createElementNS("http://www.w3.org/2000/svg", tag);
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    return el;
}

for (i = 0; i < length; i++) {
    var positionX = 12 + i * 200;
    var rect = makeSVG("rect", { x: positionX, y: 9, width: 200, height: 6 });
    document.getElementById("svg_form_time").appendChild(rect);
    // <g><rect x="12" y="9" width="200" height="6"></rect></g>'
    var circle = makeSVG("circle", {
        cx: positionX,
        cy: 12,
        r: 12,
        width: positionX,
        height: 6
    });
    document.getElementById("svg_form_time").appendChild(circle);
}

var circle = makeSVG("circle", {
    cx: positionX + 200,
    cy: 12,
    r: 12,
    width: positionX,
    height: 6
});
document.getElementById("svg_form_time").appendChild(circle);

$('#svg_form_time rect').css('fill', base_color);
$('#svg_form_time circle').css('fill', base_color);
$("circle:nth-of-type(1)").css("fill", active_color);


$(".button").click(function () {
    //debugger;
    nextStep = true;
    var id = $(this).attr("id");
    switch (child) {
        case 1:
            firstPage();
            break;
        case 2:
            secondPage()
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:
            //ApprovalPage()
            break;
        case 6:
            filesPage()
            break;
        case 7:
            break;
        default:
    }
    if (id == "next") {
        if (nextStep) {
            $("#prev").removeClass("disabled");
            if (child >= length) {
                // console.log("hiiiiii?");
                $(this).addClass("disabled");
                $('#submitFormButton').removeClass("disabled");
            }
        }
        if (child <= length && nextStep != false) {
            // console.log("welcome?");
            child++;
            changeSection()
        }
    } else if (id == "prev") {
        $("#next").removeClass("disabled");
        $('#submitFormButton').addClass("disabled");
        if (child <= 2) {
            $(this).addClass("disabled");
        }
        if (child > 1) {
            child--;
            changeSection();
        }
    }
});
function secondPage() {


    ///==================================================start
    var MainContractName = $('#MainContractName').val();
    if (MainContractName === "") {
        nextStep = false;
        showSpan('#MainContractName_span');
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
        //$('#Prov_PhoneNumber_Span').text("بيان الهاتف مفقود");
    } else {
        var englishReg = /^[A-Za-z0-9]*$/;
        var isEnglish = englishReg.test(MainContactMobile);
        if (!isEnglish) {

            nextStep = false;
            showSpan('#MainContactMobile_span');
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
        }
        else {
            hideSpan('#MainContactMobile_span');
        }
        var x = !MainContactMobile.startsWith('9665');
        if (x || MainContactMobile.length < 12) {
            nextStep = false;
            showSpan('#MainContactMobile_span');
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
    } else {
        var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var testRsult = reg.test(MainContactEmail)
        if (!testRsult) {
            nextStep = false;
            hideSpan('#MainContactEmail_span');
            showSpan('#MainContactEmail_span1');
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
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#ContactJobTitle_span');
    }
    //==================================
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
            //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
        }
        else {
            hideSpan('#ContactEmail_span');
            hideSpan('#ContactEmail_span1');
        }
    }
    //=============================
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
    //else {
    //    hideSpan('#ReqType_Span');
    //}
    ///==================================================start

    //=========================
    //var CityList = $('#CityList').val();
    //if (CityList === "" || CityList == null) {
    //    console.log("CityList");
    //    nextStep = false;
    //    showSpan('#CityList_span');
    //    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    //} else {
    //    hideSpan('#CityList_span');
    //}
    //==================================
    //var CountryList = $("#CountryList").val();
    //if (CountryList === "") {
    //    nextStep = false;
    //    showSpan('#CountryList_span');
    //    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    //} else {
    //    hideSpan('#CountryList_span');
    //}
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
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#VendorTypeList_span');
    }
    //==========Type Request================
    //var rd_ReqTypeNew = $('#rd_ReqTypeNew').is(':checked');
    //var rd_ReqTypeRenew = $('#rd_ReqTypeRenew').is(':checked');
    //if (rd_ReqTypeNew === false && rd_ReqTypeRenew === false) {
    //    nextStep = false;
    //    showSpan('#ReqType_Span');
    //    // $(".starInvalid").text("يجب إختيار نوع الطلب")
    //}
    //else {
    //    hideSpan('#ReqType_Span');
    //}
    //==================================
    var rd_Lang1 = $('#rd_Lang1').is(':checked');
    var rd_Lang2 = $('#rd_Lang2').is(':checked');
    var OtherLang = $('#OtherLang').val();
    if (rd_Lang1 === false && rd_Lang2 === false && OtherLang === "") {
        nextStep = false;
        showSpan('#User_Language_Span');
        // $(".starInvalid").text("يجب إختيار نوع الطلب")
    }
    else {
        hideSpan('#User_Language_Span');
    }
    ///=============================

}
function firstPage() {
    var NameAr = $('#NameAr').val();
    var NameEn = $('#NameEn').val();
    //$.ajax({
    //    url: '/VendorContracts/CheckCustomerNameEnglish',
    //    data: { name: NameEn },
    //    type: "POST",
    //    success: function (data) {
    //        if (data == "True") {
    //            //debugger
    //            nextStep = false;
    //            showSpan('#NameEn_span1');
    //        } else {
    //            hideSpan('#NameEn_span1');
    //        }
    //    }
    //});
    $.ajax({
        url: '/VendorContracts/CheckMasterNameEnglish',
        data: { name: NameEn },
        type: "POST",
        success: function (data) {
            if (data == "True") {
                //debugger
                nextStep = false;
                showSpan('#NameEn_span1');
            } else {
                hideSpan('#NameEn_span1');
            }
        }
    });
    $.ajax({
        url: '/VendorContracts/CheckMasterNameArabic',
        data: { name: NameAr },
        type: "POST",
        success: function (data) {
            if (data == "True") {
                //debugger
                nextStep = false;
                showSpan('#NameAr_span1');
            } else {
                hideSpan('#NameAr_span1');
            }
        }
    });

    if (NameAr === "") {
        nextStep = false;
        showSpan('#NameAr_span');

    }
    else {
        hideSpan('#NameAr_span');
        //valid = true;
    }
    //=================================


    if (NameEn === "") {
        nextStep = false;
        showSpan('#NameEn_span');

    }
    else {
        hideSpan('#NameEn_span');
    }
    ///==================================================start
    var NameAr = $('#NameAr').val();
    if (NameAr === "") {
        nextStep = false;
        showSpan('#NameAr_span');
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
        //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
    }
    else {
        hideSpan('#NameEn_span');
    }
    //=========================
    //var CityList = $('#CityList').val();
    //if (CityList === "") {
    //    nextStep = false;
    //    showSpan('#CityList_span');
    //    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    //} else {
    //    hideSpan('#CityList_span');
    //}
    var CityList = $('#CityList').val();
    if (CityList === "" || CityList == null) {
        nextStep = false;
        showSpan('#CityList_span');
        $('#CityListDiv').removeClass(" MandatoryDDLNormal");
    } else {
        hideSpan('#CityList_span');
        $('#CityListDiv').addClass(" MandatoryDDLNormal");
    }
    //==================================
    var CountryList = $('#CountryList').val();
    if (CountryList === "") {
        nextStep = false;
        showSpan('#CountryList_span');
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
    var Website = $('#Website').val();
    if (Website === "") {
        hideSpan('#Website_span1');
    }
    else {
        var reg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var testRsult = reg.test(Website)
        if (!testRsult) {
            nextStep = false;
            showSpan('#Website_span1');
        }
        else {
            hideSpan('#Website_span1');
        }
    }
    //==================================
    var VendorTypeList = $('#VendorTypeList').val();
    if (VendorTypeList === "") {
        nextStep = false;
        showSpan('#VendorTypeList_span');
        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
    } else {
        hideSpan('#VendorTypeList_span');
    }
    //==================================
    var rd_ReqTypeNew = $('#rd_Lang1').is(':checked');
    var rd_ReqTypeRenew = $('#rd_Lang2').is(':checked');
    var OtherLang = $('#OtherLang').val();
    if (rd_ReqTypeNew === false && rd_ReqTypeRenew === false && OtherLang === "") {
        nextStep = false;
        showSpan('#User_Language_Span');
        // $(".starInvalid").text("يجب إختيار نوع الطلب")
    }
    else {
        hideSpan('#User_Language_Span');
    }
    ///=============================

}

function ApprovalPage() {
    //debugger;
    //var agreement = document.getElementById("Cont_IsAgreementApproved").checked;
    //if (agreement == false) {
    //    nextStep = false;
    //    showSpan('#Cont_IsAgreementApproved_Span');
    //} else {
    //    hideSpan('#Cont_IsAgreementApproved_Span');
    //}
}
function filesPage() {


}
function changeSection() {
    //hideSpan();
    $("#svg_form_time rect").css("fill", active_color);
    $("#svg_form_time circle").css("fill", active_color);
    var circle_child = child + 1;
    $("#svg_form_time rect:nth-of-type(n + " + child + ")").css(
        "fill",
        base_color
    );
    $("#svg_form_time circle:nth-of-type(n + " + circle_child + ")").css(
        "fill",
        base_color
    );
    var currentSection = $("section:nth-of-type(" + child + ")");
    // console.log("last" + child);
    currentSection.fadeIn();
    currentSection.css('transform', 'translateX(0)');
    currentSection.prevAll('section').css('transform', 'translateX(-100px)');
    currentSection.nextAll('section').css('transform', 'translateX(100px)');
    $('section').not(currentSection).hide();
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
    $('#Website').keyup(function () {
        var Website = $('#Website').val();
        if (Website === "") {
            hideSpan('#Website_span1');
        }
        else {
            var reg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            var testRsult = reg.test(Website)
            if (!testRsult) {
                nextStep = false;
                showSpan('#Website_span1');
            }
            else {
                hideSpan('#Website_span1');
            }
        }
    })
    $('#MainContractName').keyup(function () {
        var MainContractName = $('#MainContractName').val();
        if (MainContractName === "") {
            nextStep = false;
            showSpan('#MainContractName_span');
            //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
        }
        else {
            hideSpan('#MainContractName_span');
            //valid = true;
        }
    })
    $('#MainContactMobile').keyup(function () {
        var MainContactMobile = $('#MainContactMobile').val();
        if (MainContactMobile === "") {
            nextStep = false;
            showSpan('#MainContactMobile_span');
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف مفقود");
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(MainContactMobile);
            if (!isEnglish) {

                nextStep = false;
                showSpan('#MainContactMobile_span');
                //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
            }
            else {
                hideSpan('#MainContactMobile_span');
            }
            var x = !MainContactMobile.startsWith('9665');
            if (x || MainContactMobile.length < 12) {
                nextStep = false;
                showSpan('#MainContactMobile_span');
                //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون 12 أرقام");
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
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
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
            //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
        }
        else {
            hideSpan('#NameAr_span');
            //valid = true;
        }
    })
    //=================================
    $('#NameEn').keyup(function () {
        var NameEn = $('#NameEn').val();
        if (NameEn === "") {
            nextStep = false;
            showSpan('#NameEn_span');
            //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
        }
        else {
            hideSpan('#NameEn_span');
        }
    })
    //==================================
    $('#CountryList').on('change', function () {
        var CountryList = $('#CountryList').val();
        if (CountryList === "") {
            nextStep = false;
            showSpan('#CountryList_span');
            //showSpan('#CityList_span');
            //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
        } else {
            hideSpan('#CountryList_span');
            //hideSpan('#CityList_span');
        }
    });
    //==================================
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
    //$('#CityList').on('change', function () {
    //    if (this.value === "") {
    //        $('#CityListDiv').removeClass(" MandatoryDDLNormal");
    //    }
    //    else {
    //        $('#CityListDiv').addClass(" MandatoryDDLNormal");
    //    }
    //});
    //==================================
    $('#VendorTypeList').on('change', function () {
        var VendorTypeList = $('#VendorTypeList').val();
        if (VendorTypeList === "") {
            nextStep = false;
            showSpan('#VendorTypeList_span');
            //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
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
    //end second page----------------------------

    $('#submitFormButton').on('click', function (e) {
        //debugger
        var self = $(this);
        if (!nextStep) {
            e.preventDefault();
        } else {
            event.preventDefault();
            var formData = $("#mainForm").serialize();
            BindNameOfIntegration();
            Swal.fire({
                title: 'You are about to register the new vendor contract, Are you sure ?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Register`,
                denyButtonText: `Cancel`,
                showLoaderOnConfirm: true,
                allowOutsideClick: () => !Swal.isLoading()
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Start registering data...',
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

    var filesNDAList = [];
    var fileCRList = [];
    var filesVATList = [];
    $(".MandatoryInput").on("input", function () {
        var value = $(this).val();
        if (value == "") {
            $(this).removeClass("NormalInput");
        }
        else {
            $(this).addClass("NormalInput");
        }
    })
    var culture = $("#culture").text();
    if (culture == "ar") {
        $('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').hijriDatePicker({
            hijri: true,
            hijriFormat: 'iDD/iMM/iYYYY',
            format: 'DD/MM/YYYY'
        });
    } else {
        $('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').hijriDatePicker({
            hijriFormat: 'iDD/iMM/iYYYY',
            format: 'DD/MM/YYYY',
            locale: 'en-us'
        });
    }

    $(".language").on('change', function () {
        $(this).parents("form").submit(); // post form
    });

    var filesNDA = $('#filesNDA').get(0);
    var filescr = $('#filescr').get(0);
    var filesVAT = $('#filesVAT').get(0);

    if (filesNDA.files[0] != undefined) {
        if (filesNDA.files[0].size != 0 && filesNDA.files[0].size != undefined) {
            $("#selector1").html(filesNDA.files[0].name);
        }
    }
    if (filescr.files[0] != undefined) {
        if (filescr.files[0].size != 0 && filescr.files[0].size != undefined) {
            $("#selector2").html(filescr.files[0].name);
        }
    }
    if (filesVAT.files[0] != undefined) {
        if (filesVAT.files[0].size != 0 && filesVAT.files[0].size != undefined) {
            $("#selector3").html(filesVAT.files[0].name);
        }
    }

    $("#filesNDA").change(function (e) {
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].size >= 1048576) {
                toastr["warning"]("Only PDF files are supported & Max Size is 1MB!");
                document.getElementById("filesNDA").value = "";
                //showSpan('filesNDA_Span');
            }
            else {
                if (this.files[i].type.match('application/pdf') && (this.files[i].size != 0 && this.files[i].size != undefined)) {
                    var path = this.files[i].name;
                    $("#selector1").html(path);
                } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                    toastr["error"]("You Selected Empty File!");
                    document.getElementById("filesNDA").value = "";
                }
            }
        }
    });

    $("#filescr").change(function (e) {

        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].size >= 1048576) {
                toastr["warning"]("Only PDF files are supported & Max Size is 1MB!");
                document.getElementById("filescr").value = "";
                //showSpan('filesNDA_Span');
            }
            else {
                if (this.files[i].type.match('application/pdf') && (this.files[i].size != 0 && this.files[i].size != undefined)) {
                    var path = this.files[i].name;
                    $("#selector2").html(path);
                } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                    toastr["error"]("You Selected Empty File!");
                    document.getElementById("filescr").value = "";
                }
            }
        }
    });

    $("#filesVAT").change(function (e) {

        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].size >= 1048576) {
                toastr["warning"]("Only PDF files are supported & Max Size is 1MB!");
                document.getElementById("filesVAT").value = "";
                //showSpan('filesNDA_Span');
            }
            else {
                if (this.files[i].type.match('application/pdf') && (this.files[i].size != 0 && this.files[i].size != undefined)) {
                    var path = this.files[i].name;
                    $("#selector3").html(path);
                } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                    toastr["error"]("You Selected Empty File!");
                    document.getElementById("filesVAT").value = "";
                }
            }
        }
    });
    $(".language").on('change', function () {
        $(this).parents("form").submit(); // post form
    });
    $("#CityList").on('change', function () {
        if ($(this).val() == "" || $(this).val() == null) {
            $('#CityListDiv').removeClass(" MandatoryDDLNormal");
        }
        else {
            $('#CityListDiv').addClass(" MandatoryDDLNormal");
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
                //select.append($('<option/>', {
                //    value: 0,
                //    text: "Select a State"
                //}));
                $.each(data, function (index, itemData) {
                    //  console.log(itemData);
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

    $("#VendorTypeList").on('change', function () {
        if ($(this).val() == "") {
            $('#VendorTypeDiv').removeClass(" MandatoryDDLNormal");
        }
        else {
            $('#VendorTypeDiv').addClass(" MandatoryDDLNormal");
        }
    });

    $('#optionList').on('click', '.itemDelete', function () {
        $(this).closest('li').remove();
        if ($('.itemDelete').length == 0) {
            //NameOfIntegration.remove(this.attr('value'))
            $('.optionList').addClass("d-none");
            $('.optionList').removeClass("d-inherit");
        }
    });


    $("#AddOption").on('click', function () {
        //debugger;
        // console.log("btn click");
        var OptionTxt = $('#NameOfIntegratedParties').val();
        // NameOfIntegration.push(OptionTxt + ",");
        var isExist = partiesOptions.indexOf(OptionTxt) > -1;
        if (OptionTxt != "" && !isExist) {
            partiesOptions.push(OptionTxt);
            $('#optionList').removeClass("d-none");
            $('#optionList').addClass("d-inherit");
            $("#optionList").append('<li>' + OptionTxt + '<a title="delete" class="itemDelete">x</a> </li>');
            $("#NameOfIntegratedParties").text("");
            $('#NameOfIntegratedParties').val('');
        }
        else {
            toastr['error']('Invaild value', '<p>Integration Parties</p>', 'Error');
        }
    })
});

//$(document).ready(function () {
//    toastr.options = {
//        "closeButton": false,
//        "debug": false,
//        "newestOnTop": false,
//        "progressBar": false,
//        "positionClass": "toast-bottom-right",
//        "preventDuplicates": false,
//        "onclick": null,
//        "showDuration": "300",
//        "hideDuration": "1000",
//        "timeOut": "5000",
//        "extendedTimeOut": "1000",
//        "showEasing": "swing",
//        "hideEasing": "linear",
//        "showMethod": "fadeIn",
//        "hideMethod": "fadeOut"
//    }
//});

function BindNameOfIntegration() {
    //var ul = document.getElementById('optionList');
    var NameOfIntegration = "";
    $('#optionList li').each(function (i) {
        //var index = $(this).index();
        var text = $(this).text();
        //var text2 = text.substring(0, text.length - 1);
        //text = text.slice(0, text.length - 1);
        //var value = $(this).attr('value');
        //alert('text is ' + text2);
        NameOfIntegration += text + ",";
    });
    document.getElementById('NameOfIntegratedParties').value = NameOfIntegration;
    //alert(document.getElementById('NameOfIntegratedParties').value);
    // $('#OptionTxt').val(NameOfIntegration);
}

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



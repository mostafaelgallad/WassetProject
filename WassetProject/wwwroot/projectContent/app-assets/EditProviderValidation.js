var Valid = true;
$(document).ready(function () {
    //GeneralPage ====================================
    $('#FkPricPlnId').on('change', function () {
        var FkPricPlnId = $('#FkPricPlnId').val();
        if (FkPricPlnId === "") {
            Valid = false;
            showSpan('#FK_PricPln_ID_Span');
        }
        else {
            hideSpan('#FK_PricPln_ID_Span');
        }
    });
    //=========================================================================
    $('#FkVendorId').on('change', function () {
        var FkVendorId = $('#FkVendorId').val();
        if (FkVendorId === "") {
            Valid = false;
            showSpan('#VendorName_Span');
        }
        else {
            hideSpan('#VendorName_Span');
        }
    });

    $('#FkVendSysId').on('change', function () {
        var FkVendSysId = $('#FkVendSysId').val();
        if (FkVendSysId === "") {
            Valid = false;
            showSpan('#FK_SystemName_ID_Span');
        }
        else {
            hideSpan('#FK_SystemName_ID_Span');
        }
    });
    $('#NameAr').keyup(function () {
        var NameAr = $('#NameAr').val();
        if (NameAr === "") {
            Valid = false;
            showSpan('#Prov_NameAr_Span');
        }
        else {
            hideSpan('#Prov_NameAr_Span');
        }
    });
    $('#NameEn').keyup(function () {
        var NameEn = $('#NameEn').val();
        if (NameEn === "") {
            Valid = false;
            showSpan('#Prov_NameEn_Span');
        }
        else {
            hideSpan('#Prov_NameEn_Span');
        }
    });
    $('#ContClaimInChargeContactName').keyup(function () {
        var ContClaimInChargeContactName = $('#ContClaimInChargeContactName').val();
        if (ContClaimInChargeContactName === "") {
            Valid = false;
            showSpan('#Cont_ClaimInChargeContactName_Span');
        }
        else {
            hideSpan('#Cont_ClaimInChargeContactName_Span');
        }
    });
    $('#ContClaimInChargeContactMobile').keyup(function () {
        var ContClaimInChargeContactMobile = $('#ContClaimInChargeContactMobile').val();
        if (ContClaimInChargeContactMobile === "") {
            Valid = false;
            showSpan('#Cont_ClaimInChargeContactMobile_Span');
            hideSpan('#Cont_ClaimInChargeContactMobile_Span1');
        } else {
            if (ContClaimInChargeContactMobile.length != 12 || !ContClaimInChargeContactMobile.startsWith("9665")) {
                Valid = false;
                showSpan('#Cont_ClaimInChargeContactMobile_Span1');
                hideSpan('#Cont_ClaimInChargeContactMobile_Span');
            }
            else {
                hideSpan('#Cont_ClaimInChargeContactMobile_Span');
                hideSpan('#Cont_ClaimInChargeContactMobile_Span1');
            }
        }
    });

    $('#ContClaimInChargeContactEmail').keyup(function () {
        var ContClaimInChargeContactEmail = $('#ContClaimInChargeContactEmail').val();
        if (ContClaimInChargeContactEmail === "") {
            Valid = false;
            showSpan('#Cont_ClaimInChargeContactEmail_Span');
            hideSpan('#Cont_ClaimInChargeContactEmail_Span1');

        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContClaimInChargeContactEmail)
            if (!testRsult) {
                Valid = false;
                showSpan('#Cont_ClaimInChargeContactEmail_Span1');
                hideSpan('#Cont_ClaimInChargeContactEmail_Span');
            }
            else {
                hideSpan('#Cont_ClaimInChargeContactEmail_Span');
                hideSpan('#Cont_ClaimInChargeContactEmail_Span1');
            }
        }
    });

    $('#ContCommunicationContactName').keyup(function () {
        var ContCommunicationContactName = $('#ContCommunicationContactName').val();
        if (ContCommunicationContactName === "") {
            Valid = false;
            showSpan('#Cont_CommunicationContactName_Span');
        }
        else {
            hideSpan('#Cont_CommunicationContactName_Span');
        }
    });
    //=====================================================done
    $('#ContCommunicationContactMobile').keyup(function () {
        var ContCommunicationContactMobile = $('#ContCommunicationContactMobile').val();
        if (ContCommunicationContactMobile === "") {
            Valid = false;
            showSpan('#Cont_CommunicationContactMobile_Span');
            hideSpan('#Cont_CommunicationContactMobile_Span1');
        } else {
            if (ContCommunicationContactMobile.length != 12 || !ContCommunicationContactMobile.startsWith("9665")) {
                Valid = false;
                showSpan('#Cont_CommunicationContactMobile_Span1');
                hideSpan('#Cont_CommunicationContactMobile_Span');
            }
            else {
                hideSpan('#Cont_CommunicationContactMobile_Span');
                hideSpan('#Cont_CommunicationContactMobile_Span1');
            }
        }
    });
    //============================================done
    $('#ContCommunicationContactEmail').keyup(function () {
        var ContCommunicationContactEmail = $('#ContCommunicationContactEmail').val();
        if (ContCommunicationContactEmail === "") {
            Valid = false;
            showSpan('#Cont_CommunicationContactEmail_Span');
            hideSpan('#Cont_CommunicationContactEmail_Span1');

        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContCommunicationContactEmail)
            if (!testRsult) {
                Valid = false;
                showSpan('#Cont_CommunicationContactEmail_Span1');
                hideSpan('#Cont_CommunicationContactEmail_Span');
            }
            else {
                hideSpan('#Cont_CommunicationContactEmail_Span');
                hideSpan('#Cont_CommunicationContactEmail_Span1');
            }
        }
    });
    $('#ContNotificationMobile').keyup(function () {
        var ContNotificationMobile = $('#ContNotificationMobile').val();
        if (ContNotificationMobile === "") {
            Valid = false;
            showSpan('#Cont_NotificationMobile_Span');
            hideSpan('#Cont_NotificationMobile_Span1');
        } else {
            if (ContNotificationMobile.length != 12 || !ContNotificationMobile.startsWith("9665")) {
                Valid = false;
                showSpan('#Cont_NotificationMobile_Span1');
                hideSpan('#Cont_NotificationMobile_Span');
            }
            else {
                hideSpan('#Cont_NotificationMobile_Span');
                hideSpan('#Cont_NotificationMobile_Span1');
            }
        }
    });
    //=========================================done
    $('#ContNotificationEmail').keyup(function () {
        var ContNotificationEmail = $('#ContNotificationEmail').val();
        if (ContNotificationEmail === "") {
            Valid = false;
            showSpan('#Cont_NotificationEmail_Span');
            hideSpan('#Cont_NotificationEmail_Span1');
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContNotificationEmail)
            if (!testRsult) {
                Valid = false;
                showSpan('#Cont_NotificationEmail_Span1');
                hideSpan('#Cont_NotificationEmail_Span');
            }
            else {
                hideSpan('#Cont_NotificationEmail_Span');
                hideSpan('#Cont_NotificationEmail_Span1');
            }
        }
    });

    //=========================================================================
    $('#ContMainUserName').keyup(function () {
        var ContMainUserName = $('#ContMainUserName').val();
        if (ContMainUserName === "") {
            Valid = false;
            showSpan('#Cont_MainUserName_Span');
        }
        else {
            hideSpan('#Cont_MainUserName_Span');
        }
    });
    //======================================done
    $('#ContMainUserIDNumber').keyup(function () {
        var ContMainUserIDNumber = $('#ContMainUserIDNumber').val();
        if (ContMainUserIDNumber === "") {
            Valid = false;
            showSpan('#Cont_MainUserIDNumber_Span');
            hideSpan('#Cont_MainUserIDNumber_Span1');
            hideSpan('#Cont_MainUserIDNumber_Span2');

        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(ContMainUserIDNumber);
            if (!isEnglish) {
                Valid = false;
                showSpan('#Cont_MainUserIDNumber_Span1');
                hideSpan('#Cont_MainUserIDNumber_Span');
                hideSpan('#Cont_MainUserIDNumber_Span2');
            }
            if (ContMainUserIDNumber.length != 10) {
                Valid = false;
                showSpan('#Cont_MainUserIDNumber_Span2');
                hideSpan('#Cont_MainUserIDNumber_Span');
                hideSpan('#Cont_MainUserIDNumber_Span1');
            } else {
                hideSpan('#Cont_MainUserIDNumber_Span');
                hideSpan('#Cont_MainUserIDNumber_Span1');
                hideSpan('#Cont_MainUserIDNumber_Span2');
            }
        }
    });
    //==========================================done
    $('#ContMainUserMobile').keyup(function () {
        var ContMainUserMobile = $('#ContMainUserMobile').val();
        if (ContMainUserMobile === "") {
            Valid = false;
            showSpan('#Cont_MainUserMobile_Span');
            hideSpan('#Cont_MainUserMobile_Span1');
        } else {
            if (ContMainUserMobile.length != 12 || !ContMainUserMobile.startsWith("9665")) {
                Valid = false;
                showSpan('#Cont_MainUserMobile_Span1');
                hideSpan('#Cont_MainUserMobile_Span');
            }
            else {
                hideSpan('#Cont_MainUserMobile_Span');
                hideSpan('#Cont_MainUserMobile_Span1');
            }
        }
    });
    //============================================done
    $('#ContMainUserEmail').keyup(function () {
        var ContMainUserEmail = $('#ContMainUserEmail').val();
        if (ContMainUserEmail === "") {
            Valid = false;
            showSpan('#Cont_MainUserEmail_Span');
            hideSpan('#Cont_MainUserEmail_Span1');

        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContMainUserEmail)
            if (!testRsult) {
                Valid = false;
                showSpan('#Cont_MainUserEmail_Span1');
                hideSpan('#Cont_MainUserEmail_Span');
            }
            else {
                hideSpan('#Cont_MainUserEmail_Span');
                hideSpan('#Cont_MainUserEmail_Span1');
            }
        }
    });
    //====================================done
    $("#rd_Lang1 , #rd_Lang2 , #rd_Lang3").change(function () {
        var otherLang = $('#otherLang').val();

        var rd_Lang1 = $('#rd_Lang1').is(':checked');
        var rd_Lang2 = $('#rd_Lang2').is(':checked');

        if (rd_Lang1 === false && rd_Lang2 === false && otherLang === "") {
            //$(".lang .starInvalid").css('visibility', 'visible');
            $('#otherLang').css('border', '2px solid red');
            Valid = false;
            showSpan('#User_Language_Span');
            //$('#Cont_MainUserEmail_Span').text("يجب إختيار اللغة المفضلة");
        }
        else {
            $('#otherLang').css('border', '1px solid #E79022');
            //$(".lang .starInvalid").css('visibility', 'hidden');
            hideSpan('#User_Language_Span');
        }
    });
    $('#otherLang').keyup(function () {
        var OtherLang = $('#otherLang').val();
        if (OtherLang === "") {
            Valid = false;
            showSpan('#User_Language_Span');
        }
        else {
            hideSpan('#User_Language_Span');
        }
    });

    //=========================================================================
    $('#ContAccreditedByName').keyup(function () {
        var ContAccreditedByName = $('#ContAccreditedByName').val();
        if (ContAccreditedByName === "") {
            Valid = false;
            showSpan('#Cont_AccreditedByName_Span');
        }
        else {
            hideSpan('#Cont_AccreditedByName_Span');
        }
    });
    //===================================done
    $('#ContAccreditedByIDNumber').keyup(function () {
        var ContAccreditedByIDNumber = $('#ContAccreditedByIDNumber').val();
        if (ContAccreditedByIDNumber === "") {
            Valid = false;
            showSpan('#Cont_AccreditedByIDNumber_Span');
            hideSpan('#Cont_AccreditedByIDNumber_Span1');
            hideSpan('#Cont_AccreditedByIDNumber_Span2');
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(ContAccreditedByIDNumber);
            if (!isEnglish) {
                Valid = false;
                showSpan('#Cont_AccreditedByIDNumber_Span1');
                hideSpan('#Cont_AccreditedByIDNumber_Span');
                hideSpan('#Cont_AccreditedByIDNumber_Span2');
            }
            else {
                hideSpan('#Cont_AccreditedByIDNumber_Span1');
                hideSpan('#Cont_AccreditedByIDNumber_Span');
            }

            if (ContAccreditedByIDNumber.length != 10) {
                Valid = false;
                showSpan('#Cont_AccreditedByIDNumber_Span2');
            }
            else {
                hideSpan('#Cont_AccreditedByIDNumber_Span');
                hideSpan('#Cont_AccreditedByIDNumber_Span1');
                hideSpan('#Cont_AccreditedByIDNumber_Span2');
            }
        }
    });
    //=========================================================done
    $('#ContAccreditedByMobile').keyup(function () {
        var ContAccreditedByMobile = $('#ContAccreditedByMobile').val();
        if (ContAccreditedByMobile === "") {
            Valid = false;
            showSpan('#Cont_AccreditedByMobile_Span');
            hideSpan('#Cont_AccreditedByMobile_Span1');
        } else {
            if (ContAccreditedByMobile.length != 12 || !ContAccreditedByMobile.startsWith("9665")) {
                Valid = false;
                showSpan('#Cont_AccreditedByMobile_Span1');
                hideSpan('#Cont_AccreditedByMobile_Span');
            }
            else {
                hideSpan('#Cont_AccreditedByMobile_Span');
                hideSpan('#Cont_AccreditedByMobile_Span1');
            }
        }
    });
    //===========================================done
    $('#ContAccreditedByTitle').keyup(function () {
        var ContAccreditedByTitle = $('#ContAccreditedByTitle').val();
        if (ContAccreditedByTitle === "") {
            Valid = false;
            showSpan('#Cont_AccreditedByTitle_Span');
        }
        else {
            hideSpan('#Cont_AccreditedByTitle_Span');
        }
    });
    //=========================================
    $('#ContAccreditedByEmail').keyup(function () {
        var ContAccreditedByEmail = $('#ContAccreditedByEmail').val();
        if (ContAccreditedByEmail === "") {
            Valid = false;
            showSpan('#Cont_AccreditedByEmail_Span');
            hideSpan('#Cont_AccreditedByEmail_Span2');
            hideSpan('#Cont_AccreditedByEmail_Span1');

        } else {

            if ($('#ContMainUserEmail').val() === $('#ContAccreditedByEmail').val()) {
                Valid = false;
                showSpan('#Cont_AccreditedByEmail_Span2');
            } else {
                hideSpan('#Cont_AccreditedByEmail_Span2');
                hideSpan('#Cont_AccreditedByEmail_Span1');
                hideSpan('#Cont_AccreditedByEmail_Span');
            }
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(ContAccreditedByEmail)
            if (!testRsult) {
                Valid = false;
                showSpan('#Cont_AccreditedByEmail_Span1');
            }
            else {
                hideSpan('#Cont_AccreditedByEmail_Span');
                hideSpan('#Cont_AccreditedByEmail_Span1');
            }
        }
    });

}); //document ready
function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}
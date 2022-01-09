$('#dtBox,#dtBox2,#dtBox3').datetimepicker({
    timepicker: false,
    datepicker: true,
    format: 'd/m/Y',
    value: '',
    scrollMonth: false,
    scrollInput: false
})
//        $('#dtBox2').datetimepicker({
//            timepicker:false,
//            datepicker:true,
//            format:'d/m/Y',
//            value:'',
//            scrollMonth : false,
//	       scrollInput : false
//        })
//        $('#dtBox3').datetimepicker({
//            timepicker:false,
//            datepicker:true,
//            format:'d/m/Y',
//            value:'',
//            scrollMonth : false,
//	       scrollInput : false
//        })


//var loader1 = function (e) {
//    let file1 = e.target.files;
//    let show1 = file1[0].name;
//    let output1 = document.getElementById("selector1");
//    output1.innerHTML = show1;
//};
//let fileInput1 = document.getElementById("File1");
//fileInput1.addEventListener("change", loader1);

//var loader2 = function (e) {
//    let file2 = e.target.files;
//    let show2 = file2[0].name;
//    let output2 = document.getElementById("selector2");
//    output2.innerHTML = show2;
//};
//let fileInput2 = document.getElementById("File2");
//fileInput2.addEventListener("change", loader2);

//var loader3 = function (e) {
//    let file3 = e.target.files;
//    let show3 = file3[0].name;
//    let output3 = document.getElementById("selector3");
//    output3.innerHTML = show3;
//};
//let fileInput3 = document.getElementById("File3");
//fileInput3.addEventListener("change", loader3);





// Form validation code will come here.
var FormValidation = document.getElementsByClassName("FormValidation")[0];
function validate() {


    //if ((document.getElementsByName("rd_ReqType_new")[0].checked == false) && (document.getElementsByName("rd_ReqType_new")[1].checked == false)) {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];      
    //    invalidSpan.innerHTML = "من فضلك أدخل نوع الطلب  "
    //    //document.getElementsByName("rd_ReqType_new")[0].focus();
    //    return false;
    //}

    if ((document.getElementsByName("rd_ReqType_new")[0].checked == false) && (document.getElementsByName("rd_ReqType_new")[1].checked == false)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[0].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        document.getElementsByName("rd_ReqType_new")[0].focus();
        invalidSpan.innerHTML = "من فضلك أدخل نوع الطلب  ";
        return false;
    }
    if ((document.getElementsByName("rd_ReqType_new")[0].checked == true) || (document.getElementsByName("rd_ReqType_new")[1].checked == true)) {
        document.getElementsByClassName("starInvalid")[0].style.visibility = "hidden";
    }

    if (document.myForm.SubscriptionNumber.value == "" || isNaN(document.myForm.SubscriptionNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[1].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الاشتراك "
        document.myForm.SubscriptionNumber.focus();
        //document.myForm.SubscriptionNumber.classList.add("invalidInput");
        return false;
    }
    if (document.myForm.SubscriptionNumber.value != "" || !isNaN(document.myForm.SubscriptionNumber.value)) {
        document.getElementsByClassName("starInvalid")[1].style.visibility = "hidden";
    }


    //var flag1 = true;
    //$('.MultiInputs11').find('input').each(function () {
    //    if (this.value == "") {
    //        FormValidation.style.display = "inherit";
    //        document.getElementsByClassName("starInvalid")[2].style.visibility = "visible";
    //        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //        invalidSpan.innerHTML = "من فضلك أدخل رقم إعتماد المنشأة  "
    //        this.focus();
    //        flag1 = false;
    //        return false;
    //    }
    //    if (this.value !== "") {
    //        document.getElementsByClassName("starInvalid")[2].style.visibility = "hidden";
    //    }
    //})
    //if (flag1 == false) return flag1;
    if (document.myForm.CCHINumber.value == "" || isNaN(document.myForm.CCHINumber.value)){
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[2].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم إعتماد المنشأة  "
        document.myForm.CCHINumber.focus();
        return false;
    }
    if (document.myForm.CCHINumber.value != "" || !isNaN(document.myForm.CCHINumber.value)) {
        document.getElementsByClassName("starInvalid")[2].style.visibility = "hidden";
    }

    if (document.myForm.CCHINumberExpiration.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[3].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل تاريخ انتهاء اعتماد المنشأة "
        document.myForm.CCHINumberExpiration.focus();
        return false;
    }
    if (document.myForm.CCHINumberExpiration.value != "") {
        document.getElementsByClassName("starInvalid")[3].style.visibility = "hidden";
    }

    //var flag2 = true;
    //$('.MultiInputs2').find('input').each(function () {
    //    if (this.value == "") {
    //        FormValidation.style.display = "inherit";
    //        document.getElementsByClassName("starInvalid")[4].style.visibility = "visible";
    //        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //        invalidSpan.innerHTML = "من فضلك أدخل رقم السجل التجاري  "
    //        this.focus();
    //        flag2 = false;
    //        return false;
    //    }
    //    if (this.value !== "") {
    //        document.getElementsByClassName("starInvalid")[4].style.visibility = "hidden";
    //    }
    //})
    //if (flag2 == false) return flag2;

    if (document.myForm.CRNumber.value == "" || isNaN(document.myForm.CRNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[4].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم السجل التجاري  "
        document.myForm.CRNumber.focus();
        return false;
    }
    if (document.myForm.CRNumber.value != "" || !isNaN(document.myForm.CRNumber.value)) {
        document.getElementsByClassName("starInvalid")[4].style.visibility = "hidden";
    }

    if (document.myForm.CRNumberExpiration.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[5].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل تاريخ انتهاء  السجل التجاري "
        document.myForm.CRNumberExpiration.focus();
        return false;
    }
    if (document.myForm.CRNumberExpiration.value != "") {
        document.getElementsByClassName("starInvalid")[5].style.visibility = "hidden";
    }

    //var flag3 = true;
    //$('.MultiInputs3').find('input').each(function () {
    //    if (this.value == "") {
    //        FormValidation.style.display = "inherit";
    //        document.getElementsByClassName("starInvalid")[6].style.visibility = "visible";
    //        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //        invalidSpan.innerHTML = "من فضلك أدخل رقم الترخيص الطبي  "
    //        this.focus();
    //        flag3 = false;
    //        return false;
    //    }
    //    if (this.value !== "") {
    //        document.getElementsByClassName("starInvalid")[6].style.visibility = "hidden";
    //    }
    //})
    //if (flag3 == false) return flag3;

    if (document.myForm.MedicalLicenseNumber.value == "" || isNaN(document.myForm.MedicalLicenseNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[6].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الترخيص الطبي  "
        document.myForm.MedicalLicenseNumber.focus();
        return false;
    }
    if (document.myForm.MedicalLicenseNumber.value != "" || !isNaN(document.myForm.MedicalLicenseNumber.value)) {
        document.getElementsByClassName("starInvalid")[6].style.visibility = "hidden";
    }

    if (document.myForm.MedicalLicenseNumberExpiration.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[7].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل تاريخ انتهاء  الترخيص الطبي "
        document.myForm.MedicalLicenseNumberExpiration.focus();
        return false;
    }
    if (document.myForm.MedicalLicenseNumberExpiration.value != "") {
        document.getElementsByClassName("starInvalid")[7].style.visibility = "hidden";
    }

    //var flag4 = true;
    //$('.MultiInputs4').find('input').each(function () {
    //    if (this.value == "") {
    //        FormValidation.style.display = "inherit";
    //        document.getElementsByClassName("starInvalid")[8].style.visibility = "visible";
    //        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //        invalidSpan.innerHTML = "من فضلك أدخل الرقم الضريبي  "
    //        this.focus();
    //        flag4 = false;
    //        return false;
    //    }
    //    if (this.value !== "") {
    //        document.getElementsByClassName("starInvalid")[8].style.visibility = "hidden";
    //    }
    //})
    //if (flag4 == false) return flag4;

    if (document.myForm.TAXNumber.value == "" || isNaN(document.myForm.TAXNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[8].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الرقم الضريبي  "
        document.myForm.TAXNumber.focus();
        return false;
    }
    if (document.myForm.TAXNumber.value != "" || !isNaN(document.myForm.TAXNumber.value)) {
        document.getElementsByClassName("starInvalid")[8].style.visibility = "hidden";
    }

    if ((document.getElementsByName("FacTyp_company")[0].checked == false) && (document.getElementsByName("FacTyp_company")[1].checked == false) && (document.getElementsByName("FacTyp_company")[2].checked == false) && (document.getElementsByName("FacTyp_company")[3].checked == false)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[9].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل نوع  المنشأة  "
        document.getElementsByName("FacTyp_company")[0].focus();
        return false;
    }
    if ((document.getElementsByName("FacTyp_company")[0].checked == true) || (document.getElementsByName("FacTyp_company")[1].checked == true) || (document.getElementsByName("FacTyp_company")[2].checked == true) || (document.getElementsByName("FacTyp_company")[3].checked == true)) {
        document.getElementsByClassName("starInvalid")[9].style.visibility = "hidden";
    }
    if (document.myForm.NameAr.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[10].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الاسم العربي للمنشأة "
        document.myForm.NameAr.focus();
        return false;
    }
    if (document.myForm.NameAr.value != "") {
        document.getElementsByClassName("starInvalid")[10].style.visibility = "hidden";
    }
    if (document.myForm.NameEn.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[11].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الاسم الانجليزي للمنشأة "
        document.myForm.NameEn.focus();
        return false;
    }
    if (document.myForm.NameEn.value != "") {
        document.getElementsByClassName("starInvalid")[11].style.visibility = "hidden";
    }
    if (document.myForm.City.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[12].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل المدينة "
        document.myForm.City.focus();
        return false;
    }
    if (document.myForm.City.value != "") {
        document.getElementsByClassName("starInvalid")[12].style.visibility = "hidden";
    }
    if (document.myForm.phone.value == "" || isNaN(document.myForm.SubscriptionNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[13].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الهاتف "
        document.myForm.phone.focus();
        return false;
    }
    if (document.myForm.phone.value != "" || !isNaN(document.myForm.SubscriptionNumber.value)) {
        document.getElementsByClassName("starInvalid")[13].style.visibility = "hidden";
    }
    if (document.myForm.fax.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[14].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الفاكس "
        document.myForm.fax.focus();
        return false;
    }
    if (document.myForm.fax.value != "") {
        document.getElementsByClassName("starInvalid")[14].style.visibility = "hidden";
    }
    if (document.myForm.District.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[15].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  الحي "
        document.myForm.District.focus();
        return false;
    }
    if (document.myForm.District.value != "") {
        document.getElementsByClassName("starInvalid")[15].style.visibility = "hidden";
    }
    if (document.myForm.street.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[16].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  الشارع "
        document.myForm.street.focus();
        return false;
    }
    if (document.myForm.street.value != "") {
        document.getElementsByClassName("starInvalid")[16].style.visibility = "hidden";
    }
    if (document.myForm.MailBox.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[17].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  ص.ب "
        document.myForm.MailBox.focus();
        return false;
    }
    if (document.myForm.MailBox.value != "") {
        document.getElementsByClassName("starInvalid")[17].style.visibility = "hidden";
    }
    if (document.myForm.zipCode.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[18].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الرمز البريدي "
        document.myForm.zipCode.focus();
        return false;
    }
    if (document.myForm.zipCode.value != "") {
        document.getElementsByClassName("starInvalid")[18].style.visibility = "hidden";
    }
    if (document.myForm.webSite.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[19].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل الموقع الالكتروني "
        document.myForm.webSite.focus();
        return false;
    }
    if (document.myForm.webSite.value != "") {
        document.getElementsByClassName("starInvalid")[19].style.visibility = "hidden";
    }
    if (document.myForm.mangerName.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[20].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل اسم المدير العام "
        document.myForm.mangerName.focus();
        return false;
    }
    if (document.myForm.mangerName.value != "") {
        document.getElementsByClassName("starInvalid")[20].style.visibility = "hidden";
    }
    if (document.myForm.mangerMobile.value == "" || isNaN(document.myForm.mangerMobile.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[21].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الجوال المدير العام "
        document.myForm.mangerMobile.focus();
        return false;
    }
    if (document.myForm.mangerMobile.value != "" || !isNaN(document.myForm.mangerMobile.value)) {
        document.getElementsByClassName("starInvalid")[21].style.visibility = "hidden";
    }
    //if (document.myForm.managerEmail.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني للمدير العام "
    //    document.myForm.managerEmail.focus();
    //    return false;
    //}
    var managerEmail = document.myForm.managerEmail.value;
    managerEmailatpos = managerEmail.indexOf("@");
    managerEmaildotpos = managerEmail.lastIndexOf(".");
    if (managerEmailatpos < 1 || (managerEmaildotpos - managerEmailatpos < 2)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[22].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني للمدير العام "
        document.myForm.managerEmail.focus();
        return false;
    }
    if (managerEmailatpos > 1 || (managerEmaildotpos - managerEmailatpos > 2)) {
        document.getElementsByClassName("starInvalid")[22].style.visibility = "hidden";
    }
    if (document.myForm.CFOName.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[23].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل اسم المدير المالي "
        document.myForm.CFOName.focus();
        return false;
    }
    if (document.myForm.CFOName.value != "") {
        document.getElementsByClassName("starInvalid")[23].style.visibility = "hidden";
    }
    if (document.myForm.CFOMobile.value == "" || isNaN(document.myForm.CFOMobile.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[24].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم جوال  المدير المالي "
        document.myForm.CFOMobile.focus();
        return false;
    }
    if (document.myForm.CFOMobile.value != "" || !isNaN(document.myForm.CFOMobile.value)) {
        document.getElementsByClassName("starInvalid")[24].style.visibility = "hidden";
    }
    //if (document.myForm.CFOEmail.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني  للمدير المالي "
    //    document.myForm.CFOEmail.focus();
    //    return false;
    //}
    var CFOEmail = document.myForm.CFOEmail.value;
    CFOEmailatpos = CFOEmail.indexOf("@");
    CFOEmaildotpos = CFOEmail.lastIndexOf(".");
    if (CFOEmailatpos < 1 || (CFOEmaildotpos - CFOEmailatpos < 2)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[25].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني  للمدير المالي "
        document.myForm.CFOEmail.focus();
        return false;
    }
    if (CFOEmailatpos > 1 || (CFOEmaildotpos - CFOEmailatpos > 2)) {
        document.getElementsByClassName("starInvalid")[25].style.visibility = "hidden";
    }
    if (document.myForm.ClaimInChargeContactName.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[26].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد اسم مسؤول المطالبات "
        document.myForm.ClaimInChargeContactName.focus();
        return false;
    }
    if (document.myForm.ClaimInChargeContactName.value != "") {
        document.getElementsByClassName("starInvalid")[26].style.visibility = "hidden";
    }
    if (document.myForm.ClaimInChargeContactMobile.value == "" || isNaN(document.myForm.ClaimInChargeContactMobile.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[27].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد رقم الجوال مسؤول المطالبات "
        document.myForm.ClaimInChargeContactMobile.focus();
        return false;
    }
    if (document.myForm.ClaimInChargeContactMobile.value != "" || !isNaN(document.myForm.ClaimInChargeContactMobile.value)) {
        document.getElementsByClassName("starInvalid")[27].style.visibility = "hidden";
    }
    //if (document.myForm.ClaimInChargeContactEmail.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني لمسؤول المطالبات "
    //    document.myForm.ClaimInChargeContactEmail.focus();
    //    return false;
    //}
    var ClaimInChargeContactEmail = document.myForm.ClaimInChargeContactEmail.value;
    ClaimInChargeContactEmailatpos = ClaimInChargeContactEmail.indexOf("@");
    ClaimInChargeContactEmaildotpos = ClaimInChargeContactEmail.lastIndexOf(".");
    if (ClaimInChargeContactEmailatpos < 1 || (ClaimInChargeContactEmaildotpos - ClaimInChargeContactEmailatpos < 2)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[28].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني لمسؤول المطالبات "
        document.myForm.ClaimInChargeContactEmail.focus();
        return false;
    }
    if (ClaimInChargeContactEmailatpos > 1 || (ClaimInChargeContactEmaildotpos - ClaimInChargeContactEmailatpos > 2)) {
        document.getElementsByClassName("starInvalid")[28].style.visibility = "hidden";
    }

    if (document.myForm.CommunicationContactName.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[29].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل اسم مسؤول الاتصال "
        document.myForm.CommunicationContactName.focus();
        return false;
    }
    if (document.myForm.CommunicationContactName.value != "") {
        document.getElementsByClassName("starInvalid")[29].style.visibility = "hidden";
    }
    if (document.myForm.CommunicationContactMobile.value == "" || isNaN(document.myForm.CommunicationContactMobile.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[30].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الجوال مسؤول الاتصال "
        document.myForm.CommunicationContactMobile.focus();
        return false;
    }
    if (document.myForm.CommunicationContactMobile.value != "" || !isNaN(document.myForm.CommunicationContactMobile.value)) {

        document.getElementsByClassName("starInvalid")[30].style.visibility = "hidden";
    }
    //if (document.myForm.CommunicationContactEmail.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني  لمسؤول الاتصال "
    //    document.myForm.CommunicationContactEmail.focus();
    //    return false;
    //}
    var CommunicationContactEmail = document.myForm.CommunicationContactEmail.value;
    CommunicationContactEmailatpos = CommunicationContactEmail.indexOf("@");
    CommunicationContactEmaildotpos = CommunicationContactEmail.lastIndexOf(".");
    if (CommunicationContactEmailatpos < 1 || (CommunicationContactEmaildotpos - CommunicationContactEmailatpos < 2)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[31].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني  لمسؤول الاتصال "
        document.myForm.CommunicationContactEmail.focus();
        return false;
    }
    if (CommunicationContactEmailatpos > 1 || (CommunicationContactEmaildotpos - CommunicationContactEmailatpos > 2)) {
        document.getElementsByClassName("starInvalid")[31].style.visibility = "hidden";
    }
    if (document.myForm.NotificationMobile.value == "" || isNaN(document.myForm.NotificationMobile.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[32].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم جوال الاشعارات "
        document.myForm.NotificationMobile.focus();
        return false;
    }
    if (document.myForm.NotificationMobile.value != "" || !isNaN(document.myForm.NotificationMobile.value)) {
        document.getElementsByClassName("starInvalid")[32].style.visibility = "hidden";
    }
    //if (document.myForm.NotificationEmail.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني  للاشعارات  "
    //    document.myForm.NotificationEmail.focus();
    //    return false;
    //}
    var NotificationEmail = document.myForm.NotificationEmail.value;
    NotificationEmailatpos = NotificationEmail.indexOf("@");
    NotificationEmaildotpos = NotificationEmail.lastIndexOf(".");
    if (NotificationEmailatpos < 1 || (NotificationEmaildotpos - NotificationEmailatpos < 2)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[33].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل البريد الالكتروني  للاشعارات  ";
        document.myForm.NotificationEmail.focus();
        return false;
    }
    if (NotificationEmailatpos > 1 || (NotificationEmaildotpos - NotificationEmailatpos > 2)) {
        document.getElementsByClassName("starInvalid")[33].style.visibility = "hidden";
    }

    if (document.myForm.userName.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[34].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل اسم المستخدم الرئيسي "
        document.myForm.userName.focus();
        return false;
    }
    if (document.myForm.userName.value != "") {
        document.getElementsByClassName("starInvalid")[34].style.visibility = "hidden";
    }

    //var flag5 = true;
    //$('.idInputs1').find('input').each(function () {
    //    if (this.value == "") {
    //        FormValidation.style.display = "inherit";
    //        document.getElementsByClassName("starInvalid")[35].style.visibility = "visible";
    //        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //        invalidSpan.innerHTML = "من فضلك أدخل رقم الهوية  "
    //        this.focus();
    //        flag5 = false;
    //        return false;
    //    }
    //    if (this.value != "") {
    //        document.getElementsByClassName("starInvalid")[35].style.visibility = "hidden";
    //    }
    //})
    //if (flag5 == false) return flag5;

    if (document.myForm.userIdNum.value == "" || isNaN(document.myForm.userIdNum.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[35].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الهوية  "
        document.myForm.userIdNum.focus();
        return false;
    }
    if (document.myForm.userIdNum.value != "" || !isNaN(document.myForm.userIdNum.value)) {
        document.getElementsByClassName("starInvalid")[35].style.visibility = "hidden";
    }

    if (document.myForm.userPhoneNum.value == "" || isNaN(document.myForm.SubscriptionNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[36].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الجوال   المستخدم الرئيسي "
        document.myForm.userPhoneNum.focus();
        return false;
    }
    if (document.myForm.userPhoneNum.value != "" || !isNaN(document.myForm.SubscriptionNumber.value)) {

        document.getElementsByClassName("starInvalid")[36].style.visibility = "hidden";
    }
    if ((document.getElementsByName("rd_Lang")[0].checked == false) && (document.getElementsByName("rd_Lang")[1].checked == false) && (document.myForm.otherLang.value == "")) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[37].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل لغة المستخدم  "
        document.myForm.otherLang.focus();
        return false;
    }
    if ((document.getElementsByName("rd_Lang")[0].checked == true) || (document.getElementsByName("rd_Lang")[1].checked == true) || (document.myForm.otherLang.value != "")) {
        document.getElementsByClassName("starInvalid")[37].style.visibility = "hidden";
    }
    //if (document.myForm.otherLang.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك ادخل اللغه "
    //    document.myForm.otherLang.focus();
    //    return false;
    //}
    if (document.myForm.AccreditedByName.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[38].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  الاسم "
        document.myForm.AccreditedByName.focus();
        return false;
    }
    if (document.myForm.AccreditedByName.value != "") {
        document.getElementsByClassName("starInvalid")[38].style.visibility = "hidden";
    }

    //var flag6 = true;
    //$('.idInputs2').find('input').each(function () {
    //    if (this.value == "") {
    //        FormValidation.style.display = "inherit";
    //        document.getElementsByClassName("starInvalid")[39].style.visibility = "visible";
    //        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //        invalidSpan.innerHTML = "من فضلك أدخل رقم الهوية  "
    //        this.focus();
    //        flag6 = false;
    //        return false;
    //    }
    //    if (this.value != "") {
    //        document.getElementsByClassName("starInvalid")[39].style.visibility = "hidden";
    //    }
    //})
    //if (flag6 == false) return flag6;

    if (document.myForm.AccreditedByIDNumber.value == "" || isNaN(document.myForm.AccreditedByIDNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[39].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الهوية  "
        document.myForm.AccreditedByIDNumber.focus();
        return false;
    }
    if (document.myForm.AccreditedByIDNumber.value != "" || !isNaN(document.myForm.AccreditedByIDNumber.value)) {
        document.getElementsByClassName("starInvalid")[39].style.visibility = "hidden";
    }

    if (document.myForm.AccreditedByMobile.value == "" || isNaN(document.myForm.SubscriptionNumber.value)) {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[40].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل رقم الجوال "
        document.myForm.AccreditedByMobile.focus();
        return false;
    }
    if (document.myForm.AccreditedByMobile.value != "" || !isNaN(document.myForm.SubscriptionNumber.value)) {
        document.getElementsByClassName("starInvalid")[40].style.visibility = "hidden";
    }
    if (document.myForm.AccreditedByTitle.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[41].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  المنصب "
        document.myForm.AccreditedByTitle.focus();
        return false;
    }
    if (document.myForm.AccreditedByTitle.value != "") {
        document.getElementsByClassName("starInvalid")[41].style.visibility = "hidden";
    }

    if (document.myForm.filename1.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[42].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  ملف إعتماد المنشأة "
        document.myForm.filename1.focus();
        return false;
    }
    if (document.myForm.filename1.value != "") {
        document.getElementsByClassName("starInvalid")[42].style.visibility = "hidden";
    }
    if (document.myForm.filename2.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[43].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل  ملف السجل التجاري "
        document.myForm.filename2.focus();
        return false;
    }
    if (document.myForm.filename2.value != "") {
        document.getElementsByClassName("starInvalid")[43].style.visibility = "hidden";
    }
    if (document.myForm.filename3.value == "") {
        FormValidation.style.display = "inherit";
        document.getElementsByClassName("starInvalid")[44].style.visibility = "visible";
        var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
        invalidSpan.innerHTML = "من فضلك أدخل ملف الترخيص الطبي "
        document.myForm.filename3.focus();
        return false;
    }
    if (document.myForm.filename3.value != "") {
        document.getElementsByClassName("starInvalid")[44].style.visibility = "hidden";
    }

    //if (document.myForm.Signature.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل     التوقيع "
    //    document.myForm.Signature.focus();
    //    return false;
    //}
    //if (document.myForm.imprint.value == "") {
    //    FormValidation.style.display = "inherit";
    //    var invalidSpan = document.getElementsByClassName("invalidSpan")[0];
    //    invalidSpan.innerHTML = "من فضلك أدخل الختم ";
    //    document.myForm.imprint.focus();
    //    return false;
    //}


    else {
        FormValidation.style.display = "none";
        return (true);
    }



}
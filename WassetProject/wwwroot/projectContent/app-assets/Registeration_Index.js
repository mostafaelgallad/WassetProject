var filesCCHI = [];
var fileCR = [];
var fileLicense = [];
var nextStep = true;
var checcchi = 'false';
var child = 1;


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
            //alert($("#CityId").val());
            if ($("#CityId").val() != null) {
                hideSpan('#Prov_City_Span');
                $('#CityListDiv').addClass(" MandatoryDDLNormal");
            }
            else {
                showSpan('#Prov_City_Span');
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



$(document).ready(function () {

    //$('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').datetimepicker({
    //    timepicker: false,
    //    datepicker: true,
    //    format: 'd/m/Y',
    //    value: '',
    //    scrollMonth: false,
    //    scrollInput: false
    //})
    var culture = $("#culture").text();
    if (culture == "ar") {
        $('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').hijriDatePicker({
            hijri: true,
            hijriFormat: 'iDD/iMM/iYYYY',
            //format: 'M/D/YYYY'
            format: 'DD/MM/YYYY'
        });
    } else {
        $('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').hijriDatePicker({
            hijriFormat: 'iDD/iMM/iYYYY',
            //format: 'M/D/YYYY',
            format: 'DD/MM/YYYY',
            locale: 'en-us'
        });
    }

    $(".language").on('change', function () {
        $(this).parents("form").submit(); // post form
    });

    var filescchi = $('#filescchi').get(0);
    var filescr = $('#filescr').get(0);
    var fileslic = $('#fileslic').get(0);

    if (filescchi.files[0] != undefined) {
        if (filescchi.files[0].size != 0 && filescchi.files[0].size != undefined) {
            $("#selector1").html(filescchi.files[0].name);
        }
    }
    if (filescr.files[0] != undefined) {
        if (filescr.files[0].size != 0 && filescr.files[0].size != undefined) {
            $("#selector1").html(filescr.files[0].name);
        }
    }
    if (fileslic.files[0] != undefined) {
        if (fileslic.files[0].size != 0 && fileslic.files[0].size != undefined) {
            $("#selector3").html(fileslic.files[0].name);
        }
    }

    $("#select2-FK_Vendor_ID-container").on("change", function (e) {
        debugger
        var select_val = $(e.currentTarget).val();
        console.log(select_val)
    });

    $('#FK_Vendor_ID').change(function () {
        //debugger;
        //master vendor
        $.getJSON('/CRM_Contracts/SystemNameList/' + $('#FK_Vendor_ID').val(), function (data) {
            var select = $("#FK_SystemName_ID");
            select.empty();
            //select.append($('<option/>', {
            //    value: 0,
            //    text: "Select a State"
            //}));
            $.each(data, function (index, itemData) {
                console.log(itemData);
                select.append($('<option/>', {
                    value: itemData.Value,
                    text: itemData.Text
                }));
            });
        });
    });


    $("#filescchi").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        var nullFile = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') && (this.files[i].size != 0 || this.files[i].size == undefined)) {
                filesCCHI.push(this.files[i]);
                var path = this.files[i].name + " ";
                fullPath += " " + path;
            } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                nullFile = "You Select Empty File!";
            } else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector1").html(fullPath);
        if (invalidFiles.length != 0) {
            toastr["warning"]("Only PDF files are supported & Max Size is 1MB!")
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text("Only PDF files are supported & Max Size is 1MB!");
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            // alert("Only PDF files are supported & Max Size is 1MB!");

        }
        if (nullFile != "") {
            toastr["error"](nullFile)
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text(nullFile);
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            //(nullFile);
        }
        console.log(invalidFiles.length)
    });

    $("#filescr").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        var nullFile = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') /*&& this.files[i].size <= 1048576*/) {
                fileCR.push(this.files[i]);
                var path = this.files[i].name;
                fullPath += "  " + path;
            } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                nullFile = "You Select Empty File!";
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector2").html(fullPath);
        if (invalidFiles.length != 0) {
            toastr["warning"]("Only PDF files are supported & Max Size is 1MB!")
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text("Only PDF files are supported & Max Size is 1MB!");
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            // alert("Only PDF files are supported & Max Size is 1MB!");

        }
        if (nullFile != "") {
            toastr["error"](nullFile)
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text(nullFile);
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            //alert(nullFile);
        }

    });

    $("#fileslic").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        var nullFile = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') /*&& this.files[i].size <= 1048576*/) {
                fileLicense.push(this.files[i]);
                var path = this.files[i].name;
                fullPath += "  " + path;
            } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                nullFile = "You Select Empty File!";
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector3").html(fullPath);
        if (invalidFiles.length != 0) {
            toastr["warning"]("Only PDF files are supported & Max Size is 1MB!")
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text("Only PDF files are supported & Max Size is 1MB!");
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            // alert("Only PDF files are supported & Max Size is 1MB!");
        }
        if (nullFile != "") {
            toastr["error"](nullFile)
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text(nullFile);
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            //alert(nullFile);
        }

    });

    $("#mainForm").submit(function (e) {
        //return(validate());
        return ValidateInputs(e);
    });


});


function ValidateInputs(form) {
    if (nextStep) {
        var loadingDiv = $('#loadingDiv');
        loadingDiv.show();
        toastr["success"]("<p class='text-bold-700'>We are Registering a New Contract Please Wait</p>", "<p>DHS-Platform Service</p>")
    }

}

function checkRadio() {
    var planId = $("#FK_PricPln_ID").val();
    planId = planId == null || planId == "" || planId == undefined ? 6 : planId;
    if (planId == 6) {
        document.getElementById('rd_FacTyp4').checked = true;
        $('input[id="rd_FacTyp4"]').attr('checked', 'checked');
        $('input[id="rd_FacTyp3"]').attr('disabled', 'disabled');
        $('input[id="rd_FacTyp2"]').attr('disabled', 'disabled');
        $('input[id="rd_FacTyp1"]').attr('disabled', 'disabled');
        $('#Prov_TAXNumber').attr('disabled', 'disabled');
        $('#Prov_MedicalLicenseNumber').attr('disabled', 'disabled');
        $('#Prov_CCNumber').attr('disabled', 'disabled');
        $('#Prov_CRNumber').attr('disabled', 'disabled');
        $('#filescr').attr('disabled', 'disabled');

        filescr
        $('#Prov_CRNumberExpirationDate').attr('disabled', 'disabled');
        $('#Prov_MedicalLicenseNumberExpirationDate').attr('disabled', 'disabled');
        $('#fileslic').attr('disabled', 'disabled');

    }
    else if (planId == 7) {
        document.getElementById('rd_FacTyp3').checked = true;
        $('input[id="rd_FacTyp4"]').attr('disabled', 'disabled');
        $('input[id="rd_FacTyp2"]').attr('disabled', 'disabled');
        $('input[id="rd_FacTyp1"]').attr('disabled', 'disabled');
    }
    else {
        $('input[id="rd_FacTyp4"]').attr('disabled', 'disabled');
        $('input[id="rd_FacTyp3"]').attr('disabled', 'disabled');
    }
}

function UploadFiles() {
    var out = { "succeded": false, "message": "" };
    if (window.FormData !== undefined) {
        var filesCCHI = filesCCHI;
        var filesCR = filesCR;
        var filesLicense = filesLicense;

        // Create FormData object
        var fileData = new FormData();

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


        $.ajax({
            url: '/Registration/UploadFiles',
            type: "POST",
            contentType: false, // Not to set any content header
            processData: false, // Not to process data
            data: fileData,
            success: function (result) {
                if (result.succeded) {
                    toastr["info"]("file uploaded successfully");
                    //$('#ToastSuccess').toast('show');
                    //$('#ToastSuccess .toast-body').text("file uploaded successfully");
                    //setTimeout(function () { $('#ToastSuccess').toast('hide') }, 5000)
                    out = { "succeded": true, "message": "" };
                } else {
                    toastr["warning"](result.message)
                    //$('#ToastError').toast('show');
                    //$('#ToastError .toast-body').text(result.message);
                    //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
                    out = { "succeded": false, "message": result.message };
                }
            },
            error: function (err) {
                toastr["error"](err)
                //$('#ToastError').toast('show');
                //$('#ToastError .toast-body').text(err);
                //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
                out = { "succeded": false, "message": err };
            }
        });


    }
    return out;
}

$(document).ready(function () {
    var base_color = "rgb(160,157,157)";
    var active_color = "rgb(42, 181, 74)";
    //var active_color ="rgb(247,149,28)";



    var length = $("section").length - 1;
    $("#prev").addClass("disabled");
    $("#submitFormButton").addClass("disabled");
    console.log(child);


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
                GeneralPage();
                break;
            case 2:
                firstPage();
                //checkRadio();
                break;
            case 3:
                secondPage();
                break;
            case 4:
                thirdPage();
                break;
            case 5:
                fourthPage()
                break;
            case 6:
                fifthPage()
                break;
            case 7:
                sixthPage();
                break;
            default:
        }
        if (id == "next") {
            /*debugger*/;
            if (nextStep) {
                $("#prev").removeClass("disabled");
                if (child >= length) {
                    //console.log("hiiiiii?");
                    $(this).addClass("disabled");
                    $('#submitFormButton').removeClass("disabled");
                }
            }
            if (child <= length && nextStep != false) {
                var planId = $("#FK_PricPln_ID").val();
                var Prov_CCHINumber = $('#Prov_CCHINumber').val();
                var prov_MedicalLicenseNumber = $('#Prov_MedicalLicenseNumber').val();
                if (child == 3) {
                    
                    $.ajax({
                        url: '/CRM_Contracts/CheckIfCCHINumberExist',
                        type: "Post",
                        cache: false,
                        data: { 'fK_PricPln_ID': planId, 'cCHI': Prov_CCHINumber, 'prov_MedicalLicenseNumber': prov_MedicalLicenseNumber },

                        beforeSend: function () {
                            $('#loadingDiv').show();
                        },
                        success: function (data) {
                            var millisecondsToWait = 8000;
                            setTimeout(function () {
                            }, millisecondsToWait);
                            $('#loadingDiv').hide();
                            if (data.success == "success") {
                                if (data.data == 'false') {
                                    $('#loadingDiv').hide();
                                    child++;
                                    changeSection();
                                }
                                else { // cchi already exsist
                                    $('#loadingDiv').hide();
                                    toastr["info"]("CCHI number or Medical License numbers registered before");
                                }
                            }
                            else {
                                
                                $('#loadingDiv').hide();
                                toastr["warning"]("Error occurred while checking CCHI & Medical License numbers");
                            }
                        }
                    });
                }
                else {
                    child++;
                    changeSection();
                }
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
        else if (id == 'submitFormButton') {
            event.preventDefault();
                Swal.fire({
                    title: 'You are about to register a new provider contract, Are you sure ?',
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Register`,
                    denyButtonText: `Cancel`,
                    showLoaderOnConfirm: true,
                    allowOutsideClick: () => !Swal.isLoading()
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: 'Registering the provider data...',
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
    function GeneralPage() {
        var FK_PricPln_ID = $('#FK_PricPln_ID').val();
        if (FK_PricPln_ID === "") {
            nextStep = false;
            showSpan('#FK_PricPln_ID_Span');
        }
        else {
            hideSpan('#FK_PricPln_ID_Span');
        }
    }
    function firstPage() {
        var Prov_NameAr = $('#Prov_NameAr').val();
        if (Prov_NameAr === "") {
            $('#Prov_NameAr').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_NameAr_Span');
            //$('#Prov_NameAr_Span').text("الإسم العربي للمنشأة مفقود");
        }
        else {
            hideSpan('#Prov_NameAr_Span');
            $('#Prov_NameAr').css('border', '1px solid #E79022');
        }
        //==============================
        var FK_BusinessType_ID = $('#FK_BusinessType_ID').val();
        if (FK_BusinessType_ID === "") {
            $('.FK_BusinessType_ID .select2-selection--single').css('border', '2px solid red');
            nextStep = false;
            showSpan('#FK_BusinessType_ID_Span');
            //$('#FK_Vender_ID_Span').text("لم يتم إختيار مورد النظام");
        }
        else {
            hideSpan('#FK_BusinessType_ID_Span');
            $('.FK_BusinessType_ID .select2-selection--single').css('border', '1px solid #E79022');
        }

        var FK_Vender_ID = $('#FK_Vendor_ID').val();
        if (FK_Vender_ID === "") {
            $('.FK_Vender_ID .select2-selection--single').css('border', '2px solid red');
            nextStep = false;
            showSpan('#FK_vendor_ID_Span');
            //$('#FK_Vender_ID_Span').text("لم يتم إختيار مورد النظام");
        }
        else {
            hideSpan('#FK_vendor_ID_Span');
            $('.FK_Vender_ID .select2-selection--single').css('border', '1px solid #E79022');
        }

        var FK_SystemName_ID = $('#FK_SystemName_ID').val();
        if (FK_SystemName_ID === "") {
            $('.FK_SystemName_ID .select2-selection--single').css('border', '2px solid red');
            nextStep = false;
            showSpan('#FK_SystemName_ID_Span');
            //$('#FK_SystemName_ID_Span').text("لم يتم إختيار اسم النظام");
        }
        else {
            hideSpan('#FK_SystemName_ID_Span');
            $('.FK_SystemName_ID .select2-selection--single').css('border', '1px solid #E79022');
        }
        //=================================================
        //=========================================done
        var Prov_NameEn = $('#Prov_NameEn').val();
        if (Prov_NameEn === "") {
            $('#Prov_NameEn').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_NameEn_Span');
            //$('#Prov_NameEn_Span').text("اللإسم الإنجليزي للمنشأة مفقود");
        }
        else {
            $('#Prov_NameEn').css('border', '1px solid #E79022');
            hideSpan('#Prov_NameEn_Span');
        }
        //============================================done
        var CountryId = $('#CountryId').val();
        if (CountryId === "") {
            $('#CountryId').css('border', '2px solid red');
            nextStep = false;
            showSpan('#CountryId_Span');
        }
        else {
            $('#CountryId').css('border', '1px solid #E79022');
            hideSpan('#CountryId_Span');
        }
        //============================================done
        var CityId = $('#CityId').val();
        if (CityId === "" || CityId == null) {
            $('#CityId').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_City_Span');
            //$('#Prov_City_Span').text("بيان المدينة مفقود");
        }
        else {
            $('#CityId').css('border', '1px solid #E79022');
            hideSpan('#Prov_City_Span');
        }
        //===========================================done
        var Prov_PhoneNumber = $('#Prov_PhoneNumber').val();
        if (Prov_PhoneNumber === "") {
            $('#Prov_PhoneNumber').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_PhoneNumber_Span');
            //$('#Prov_PhoneNumber_Span').text("بيان الهاتف مفقود");
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Prov_PhoneNumber);
            if (!isEnglish) {
                $('#Prov_PhoneNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_PhoneNumber_Span1');
                //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
            }
            else {
                $('#Prov_PhoneNumber').css('border', '1px solid #E79022');
                hideSpan('#Prov_PhoneNumber_Span1');
                hideSpan('#Prov_PhoneNumber_Span');
            }

            if (Prov_PhoneNumber.length < 12) {
                $('#Prov_PhoneNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_PhoneNumber_Span2');
                //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون 12 أرقام");
            } else {
                $('#Prov_PhoneNumber').css('border', '1px solid #E79022');
                hideSpan('#Prov_PhoneNumber_Span');
                hideSpan('#Prov_PhoneNumber_Span1');
                hideSpan('#Prov_PhoneNumber_Span2');
            }
        }
        //==========================================================done

        var Prov_FaxNumber = $('#Prov_FaxNumber').val();
        if (Prov_FaxNumber === "") {
            $('#Prov_FaxNumber').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_FaxNumber_Span');
            //$('#Prov_FaxNumber_Span').text("بيان الفاكس مفقود");

        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Prov_FaxNumber);
            if (!isEnglish) {
                $('#Prov_FaxNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_FaxNumber_Span1');
                //$('#Prov_FaxNumber_Span').text("بيان الفاكس يجب أن يكون باللغة الإنجليزية");
            }
            else {
                $('#Prov_FaxNumber').css('border', '1px solid #E79022');
                hideSpan('#Prov_FaxNumber_Span1');
                hideSpan('#Prov_FaxNumber_Span');
            }
            if (Prov_FaxNumber.length < 12) {
                $('#Prov_FaxNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_FaxNumber_Span2');
                //$('#Prov_FaxNumber_Span').text("بيان الفاكس يجب أن يكون 12 أرقام");
            } else {
                $('#Prov_FaxNumber').css('border', '1px solid #E79022');
                hideSpan('#Prov_FaxNumber_Span');
                hideSpan('#Prov_FaxNumber_Span1');
                hideSpan('#Prov_FaxNumber_Span2');
            }
        }
        //===============================================done
        var Address = $('#Address').val();
        if (Address === "") {
            $('#Address').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Address_Span');
        }
        else {
            $('#Address').css('border', '1px solid #E79022');
            hideSpan('#Address_Span');
        }
        //===============================================done
        var Prov_District = $('#Prov_District').val();
        if (Prov_District === "") {
            $('#Prov_District').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_District_Span');
            //$('#Prov_District_Span').text("بيان الحي مفقود");
        }
        else {
            $('#Prov_District').css('border', '1px solid #E79022');
            hideSpan('#Prov_District_Span');
        }
        //==================================================done
        var Prov_Street = $('#Prov_Street').val();
        if (Prov_Street === "") {
            $('#Prov_Street').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_Street_Span');
            //$('#Prov_Street_Span').text("بيان الشارع مفقود");
        }
        else {
            $('#Prov_Street').css('border', '1px solid #E79022');
            hideSpan('#Prov_Street_Span');
        }
        //================================================done
        var Prov_MailBox = $('#Prov_MailBox').val();
        if (Prov_MailBox === "") {
            $('#Prov_MailBox').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_MailBox_Span');
            //$('#Prov_MailBox_Span').text("بيان الصندوق البريدي مفقود");

        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Prov_MailBox);
            if (!isEnglish) {
                $('#Prov_MailBox').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_MailBox_Span1');
                //$('#Prov_MailBox_Span').text("بيان الصندوق البريدي يجب أن يكون باللغة الإنجليزية");
            }
            else {
                $('#Prov_MailBox').css('border', '1px solid #E79022');
                hideSpan('#Prov_MailBox_Span');
                hideSpan('#Prov_MailBox_Span1');
            }
        }
        //===========================================================done
        var Prov_ZipCode = $('#Prov_ZipCode').val();
        if (Prov_ZipCode === "") {
            $('#Prov_ZipCode').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_ZipCode_Span');
            //$('#Prov_ZipCode_Span').text("بيان الرمز البريدي مفقود");
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Prov_ZipCode);
            if (!isEnglish) {
                $('#Prov_ZipCode').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_ZipCode_Span1');
                //$('#Prov_ZipCode_Span').text("بيان الرمز البريدي يجب أن يكون باللغة الإنجليزية");
            }
            else {
                $('#Prov_ZipCode').css('border', '1px solid #E79022');
                hideSpan('#Prov_ZipCode_Span');
                hideSpan('#Prov_ZipCode_Span1');
            }
        }
        //===============================================done
        var Prov_Website = $('#Prov_Website').val();
        if (Prov_Website === "") {
            $('#Prov_Website').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_Website_Span');
            hideSpan('#Prov_Website_Span1');
            //$('#Prov_Website_Span').text("بيان موقع المنشأة مفقود");
        }
        else {
            var reg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            var testRsult = reg.test(Prov_Website)
            if (!testRsult) {
                nextStep = false;
                showSpan('#Prov_Website_Span1');
                hideSpan('#Prov_Website_Span');
            }
            else {
                hideSpan('#Prov_Website_Span');
                hideSpan('#Prov_Website_Span1');
            }
        }
        //============================================done
    }
    function secondPage() {
        //==========Type Request================
        //var rd_ReqTypeNew = $('#rd_ReqTypeNew').is(':checked');
        //var rd_ReqTypeRenew = $('#rd_ReqTypeRenew').is(':checked');
        //if (rd_ReqTypeNew === false && rd_ReqTypeRenew === false) {
        //    nextStep = false;
        //    showSpan('#ReqType_Span');
        //   // $(".starInvalid").text("يجب إختيار نوع الطلب")
        //}
        //else {
        //    hideSpan('#ReqType_Span');
        //}
        //====================================
        var rd_FacTyp1 = $('#rd_FacTyp1').is(':checked');
        var rd_FacTyp2 = $('#rd_FacTyp2').is(':checked');
        var rd_FacTyp3 = $('#rd_FacTyp3').is(':checked');
        var rd_FacTyp4 = $('#rd_FacTyp4').is(':checked');
        var rd_FacTyp5 = $('#rd_FacTyp5').is(':checked');

        if (rd_FacTyp1 === false && rd_FacTyp2 === false && rd_FacTyp3 === false && rd_FacTyp4 === false && rd_FacTyp5 === false) {
            nextStep = false;
            showSpan('#Facility_type_Span');
        }
        else {
            hideSpan('#Facility_type_Span');
        }

        //====================================

        var planId = $("#FK_PricPln_ID").val();
        var Prov_CCHINumber = $('#Prov_CCHINumber').val();
        var prov_MedicalLicenseNumber = $('#Prov_MedicalLicenseNumber').val();
        if (Prov_CCHINumber === "") {
            $('#Prov_CCHINumber').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_CCHINumber_Span');

        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Prov_CCHINumber);
            if (!isEnglish) {
                $('#Prov_CCHINumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CCHINumber_Span1');
                //message.push("رقم مجلس الضمان يجب أن يكون باللغة الإنجليزية");
            }
            else {
                $('#Prov_CCHINumber').css('border', '1px solid #E79022');
                hideSpan('#Prov_CCHINumber_Span1');
                hideSpan('#Prov_CCHINumber_Span');
            }
            //nextStep = false;
            //debugger;

        }
        //alert(nextStep);

        var Prov_CCHINumberExpiration = $('#Prov_CCHINumberExpirationDate').val();
        if (Prov_CCHINumberExpiration === "") {
            $('#Prov_CCHINumberExpirationDate').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_CCHINumberExpirationDate_Span');
            //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
        }
        else {
            $('#Prov_CCHINumberExpirationDate').css('border', '1px solid #E79022');
            hideSpan('#Prov_CCHINumberExpirationDate_Span');
            //valid = true;
        }
        if (planId == 6) {

        }
        else {
            var Prov_CRNumber = $('#Prov_CRNumber').val();
            if (Prov_CRNumber === "") {
                $('#Prov_CRNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CRNumber_Span');
                //message.push("رقم السجل التجاري مفقود");
            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_CRNumber);
                if (!isEnglish) {
                    $('#Prov_CRNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CRNumber_Span1');
                    // message.push("رقم السجل التجاري يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_CRNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CRNumber_Span1');
                    hideSpan('#Prov_CRNumber_Span');
                }
                if (Prov_CRNumber.length < 10) {
                    $('#Prov_CRNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CRNumber_Span2');
                    // message.push("رقم السجل التجاري يجب أن يكون 10 أرقام");
                }
                else {
                    hideSpan('#Prov_CRNumber_Span1');
                    hideSpan('#Prov_CRNumber_Span');
                    hideSpan('#Prov_CRNumber_Span2');
                }
            }

            var Prov_CRNumberExpiration = $('#Prov_CRNumberExpirationDate').val();
            if (Prov_CRNumberExpiration === "") {
                $('#Prov_CRNumberExpirationDate').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CRNumberExpirationDate_Span');
                //message.push("يجب إختيار تاريخ إنتهاء السجل التجاري");
            }
            else {
                $('#Prov_CRNumberExpirationDate').css('border', '1px solid #E79022');
                hideSpan('#Prov_CRNumberExpirationDate_Span');
            }


            var Prov_MedicalLicenseNumber = $('#Prov_MedicalLicenseNumber').val();
            if (Prov_MedicalLicenseNumber === "") {
                $('#Prov_MedicalLicenseNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_MedicalLicenseNumber_Span');
                //$('#Prov_MedicalLicenseNumber_Span').text("رقم الترخيص الطبي مفقود");
            }
            else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_MedicalLicenseNumber);
                if (!isEnglish) {
                    $('#Prov_MedicalLicenseNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_MedicalLicenseNumber_Span1');
                    //$('#Prov_MedicalLicenseNumber_Span').text("رقم التصديق يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_MedicalLicenseNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_MedicalLicenseNumber_Span1');
                    hideSpan('#Prov_MedicalLicenseNumber_Span');
                }
                if (Prov_MedicalLicenseNumber.length < 10 || Prov_MedicalLicenseNumber.length > 20) {
                    $('#Prov_MedicalLicenseNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_MedicalLicenseNumber_Span2');
                    //$('#Prov_MedicalLicenseNumber_Span').text("رقم الترخيص الطبي يجب أن يكون 10 أرقام بحد اقصي 20 رقم");
                }
                else {
                    hideSpan('#Prov_MedicalLicenseNumber_Span');
                    hideSpan('#Prov_MedicalLicenseNumber_Span1');
                    hideSpan('#Prov_MedicalLicenseNumber_Span2');
                }
            }

            var Prov_MedicalLicenseNumberExpiration = $('#Prov_MedicalLicenseNumberExpirationDate').val();
            if (Prov_MedicalLicenseNumberExpiration === "") {
                $('#Prov_MedicalLicenseNumberExpirationDate').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
                //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
            }
            else {
                $('#Prov_MedicalLicenseNumberExpirationDate').css('border', '1px solid #E79022');
                hideSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
            }

            var Prov_TAXNumber = $('#Prov_TAXNumber').val();
            if (Prov_TAXNumber === "") {
                $('#Prov_TAXNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_TAXNumber_Span');
                //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_TAXNumber);
                if (!isEnglish) {
                    $('#Prov_TAXNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_TAXNumber_Span1');
                    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_TAXNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_TAXNumber_Span1');
                    hideSpan('#Prov_TAXNumber_Span');
                }
                if (Prov_TAXNumber.length < 15) {
                    $('#Prov_TAXNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_TAXNumber_Span2');
                    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي يجب أن يكون 15 رقم");
                }
                else {
                    hideSpan('#Prov_TAXNumber_Span');
                    hideSpan('#Prov_TAXNumber_Span1');
                    hideSpan('#Prov_TAXNumber_Span2');
                }
            }
            var Prov_CCNumber = $('#Prov_CCNumber').val();
            if (Prov_CCNumber === "") {
                $('#Prov_CCNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CCNumber_Span');
                //$('#Prov_CCNumber_Span').text("رقم الغرفة التجارية مفقود");
            }
            else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_CCNumber);
                if (!isEnglish) {
                    $('#Prov_CCNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CCNumber_Span1');
                    //$('#Prov_CCNumber_Span').text("رقم الغرفة التجارية يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_CCNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CCNumber_Span1');
                    hideSpan('#Prov_CCNumber_Span');
                }
                if (Prov_CCNumber.length < 6) {
                    $('#Prov_CCNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CCNumber_Span2');
                    //$('#Prov_CCNumber_Span').text("رقم الغرفة التجارية يجب أن يكون 6 أرقام");
                }
                else {
                    hideSpan('#Prov_CCNumber_Span');
                    hideSpan('#Prov_CCNumber_Span1');
                    hideSpan('#Prov_CCNumber_Span2');
                }
            }

        }
    }   
    function thirdPage() {
        //==============================================done
        var Prov_GMName = $('#Prov_GMName').val();
        if (Prov_GMName === "") {
            $('#Prov_GMName').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_GMName_Span');
            //$('#Prov_GMName_Span').text("بيان إسم المدير العام مفقود");
        }
        else {
            $('#Prov_GMName').css('border', '1px solid #E79022');
            hideSpan('#Prov_GMName_Span');
        }
        //==================================================done
        var Prov_GMMobile = $('#Prov_GMMobile').val();
        if (Prov_GMMobile === "") {
            $('#Prov_GMMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_GMMobile_Span');
            //$('#Prov_GMMobile_Span').text("بيان جوال المدير العام مفقود");
        } else {
            if (Prov_GMMobile.length != 12 || !Prov_GMMobile.startsWith("9665")) {
                $('#Prov_GMMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_GMMobile_Span1');
                //$('#Prov_GMMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Prov_GMMobile').css('border', '1px solid #E79022');
                hideSpan('#Prov_GMMobile_Span');
                hideSpan('#Prov_GMMobile_Span1');
            }
        }
        //====================================================done
        var Prov_GMEmail = $('#Prov_GMEmail').val();
        if (Prov_GMEmail === "") {
            $('#Prov_GMEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_GMEmail_Span');
            //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني للمدير العام مفقود");
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Prov_GMEmail)
            if (!testRsult) {
                $('#Prov_GMEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_GMEmail_Span1');
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Prov_GMEmail').css('border', '1px solid #E79022');
                hideSpan('#Prov_GMEmail_Span');
                hideSpan('#Prov_GMEmail_Span1');
            }
        }
        //=========================================done
        var Prov_CFOName = $('#Prov_CFOName').val();
        if (Prov_CFOName === "") {
            $('#Prov_CFOName').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_CFOName_Span');
            //$('#Prov_CFOName_Span').text("بيان إسم المدير المالي مفقود");
        }
        else {
            $('#Prov_CFOName').css('border', '1px solid #E79022');
            hideSpan('#Prov_CFOName_Span');
        }
        //=============================================done
        var Prov_CFOMobile = $('#Prov_CFOMobile').val();
        if (Prov_CFOMobile === "") {
            $('#Prov_CFOMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_CFOMobile_Span');
            //$('#Prov_CFOMobile_Span').text("بيان جوال المدير المالي مفقود");
        } else {
            if (Prov_CFOMobile.length != 12 || !Prov_CFOMobile.startsWith("9665")) {
                $('#Prov_CFOMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CFOMobile_Span1');
                //$('#Prov_CFOMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Prov_CFOMobile').css('border', '1px solid #E79022');
                hideSpan('#Prov_CFOMobile_Span');
                hideSpan('#Prov_CFOMobile_Span1');
            }
        }
        //===============================================done

        var Prov_CFOEmail = $('#Prov_CFOEmail').val();
        if (Prov_CFOEmail === "") {
            $('#Prov_CFOEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Prov_CFOEmail_Span');
            //$('#Prov_CFOEmail_Span').text("بيان البريد الإلكتروني للمدير المالي مفقود");
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Prov_CFOEmail)
            if (!testRsult) {
                $('#Prov_CFOEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CFOEmail_Span1');
                //$('#Prov_CFOEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Prov_CFOEmail').css('border', '1px solid #E79022');
                hideSpan('#Prov_CFOEmail_Span');
                hideSpan('#Prov_CFOEmail_Span1');
            }
        }
        //================================================done
        var Cont_ClaimInChargeContactName = $('#Cont_ClaimInChargeContactName').val();
        if (Cont_ClaimInChargeContactName === "") {
            $('#Cont_ClaimInChargeContactName').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_ClaimInChargeContactName_Span');
            //$('#Cont_ClaimInChargeContactName_Span').text("بيان إسم مسؤول المطالبات مفقود");
        }
        else {
            $('#Cont_ClaimInChargeContactName').css('border', '1px solid #E79022');
            hideSpan('#Cont_ClaimInChargeContactName_Span');
        }
        //===========================================done
        var Cont_ClaimInChargeContactMobile = $('#Cont_ClaimInChargeContactMobile').val();
        if (Cont_ClaimInChargeContactMobile === "") {
            $('#Cont_ClaimInChargeContactMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_ClaimInChargeContactMobile_Span');
            //$('#Cont_ClaimInChargeContactMobile_Span').text("بيان جوال مسؤول المطالبات مفقود");
        } else {
            if (Cont_ClaimInChargeContactMobile.length != 12 || !Cont_ClaimInChargeContactMobile.startsWith("9665")) {
                $('#Cont_ClaimInChargeContactMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_ClaimInChargeContactMobile_Span1');
                //$('#Cont_ClaimInChargeContactMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Cont_ClaimInChargeContactMobile').css('border', '1px solid #E79022');
                hideSpan('#Cont_ClaimInChargeContactMobile_Span');
                hideSpan('#Cont_ClaimInChargeContactMobile_Span1');
            }
        }
        //===========================================
        var Cont_ClaimInChargeContactEmail = $('#Cont_ClaimInChargeContactEmail').val();
        if (Cont_ClaimInChargeContactEmail === "") {
            $('#Cont_ClaimInChargeContactEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_ClaimInChargeContactEmail_Span');
            //$('#Cont_ClaimInChargeContactEmail_Span').text("بيان البريد الإلكتروني لمسؤول المطالبات مفقود");

        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Cont_ClaimInChargeContactEmail)
            if (!testRsult) {
                $('#Cont_ClaimInChargeContactEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_ClaimInChargeContactEmail_Span1');
                //$('#Cont_ClaimInChargeContactEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Cont_ClaimInChargeContactEmail').css('border', '1px solid #E79022');
                hideSpan('#Cont_ClaimInChargeContactEmail_Span');
                hideSpan('#Cont_ClaimInChargeContactEmail_Span1');
            }
        }
        //=========================================done
        var Cont_CommunicationContactName = $('#Cont_CommunicationContactName').val();
        if (Cont_CommunicationContactName === "") {
            $('#Cont_CommunicationContactName').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_CommunicationContactName_Span');
            //$('#Cont_CommunicationContactName_Span').text("بيان إسم مسؤول الإتصال مفقود");
        }
        else {
            $('#Cont_CommunicationContactName').css('border', '1px solid #E79022');
            hideSpan('#Cont_CommunicationContactName_Span');
        }
        //=====================================================done
        var Cont_CommunicationContactMobile = $('#Cont_CommunicationContactMobile').val();
        if (Cont_CommunicationContactMobile === "") {
            $('#Cont_CommunicationContactMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_CommunicationContactMobile_Span');
            //$('#Cont_CommunicationContactMobile_Span').text("بيان جوال مسؤول الإتصال مفقود");
        } else {
            if (Cont_CommunicationContactMobile.length != 12 || !Cont_CommunicationContactMobile.startsWith("9665")) {
                $('#Cont_CommunicationContactMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_CommunicationContactMobile_Span1');
                //$('#Cont_CommunicationContactMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Cont_CommunicationContactMobile').css('border', '1px solid #E79022');
                hideSpan('#Cont_CommunicationContactMobile_Span');
                hideSpan('#Cont_CommunicationContactMobile_Span1');
            }
        }
        //============================================done
        var Cont_CommunicationContactEmail = $('#Cont_CommunicationContactEmail').val();
        if (Cont_CommunicationContactEmail === "") {
            $('#Cont_CommunicationContactEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_CommunicationContactEmail_Span');
            //$('#Cont_CommunicationContactEmail_Span').text("بيان البريد الإلكتروني لمسؤول الإتصال مفقود");

        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Cont_CommunicationContactEmail)
            if (!testRsult) {
                $('#Cont_CommunicationContactEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_CommunicationContactEmail_Span1');
                //$('#Cont_CommunicationContactEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Cont_CommunicationContactEmail').css('border', '1px solid #E79022');
                hideSpan('#Cont_CommunicationContactEmail_Span');
                hideSpan('#Cont_CommunicationContactEmail_Span1');
            }
        }
        //=======================================done
        var Cont_NotificationMobile = $('#Cont_NotificationMobile').val();
        if (Cont_NotificationMobile === "") {
            $('#Cont_NotificationMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_NotificationMobile_Span');
            //$('#Cont_NotificationMobile_Span').text("رقم جوال الإشعارات مفقود");
        } else {
            if (Cont_NotificationMobile.length != 12 || !Cont_NotificationMobile.startsWith("9665")) {
                $('#Cont_NotificationMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_NotificationMobile_Span1');
                //$('#Cont_NotificationMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Cont_NotificationMobile').css('border', '1px solid #E79022');
                hideSpan('#Cont_NotificationMobile_Span');
                hideSpan('#Cont_NotificationMobile_Span1');
            }
        }
        //=========================================done
        var Cont_NotificationEmail = $('#Cont_NotificationEmail').val();
        if (Cont_NotificationEmail === "") {
            $('#Cont_NotificationEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_NotificationEmail_Span');
            //$('#Cont_NotificationEmail_Span').text("البريد الإلكتروني للإشعارات مفقود");
        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Cont_NotificationEmail)
            if (!testRsult) {
                $('#Cont_NotificationEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_NotificationEmail_Span1');
                //$('#Cont_NotificationEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Cont_NotificationEmail').css('border', '1px solid #E79022');
                hideSpan('#Cont_NotificationEmail_Span');
                hideSpan('#Cont_NotificationEmail_Span1');
            }
        }
    }
    function fourthPage() {
        var Cont_MainUserName = $('#Cont_MainUserName').val();
        if (Cont_MainUserName === "") {
            $('#Cont_MainUserName').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_MainUserName_Span');
            //$('#Cont_MainUserName_Span').text("إسم المستخدم الرئيسي مفقود");
        }
        else {
            $('#Cont_MainUserName').css('border', '1px solid #E79022');
            hideSpan('#Cont_MainUserName_Span');
        }
        //======================================done
        var Cont_MainUserIDNumber = $('#Cont_MainUserIDNumber').val();
        if (Cont_MainUserIDNumber === "") {
            $('#Cont_MainUserIDNumber').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_MainUserIDNumber_Span');
            //$('#Cont_MainUserIDNumber_Span').text("رقم هوية المستخدم الرئيسي مفقود");

        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Cont_MainUserIDNumber);
            if (!isEnglish) {
                $('#Cont_MainUserIDNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserIDNumber_Span1');
                //$('#Cont_MainUserIDNumber_Span').text("رقم هوية المستخدم يجب أن يكون باللغة الإنجليزية");
            }
            if (Cont_MainUserIDNumber.length != 10) {
                $('#Cont_MainUserIDNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserIDNumber_Span2');
                //$('#Cont_MainUserIDNumber_Span').text("رقم هوية المستخدم يجب أن يكون 10 أرقام");
            } else {
                $('#Cont_MainUserIDNumber').css('border', '1px solid #E79022');
                hideSpan('#Cont_MainUserIDNumber_Span');
                hideSpan('#Cont_MainUserIDNumber_Span1');
                hideSpan('#Cont_MainUserIDNumber_Span2');
            }
        }
        //==========================================done
        var Cont_MainUserMobile = $('#Cont_MainUserMobile').val();
        if (Cont_MainUserMobile === "") {
            $('#Cont_MainUserMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_MainUserMobile_Span');
            //$('#Cont_MainUserMobile_Span').text("رقم جوال المستخدم الرئيسي مفقود");
        } else {
            if (Cont_MainUserMobile.length != 12 || !Cont_MainUserMobile.startsWith("9665")) {
                $('#Cont_MainUserMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserMobile_Span1');
                //$('#Cont_MainUserMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Cont_MainUserMobile').css('border', '1px solid #E79022');
                hideSpan('#Cont_MainUserMobile_Span');
                hideSpan('#Cont_MainUserMobile_Span1');
            }
        }
        //============================================done
        var Cont_MainUserEmail = $('#Cont_MainUserEmail').val();
        if (Cont_MainUserEmail === "") {
            $('#Cont_MainUserEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_MainUserEmail_Span');
            //message.push("بيان البريد الإلكتروني للمستخدم الرئيسي مفقود");

        } else {
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Cont_MainUserEmail)
            if (!testRsult) {
                $('#Cont_MainUserEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserEmail_Span1');
                //$('#Cont_MainUserEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Cont_MainUserEmail').css('border', '1px solid #E79022');
                hideSpan('#Cont_MainUserEmail_Span');
                hideSpan('#Cont_MainUserEmail_Span1');
            }
        }
        //====================================done
        var otherLang = $('#otherLang').val();

        var rd_Lang1 = $('#rd_Lang1').is(':checked');
        var rd_Lang2 = $('#rd_Lang2').is(':checked');

        if (rd_Lang1 === false && rd_Lang2 === false && otherLang === "") {
            $(".lang .starInvalid").css('visibility', 'visible');
            $('#otherLang').css('border', '2px solid red');
            nextStep = false;
            showSpan('#User_Language_Span');
            //$('#Cont_MainUserEmail_Span').text("يجب إختيار اللغة المفضلة");
        }
        else {
            $('#otherLang').css('border', '1px solid #E79022');
            $(".lang .starInvalid").css('visibility', 'hidden');
            hideSpan('#User_Language_Span');
        }
    }
    function fifthPage() {
        var Cont_IsAgreementApproved = $('#Cont_IsAgreementApproved');
        if (!Cont_IsAgreementApproved.is(":checked")) {
            $("input[type='checkbox']").toggleClass('invalidCheckbox');
            nextStep = false;
            showSpan('#Cont_IsAgreementApproved_Span');
            //$('#Cont_IsAgreementApproved_Span').text("رقم مجلس الضمان مفقود");
        }
        else {
            $("input[type='checkbox']").toggleClass('invalidCheckbox');
            hideSpan('#Cont_IsAgreementApproved_Span');
        }
    }
    function sixthPage() {
        var Cont_IsAgreementApproved = $('#Cont_IsAgreementApproved');
        if (!Cont_IsAgreementApproved.is(":checked")) {
            $("input[type='checkbox']").toggleClass('invalidCheckbox');
            nextStep = false;
            showSpan('#Cont_IsAgreementApproved_Span');
            //$('#Cont_IsAgreementApproved_Span').text("رقم مجلس الضمان مفقود");
        }
        else {
            $("input[type='checkbox']").toggleClass('invalidCheckbox');
            hideSpan('#Cont_IsAgreementApproved_Span');
        }
        //======================================================done
        var Cont_AccreditedByName = $('#Cont_AccreditedByName').val();
        if (Cont_AccreditedByName === "") {
            $('#Cont_AccreditedByName').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_AccreditedByName_Span');
            //$('#Cont_AccreditedByName_Span').text("إسم المعتمد مفقود");
        }
        else {
            $('#Cont_AccreditedByName').css('border', '1px solid #E79022');
            hideSpan('#Cont_AccreditedByName_Span');
        }

        //===================================done
        var Cont_AccreditedByIDNumber = $('#Cont_AccreditedByIDNumber').val();
        if (Cont_AccreditedByIDNumber === "") {
            $('#Cont_AccreditedByIDNumber').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_AccreditedByIDNumber_Span');
            //$('#Cont_AccreditedByIDNumber_Span').text("رقم هوية المعتمد مفقود");
        } else {
            var englishReg = /^[A-Za-z0-9]*$/;
            var isEnglish = englishReg.test(Cont_AccreditedByIDNumber);
            if (!isEnglish) {
                $('#Cont_AccreditedByIDNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByIDNumber_Span1');
                //$('#Cont_AccreditedByIDNumber_Span').text("رقم هوية المعتمد يجب أن يكون باللغة الإنجليزية");
            }
            else {
                $('#Cont_AccreditedByIDNumber').css('border', '1px solid #E79022');
                hideSpan('#Cont_AccreditedByIDNumber_Span1');
                hideSpan('#Cont_AccreditedByIDNumber_Span');
            }

            if (Cont_AccreditedByIDNumber.length != 10) {
                $('#Cont_AccreditedByIDNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByIDNumber_Span2');
                //$('#Cont_AccreditedByIDNumber_Span').text("رقم هوية المعتمد يجب أن يكون 10 أرقام");
            }
            else {
                hideSpan('#Cont_AccreditedByIDNumber_Span');
                hideSpan('#Cont_AccreditedByIDNumber_Span1');
                hideSpan('#Cont_AccreditedByIDNumber_Span2');
            }
        }
        //=========================================================done
        var Cont_AccreditedByMobile = $('#Cont_AccreditedByMobile').val();
        if (Cont_AccreditedByMobile === "") {
            $('#Cont_AccreditedByMobile').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_AccreditedByMobile_Span');
            //$('#Cont_AccreditedByMobile_Span').text("رقم جوال المعتمد مفقود");
        } else {
            if (Cont_AccreditedByMobile.length != 12 || !Cont_AccreditedByMobile.startsWith("9665")) {
                $('#Cont_AccreditedByMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByMobile_Span1');
                //$('#Cont_AccreditedByMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
            }
            else {
                $('#Cont_AccreditedByMobile').css('border', '1px solid #E79022');
                hideSpan('#Cont_AccreditedByMobile_Span');
                hideSpan('#Cont_AccreditedByMobile_Span1');
            }
        }
        //===========================================done
        var Cont_AccreditedByTitle = $('#Cont_AccreditedByTitle').val();
        if (Cont_AccreditedByTitle === "") {
            $('#Cont_AccreditedByTitle').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_AccreditedByTitle_Span');
            //$('#Cont_AccreditedByTitle_Span').text("منصب المعتمد مفقود");
        }
        else {
            $('#Cont_AccreditedByTitle_Span').css('border', '1px solid #E79022');
            hideSpan('#Cont_AccreditedByTitle_Span');
        }
        //=========================================
        var Cont_AccreditedByEmail = $('#Cont_AccreditedByEmail').val();
        if (Cont_AccreditedByEmail === "") {
            $('#Cont_AccreditedByEmail').css('border', '2px solid red');
            nextStep = false;
            showSpan('#Cont_AccreditedByEmail_Span');
            hideSpan('#Cont_AccreditedByEmail_Span2');
            hideSpan('#Cont_AccreditedByEmail_Span1');
            //$('#Cont_AccreditedByEmail_Span').text("بيان البريد الإلكتروني للمستخدم المعتمد مفقود");

        } else {
            if ($('#Cont_MainUserEmail').val() === $('#Cont_AccreditedByEmail').val()) {
                $('#Cont_MainUserEmail').css('border', '2px solid red');
                $('#Cont_AccreditedByEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByEmail_Span2');
                //$('#Cont_AccreditedByEmail_Span').text("يجب أن يكون البريد الالكتروني المستخدم الرئيسي مختلف عن البريد الالكتروني للمعتمد");
            } else {
                hideSpan('#Cont_AccreditedByEmail_Span2');
                hideSpan('#Cont_AccreditedByEmail_Span1');
                hideSpan('#Cont_AccreditedByEmail_Span');
            }
            if ($('#Cont_MainUserEmail').val() === "" || $('#Cont_AccreditedByEmail').val() === "") {
                $('#Cont_MainUserEmail').css('border', '2px solid red');
                $('#Cont_AccreditedByEmail').css('border', '2px solid red');
            }
            else {
                $('#Cont_MainUserEmail').css('border', '1px solid #E79022');
                $('#Cont_AccreditedByEmail').css('border', '1px solid #E79022');
            }
            var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            var testRsult = reg.test(Cont_AccreditedByEmail)
            if (!testRsult) {
                $('#Cont_AccreditedByEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByEmail_Span1');
                //$('#Cont_AccreditedByEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
            }
            else {
                $('#Cont_AccreditedByEmail').css('border', '1px solid #E79022');
                hideSpan('#Cont_AccreditedByEmail_Span');
                hideSpan('#Cont_AccreditedByEmail_Span1');
            }
        }
    }
    function seventhPage() {
        var planId = $("#FK_PricPln_ID").val();
        var filescchi = $('#filescchi').get(0);
        if (filescchi.files.length == 0 || filescchi.files[0].size == 0 || filescchi.files[0].size == undefined || filescchi.files[0].name == "") {
            $('.File1 .customFile').css('border', '2px solid red');
            $(".File1 .customFile").addClass('heightFile1');
            nextStep = false;
            showSpan('#filescchi_Span');
            //$('#filescchi_Span').text("ملف إعتماد المنشأة غير مرفق");
        }
        else {
            $('.File1 .customFile').css('border', '1px solid #E79022');
            $(".File1 .customFile").removeClass('heightFile1');
            hideSpan('#filescchi_Span');
        }

        if (planId == 6) {

        }
        else {
            var filescr = $('#filescr').get(0);
            if (filescr.files.length == 0 || filescr.files[0] == null || filescr.files[0] == undefined || filescr.files[0] == "") {
                $('.File2 .customFile').css('border', '2px solid red');
                $(".File2 .customFile").addClass('heightFile2');
                nextStep = false;
                showSpan('#filescr_Span');
                //$('#filescr_Span').text("ملف السجل التجاري غير مرفق");
            }
            else {
                $('.File2 .customFile').css('border', '1px solid #E79022');
                $(".File2 .customFile").removeClass('heightFile2');
                hideSpan('#filescr_Span');
            }
            var fileslic = $('#fileslic').get(0);
            if (fileslic.files.length == 0 || fileslic.files[0] == null || fileslic.files[0] == undefined || fileslic.files[0] == "") {
                $('.File3 .customFile').css('border', '2px solid red');
                $(".File3 .customFile").addClass('heightFile3');
                nextStep = false;
                showSpan('#fileslic_Span');
                //$('#fileslic_Span').text("ملف السجل التجاري غير مرفق");
            }
            else {
                $('.File3 .customFile').css('border', '1px solid #E79022');
                $(".File3 .customFile").removeClass('heightFile3');
                hideSpan('#fileslic_Span');
            }
        }
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
        //console.log("last" + child);
        currentSection.fadeIn();
        currentSection.css('transform', 'translateX(0)');
        currentSection.prevAll('section').css('transform', 'translateX(-100px)');
        currentSection.nextAll('section').css('transform', 'translateX(100px)');
        $('section').not(currentSection).hide();
    }

  

    $(document).ready(function () {
        //GeneralPage ====================================
        $('#FK_PricPln_ID').on('change', function () {
            var FK_PricPln_ID = $('#FK_PricPln_ID').val();
            if (FK_PricPln_ID === "") {
                nextStep = false;
                showSpan('#FK_PricPln_ID_Span');
                $('#PackagePlansDiv').removeClass(" MandatoryDDLNormal");
            }
            else {
                hideSpan('#FK_PricPln_ID_Span');
                $('#PackagePlansDiv').addClass(" MandatoryDDLNormal");
            }
        });
        //first page ====================================
        $("#rd_FacTyp1 , #rd_FacTyp2 , #rd_FacTyp3 , #rd_FacTyp4 , #rd_FacTyp5 ").change(function () {
            var rd_FacTyp1 = $('#rd_FacTyp1').is(':checked');
            var rd_FacTyp2 = $('#rd_FacTyp2').is(':checked');
            var rd_FacTyp3 = $('#rd_FacTyp3').is(':checked');
            var rd_FacTyp4 = $('#rd_FacTyp4').is(':checked');
            var rd_FacTyp5 = $('#rd_FacTyp5').is(':checked');

            if (rd_FacTyp1 === false && rd_FacTyp2 === false && rd_FacTyp3 === false && rd_FacTyp4 === false && rd_FacTyp5 === false) {
                nextStep = false;
                showSpan('#Facility_type_Span');
            }
            else {
                hideSpan('#Facility_type_Span');
            }
        });
        //====================================



        var planId = $("#FK_PricPln_ID").val();
        $('#Prov_CCHINumber').keyup(function () {
            var Prov_CCHINumber = $('#Prov_CCHINumber').val();
            if (Prov_CCHINumber === "") {
                $('#Prov_CCHINumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CCHINumber_Span');
                hideSpan('#Prov_CCHINumber_Span1');

            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_CCHINumber);
                if (!isEnglish) {
                    $('#Prov_CCHINumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CCHINumber_Span1');
                    hideSpan('#Prov_CCHINumber_Span');
                    //message.push("رقم مجلس الضمان يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_CCHINumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CCHINumber_Span1');
                    hideSpan('#Prov_CCHINumber_Span');
                }
            }
        });
        $('#Prov_CCHINumberExpirationDate').keyup(function () {
            var Prov_CCHINumberExpiration = $('#Prov_CCHINumberExpirationDate').val();
            if (Prov_CCHINumberExpiration === "") {
                $('#Prov_CCHINumberExpirationDate').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CCHINumberExpirationDate_Span');
                //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
            }
            else {
                $('#Prov_CCHINumberExpirationDate').css('border', '1px solid #E79022');
                hideSpan('#Prov_CCHINumberExpirationDate_Span');
                //valid = true;
            }
        });
        $("#Prov_CCHINumberExpirationDate").on('dp.change', function (arg) {
            var Prov_CCHINumberExpiration = $('#Prov_CCHINumberExpirationDate').val();
            var InputDate = $('#Prov_CCHINumberExpirationDate').val();
            var datearray = InputDate.split("/");
            //var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];          
            var inputMonth = datearray[1];
            var todayMonth = new Date().getMonth() + 1;
            var inputDay = datearray[0];
            var todayDay = new Date().getDate();
            var inputYear = datearray[2];
            var todayYear = new Date().getFullYear();

            if (inputMonth < todayMonth || inputDay < todayDay || inputYear < todayYear) {
                $('#Prov_CCHINumberExpirationDate').val("");
                showSpan('#Prov_CCHINumberExpirationDate_Span');
                $("#Prov_CCHINumberExpirationDate.MandatoryInput").removeClass("NormalInput");
                toastr['error']('Invaild Date', "Error");
                //alert("invalid date");

            }
            else if (Prov_CCHINumberExpiration === "") {
                $('#Prov_CCHINumberExpirationDate').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CCHINumberExpirationDate_Span');
                $("#Prov_CCHINumberExpirationDate.MandatoryInput").removeClass("NormalInput");
                //message.push("يجب إختيار تاريخ إنتهاء عضوية مجلس الضمان");
            }
            else {
                $('#Prov_CCHINumberExpirationDate').css('border', '1px solid #E79022');
                hideSpan('#Prov_CCHINumberExpirationDate_Span');
                $("#Prov_CCHINumberExpirationDate.MandatoryInput").addClass("NormalInput");
                //valid = true;
            }
        });
        if (planId == 6) {

        }
        else {
            $('#Prov_CRNumber').keyup(function () {
                var Prov_CRNumber = $('#Prov_CRNumber').val();
                if (Prov_CRNumber === "") {
                    $('#Prov_CRNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CRNumber_Span');
                    hideSpan('#Prov_CRNumber_Span1');
                    hideSpan('#Prov_CRNumber_Span2');
                    $('#Prov_CRNumber.MandatoryInput').removeClass("NormalInput");
                    //message.push("رقم السجل التجاري مفقود");
                } else {
                    var englishReg = /^[A-Za-z0-9]*$/;
                    var isEnglish = englishReg.test(Prov_CRNumber);
                    if (!isEnglish) {
                        $('#Prov_CRNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_CRNumber_Span1');
                        hideSpan('#Prov_CRNumber_Span');
                        hideSpan('#Prov_CRNumber_Span2');
                        $('#Prov_CRNumber.MandatoryInput').removeClass("NormalInput");
                        // message.push("رقم السجل التجاري يجب أن يكون باللغة الإنجليزية");
                    }
                    else {
                        $('#Prov_CRNumber').css('border', '1px solid #E79022');
                        hideSpan('#Prov_CRNumber_Span1');
                        hideSpan('#Prov_CRNumber_Span');
                        $('#Prov_CRNumber.MandatoryInput').addClass("NormalInput");
                    }
                    if (Prov_CRNumber.length < 10) {
                        $('#Prov_CRNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_CRNumber_Span2');
                        hideSpan('#Prov_CRNumber_Span');
                        hideSpan('#Prov_CRNumber_Span1');
                        $('#Prov_CRNumber.MandatoryInput').removeClass("NormalInput");
                        // message.push("رقم السجل التجاري يجب أن يكون 10 أرقام");
                    }
                    else {
                        hideSpan('#Prov_CRNumber_Span1');
                        hideSpan('#Prov_CRNumber_Span');
                        hideSpan('#Prov_CRNumber_Span2');
                        $('#Prov_CRNumber.MandatoryInput').addClass("NormalInput");
                    }
                }
            });
            $("#Prov_CRNumberExpirationDate").on('dp.change', function (arg) {
                var Prov_CRNumberExpiration = $('#Prov_CRNumberExpirationDate').val();
                var InputDate = $('#Prov_CRNumberExpirationDate').val();
                var datearray = InputDate.split("/");
                //var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];          
                var inputMonth = datearray[1];
                var todayMonth = new Date().getMonth() + 1;
                var inputDay = datearray[0];
                var todayDay = new Date().getDate();
                var inputYear = datearray[2];
                var todayYear = new Date().getFullYear();
                if (inputMonth < todayMonth || inputDay < todayDay || inputYear < todayYear) {
                    $('#Prov_CRNumberExpirationDate').val("");
                    showSpan('#Prov_CRNumberExpirationDate_Span');
                    $("#Prov_CRNumberExpirationDate.MandatoryInput").removeClass("NormalInput");
                    toastr['error']('Invaild Date', "Error");

                }
                else if (Prov_CRNumberExpiration === "") {
                    $('#Prov_CRNumberExpirationDate').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CRNumberExpirationDate_Span');
                    //message.push("يجب إختيار تاريخ إنتهاء السجل التجاري");
                    $("#Prov_CRNumberExpirationDate.MandatoryInput").removeClass("NormalInput");
                }
                else {
                    $('#Prov_CRNumberExpirationDate').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CRNumberExpirationDate_Span');
                    $("#Prov_CRNumberExpirationDate.MandatoryInput").addClass("NormalInput");
                }
            });
            $('#Prov_CRNumberExpirationDate').keyup(function () {
                var Prov_CRNumberExpiration = $('#Prov_CRNumberExpirationDate').val();
                if (Prov_CRNumberExpiration === "") {
                    $('#Prov_CRNumberExpirationDate').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CRNumberExpirationDate_Span');
                    //message.push("يجب إختيار تاريخ إنتهاء السجل التجاري");
                }
                else {
                    $('#Prov_CRNumberExpirationDate').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CRNumberExpirationDate_Span');
                }
            });
            $('#Prov_MedicalLicenseNumber').keyup(function () {
                var Prov_MedicalLicenseNumber = $('#Prov_MedicalLicenseNumber').val();
                if (Prov_MedicalLicenseNumber === "") {
                    $('#Prov_MedicalLicenseNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_MedicalLicenseNumber_Span');
                    hideSpan('#Prov_MedicalLicenseNumber_Span1');
                    hideSpan('#Prov_MedicalLicenseNumber_Span2');
                    $('#Prov_MedicalLicenseNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_MedicalLicenseNumber_Span').text("رقم الترخيص الطبي مفقود");
                }
                else {
                    var englishReg = /^[A-Za-z0-9]*$/;
                    var isEnglish = englishReg.test(Prov_MedicalLicenseNumber);
                    if (!isEnglish) {
                        $('#Prov_MedicalLicenseNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_MedicalLicenseNumber_Span1');
                        $('#Prov_MedicalLicenseNumber.MandatoryInput').removeClass("NormalInput");
                        //$('#Prov_MedicalLicenseNumber_Span').text("رقم التصديق يجب أن يكون باللغة الإنجليزية");
                    }
                    else {
                        $('#Prov_MedicalLicenseNumber').css('border', '1px solid #E79022');
                        hideSpan('#Prov_MedicalLicenseNumber_Span1');
                        hideSpan('#Prov_MedicalLicenseNumber_Span');
                        $('#Prov_MedicalLicenseNumber.MandatoryInput').addClass("NormalInput");
                    }
                    if (Prov_MedicalLicenseNumber.length < 10 || Prov_MedicalLicenseNumber.length > 20) {
                        $('#Prov_MedicalLicenseNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_MedicalLicenseNumber_Span2');
                        $('#Prov_MedicalLicenseNumber.MandatoryInput').removeClass("NormalInput");
                        //$('#Prov_MedicalLicenseNumber_Span').text("رقم الترخيص الطبي يجب أن يكون 10 أرقام بحد اقصي 20 رقم");
                    }
                    else {
                        hideSpan('#Prov_MedicalLicenseNumber_Span');
                        hideSpan('#Prov_MedicalLicenseNumber_Span1');
                        hideSpan('#Prov_MedicalLicenseNumber_Span2');
                        $('#Prov_MedicalLicenseNumber.MandatoryInput').addClass("NormalInput");
                    }
                }
            });
            $("#Prov_MedicalLicenseNumberExpirationDate").on('dp.change', function (arg) {
                var Prov_MedicalLicenseNumberExpiration = $('#Prov_MedicalLicenseNumberExpirationDate').val();
                var InputDate = $('#Prov_MedicalLicenseNumberExpirationDate').val();
                var datearray = InputDate.split("/");
                //var newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];          
                var inputMonth = datearray[1];
                var todayMonth = new Date().getMonth() + 1;
                var inputDay = datearray[0];
                var todayDay = new Date().getDate();
                var inputYear = datearray[2];
                var todayYear = new Date().getFullYear();

                if (inputMonth < todayMonth || inputDay < todayDay || inputYear < todayYear) {
                    $('#Prov_MedicalLicenseNumberExpirationDate').val("");
                    showSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
                    $("#Prov_MedicalLicenseNumberExpirationDate.MandatoryInput").removeClass("NormalInput");
                    toastr['error']('Invaild Date', "Error");

                }
                else if (Prov_MedicalLicenseNumberExpiration === "") {
                    $('#Prov_MedicalLicenseNumberExpirationDate').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
                    $("#Prov_MedicalLicenseNumberExpirationDate.MandatoryInput").removeClass("NormalInput");
                    //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
                }
                else {
                    $('#Prov_MedicalLicenseNumberExpirationDate').css('border', '1px solid #E79022');
                    hideSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
                    $("#Prov_MedicalLicenseNumberExpirationDate.MandatoryInput").addClass("NormalInput");
                }
            });
            $('#Prov_MedicalLicenseNumberExpirationDate').keyup(function () {
                var Prov_MedicalLicenseNumberExpiration = $('#Prov_MedicalLicenseNumberExpirationDate').val();
                if (Prov_MedicalLicenseNumberExpiration === "") {
                    $('#Prov_MedicalLicenseNumberExpirationDate').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
                    //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
                }
                else {
                    $('#Prov_MedicalLicenseNumberExpirationDate').css('border', '1px solid #E79022');
                    hideSpan('#Prov_MedicalLicenseNumberExpirationDate_Span');
                }
            });
            $('#Prov_TAXNumber').keyup(function () {
                var Prov_TAXNumber = $('#Prov_TAXNumber').val();
                if (Prov_TAXNumber === "") {
                    $('#Prov_TAXNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_TAXNumber_Span');
                    hideSpan('#Prov_TAXNumber_Span1');
                    hideSpan('#Prov_TAXNumber_Span2');
                    $('#Prov_TAXNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_TAXNumber_Span').text("الرقم الضريبي مفقود");
                } else {
                    var englishReg = /^[A-Za-z0-9]*$/;
                    var isEnglish = englishReg.test(Prov_TAXNumber);
                    if (!isEnglish) {
                        $('#Prov_TAXNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_TAXNumber_Span1');
                        $('#Prov_TAXNumber.MandatoryInput').removeClass("NormalInput");
                        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي يجب أن يكون باللغة الإنجليزية");
                    }
                    else {
                        $('#Prov_TAXNumber').css('border', '1px solid #E79022');
                        hideSpan('#Prov_TAXNumber_Span1');
                        hideSpan('#Prov_TAXNumber_Span');
                        $('#Prov_TAXNumber.MandatoryInput').addClass("NormalInput");
                    }
                    if (Prov_TAXNumber.length < 15) {
                        $('#Prov_TAXNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_TAXNumber_Span2');
                        $('#Prov_TAXNumber.MandatoryInput').removeClass("NormalInput");
                        //$('#Prov_TAXNumber_Span').text("الرقم الضريبي يجب أن يكون 15 رقم");
                    }
                    else {
                        hideSpan('#Prov_TAXNumber_Span');
                        hideSpan('#Prov_TAXNumber_Span1');
                        hideSpan('#Prov_TAXNumber_Span2');
                        $('#Prov_TAXNumber.MandatoryInput').addClass("NormalInput");
                    }
                }
            });
            $('#Prov_CCNumber').keyup(function () {
                var Prov_CCNumber = $('#Prov_CCNumber').val();
                if (Prov_CCNumber === "") {
                    $('#Prov_CCNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CCNumber_Span');
                    hideSpan('#Prov_CCNumber_Span1');
                    hideSpan('#Prov_CCNumber_Span2');
                    $('#Prov_CCNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_CCNumber_Span').text("رقم الغرفة التجارية مفقود");
                }
                else {
                    var englishReg = /^[A-Za-z0-9]*$/;
                    var isEnglish = englishReg.test(Prov_CCNumber);
                    if (!isEnglish) {
                        $('#Prov_CCNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_CCNumber_Span1');
                        $('#Prov_CCNumber.MandatoryInput').removeClass("NormalInput");
                        //$('#Prov_CCNumber_Span').text("رقم الغرفة التجارية يجب أن يكون باللغة الإنجليزية");
                    }
                    else {
                        $('#Prov_CCNumber').css('border', '1px solid #E79022');
                        hideSpan('#Prov_CCNumber_Span1');
                        hideSpan('#Prov_CCNumber_Span');
                        $('#Prov_CCNumber.MandatoryInput').addClass("NormalInput");
                    }
                    if (Prov_CCNumber.length < 6) {
                        $('#Prov_CCNumber').css('border', '2px solid red');
                        nextStep = false;
                        showSpan('#Prov_CCNumber_Span2');
                        $('#Prov_CCNumber.MandatoryInput').removeClass("NormalInput");
                        //$('#Prov_CCNumber_Span').text("رقم الغرفة التجارية يجب أن يكون 6 أرقام");
                    }
                    else {
                        hideSpan('#Prov_CCNumber_Span');
                        hideSpan('#Prov_CCNumber_Span1');
                        hideSpan('#Prov_CCNumber_Span2');
                        $('#Prov_CCNumber.MandatoryInput').addClass("NormalInput");
                    }
                }
            });

        }

        //second page ====================================
        $('#Prov_NameAr').keyup(function () {
            var Prov_NameAr = $('#Prov_NameAr').val();
            if (Prov_NameAr === "") {
                $('#Prov_NameAr').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_NameAr_Span');
                //$('#Prov_NameAr_Span').text("الإسم العربي للمنشأة مفقود");
            }
            else {
                hideSpan('#Prov_NameAr_Span');
                $('#Prov_NameAr').css('border', '1px solid #E79022');
            }
        });
        //==============================
        $('#FK_BusinessType_ID').on('change', function () {
            var FK_BusinessType_ID = $('#FK_BusinessType_ID').val();
            if (FK_BusinessType_ID === "") {
                $('.FK_BusinessType_ID .select2-selection--single').css('border', '2px solid red');
                nextStep = false;
                showSpan('#FK_BusinessType_ID_Span');
                $('#BusinessTypeDiv').removeClass(" MandatoryDDLNormal");
                //$('#FK_Vender_ID_Span').text("لم يتم إختيار مورد النظام");
            }
            else {
                hideSpan('#FK_BusinessType_ID_Span');
                $('#BusinessTypeDiv').addClass(" MandatoryDDLNormal");
                $('.FK_BusinessType_ID .select2-selection--single').css('border', '1px solid #E79022');
            }
        })
        $('#FK_Vendor_ID').on('change', function () {
            var FK_Vender_ID = $('#FK_Vendor_ID').val();
            if (FK_Vender_ID === "") {
                $('.FK_Vender_ID .select2-selection--single').css('border', '2px solid red');
                nextStep = false;
                showSpan('#FK_vendor_ID_Span');
                showSpan('#FK_SystemName_ID_Span');
                $('#SystemResourceDiv').removeClass(" MandatoryDDLNormal");
                $('#SystemNameDiv').removeClass(" MandatoryDDLNormal");
                //$('#FK_Vender_ID_Span').text("لم يتم إختيار مورد النظام");
            }
            else {
                hideSpan('#FK_vendor_ID_Span');
                hideSpan('#FK_SystemName_ID_Span');
                $('.FK_Vender_ID .select2-selection--single').css('border', '1px solid #E79022');
                $('#SystemResourceDiv').addClass(" MandatoryDDLNormal");
                $('#SystemNameDiv').addClass(" MandatoryDDLNormal");
            }
        })
        $('#FK_SystemName_ID').on('change', function () {
            var FK_SystemName_ID = $('#FK_SystemName_ID').val();
            if (FK_SystemName_ID === "") {
                $('.FK_SystemName_ID .select2-selection--single').css('border', '2px solid red');
                nextStep = false;
                showSpan('#FK_SystemName_ID_Span');
                //$('#FK_SystemName_ID_Span').text("لم يتم إختيار اسم النظام");
            }
            else {
                hideSpan('#FK_SystemName_ID_Span');
                $('.FK_SystemName_ID .select2-selection--single').css('border', '1px solid #E79022');
            }
        })

        $('#FK_Vender_ID').on('change', function () {
            var FK_Vender_ID = $('#FK_Vender_ID').val();
            if (FK_Vender_ID === "") {
                $('.FK_Vender_ID .select2-selection--single').css('border', '2px solid red');
                nextStep = false;
                showSpan('#FK_Vender_ID_Span');
                //$('#FK_Vender_ID_Span').text("لم يتم إختيار مورد النظام");
            }
            else {
                hideSpan('#FK_Vender_ID_Span');
                $('.FK_Vender_ID .select2-selection--single').css('border', '1px solid #E79022');
            }
        })
        $('#FK_SystemName_ID').on('change', function () {
            var FK_SystemName_ID = $('#FK_SystemName_ID').val();
            if (FK_SystemName_ID === "") {
                $('.FK_SystemName_ID .select2-selection--single').css('border', '2px solid red');
                nextStep = false;
                showSpan('#FK_SystemName_ID_Span');
                //$('#FK_SystemName_ID_Span').text("لم يتم إختيار اسم النظام");
            }
            else {
                hideSpan('#FK_SystemName_ID_Span');
                $('.FK_SystemName_ID .select2-selection--single').css('border', '1px solid #E79022');
            }
        });
        //=================================================
        //=========================================done
        $('#Prov_NameEn').keyup(function () {
            var Prov_NameEn = $('#Prov_NameEn').val();
            if (Prov_NameEn === "") {
                $('#Prov_NameEn').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_NameEn_Span');
                //$('#Prov_NameEn_Span').text("اللإسم الإنجليزي للمنشأة مفقود");
            }
            else {
                $('#Prov_NameEn').css('border', '1px solid #E79022');
                hideSpan('#Prov_NameEn_Span');
            }
        });
        //============================================done
        $('#CountryId').on('change', function () {
            var CountryId = $('#CountryId').val();
            if (CountryId === "") {
                $('#CountryId').css('border', '2px solid red');
                nextStep = false;
                showSpan('#CountryId_Span');
                $('#CountryListDiv').removeClass(" MandatoryDDLNormal");
            }
            else {
                $('#CountryId').css('border', '1px solid #E79022');
                hideSpan('#CountryId_Span');
                $('#CountryListDiv').addClass(" MandatoryDDLNormal");
            }
        });
        //============================================done
        $('#CityId').on('change', function () {
            var CityId = $('#CityId').val();
            if (CityId === "" || CityId == null) {
                $('#CityId').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_City_Span');
                $('#CityListDiv').removeClass(" MandatoryDDLNormal");
                //$('#Prov_City_Span').text("بيان المدينة مفقود");
            }
            else {
                $('#CityId').css('border', '1px solid #E79022');
                hideSpan('#Prov_City_Span');
                $('#CityListDiv').addClass(" MandatoryDDLNormal");
            }
        });
        //===========================================done
        $('#Prov_PhoneNumber').keyup(function () {
            var Prov_PhoneNumber = $('#Prov_PhoneNumber').val();
            if (Prov_PhoneNumber === "") {
                $('#Prov_PhoneNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_PhoneNumber_Span');
                hideSpan('#Prov_PhoneNumber_Span1');
                hideSpan('#Prov_PhoneNumber_Span2');
                $('#Prov_PhoneNumber.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_PhoneNumber_Span').text("بيان الهاتف مفقود");
            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_PhoneNumber);
                if (!isEnglish) {
                    $('#Prov_PhoneNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_PhoneNumber_Span1');
                    hideSpan('#Prov_PhoneNumber_Span');
                    hideSpan('#Prov_PhoneNumber_Span2');
                    $('#Prov_PhoneNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_PhoneNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_PhoneNumber_Span1');
                    hideSpan('#Prov_PhoneNumber_Span');
                    $('#Prov_PhoneNumber.MandatoryInput').addClass("NormalInput");
                }

                if (Prov_PhoneNumber.length < 12) {
                    $('#Prov_PhoneNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_PhoneNumber_Span2');
                    hideSpan('#Prov_PhoneNumber_Span');
                    hideSpan('#Prov_PhoneNumber_Span1');
                    $('#Prov_PhoneNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_PhoneNumber_Span').text("بيان الهاتف يجب أن يكون 12 أرقام");
                } else {
                    $('#Prov_PhoneNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_PhoneNumber_Span');
                    hideSpan('#Prov_PhoneNumber_Span1');
                    hideSpan('#Prov_PhoneNumber_Span2');
                    $('#Prov_PhoneNumber.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //==========================================================done
        $('#Prov_FaxNumber').keyup(function () {
            var Prov_FaxNumber = $('#Prov_FaxNumber').val();
            if (Prov_FaxNumber === "") {
                $('#Prov_FaxNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_FaxNumber_Span');
                hideSpan('#Prov_FaxNumber_Span1');
                hideSpan('#Prov_FaxNumber_Span2');
                $('#Prov_FaxNumber.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_FaxNumber_Span').text("بيان الفاكس مفقود");

            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_FaxNumber);
                if (!isEnglish) {
                    $('#Prov_FaxNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_FaxNumber_Span1');
                    hideSpan('#Prov_FaxNumber_Span');
                    hideSpan('#Prov_FaxNumber_Span2');
                    $('#Prov_FaxNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_FaxNumber_Span').text("بيان الفاكس يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_FaxNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_FaxNumber_Span1');
                    hideSpan('#Prov_FaxNumber_Span');
                    $('#Prov_FaxNumber.MandatoryInput').addClass("NormalInput");
                }
                if (Prov_FaxNumber.length < 12) {
                    $('#Prov_FaxNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_FaxNumber_Span2');
                    hideSpan('#Prov_FaxNumber_Span');
                    hideSpan('#Prov_FaxNumber_Span1');
                    $('#Prov_FaxNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_FaxNumber_Span').text("بيان الفاكس يجب أن يكون 12 أرقام");
                } else {
                    $('#Prov_FaxNumber').css('border', '1px solid #E79022');
                    hideSpan('#Prov_FaxNumber_Span');
                    hideSpan('#Prov_FaxNumber_Span1');
                    hideSpan('#Prov_FaxNumber_Span2');
                    $('#Prov_FaxNumber.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //===============================================done
        $('#Address').keyup(function () {
            var Address = $('#Address').val();
            if (Address === "") {
                $('#Address').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Address_Span');
            }
            else {
                $('#Address').css('border', '1px solid #E79022');
                hideSpan('#Address_Span');
            }
        });
        //===============================================done
        $('#Prov_District').keyup(function () {
            var Prov_District = $('#Prov_District').val();
            if (Prov_District === "") {
                $('#Prov_District').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_District_Span');
                //$('#Prov_District_Span').text("بيان الحي مفقود");
            }
            else {
                $('#Prov_District').css('border', '1px solid #E79022');
                hideSpan('#Prov_District_Span');
            }
        });
        //==================================================done
        $('#Prov_Street').keyup(function () {
            var Prov_Street = $('#Prov_Street').val();
            if (Prov_Street === "") {
                $('#Prov_Street').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_Street_Span');
                //$('#Prov_Street_Span').text("بيان الشارع مفقود");
            }
            else {
                $('#Prov_Street').css('border', '1px solid #E79022');
                hideSpan('#Prov_Street_Span');
            }
        });
        //================================================done
        $('#Prov_MailBox').keyup(function () {
            var Prov_MailBox = $('#Prov_MailBox').val();
            if (Prov_MailBox === "") {
                $('#Prov_MailBox').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_MailBox_Span');
                hideSpan('#Prov_MailBox_Span1');
                $('#Prov_MailBox.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_MailBox_Span').text("بيان الصندوق البريدي مفقود");

            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_MailBox);
                if (!isEnglish) {
                    $('#Prov_MailBox').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_MailBox_Span1');
                    hideSpan('#Prov_MailBox_Span');
                    $('#Prov_MailBox.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_MailBox_Span').text("بيان الصندوق البريدي يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_MailBox').css('border', '1px solid #E79022');
                    hideSpan('#Prov_MailBox_Span');
                    hideSpan('#Prov_MailBox_Span1');
                    $('#Prov_MailBox.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //===========================================================done
        $('#Prov_ZipCode').keyup(function () {
            var Prov_ZipCode = $('#Prov_ZipCode').val();
            if (Prov_ZipCode === "") {
                $('#Prov_ZipCode').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_ZipCode_Span');
                $('#Prov_ZipCode.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_ZipCode_Span').text("بيان الرمز البريدي مفقود");
            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Prov_ZipCode);
                if (!isEnglish) {
                    $('#Prov_ZipCode').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_ZipCode_Span1');
                    $('#Prov_ZipCode.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_ZipCode_Span').text("بيان الرمز البريدي يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Prov_ZipCode').css('border', '1px solid #E79022');
                    hideSpan('#Prov_ZipCode_Span');
                    hideSpan('#Prov_ZipCode_Span1');
                    $('#Prov_ZipCode.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //===============================================done
        $('#Prov_Website').keyup(function () {
            var Prov_Website = $('#Prov_Website').val();
            if (Prov_Website === "") {
                $('#Prov_Website').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_Website_Span');
                hideSpan('#Prov_Website_Span1');
                //$('#Prov_Website_Span').text("بيان موقع المنشأة مفقود");
            }
            else {
                var reg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                var testRsult = reg.test(Prov_Website)
                if (!testRsult) {
                    nextStep = false;
                    showSpan('#Prov_Website_Span1');
                    hideSpan('#Prov_Website_Span');
                }
                else {
                    hideSpan('#Prov_Website_Span');
                    hideSpan('#Prov_Website_Span1');
                }
            }
        });

        //Third page ====================================
        $('#Prov_GMName').keyup(function () {
            var Prov_GMName = $('#Prov_GMName').val();
            if (Prov_GMName === "") {
                $('#Prov_GMName').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_GMName_Span');
                //$('#Prov_GMName_Span').text("بيان إسم المدير العام مفقود");
            }
            else {
                $('#Prov_GMName').css('border', '1px solid #E79022');
                hideSpan('#Prov_GMName_Span');
            }
        });
        //==================================================done
        $('#Prov_GMMobile').keyup(function () {
            var Prov_GMMobile = $('#Prov_GMMobile').val();
            if (Prov_GMMobile === "") {
                $('#Prov_GMMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_GMMobile_Span');
                hideSpan('#Prov_GMMobile_Span1');
                $('#Prov_GMMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_GMMobile_Span').text("بيان جوال المدير العام مفقود");
            } else {
                if (Prov_GMMobile.length != 12 || !Prov_GMMobile.startsWith("9665")) {
                    $('#Prov_GMMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_GMMobile_Span1');
                    hideSpan('#Prov_GMMobile_Span');
                    $('#Prov_GMMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_GMMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Prov_GMMobile').css('border', '1px solid #E79022');
                    hideSpan('#Prov_GMMobile_Span');
                    hideSpan('#Prov_GMMobile_Span1');
                    $('#Prov_GMMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //====================================================done
        $('#Prov_GMEmail').keyup(function () {
            var Prov_GMEmail = $('#Prov_GMEmail').val();
            if (Prov_GMEmail === "") {
                $('#Prov_GMEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_GMEmail_Span');
                hideSpan('#Prov_GMEmail_Span1');
                $('#Prov_GMEmail.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني للمدير العام مفقود");
            } else {
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Prov_GMEmail)
                if (!testRsult) {
                    $('#Prov_GMEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_GMEmail_Span1');
                    hideSpan('#Prov_GMEmail_Span');
                    $('#Prov_GMEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_GMEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Prov_GMEmail').css('border', '1px solid #E79022');
                    hideSpan('#Prov_GMEmail_Span');
                    hideSpan('#Prov_GMEmail_Span1');
                    $('#Prov_GMEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //=========================================done
        $('#Prov_CFOName').keyup(function () {
            var Prov_CFOName = $('#Prov_CFOName').val();
            if (Prov_CFOName === "") {
                $('#Prov_CFOName').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CFOName_Span');
                //$('#Prov_CFOName_Span').text("بيان إسم المدير المالي مفقود");
            }
            else {
                $('#Prov_CFOName').css('border', '1px solid #E79022');
                hideSpan('#Prov_CFOName_Span');
            }
        });
        //=============================================done
        $('#Prov_CFOMobile').keyup(function () {
            var Prov_CFOMobile = $('#Prov_CFOMobile').val();
            if (Prov_CFOMobile === "") {
                $('#Prov_CFOMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CFOMobile_Span');
                hideSpan('#Prov_CFOMobile_Span1');
                $('#Prov_CFOMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_CFOMobile_Span').text("بيان جوال المدير المالي مفقود");
            } else {
                if (Prov_CFOMobile.length != 12 || !Prov_CFOMobile.startsWith("9665")) {
                    $('#Prov_CFOMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CFOMobile_Span1');
                    hideSpan('#Prov_CFOMobile_Span');
                    $('#Prov_CFOMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_CFOMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Prov_CFOMobile').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CFOMobile_Span');
                    hideSpan('#Prov_CFOMobile_Span1');
                    $('#Prov_CFOMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //===============================================done
        $('#Prov_CFOEmail').keyup(function () {
            var Prov_CFOEmail = $('#Prov_CFOEmail').val();
            if (Prov_CFOEmail === "") {
                $('#Prov_CFOEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Prov_CFOEmail_Span');
                hideSpan('#Prov_CFOEmail_Span1');
                $('#Prov_CFOEmail.MandatoryInput').removeClass("NormalInput");
                //$('#Prov_CFOEmail_Span').text("بيان البريد الإلكتروني للمدير المالي مفقود");
            } else {
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Prov_CFOEmail)
                if (!testRsult) {
                    $('#Prov_CFOEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Prov_CFOEmail_Span1');
                    hideSpan('#Prov_CFOEmail_Span');
                    $('#Prov_CFOEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Prov_CFOEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Prov_CFOEmail').css('border', '1px solid #E79022');
                    hideSpan('#Prov_CFOEmail_Span');
                    hideSpan('#Prov_CFOEmail_Span1');
                    $('#Prov_CFOEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //================================================done
        $('#Cont_ClaimInChargeContactName').keyup(function () {
            var Cont_ClaimInChargeContactName = $('#Cont_ClaimInChargeContactName').val();
            if (Cont_ClaimInChargeContactName === "") {
                $('#Cont_ClaimInChargeContactName').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_ClaimInChargeContactName_Span');
                //$('#Cont_ClaimInChargeContactName_Span').text("بيان إسم مسؤول المطالبات مفقود");
            }
            else {
                $('#Cont_ClaimInChargeContactName').css('border', '1px solid #E79022');
                hideSpan('#Cont_ClaimInChargeContactName_Span');
            }
        });
        //===========================================done
        $('#Cont_ClaimInChargeContactMobile').keyup(function () {
            var Cont_ClaimInChargeContactMobile = $('#Cont_ClaimInChargeContactMobile').val();
            if (Cont_ClaimInChargeContactMobile === "") {
                $('#Cont_ClaimInChargeContactMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_ClaimInChargeContactMobile_Span');
                hideSpan('#Cont_ClaimInChargeContactMobile_Span1');
                $('#Cont_ClaimInChargeContactMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_ClaimInChargeContactMobile_Span').text("بيان جوال مسؤول المطالبات مفقود");
            } else {
                if (Cont_ClaimInChargeContactMobile.length != 12 || !Cont_ClaimInChargeContactMobile.startsWith("9665")) {
                    $('#Cont_ClaimInChargeContactMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_ClaimInChargeContactMobile_Span1');
                    hideSpan('#Cont_ClaimInChargeContactMobile_Span');
                    $('#Cont_ClaimInChargeContactMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_ClaimInChargeContactMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Cont_ClaimInChargeContactMobile').css('border', '1px solid #E79022');
                    hideSpan('#Cont_ClaimInChargeContactMobile_Span');
                    hideSpan('#Cont_ClaimInChargeContactMobile_Span1');
                    $('#Cont_ClaimInChargeContactMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //===========================================
        $('#Cont_ClaimInChargeContactEmail').keyup(function () {
            var Cont_ClaimInChargeContactEmail = $('#Cont_ClaimInChargeContactEmail').val();
            if (Cont_ClaimInChargeContactEmail === "") {
                $('#Cont_ClaimInChargeContactEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_ClaimInChargeContactEmail_Span');
                hideSpan('#Cont_ClaimInChargeContactEmail_Span1');
                $('#Cont_ClaimInChargeContactEmail.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_ClaimInChargeContactEmail_Span').text("بيان البريد الإلكتروني لمسؤول المطالبات مفقود");

            } else {
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Cont_ClaimInChargeContactEmail)
                if (!testRsult) {
                    $('#Cont_ClaimInChargeContactEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_ClaimInChargeContactEmail_Span1');
                    hideSpan('#Cont_ClaimInChargeContactEmail_Span');
                    $('#Cont_ClaimInChargeContactEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_ClaimInChargeContactEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Cont_ClaimInChargeContactEmail').css('border', '1px solid #E79022');
                    hideSpan('#Cont_ClaimInChargeContactEmail_Span');
                    hideSpan('#Cont_ClaimInChargeContactEmail_Span1');
                    $('#Cont_ClaimInChargeContactEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //=========================================done
        $('#Cont_CommunicationContactName').keyup(function () {
            var Cont_CommunicationContactName = $('#Cont_CommunicationContactName').val();
            if (Cont_CommunicationContactName === "") {
                $('#Cont_CommunicationContactName').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_CommunicationContactName_Span');
                //$('#Cont_CommunicationContactName_Span').text("بيان إسم مسؤول الإتصال مفقود");
            }
            else {
                $('#Cont_CommunicationContactName').css('border', '1px solid #E79022');
                hideSpan('#Cont_CommunicationContactName_Span');
            }
        });
        //=====================================================done
        $('#Cont_CommunicationContactMobile').keyup(function () {
            var Cont_CommunicationContactMobile = $('#Cont_CommunicationContactMobile').val();
            if (Cont_CommunicationContactMobile === "") {
                $('#Cont_CommunicationContactMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_CommunicationContactMobile_Span');
                hideSpan('#Cont_CommunicationContactMobile_Span1');
                $('#Cont_CommunicationContactMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_CommunicationContactMobile_Span').text("بيان جوال مسؤول الإتصال مفقود");
            } else {
                if (Cont_CommunicationContactMobile.length != 12 || !Cont_CommunicationContactMobile.startsWith("9665")) {
                    $('#Cont_CommunicationContactMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_CommunicationContactMobile_Span1');
                    hideSpan('#Cont_CommunicationContactMobile_Span');
                    $('#Cont_CommunicationContactMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_CommunicationContactMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Cont_CommunicationContactMobile').css('border', '1px solid #E79022');
                    hideSpan('#Cont_CommunicationContactMobile_Span');
                    hideSpan('#Cont_CommunicationContactMobile_Span1');
                    $('#Cont_CommunicationContactMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //============================================done
        $('#Cont_CommunicationContactEmail').keyup(function () {
            var Cont_CommunicationContactEmail = $('#Cont_CommunicationContactEmail').val();
            if (Cont_CommunicationContactEmail === "") {
                $('#Cont_CommunicationContactEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_CommunicationContactEmail_Span');
                hideSpan('#Cont_CommunicationContactEmail_Span1');
                $('#Cont_CommunicationContactEmail.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_CommunicationContactEmail_Span').text("بيان البريد الإلكتروني لمسؤول الإتصال مفقود");

            } else {
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Cont_CommunicationContactEmail)
                if (!testRsult) {
                    $('#Cont_CommunicationContactEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_CommunicationContactEmail_Span1');
                    hideSpan('#Cont_CommunicationContactEmail_Span');
                    $('#Cont_CommunicationContactEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_CommunicationContactEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Cont_CommunicationContactEmail').css('border', '1px solid #E79022');
                    hideSpan('#Cont_CommunicationContactEmail_Span');
                    hideSpan('#Cont_CommunicationContactEmail_Span1');
                    $('#Cont_CommunicationContactEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //=======================================done
        $('#Cont_NotificationMobile').keyup(function () {
            var Cont_NotificationMobile = $('#Cont_NotificationMobile').val();
            if (Cont_NotificationMobile === "") {
                $('#Cont_NotificationMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_NotificationMobile_Span');
                hideSpan('#Cont_NotificationMobile_Span1');
                $('#Cont_NotificationMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_NotificationMobile_Span').text("رقم جوال الإشعارات مفقود");
            } else {
                if (Cont_NotificationMobile.length != 12 || !Cont_NotificationMobile.startsWith("9665")) {
                    $('#Cont_NotificationMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_NotificationMobile_Span1');
                    hideSpan('#Cont_NotificationMobile_Span');
                    $('#Cont_NotificationMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_NotificationMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Cont_NotificationMobile').css('border', '1px solid #E79022');
                    hideSpan('#Cont_NotificationMobile_Span');
                    hideSpan('#Cont_NotificationMobile_Span1');
                    $('#Cont_NotificationMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //=========================================done
        $('#Cont_NotificationEmail').keyup(function () {
            var Cont_NotificationEmail = $('#Cont_NotificationEmail').val();
            if (Cont_NotificationEmail === "") {
                $('#Cont_NotificationEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_NotificationEmail_Span');
                hideSpan('#Cont_NotificationEmail_Span1');
                $('#Cont_NotificationEmail.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_NotificationEmail_Span').text("البريد الإلكتروني للإشعارات مفقود");
            } else {
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Cont_NotificationEmail)
                if (!testRsult) {
                    $('#Cont_NotificationEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_NotificationEmail_Span1');
                    hideSpan('#Cont_NotificationEmail_Span');
                    $('#Cont_NotificationEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_NotificationEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Cont_NotificationEmail').css('border', '1px solid #E79022');
                    hideSpan('#Cont_NotificationEmail_Span');
                    hideSpan('#Cont_NotificationEmail_Span1');
                    $('#Cont_NotificationEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });

        //fourth page ====================================
        $('#Cont_MainUserName').keyup(function () {
            var Cont_MainUserName = $('#Cont_MainUserName').val();
            if (Cont_MainUserName === "") {
                $('#Cont_MainUserName').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserName_Span');
                //$('#Cont_MainUserName_Span').text("إسم المستخدم الرئيسي مفقود");
            }
            else {
                $('#Cont_MainUserName').css('border', '1px solid #E79022');
                hideSpan('#Cont_MainUserName_Span');
            }
        });
        //======================================done
        $('#Cont_MainUserIDNumber').keyup(function () {
            var Cont_MainUserIDNumber = $('#Cont_MainUserIDNumber').val();
            if (Cont_MainUserIDNumber === "") {
                $('#Cont_MainUserIDNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserIDNumber_Span');
                hideSpan('#Cont_MainUserIDNumber_Span1');
                hideSpan('#Cont_MainUserIDNumber_Span2');
                $('#Cont_MainUserIDNumber.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_MainUserIDNumber_Span').text("رقم هوية المستخدم الرئيسي مفقود");

            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Cont_MainUserIDNumber);
                if (!isEnglish) {
                    $('#Cont_MainUserIDNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_MainUserIDNumber_Span1');
                    hideSpan('#Cont_MainUserIDNumber_Span');
                    hideSpan('#Cont_MainUserIDNumber_Span2');
                    $('#Cont_MainUserIDNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_MainUserIDNumber_Span').text("رقم هوية المستخدم يجب أن يكون باللغة الإنجليزية");
                }
                if (Cont_MainUserIDNumber.length != 10) {
                    $('#Cont_MainUserIDNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_MainUserIDNumber_Span2');
                    hideSpan('#Cont_MainUserIDNumber_Span');
                    hideSpan('#Cont_MainUserIDNumber_Span1');
                    $('#Cont_MainUserIDNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_MainUserIDNumber_Span').text("رقم هوية المستخدم يجب أن يكون 10 أرقام");
                } else {
                    $('#Cont_MainUserIDNumber').css('border', '1px solid #E79022');
                    hideSpan('#Cont_MainUserIDNumber_Span');
                    hideSpan('#Cont_MainUserIDNumber_Span1');
                    hideSpan('#Cont_MainUserIDNumber_Span2');
                    $('#Cont_MainUserIDNumber.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //==========================================done
        $('#Cont_MainUserMobile').keyup(function () {
            var Cont_MainUserMobile = $('#Cont_MainUserMobile').val();
            if (Cont_MainUserMobile === "") {
                $('#Cont_MainUserMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserMobile_Span');
                hideSpan('#Cont_MainUserMobile_Span1');
                $('#Cont_MainUserMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_MainUserMobile_Span').text("رقم جوال المستخدم الرئيسي مفقود");
            } else {
                if (Cont_MainUserMobile.length != 12 || !Cont_MainUserMobile.startsWith("9665")) {
                    $('#Cont_MainUserMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_MainUserMobile_Span1');
                    hideSpan('#Cont_MainUserMobile_Span');
                    $('#Cont_MainUserMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_MainUserMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Cont_MainUserMobile').css('border', '1px solid #E79022');
                    hideSpan('#Cont_MainUserMobile_Span');
                    hideSpan('#Cont_MainUserMobile_Span1');
                    $('#Cont_MainUserMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //============================================done
        $('#Cont_MainUserEmail').keyup(function () {
            var Cont_MainUserEmail = $('#Cont_MainUserEmail').val();
            if (Cont_MainUserEmail === "") {
                $('#Cont_MainUserEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_MainUserEmail_Span');
                hideSpan('#Cont_MainUserEmail_Span1');
                $('#Cont_MainUserEmail.MandatoryInput').removeClass("NormalInput");
                //message.push("بيان البريد الإلكتروني للمستخدم الرئيسي مفقود");

            } else {
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Cont_MainUserEmail)
                if (!testRsult) {
                    $('#Cont_MainUserEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_MainUserEmail_Span1');
                    hideSpan('#Cont_MainUserEmail_Span');
                    $('#Cont_MainUserEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_MainUserEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Cont_MainUserEmail').css('border', '1px solid #E79022');
                    hideSpan('#Cont_MainUserEmail_Span');
                    hideSpan('#Cont_MainUserEmail_Span1');
                    $('#Cont_MainUserEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //====================================done
        $("#rd_Lang1 , #rd_Lang2 , #rd_Lang3").change(function () {
            var otherLang = $('#otherLang').val();

            var rd_Lang1 = $('#rd_Lang1').is(':checked');
            var rd_Lang2 = $('#rd_Lang2').is(':checked');

            if (rd_Lang1 === false && rd_Lang2 === false && otherLang === "") {
                $(".lang .starInvalid").css('visibility', 'visible');
                $('#otherLang').css('border', '2px solid red');
                nextStep = false;
                showSpan('#User_Language_Span');
                //$('#Cont_MainUserEmail_Span').text("يجب إختيار اللغة المفضلة");
            }
            else {
                $('#otherLang').css('border', '1px solid #E79022');
                $(".lang .starInvalid").css('visibility', 'hidden');
                hideSpan('#User_Language_Span');
            }
        });
        $('#otherLang').keyup(function () {
            var OtherLang = $('#otherLang').val();
            if (OtherLang === "") {
                nextStep = false;
                showSpan('#User_Language_Span');
                //$('#Prov_MedicalLicenseNumberExpirationDate_Span').text("يجب إختيار تاريخ إنتهاء الترخيص الطبي ");
            }
            else {
                hideSpan('#User_Language_Span');
            }
        });

        //fifth page ====================================
        $("#Cont_IsAgreementApproved").change(function () {
            var Cont_IsAgreementApproved = $('#Cont_IsAgreementApproved');
            if (!Cont_IsAgreementApproved.is(":checked")) {
                $("input[type='checkbox']").toggleClass('invalidCheckbox');
                nextStep = false;
                showSpan('#Cont_IsAgreementApproved_Span');
                //$('#Cont_IsAgreementApproved_Span').text("رقم مجلس الضمان مفقود");
            }
            else {
                $("input[type='checkbox']").toggleClass('invalidCheckbox');
                hideSpan('#Cont_IsAgreementApproved_Span');
            }
        });

        //======================================================done
        $('#Cont_AccreditedByName').keyup(function () {
            var Cont_AccreditedByName = $('#Cont_AccreditedByName').val();
            if (Cont_AccreditedByName === "") {
                $('#Cont_AccreditedByName').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByName_Span');
                //$('#Cont_AccreditedByName_Span').text("إسم المعتمد مفقود");
            }
            else {
                $('#Cont_AccreditedByName').css('border', '1px solid #E79022');
                hideSpan('#Cont_AccreditedByName_Span');
            }
        });
        //===================================done
        $('#Cont_AccreditedByIDNumber').keyup(function () {
            var Cont_AccreditedByIDNumber = $('#Cont_AccreditedByIDNumber').val();
            if (Cont_AccreditedByIDNumber === "") {
                $('#Cont_AccreditedByIDNumber').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByIDNumber_Span');
                hideSpan('#Cont_AccreditedByIDNumber_Span1');
                hideSpan('#Cont_AccreditedByIDNumber_Span2');
                $('#Cont_AccreditedByIDNumber.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_AccreditedByIDNumber_Span').text("رقم هوية المعتمد مفقود");
            } else {
                var englishReg = /^[A-Za-z0-9]*$/;
                var isEnglish = englishReg.test(Cont_AccreditedByIDNumber);
                if (!isEnglish) {
                    $('#Cont_AccreditedByIDNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_AccreditedByIDNumber_Span1');
                    hideSpan('#Cont_AccreditedByIDNumber_Span');
                    hideSpan('#Cont_AccreditedByIDNumber_Span2');
                    $('#Cont_AccreditedByIDNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_AccreditedByIDNumber_Span').text("رقم هوية المعتمد يجب أن يكون باللغة الإنجليزية");
                }
                else {
                    $('#Cont_AccreditedByIDNumber').css('border', '1px solid #E79022');
                    hideSpan('#Cont_AccreditedByIDNumber_Span1');
                    hideSpan('#Cont_AccreditedByIDNumber_Span');
                    $('#Cont_AccreditedByIDNumber.MandatoryInput').addClass("NormalInput");
                }

                if (Cont_AccreditedByIDNumber.length != 10) {
                    $('#Cont_AccreditedByIDNumber').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_AccreditedByIDNumber_Span2');
                    $('#Cont_AccreditedByIDNumber.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_AccreditedByIDNumber_Span').text("رقم هوية المعتمد يجب أن يكون 10 أرقام");
                }
                else {
                    hideSpan('#Cont_AccreditedByIDNumber_Span');
                    hideSpan('#Cont_AccreditedByIDNumber_Span1');
                    hideSpan('#Cont_AccreditedByIDNumber_Span2');
                    $('#Cont_AccreditedByIDNumber.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //=========================================================done
        $('#Cont_AccreditedByMobile').keyup(function () {
            var Cont_AccreditedByMobile = $('#Cont_AccreditedByMobile').val();
            if (Cont_AccreditedByMobile === "") {
                $('#Cont_AccreditedByMobile').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByMobile_Span');
                hideSpan('#Cont_AccreditedByMobile_Span1');
                $('#Cont_AccreditedByMobile.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_AccreditedByMobile_Span').text("رقم جوال المعتمد مفقود");
            } else {
                if (Cont_AccreditedByMobile.length != 12 || !Cont_AccreditedByMobile.startsWith("9665")) {
                    $('#Cont_AccreditedByMobile').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_AccreditedByMobile_Span1');
                    hideSpan('#Cont_AccreditedByMobile_Span');
                    $('#Cont_AccreditedByMobile.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_AccreditedByMobile_Span').text("بيان الجوال يجب أن يكون 12 رقما ويبدأ ب 9665");
                }
                else {
                    $('#Cont_AccreditedByMobile').css('border', '1px solid #E79022');
                    hideSpan('#Cont_AccreditedByMobile_Span');
                    hideSpan('#Cont_AccreditedByMobile_Span1');
                    $('#Cont_AccreditedByMobile.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //===========================================done
        $('#Cont_AccreditedByTitle').keyup(function () {
            var Cont_AccreditedByTitle = $('#Cont_AccreditedByTitle').val();
            if (Cont_AccreditedByTitle === "") {
                $('#Cont_AccreditedByTitle').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByTitle_Span');
                //$('#Cont_AccreditedByTitle_Span').text("منصب المعتمد مفقود");
            }
            else {
                $('#Cont_AccreditedByTitle_Span').css('border', '1px solid #E79022');
                hideSpan('#Cont_AccreditedByTitle_Span');
            }
        });
        //=========================================
        $('#Cont_AccreditedByEmail').keyup(function () {
            var Cont_AccreditedByEmail = $('#Cont_AccreditedByEmail').val();
            if (Cont_AccreditedByEmail === "") {
                $('#Cont_AccreditedByEmail').css('border', '2px solid red');
                nextStep = false;
                showSpan('#Cont_AccreditedByEmail_Span');
                hideSpan('#Cont_AccreditedByEmail_Span2');
                hideSpan('#Cont_AccreditedByEmail_Span1');
                $('#Cont_AccreditedByEmail.MandatoryInput').removeClass("NormalInput");
                //$('#Cont_AccreditedByEmail_Span').text("بيان البريد الإلكتروني للمستخدم المعتمد مفقود");

            } else {
                
                if ($('#Cont_MainUserEmail').val() === $('#Cont_AccreditedByEmail').val()) {
                    $('#Cont_MainUserEmail').css('border', '2px solid red');
                    $('#Cont_AccreditedByEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_AccreditedByEmail_Span2');
                    $('#Cont_AccreditedByEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_AccreditedByEmail_Span').text("يجب أن يكون البريد الالكتروني المستخدم الرئيسي مختلف عن البريد الالكتروني للمعتمد");
                } else {
                    hideSpan('#Cont_AccreditedByEmail_Span2');
                    hideSpan('#Cont_AccreditedByEmail_Span1');
                    hideSpan('#Cont_AccreditedByEmail_Span');
                    $('#Cont_AccreditedByEmail.MandatoryInput').addClass("NormalInput");
                }
                if ($('#Cont_MainUserEmail').val() === "" || $('#Cont_AccreditedByEmail').val() === "") {
                    $('#Cont_MainUserEmail').css('border', '2px solid red');
                    $('#Cont_AccreditedByEmail').css('border', '2px solid red');
                }
                else {
                    $('#Cont_MainUserEmail').css('border', '1px solid #E79022');
                    $('#Cont_AccreditedByEmail').css('border', '1px solid #E79022');
                }
                var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                var testRsult = reg.test(Cont_AccreditedByEmail)
                if (!testRsult) {
                    $('#Cont_AccreditedByEmail').css('border', '2px solid red');
                    nextStep = false;
                    showSpan('#Cont_AccreditedByEmail_Span1');
                    $('#Cont_AccreditedByEmail.MandatoryInput').removeClass("NormalInput");
                    //$('#Cont_AccreditedByEmail_Span').text("بيان البريد الإلكتروني ليس فى الصيغة المطلوبة");
                }
                else {
                    $('#Cont_AccreditedByEmail').css('border', '1px solid #E79022');
                    hideSpan('#Cont_AccreditedByEmail_Span');
                    hideSpan('#Cont_AccreditedByEmail_Span1');
                    $('#Cont_AccreditedByEmail.MandatoryInput').addClass("NormalInput");
                }
            }
        });
        //======================================================done
    }); // document ready

    $(".MandatoryInput").on("input", function () {
        var value = $(this).val();
        if (value == "") {
            $(this).removeClass("NormalInput");
        }
        else {
            $(this).addClass("NormalInput");
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
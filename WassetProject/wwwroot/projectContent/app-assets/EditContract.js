var filesCCHI = [];
var fileCR = [];
var fileLicense = [];
var fileCC = [];
var loadingDiv = $("#loadingDiv");
let toastSuccess = $('#ToastSuccess');
var Valid = true;


var PreEditModel = {
    'masterprovidercontID': '',
    'FkFacTypId': '',
    'Cchinumber': '',
    'CchiExpiryDate': '',
    'CustomerPortalProvCrnumber': '',
    'CustomerPortalProvCrnumberExpiration': '',
    'CustomerPortalProvMedicalLicenseNumber': '',
    'CustomerPortalProvMedicalLicenseNumberExpiration': '',
    'ProvTaxnumber': '',
    'CustomerPortalProvCcnumber': '',
    'FkCatId': '',
    'FK_Vendor_ID': '',
    'FK_SystemName_ID': '',
    'NameAr': '',
    'NameEn': '',
    'FkCityId': '',
    'ProvPhoneNumber': '',
    'Fax': '',
    'ProvDistrict': '',
    'ProvStreet': '',
    'CustomerPortalProvMailBox': '',
    'ZipCode': '',
    'Website': ''
}

function BindEditModel() {
    PreEditModel.masterprovidercontID = $('#contID').val();
    if ($('#rd_FacTyp1').val() != '') {
        PreEditModel.FkFacTypId = $('#rd_FacTyp1').val();
    }
    else if ($('#rd_FacTyp2').val() != '') {
        PreEditModel.FkFacTypId = $('#rd_FacTyp2').val();
    }
    else if ($('#rd_FacTyp3').val() != '') {
        PreEditModel.FkFacTypId = $('#rd_FacTyp3').val();
    }
    else if ($('#rd_FacTyp4').val() != '') {
        PreEditModel.FkFacTypId = $('#rd_FacTyp4').val();
    }
    PreEditModel.Cchinumber = $('#Prov_CCHINumber').val();
    PreEditModel.CchiExpiryDate = $('#Prov_CCHINumberExpirationDate').val();
    PreEditModel.CustomerPortalProvCrnumber = $('#Prov_CRNumber').val();
    PreEditModel.CustomerPortalProvCrnumberExpiration = $('#Prov_CRNumberExpirationDate').val();
    PreEditModel.CustomerPortalProvMedicalLicenseNumber = $('#Prov_MedicalLicenseNumber').val();
    PreEditModel.CustomerPortalProvMedicalLicenseNumberExpiration = $('#Prov_MedicalLicenseNumberExpirationDate').val();
    PreEditModel.ProvTaxnumber = $('#Prov_TAXNumber').val();
    PreEditModel.CustomerPortalProvCcnumber = $('#Prov_CCNumber').val();
    PreEditModel.FkCatId = $('#FkCatId').val();
    PreEditModel.FK_Vendor_ID = $('#FK_Vendor_ID').val();
    PreEditModel.FK_SystemName_ID = $('#FK_SystemName_ID').val();
    PreEditModel.NameAr = $('#Prov_NameAr').val();
    PreEditModel.NameEn = $('#Prov_NameEn').val();
    PreEditModel.FkCityId = $('#FkCityId').val();
    PreEditModel.ProvPhoneNumber = $('#Prov_PhoneNumber').val();
    PreEditModel.Fax = $('#Prov_FaxNumber').val();
    PreEditModel.ProvDistrict = $('#Prov_District').val();
    PreEditModel.ProvStreet = $('#Prov_Street').val();
    PreEditModel.CustomerPortalProvMailBox = $('#Prov_MailBox').val();
    PreEditModel.ZipCode = $('#Prov_ZipCode').val();
    PreEditModel.Website = $('#Prov_Website').val();
}

$(document).ready(function () {
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
            format: 'DD/MM/YYYY'
        });
        var Prov_CCHINumberExpirationDate = $('#Prov_CCHINumberExpirationDate').val();
        var Prov_CRNumberExpirationDate = $('#Prov_CRNumberExpirationDate').val();
        var Prov_MedicalLicenseNumberExpirationDate = $('#Prov_MedicalLicenseNumberExpirationDate').val();
        if (Prov_CCHINumberExpirationDate != null && Prov_CCHINumberExpirationDate != undefined && Prov_CCHINumberExpirationDate != "") {
            var datee = new Date(Prov_CCHINumberExpirationDate.split('/')[2], parseInt(Prov_CCHINumberExpirationDate.split('/')[1]) - 1, Prov_CCHINumberExpirationDate.split('/')[0]).toLocaleDateString();
            var hijrahDatee = moment(datee).format('iDD/iMM/iYYYY');
            $('#Prov_CCHINumberExpirationDate').val(hijrahDatee);
        }
        if (Prov_CRNumberExpirationDate != null && Prov_CRNumberExpirationDate != undefined && Prov_CRNumberExpirationDate != "") {
            var date1 = new Date(Prov_CRNumberExpirationDate.split('/')[2], parseInt(Prov_CRNumberExpirationDate.split('/')[1]) - 1, Prov_CRNumberExpirationDate.split('/')[0]).toLocaleDateString();
            var hijrahDate1 = moment(date1).format('iDD/iMM/iYYYY');
            $('#Prov_CRNumberExpirationDate').val(hijrahDate1);
        }
        if (Prov_MedicalLicenseNumberExpirationDate != null && Prov_MedicalLicenseNumberExpirationDate != undefined && Prov_MedicalLicenseNumberExpirationDate != "") {
            var date2 = new Date(Prov_MedicalLicenseNumberExpirationDate.split('/')[2], parseInt(Prov_MedicalLicenseNumberExpirationDate.split('/')[1]) - 1, Prov_MedicalLicenseNumberExpirationDate.split('/')[0]).toLocaleDateString();
            var hijrahDate2 = moment(date2).format('iDD/iMM/iYYYY');
            $('#Prov_MedicalLicenseNumberExpirationDate').val(hijrahDate2);
        }

    }


    //$('#Prov_CCHINumberExpirationDate,#Prov_CRNumberExpirationDate,#Prov_MedicalLicenseNumberExpirationDate').datetimepicker({
    //    timepicker: false,
    //    datepicker: true,
    //    format: 'd/m/Y',
    //    value: '',
    //    scrollMonth: false,
    //    scrollInput: false
    //})


    //var filescchi = $('#filescchi').get(0);
    //var filescr = $('#filescr').get(0);
    //var licFiCC = $('#licFiCC').get(0);
    //var fileslic = $('#fileslic').get(0);

    //if (filescchi.files[0] != undefined) {
    //    if (filescchi.files[0].size != 0 && filescchi.files[0].size != undefined) {
    //        $("#selector1").html(filescchi.files[0].name);
    //    }
    //}
    //if (filescr.files[0] != undefined) {
    //    if (filescr.files[0].size != 0 && filescr.files[0].size != undefined) {
    //        $("#selector1").html(filescr.files[0].name);
    //    }
    //}
    //if (fileslic.files[0] != undefined) {
    //    if (fileslic.files[0].size != 0 && fileslic.files[0].size != undefined) {
    //        $("#selector3").html(fileslic.files[0].name);
    //    }
    //}
    //if (licFiCC.files[0] != undefined) {
    //    if (licFiCC.files[0].size != 0 && licFiCC.files[0].size != undefined) {
    //        $("#selector4").html(licFiCC.files[0].name);
    //    }
    //}

    //$("#mainForm").submit(function (e) {
    //    //return(validate());
    //    return ValidateInputs(e);
    //});

    $("#filescchi").change(function (e) {

        var invalidFiles = [];
        var fullPath = "";
        var nullFile = "";
        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') /*&& this.files[i].size <= 1048576 */ && (this.files[i].size != 0 || this.files[i].size == undefined)) {
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
            // alert(nullFile);
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
            //   alert("Only PDF files are supported & Max Size is 1MB!");

        }
        if (nullFile != "") {
            toastr["error"](nullFile)
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text(nullFile);
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            // alert(nullFile);
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
            //   alert("Only PDF files are supported & Max Size is 1MB!");
        }
        if (nullFile != "") {
            toastr["error"](err)
            //$('#ToastError').toast('show');
            //$('#ToastError .toast-body').text(nullFile);
            //setTimeout(function () { $('#ToastError').toast('hide') }, 5000)
            // alert(nullFile);
        }

    });

    $("#licFiCC").change(function (e) {
        var invalidFiles = [];
        var fullPath = "";
        var nullFile = "";

        for (var i = 0; i < this.files.length; i++) {
            if (this.files[i].type.match('application/pdf') /*&& this.files[i].size <= 1048576*/) {
                fileCC.push(this.files[i]);
                var path = this.files[i].name;
                fullPath += "  " + path;
            } else if (this.files[i].size == 0 || this.files[i].size == undefined) {
                nullFile = "You Select Empty File!";
            }
            else {
                invalidFiles.push(this.files[i])
            }
        }
        $("#selector4").html(fullPath);
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
            // alert(nullFile);
        }
    });


    $("#filescchiBtn").on("click", function (e) {
        e.preventDefault();
        var fKProviderContId = $("#contID").text();
        $.ajax({
            url: '/CRM_Contracts/DownloadProviderFile',
            type: "GET",
            dataType: "json",
            data: { 'fKProviderContId': fKProviderContId, 'FileType': 1 },
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
        var fKProviderContId = $("#contID").text();
        $.ajax({
            url: '/CRM_Contracts/DownloadProviderFile',
            type: "GET",
            dataType: "json",
            data: { 'fKProviderContId': fKProviderContId, 'FileType': 2 },
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

    $("#fileslicBtn").on("click", function (e) {
        e.preventDefault();
        var fKProviderContId = $("#contID").text();
        $.ajax({
            url: '/CRM_Contracts/DownloadProviderFile',
            type: "GET",
            dataType: "json",
            data: { 'fKProviderContId': fKProviderContId, 'FileType': 3 },
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

    $("#licFiCCBtn").on("click", function (e) {


        e.preventDefault();
        var fKProviderContId = $("#contID").text();
        $.ajax({
            url: '/CRM_Contracts/DownloadProviderFile',
            type: "GET",
            dataType: "json",
            data: { 'fKProviderContId': fKProviderContId, 'FileType': 4 },
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

    $("#VerifyOTP").on("click", function (e) {
        VerifyOTP(e);
    })

});

function writeHijri(date) {
    var date = date || new Date();
    var lang = 'en';
    var options = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    return date.toLocaleString(lang + '-u-ca-islamic', options);
}

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

function EditContract() {

    let errorMessage = document.getElementById("erorr_message1");
    if (errorMessage != null) {

        errorMessage.innerHTML = " ";
    }
    var contractId = $("#contID").text();
    $.ajax({
        url: "/Provider/Edit",
        contentType: 'application/json; charset=utf-8',
        type: 'POST',
        dataType: "json",
        data: JSON.stringify({ contractId: contractId }),
        beforeSend: function () {
            loadingDiv.show();
        },
        success: function (result) {
            $("#loadingDiv").hide();
            if (result.succeded) {
                window.location.href = '/CRM_Contracts/Index';
            } else {
                toastr["error"](result.error)
            }
        },
        error: function (err) {
            $("#loadingDiv").hide();
            $("#ModalCenter").modal('hide');
            toastr["error"](err)
        }
    });
}

function ValidateInputs(form) {
    form.preventDefault();
    EditContract();
}

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}

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

//        //    $("#CreateSection").html('<iframe src="' + fileURL + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')

//        //}
//        //$("#selector1").text(res.fileName)

//        $("#CreateSection").html('<iframe src="data:application/pdf;base64,' + res.base64 + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')

//    }
//}

//$('#submitFormButton').on('click', function (e) {
//    // 

//    event.preventDefault();
//    var formData = $("#mainForm").serialize();
//    BindEditModel();

//    Swal.fire({
//        title: 'You are sure you want to update this contract ?',
//        showDenyButton: true,
//        showCancelButton: false,
//        confirmButtonText: `Update`,
//        denyButtonText: `Cancel`,
//        showLoaderOnConfirm: true,
//        allowOutsideClick: () => !Swal.isLoading()
//    }).then((result) => {
//        if (result.isConfirmed) {
//            Swal.fire({
//                title: 'Start updating  data...',
//                html: 'Process <b></b> ....',
//                //timer: 2000,
//                timerProgressBar: true,
//                didOpen: () => {
//                    Swal.showLoading()
//                    const content = Swal.getContent()
//                    if (content) {
//                        const b = content.querySelector('b')
//                        if (b) {
//                            b.textContent = 'Save Data..'
//                        }
//                    }
//                    $("#mainForm").submit();
//                },
//                willClose: () => {
//                    swal.stopLoading();
//                }
//            })
//        }
//    });
//});


var modelobject = {
    MasterProvider: {
        'ProvId': '',
        'FaGroupId': '',
        'CalssicId': '',
        'CloudId': '',
        'ErpId': '',
        'DynamicId': '',
        'FkParentProvId': '',
        'FkNewProvId': '',
        'FkCatId': '',
        'FkVendId': '',
        'FkVendSysId': '',
        'FkFacTypId': '',
        'FkProUserId': '',
        'Cchinumber': '',
        'CchiExpiryDate': '',
        'NameEn': '',
        'NameAr': '',
        'CommercialRegistration': '',
        'FkCityId': '',
        'Address': '',
        'CloudFusionAuthGroupId': '',
        'Logo': [],
        'IsDeleted': '',
        'Dhscode': '',
        'FkProvStatusId': '',
        'WorkingFrom': '',
        'WorkingTo': '',
        'EmailAddress': '',
        'MobileNo': '',
        'ClassicTelNo': '',
        'Gpslocation': '',
        'ClassicDetailsProDetailId': '',
        'EboxIpaddress': '',
        'EboxTeamViewerId': '',
        'EboxTeamViewerPass': '',
        'EboxWindowsPass': '',
        'EboxWindowsUserName': '',
        'EboxSerialNo': '',
        'EboxDeliverDate': '',
        'FkEboxDeliveryByTypeId': '',
        'EboxAssetId': '',
        'ErpCustomerOid': '',
        'ErpCustomerCustomerCode': '',
        'BupaCode': '',
        'ErpCustomerMemberSince': '',
        'ErpCustomerAccountsReceivable': '',
        'ErpCustomerDownPaymentClearingAccount': '',
        'ErpCustomerBankName': '',
        'ErpCustomerBankAccountName': '',
        'ErpCustomerBankAccountNumber': '',
        'ErpCustomerIban': '',
        'ErpCustomerSwift': '',
        'ErpCustomerBankDetails': '',
        'ErpCustomerBankAddress': '',
        'ErpCustomerSalesEmployee': '',
        'ErpCustomerContractNo': '',
        'ErpCustomerRegistrationFee': '',
        'ErpCustomerClaimRate': '',
        'ErpCustomerRemarks': '',
        'ErpCustomerOptimisticLockField': '',
        'ErpCustomerGcrecord': '',
        'ErpCustomerObjectType': '',
        'Vatno': '',
        'ErpCustomerInternalRefNo': '',
        'ErpCustomerTitle': '',
        'ErpCustomerMaritalStatus': '',
        'ErpCustomerDateofBirth': '',
        'ErpCustomerGender': '',
        'ErpCustomerReligion': '',
        'ErpCustomerNationality': '',
        'ErpCustomerSocialId': '',
        'ErpCustomerTelephone2': '',
        'Fax': '',
        'Website': '',
        'ProvPhoneNumber': '',
        'ProvDistrict': '',
        'ProvStreet': '',
        'ErpCustomerReferredBy': '',
        'ErpCustomerIsCreditCustomer': '',
        'ErpCustomerCreditLimit': '',
        'ErpCustomerRating': '',
        'ErpCustomerRatingComments': '',
        'ErpCustomerTaxMode': '',
        'ErpCustomerCustomerType': '',
        'ErpCustomerCategory': '',
        'ErpCustomerPrimaryContact': '',
        'ErpCustomerEnableAutoEmailInvoice': '',
        'ErpCustomerEmailInvoiceDistributionList': '',
        'ErpCustomerPaymentDueIn': '',
        'ErpCustomerTaxCode': '',
        'ErpCustomerCurrency': '',
        'ErpCustomerCategoryOid': '',
        'ErpCustomerTypesOid': '',
        'CustomerPortalProvId': '',
        'CustomerPortalProvCrnumber': '',
        'CustomerPortalProvCrnumberExpiration': '',
        'CustomerPortalProvMedicalLicenseNumber': '',
        'CustomerPortalProvMedicalLicenseNumberExpiration': '',
        'CustomerPortalProvCcnumber': '',
        'CustomerPortalProvMailBox': '',
        'ZipCode': '',
        'CustomerPortalProvFaGuid': '',
        'CustomerPortalProvGmname': '',
        'CustomerPortalProvGmmobile': '',
        'CustomerPortalProvGmemail': '',
        'CustomerPortalProvCfoname': '',
        'CustomerPortalProvCfomobile': '',
        'CustomerPortalProvCfoemail': '',
        'CustomerPortalProvDateTimeStamp': '',
        'LastModifiedDate': '',
        'UpdateReason': '',
        'RejectionReason': '',
        'FkUserId': '',
        'IsActive': '',
        'ProfileApproved': '',
        'ProfileApprovedDate': '',
        'FkProfileApprovedUserId': '',
        'Loasigned': '',
        'LoasignedDate': '',
        'FkLoasignedByUserId': '',
        'HasAcontract': '',
        'HasAcontractDate': '',
        'FkContractSignedByUserId': '',
        'EnvironmentReady': '',
        'EnvironmentReadyDate': '',
        'FkEnvironmentPreparedByUserId': '',
        'Mtsinstallation': '',
        'MtsinstallationDate': '',
        'FkMtsinstalledByUserId': '',
        'Integrated': '',
        'IntegrationDate': '',
        'FkIntegratedByUserId': '',
        'FirstSubmission': '',
        'FirstSubmissionDate': '',
        'FkFirstSubmissionByUserId': '',
        'Training': '',
        'TrainingDate': '',
        'FkTrainedByUserId': '',
        'Live': '',
        'LiveDate': '',
        'FkWentLiveByUserId': '',
        'TotalAverageClaims': '',
        'Remarks': '',
        'CreationDate': '',
        'ProvTaxnumber': '',
        'Discount': '',
    },
    ProviderContract: {
        'ContId': '',
        'FkReqTypId': '',
        'FkProvId': '',
        'FkParentContId': '',
        'FkNewContId': '',
        'ContRequestDate': '',
        'ContRegistrationNumber': '',
        'ContClaimInChargeContactName': '',
        'ContClaimInChargeContactMobile': '',
        'ContClaimInChargeContactEmail': '',
        'ContCommunicationContactName': '',
        'ContCommunicationContactMobile': '',
        'ContCommunicationContactEmail': '',
        'ContNotificationMobile': '',
        'ContNotificationEmail': '',
        'ContMainUserName': '',
        'ContMainUserIdnumber': '',
        'ContMainUserMobile': '',
        'ContMainUserEmail': '',
        'FkLangId': '',
        'ContIsAgreementApproved': '',
        'ContAccreditedByName': '',
        'ContAccreditedByIdnumber': '',
        'ContAccreditedByMobile': '',
        'ContAccreditedByEmail': '',
        'ContAccreditedByTitle': '',
        'ContIsSigned': '',
        'ContChamberOfCommerceIsSent': '',
        'ContMainUserMessageIsSent': '',
        'FkContStatId': '',
        'ContRejectionReason': '',
        'FkVendorId': '',
        'FkVendSysId': '',
        'FkPricPlnId': '',
        'OtpDate': '',
        'OtpIsSent': '',
        'OtpCode': '',
        'OtpConfirmed': '',
        'OldContId': '',
        'Status': '',
        'RejectedReason': '',
        'ValidFrom': '',
        'ValidUntil': '',
        'IsActive': '',
        'OtherLang': '',
    }
}

$('#FkVendorId').change(function () {
    // ;
    //master vendor
    $.getJSON('/CRM_Contracts/SystemNameList/' + $('#FkVendorId').val(), function (data) {
        var select = $("#FkVendSysId");
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

function SetInitialProfileObjectValues(modelObject) {

    modelObject.MasterProvider.CchiExpiryDate = getDateTimeIfDateTime(modelObject.MasterProvider.CchiExpiryDate);
    modelObject.MasterProvider.CustomerPortalProvCrnumberExpiration = getDateTimeIfDateTime(modelObject.MasterProvider.CustomerPortalProvCrnumberExpiration);
    modelObject.MasterProvider.CustomerPortalProvMedicalLicenseNumberExpiration = getDateTimeIfDateTime(modelObject.MasterProvider.CustomerPortalProvMedicalLicenseNumberExpiration);
    modelObject.MasterProvider.CreationDate = getDateTimeIfDateTime(modelObject.MasterProvider.CreationDate);
    if (modelObject.MasterProvider.LastModifiedDate != null || modelObject.MasterProvider.LastModifiedDate != undefined)
        modelObject.MasterProvider.LastModifiedDate = getDateTimeIfDateTime(modelObject.MasterProvider.LastModifiedDate);
    if (modelObject.MasterProvider.EboxDeliverDate != null || modelObject.MasterProvider.EboxDeliverDate != undefined)
        modelObject.MasterProvider.EboxDeliverDate = getDateTimeIfDateTime(modelObject.MasterProvider.EboxDeliverDate);
    if (modelObject.MasterProvider.HasAcontractDate != null || modelObject.MasterProvider.HasAcontractDate != undefined)
        modelObject.MasterProvider.HasAcontractDate = getDateTimeIfDateTime(modelObject.MasterProvider.HasAcontractDate);
    if (modelObject.MasterProvider.EnvironmentReadyDate != null || modelObject.MasterProvider.EnvironmentReadyDate != undefined)
        modelObject.MasterProvider.EnvironmentReadyDate = getDateTimeIfDateTime(modelObject.MasterProvider.EnvironmentReadyDate);
    if (modelObject.MasterProvider.MtsinstallationDate != null || modelObject.MasterProvider.MtsinstallationDate != undefined)
        modelObject.MasterProvider.MtsinstallationDate = getDateTimeIfDateTime(modelObject.MasterProvider.MtsinstallationDate);
    if (modelObject.MasterProvider.IntegrationDate != null || modelObject.MasterProvider.IntegrationDate != undefined)
        modelObject.MasterProvider.IntegrationDate = getDateTimeIfDateTime(modelObject.MasterProvider.IntegrationDate);
    if (modelObject.MasterProvider.FirstSubmissionDate != null || modelObject.MasterProvider.FirstSubmissionDate != undefined)
        modelObject.MasterProvider.FirstSubmissionDate = getDateTimeIfDateTime(modelObject.MasterProvider.FirstSubmissionDate);
    if (modelObject.MasterProvider.TrainingDate != null || modelObject.MasterProvider.TrainingDate != undefined)
        modelObject.MasterProvider.TrainingDate = getDateTimeIfDateTime(modelObject.MasterProvider.TrainingDate);
    if (modelObject.MasterProvider.LiveDate != null || modelObject.MasterProvider.LiveDate != undefined)
        modelObject.MasterProvider.LiveDate = getDateTimeIfDateTime(modelObject.MasterProvider.LiveDate);


    modelobject = modelObject;
}

function getDateTimeIfDateTime(d) {
    var m = d.match(/\/Date\((\d+)\)\//);
    return m ? (new Date(+m[1])).toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : d;
}

$('#submitFormButton').on('click', function (e) {
    event.preventDefault();
    //ValidateInputs();

    //var self = $(this);
    if (Valid) {

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

function BindDataToModel() {
    modelobject.ProviderContract.FkPricPlnId = $('#FkPricPlnId').val();
    modelobject.MasterProvider.FkVendSysId = $('#FkVendSysId').val();
    modelobject.MasterProvider.NameAr = $('#NameAr').val();
    modelobject.MasterProvider.NameEn = $('#NameEn').val();
    modelobject.ProviderContract.ContClaimInChargeContactName = $('#ContClaimInChargeContactName').val();
    modelobject.ProviderContract.ContClaimInChargeContactMobile = $('#ContClaimInChargeContactMobile').val();
    modelobject.ProviderContract.ContClaimInChargeContactEmail = $('#ContClaimInChargeContactEmail').val();
    modelobject.ProviderContract.ContCommunicationContactName = $('#ContCommunicationContactName').val();
    modelobject.ProviderContract.ContCommunicationContactMobile = $('#ContCommunicationContactMobile').val();
    modelobject.ProviderContract.ContCommunicationContactEmail = $('#ContCommunicationContactEmail').val();
    modelobject.ProviderContract.ContNotificationMobile = $('#ContNotificationMobile').val();
    modelobject.ProviderContract.ContNotificationEmail = $('#ContNotificationEmail').val();
    modelobject.ProviderContract.ContMainUserName = $('#ContMainUserName').val();
    modelobject.ProviderContract.ContMainUserIDNumber = $('#ContMainUserIDNumber').val();
    modelobject.ProviderContract.ContMainUserEmail = $('#ContMainUserEmail').val();
    modelobject.ProviderContract.ContMainUserMobile = $('#ContMainUserMobile').val();
    if ($('#rd_Lang1').val() == true) {
        modelobject.ProviderContract.FkLangId = '1';
    }
    else if ($('#rd_Lang2').val() == true) {
        modelobject.ProviderContract.FkLangId = '2';
    }
    else if ($('#rd_Lang3').val() == true) {
        modelobject.ProviderContract.FkLangId = '3';
        modelobject.ProviderContract.OtherLang = $('#otherLang').val();
    }
    modelobject.ProviderContract.ContAccreditedByName = $('#ContAccreditedByName').val();
    modelobject.ProviderContract.ContAccreditedByIDNumber = $('#ContAccreditedByIDNumber').val();
    modelobject.ProviderContract.ContAccreditedByMobile = $('#ContAccreditedByMobile').val();
    modelobject.ProviderContract.ContAccreditedByEmail = $('#ContAccreditedByEmail').val();
    modelobject.ProviderContract.ContAccreditedByTitle = $('#ContAccreditedByTitle').val();
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

function ValidationFun() {
    Valid = true;
    //GeneralPage ====================================
    var FkPricPlnId = $('#FkPricPlnId').val();
    if (FkPricPlnId === "") {
        Valid = false;
        showSpan('#FK_PricPln_ID_Span');
    }
    else {
        hideSpan('#FK_PricPln_ID_Span');
    }
    //=========================================================================
    var FkVendorId = $('#FkVendorId').val();
    if (FkVendorId === "") {
        Valid = false;
        showSpan('#VendorName_Span');
    }
    else {
        hideSpan('#VendorName_Span');
    }
    var FkVendSysId = $('#FkVendSysId').val();
    if (FkVendSysId === "") {
        Valid = false;
        showSpan('#FK_SystemName_ID_Span');
    }
    else {
        hideSpan('#FK_SystemName_ID_Span');
    }
    var NameAr = $('#NameAr').val();
    if (NameAr === "") {
        Valid = false;
        showSpan('#Prov_NameAr_Span');
    }
    else {
        hideSpan('#Prov_NameAr_Span');
    }
    var NameEn = $('#NameEn').val();
    if (NameEn === "") {
        Valid = false;
        showSpan('#Prov_NameEn_Span');
    }
    else {
        hideSpan('#Prov_NameEn_Span');
    }
    var ContClaimInChargeContactName = $('#ContClaimInChargeContactName').val();
    if (ContClaimInChargeContactName === "") {
        Valid = false;
        showSpan('#Cont_ClaimInChargeContactName_Span');
    }
    else {
        hideSpan('#Cont_ClaimInChargeContactName_Span');
    }
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

    var ContCommunicationContactName = $('#ContCommunicationContactName').val();
    if (ContCommunicationContactName === "") {
        Valid = false;
        showSpan('#Cont_CommunicationContactName_Span');
    }
    else {
        hideSpan('#Cont_CommunicationContactName_Span');
    }
    //=====================================================done
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
    //============================================done
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
    //=========================================done
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

    //=========================================================================
    var ContMainUserName = $('#ContMainUserName').val();
    if (ContMainUserName === "") {
        Valid = false;
        showSpan('#Cont_MainUserName_Span');
    }
    else {
        hideSpan('#Cont_MainUserName_Span');
    }
    //======================================done
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
    //==========================================done
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
    //============================================done
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
    //====================================done
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

    //=========================================================================
    var ContAccreditedByName = $('#ContAccreditedByName').val();
    if (ContAccreditedByName === "") {
        Valid = false;
        showSpan('#Cont_AccreditedByName_Span');
    }
    else {
        hideSpan('#Cont_AccreditedByName_Span');
    }
    //===================================done
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
    //=========================================================done
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
    //===========================================done
    var ContAccreditedByTitle = $('#ContAccreditedByTitle').val();
    if (ContAccreditedByTitle === "") {
        Valid = false;
        showSpan('#Cont_AccreditedByTitle_Span');
    }
    else {
        hideSpan('#Cont_AccreditedByTitle_Span');
    }
    //=========================================
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
}
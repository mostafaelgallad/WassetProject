var filesCCHI = [];
var fileCR = [];
var fileLicense = [];
var fileCC = [];

var loadingDiv = $('#loadingDiv');

$(document).ready(function () {
    $("#mainForm").submit(function (e) {
        //return(validate());
        //return ValidateInputs(e);
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

    $("#filesVAT").change(function (e) {


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

function ShowProcessToSigningModal(VendorID) {
    $('#ProcessToSigningModal').modal('show');
    $('#MasterVendID').val(VendorID);
}
function ShowSignContractModal(VendorID) {
    $('#SignContractModal').modal('show');
    $('#MasterVendID2').val(VendorID);
}

function CloseProcessToSigningModal() {
    $('#ProcessToSigningModal').modal('hide');
}

function CloseSignContractModal() {
    $('#SignContractModal').modal('hide');
}

function ProcessToSigning() {
    //debugger;
    var vendorID = $('#MasterVendID').val();
    var notes = $('#ProcessToSignnotes').val();
    Swal.fire({
        title: 'Do you want to approve the contract and process to the contract signing ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Approve`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating the contract status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $.ajax({
                        url: '/VendorContracts/UpdateMasterVendorVaildFlag',
                        data: { 'vendorID': vendorID, 'notes': notes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                var millisecondsToWait = 2000;
                                setTimeout(function () {
                                    $('#Procestosign').hide();
                                    $('#SignContract').show();
                                    Swal.fire('The Contract status Updated Successfully', '', 'success');
                                    $('#ProcessToSigningModal').modal('hide');
                                    toastr["success"]("The Contract status Updated Successfully");
                                }, millisecondsToWait);
                            }
                        },
                        error: function () {
                            $('#ProcessToSigningModal').modal('hide');
                            Swal.fire('Error occurred while updating the contract', '', 'error');
                            toastr["error"]("Error occurred while updating the contract");
                        }
                    });
                },
                willClose: () => {
                    swal.stopLoading();
                }
            })
        }
    });
}

function SignContract() {
    //debugger;
    var vendorID = $('#MasterVendID2').val();
    var notes = $('#SignContractnotes').val();
    var contractVaildFromDate = $('#contractVaildFromDate').val();
    var contractVaildToDate = $('#contractVaildToDate').val();
    Swal.fire({
        title: 'Do you want to sign the contract ?!',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Sign`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating the contract status',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }

                    $.ajax({
                        url: '/VendorContracts/UpdateMasterVendorActiveFlag',
                        data: { 'vendorID': vendorID, 'notes': notes, 'contractVaildFromDate': contractVaildFromDate, 'contractVaildToDate': contractVaildToDate },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                var millisecondsToWait = 2000;
                                setTimeout(function () {
                                    $('#SignContract').hide();
                                    $('#contractapprovedandsigned').show();
                                    Swal.fire('The Contract status Updated Successfully', '', 'success');
                                    $('#SignContractModal').modal('hide');
                                    toastr["success"]("The Contract status Updated Successfully");
                                }, millisecondsToWait);
                            }
                        },
                        error: function () {
                            $('#ProcessToSigningModal').modal('hide');
                            Swal.fire('Error occurred whiel updating the contract', '', 'error');
                            toastr["error"]("Error occurred whiel updating the contract");
                        }
                    });
                },
                willClose: () => {
                    swal.stopLoading();
                }
            })
        }
    });
}

$(document).ready(function () {
    $('#VendorContractsList').DataTable({
        "order": [[1, "desc"]]
    });
});

function testtoastor() {
    toastr["success"]("The data has been saved successfully");
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



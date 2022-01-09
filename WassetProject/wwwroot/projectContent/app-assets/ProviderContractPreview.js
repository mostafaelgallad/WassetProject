var loadingDiv = $("#loadingDiv");

$("#filescchiBtn").on("click", function (e) {

    e.preventDefault();
    var fKProviderContId = $("#provContId").val();
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
            $("#selector3").text(result.fileName)
        },
        error: function () {
            loadingDiv.hide();
            $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
        }
    });
});

$("#filescrBtn").on("click", function (e) {


    e.preventDefault();
    var fKProviderContId = $("#provContId").val();
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
            $("#selector3").text(result.fileName)
        },
        error: function () {
            loadingDiv.hide();
            $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
        }
    });
});

$("#fileslicBtn").on("click", function (e) {


    e.preventDefault();
    var fKProviderContId = $("#provContId").val();
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
            $("#selector3").text(result.fileName)
        },
        error: function () {
            loadingDiv.hide();
            $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
        }
    });
});

$("#licFiCCBtn").on("click", function (e) {


    e.preventDefault();
    var fKProviderContId = $("#provContId").val();
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
            $("#selector3").text(result.fileName)
        },
        error: function () {
            loadingDiv.hide();
            $("#CreateSection").html("<p class='FileDownloadError'>There is no File to Show </p>");
        }
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

//        //    // $("#CreateSection").html('<iframe src="' + fileURL + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>')
//        //    $("#CreateSection").html('<object data ="' + fileURL + '" type="application/pdf" width="100%" height="450px" style="border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"><p>Oops! Your browser doesnt support PDFs!</p ><p><a href="' + fileURL + '" target="_blank">Download Instead</a></p></object >');

//        //}
//        //$("#selector1").text(res.fileName)

//        $("#CreateSection").html('<iframe src="data:application/pdf;base64,' + res.base64 + '" style="width: 100%; height: 450px;border: 7px solid #ccc;box-shadow: 2px 2px 10px #ccc; border-radius: 5px;"></iframe>');

//        $("#CreateSection").html('<object data="data:application/pdf;base64,' + res.base64 + '" type="application/pdf"> <embed src="data:application/pdf;base64,' + res.base64 + '" type="application/pdf" width="100%" height="600px" /></object>');




//    }
//}
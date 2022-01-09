var nextStep = true;
function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}
function CheckValidation() {
    var SubName = $('#SubName').val();
    if (SubName === "") {
        nextStep = false;
        showSpan('#SubName_span');
    }
    else {
        hideSpan('#SubName_span');
    }

    var FkAppId = $('#FkAppId').val();
    if (FkAppId === "") {
        nextStep = false;
        showSpan('#FkAppId_span');
    } else {
        hideSpan('#FkAppId_span');
    }
    var token = $('#token').val();
    if (token === "") {
        nextStep = false;
        showSpan('#token_span');
    }
    else {
        hideSpan('#token_span');
    }
}
$(document).ready(function () {
    $('#SubName').keyup(function () {
        var SubName = $('#SubName').val();
        if (SubName === "") {
            nextStep = false;
            showSpan('#SubName_span');
        }
        else {
            hideSpan('#SubName_span');
        }
    });
    $('#FkAppId').on('change', function () {
        var FkAppId = $('#FkAppId').val();
        if (FkAppId === "") {
            nextStep = false;
            showSpan('#FkAppId_span');
        } else {
            hideSpan('#FkAppId_span');
        }
    });
    $('#token').keyup(function () {
        var token = $('#token').val();
        if (token === "") {
            nextStep = false;
            showSpan('#token_span');
        }
        else {
            hideSpan('#token_span');
        }
    });
});
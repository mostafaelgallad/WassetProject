var Flage = true;

$(document).ready(function () {
    $('#PayerId').on('change', function () {
        var PayerId = $('#PayerId').val();
        if (PayerId === "") {
            Flage = false;
            showSpan('#PayerId_span');
        } else {
            hideSpan('#PayerId_span');
        }
    });
    $('#SubmissionStatusId').on('change', function () {
        var SubmissionStatusId = $('#SubmissionStatusId').val();
        if (SubmissionStatusId === "") {
            Flage = false;
            showSpan('#SubmissionStatusId_span');
        } else {
            hideSpan('#SubmissionStatusId_span');
        }
    });
    $('#NetworkStatusWithPayerId').on('change', function () {
        var NetworkStatusWithPayerId = $('#NetworkStatusWithPayerId').val();
        if (NetworkStatusWithPayerId === "") {
            Flage = false;
            showSpan('#NetworkStatusWithPayerId_span');
        } else {
            hideSpan('#NetworkStatusWithPayerId_span');
        }
    });
    $('#UserId').on('change', function () {
        var UserId = $('#UserId').val();
        if (UserId === "") {
            Flage = false;
            showSpan('#UserId_span');
        } else {
            hideSpan('#UserId_span');
        }
    });
    $('#ProviderCodeAtPayer').keyup(function () {
        var ProviderCodeAtPayer = $('#ProviderCodeAtPayer').val();
        if (ProviderCodeAtPayer === "") {
            Flage = false;
            showSpan('#ProviderCodeAtPayer_span');
        }
        else {
            hideSpan('#ProviderCodeAtPayer_span');
        }
    });
    $('#ProviderNameEnAtPayer').keyup(function () {
        var ProviderNameEnAtPayer = $('#ProviderNameEnAtPayer').val();
        if (ProviderNameEnAtPayer === "") {
            Flage = false;
            showSpan('#ProviderNameEnAtPayer_span');
        }
        else {
            hideSpan('#ProviderNameEnAtPayer_span');
        }
    });
    $('#ProviderNameArAtPayer').keyup(function () {
        var ProviderNameArAtPayer = $('#ProviderNameArAtPayer').val();
        if (ProviderNameArAtPayer === "") {
            Flage = false;
            showSpan('#ProviderNameArAtPayer_span');
        }
        else {
            hideSpan('#ProviderNameArAtPayer_span');
        }
    });
    $('#ClaimAverage').keyup(function () {
        var ClaimAverage = $('#ClaimAverage').val();
        if (ClaimAverage === "") {
            Flage = false;
            showSpan('#ClaimAverage_span');
        }
        else {
            hideSpan('#ClaimAverage_span');
        }
    });
    $('#TargetDatePatchSubmission').keyup(function () {
        var TargetDatePatchSubmission = $('#TargetDatePatchSubmission').val();
        if (TargetDatePatchSubmission === "") {
            Flage = false;
            showSpan('#TargetDatePatchSubmission_span');
        }
        else {
            hideSpan('#TargetDatePatchSubmission_span');
        }
    });

    $("#TargetDatePatchSubmission").on('change', function (arg) {
        var TargetDatePatchSubmission = $('#TargetDatePatchSubmission').val();
        if (TargetDatePatchSubmission === "") {
            Flage = false;
            showSpan('#TargetDatePatchSubmission_span');
        }
        else {
            hideSpan('#TargetDatePatchSubmission_span');
        }
    });
    $('#ActualDatePatchSubmission').keyup(function () {
        var ActualDatePatchSubmission = $('#ActualDatePatchSubmission').val();
        if (ActualDatePatchSubmission === "") {
            Flage = false;
            showSpan('#ActualDatePatchSubmission_span');
        }
        else {
            hideSpan('#ActualDatePatchSubmission_span');
        }
    });
    $("#ActualDatePatchSubmission").on('change', function (arg) {
        var ActualDatePatchSubmission = $('#ActualDatePatchSubmission').val();
        if (ActualDatePatchSubmission === "") {
            Flage = false;
            showSpan('#ActualDatePatchSubmission_span');
        }
        else {
            hideSpan('#ActualDatePatchSubmission_span');
        }
    });
});// document ready

function showSpan(id) {
    $(id).removeClass("VaildationSpan");
    $(id).addClass("showSpan");
}
function hideSpan(id) {
    $(id).removeClass("showSpan");
    $(id).addClass("VaildationSpan");
}
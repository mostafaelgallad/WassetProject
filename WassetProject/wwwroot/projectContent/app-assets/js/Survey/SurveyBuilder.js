var AnswerArray = [];
var AnswerArray = [];
var Question = [,];
var QuestionID = 0;
var FinalQuestion = [,];
var AnswerNumber = 0;
var EditQuesID = 0;
var flag = false;
var ProviderListID = 0;
var ProviderListName;
var SelectCriteriaValue;
var sharejob = [];
var SelectCriteriaID = 0;
var SurveyInfoID = 0;
var SurveyInfoID = 0;
var answerFeddback = [];
var FeedbackOverAllRate;


function addAnswer() {

    var x = document.getElementById("QuestionTypes").selectedIndex;
    if (x != 3 && x != 4) {
        var Answer1 = $("#OptionTxt").val();
        AnswerArray.push(Answer1);
    }
}

function BuildAnswerArray(arr) {
    AnswerArray = [];
    ;
    for (var i = 0; i < arr.length; i++) {
        AnswerArray.push(arr[i].substring(0, arr[i].length - 1))
    }
}

function addQuestion() {
    var xindex = document.getElementById("QuestionTypes").selectedIndex;
    if ($("#QTitle").val() == "") {
        toastr['error']('Add Title for Question', 'Error');
        return;
    }
    if (FinalQuestion.length <= 1 && x == 0) {
        toastr['error']('Add Question Information First', 'Error');
        return;
    }
    if (xindex != 3 && xindex != 4 && AnswerArray.length < 1) {
        toastr['error']('Question should has two answers at least', 'Error');
        return;
    }
    if (AnswerArray.length > 1 || xindex == 3 || xindex == 4) {

        if (EditQuesID != 0)
            RemoveQuestion(EditQuesID, 2);
        var QuestionTitle = $("#QTitle").val();
        var y = document.getElementById("QuestionTypes").options;
        var QuestionType = (y[xindex].index);
        var QuestionValue = $("#QuestionTypes option:selected").text(); //document.getElementById("QuestionTypes").value;;
        var IsMandatory = document.getElementById("exampleCheck1").checked;
        var IsDeleted = document.getElementById("IsDeleted").checked;
        var SurveyTitle = $('#QuestionTitleTxt').val();
        //Var AnswersCount = (AnswerArray.length) + 1;
        Question.push({ QuestionTitle, QuestionType });

        for (var k = 0; k < FinalQuestion.length; k++) {
            if (FinalQuestion[k] == null) {
                continue;
            }
            if (FinalQuestion[k].QuestionTitle == QuestionTitle) {
                FinalQuestion.splice(k, 1);
                k--;
            }

        }
        if (xindex == 3 || xindex == 4) {
            FinalQuestion.push({
                'QuestionID': QuestionID, /*'Answer': x,*/ 'QuestionTitle': QuestionTitle, 'QuestionType': QuestionType, 'IsMandatory': IsMandatory, 'SurveyTitle': SurveyTitle, 'QuestionValue': QuestionValue, 'IsDeleted': IsDeleted, 'AnswersCount': AnswerArray.length, 'SurveyID': SurveyID
            });
        }
        for (var i = 0; i < AnswerArray.length; i++) {
            QuestionID++;
            var x = AnswerArray[i];
            for (var j = 0; j < FinalQuestion.length; j++) {
                if (FinalQuestion[j] == null) {
                    continue;
                }
                if (FinalQuestion[j].Answer == x && FinalQuestion[j].QuestionTitle == QuestionTitle) {
                    flag = true;
                }
            }
            if (!flag) {
                FinalQuestion.push({
                    'QuestionID': QuestionID, 'Answer': x, 'QuestionTitle': QuestionTitle, 'QuestionType': QuestionType, 'IsMandatory': IsMandatory, 'SurveyTitle': SurveyTitle, 'QuestionValue': QuestionValue, 'IsDeleted': IsDeleted, 'AnswersCount': AnswerArray.length, 'SurveyID': SurveyID
                });
            }
            flag = false;
        }
        AnswerArray = [];
        ClearData();
        toastr['info']('Question Added Successfully', 'Infomation');
    }
    else {
        toastr['error']('Question should has two answers at least', 'Infomation');
    }
}

function SaveNewSurvey() {
    if (FinalQuestion.length < 2) {
        toastr['error']('Survey Should have one Question at least', 'Infomation');
    }
    else {
        Swal.fire({
            title: 'Are you sure you want to save the changes ?',
            //showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                var e = $("#QuestionTitleTxt").val();
                for (var i = 1; i < FinalQuestion.length; i++) {
                    FinalQuestion[i].SurveyTitle = e;
                }

                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/Survey/AddSurvey",
                    data: JSON.stringify({ 'Question': FinalQuestion }),
                    success: (data) => {
                        //alert(data.success);
                        if (data.success == 'success') {
                            window.location.href = "/Survey/index";
                        }
                        else {
                            //Swal.fire('ERROR', '', 'info');
                        }
                    },
                    error: () => {
                        Swal.fire('Err', '', 'info');
                    }
                });

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    }
}

function ClearData() {

    EditQuesID = 0;
    document.getElementById("optionList").innerHTML = "";
    $('#OptionTxt').val('');
    $('#QTitle').val('');
    $('#exampleCheck1').prop('checked', false);
    $("#QuestionTypes").val('0').change();
    $("#select2-QuestionTypes-container").html('Select Question Type');
    AddQuestionList();
}

function clearSelectedQuestionType() {
    var elements = $("#QType");
    for (var i = 0; i < elements.length; i++) {
        elements[i].selected = false;
    }
}

function BuildQuestionArray(arr) {
    ;
    var copyArray = FinalQuestion.slice();
    FinalQuestion = [,];
    for (var h = 0; h < arr.length; h++) {
        for (var i = 0; i < copyArray.length; i++) {
            if (copyArray[i] == null) {
                continue;
            }
            if (arr[h] == copyArray[i].QuestionTitle)
                FinalQuestion.push({
                    'QuestionID': i, 'Answer': copyArray[i].Answer, 'QuestionTitle': copyArray[i].QuestionTitle, 'QuestionType': copyArray[i].QuestionType, 'IsMandatory': copyArray[i].IsMandatory, 'SurveyTitle': copyArray[i].SurveyTitle, 'QuestionValue': copyArray[i].QuestionValue, 'IsDeleted': copyArray[i].IsDeleted/*, 'AnswersCount': AnswersCount*/, 'SurveyID': SurveyID
                });
        }
    }
    AddQuestionList();
}

function AddQuestionList() {
    var copyArray = FinalQuestion.slice();
    FinalQuestion = [,];
    for (var i = 0; i < copyArray.length; i++) {
        if (copyArray[i] == null) {
            continue;
        }
        FinalQuestion.push({
            'QuestionID': i, 'Answer': copyArray[i].Answer, 'QuestionTitle': copyArray[i].QuestionTitle, 'QuestionType': copyArray[i].QuestionType, 'IsMandatory': copyArray[i].IsMandatory, 'SurveyTitle': copyArray[i].SurveyTitle, 'QuestionValue': copyArray[i].QuestionValue, 'IsDeleted': copyArray[i].IsDeleted, 'SurveyID': SurveyID/*, 'AnswersCount': AnswersCount*/
        });
    }
    var xx = 0;


    document.getElementById("sortable").innerHTML = "";
    var quesname = "";
    for (var i = 0; i < FinalQuestion.length; i++) {
        if (FinalQuestion[i] == null) {
            continue
        }
        if (quesname == FinalQuestion[i].QuestionTitle && quesname != "") {
            continue;
        }
        xx++;
        quesname = FinalQuestion[i].QuestionTitle;
        var ul = document.getElementById("sortable");
        var li = document.createElement("li");
        //li.appendChild(document.createTextNode(QuestionTitle));
        li.setAttribute("class", "ui-state-default"); // added line
        li.setAttribute('ondrag', 'drag_handler(event);');
        //li.setAttribute('ondragstart', 'dragstart_handler(event);');
        li.setAttribute('draggable', true);
        li.setAttribute("id", FinalQuestion[i].QuestionID); // added line
        ul.appendChild(li);

        li = document.getElementById(FinalQuestion[i].QuestionID);
        var span = document.createElement("span");
        //li.appendChild(document.createTextNode(QuestionTitle));
        span.setAttribute("class", "ui-icon ui-icon-arrowthick-2-n-s");
        li.appendChild(span);


        var a = document.createElement("a");
        var aa = "a" + FinalQuestion[i].QuestionID;
        a.setAttribute("id", aa);
        a.setAttribute("class", "QAnchorWidth");
        a.setAttribute('onclick', 'BindQuestion(' + FinalQuestion[i].QuestionID + ')');
        li.appendChild(a);
        var acontent = '<span class="liNum">' + xx + '</span>' + FinalQuestion[i].QuestionTitle;
        $('#' + aa).html(acontent);

        var ax = document.createElement("a");
        ax.setAttribute("href", '#');
        ax.setAttribute("id", 'x' + FinalQuestion[i].QuestionID);
        ax.setAttribute("class", "itemDelete");
        ax.setAttribute("title", "delete");
        li.appendChild(ax);
        $('#x' + FinalQuestion[i].QuestionID).html('x');
    }
}

function BindQuestion(id) {

    AnswerArray = [];
    EditQuesID = id;
    var QTitle = FinalQuestion[id].QuestionTitle;
    for (var i = 0; i < FinalQuestion.length; i++) {
        if (FinalQuestion[i] == null) {
            continue;
        }
        if (FinalQuestion[i].QuestionType != 3 || FinalQuestion[i].QuestionType != 4) {
            var QT = FinalQuestion[i].QuestionTitle;
            if (QT == QTitle) {
                AnswerArray.push(FinalQuestion[i].Answer);
            }
        }
    }
    document.getElementById("optionList").innerHTML = "";
    if (AnswerArray.length > 0 && AnswerArray[0] != undefined) {
        for (var i = 0; i < AnswerArray.length; i++) {
            x = i /*+ 1;*/
            $('.optionList').removeClass("d-none");
            $('.optionList').addClass("d-inherit");
            $(".optionList").append('<li class="ui-state-default" id="' + x + '"' + '<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' + AnswerArray[i] + '<a href="#" title="delete" class="itemDelete">x</a> </li>');
        }
    }


    var QuestionByindex = FinalQuestion[id];
    $("#QTitle").val(QuestionByindex.QuestionTitle);
    var selectindex = QuestionByindex.QuestionType;
    document.getElementById("QuestionTypes").selectedIndex = selectindex;
    $("#select2-QuestionTypes-container").html(QuestionByindex.QuestionValue);
    //$('#QType').val(QuestionByindex.QuestionType);
    document.getElementById("exampleCheck1").checked = QuestionByindex.IsMandatory;
}

function RemoveAnswer(id) {

    if (EditQuesID != 0) {
        RemoveQuestion(EditQuesID, 2);
        EditQuesID = 0;
    }
    AnswerArray.splice(id, 1);
    document.getElementById("optionList").innerHTML = "";
    for (var i = 0; i < AnswerArray.length; i++) {
        $('.optionList').removeClass("d-none");
        $('.optionList').addClass("d-inherit");
        $(".optionList").append('<li class="ui-state-default" id=' + i + '<span class="ui-icon ui-icon-arrowthick-2-n-s"></span>' + AnswerArray[i] + '<a href="#" title="delete" class="itemDelete">x</a> </li>');
        var len = FinalQuestion.length;
        QuestionID = len;
        //addQuestion();
    }
}

function RemoveQuestion(id, type) {

    if (type == 1) {
        Swal.fire({
            title: 'Do you want to Delete this Question?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                $(this).closest('li').remove();
                var QTitle = FinalQuestion[id].QuestionTitle;
                var Qanswer = FinalQuestion[id].Answer;
                for (var i = 0; i <= FinalQuestion.length; i++) {
                    if (FinalQuestion[i] == null) {
                        continue;
                    }
                    var QT = FinalQuestion[i].QuestionTitle;
                    var QN = FinalQuestion[i].Answer;
                    if (QT == QTitle) {
                        FinalQuestion.splice(i, 1);
                        i--;
                    }
                }
                AddQuestionList();
                //toastr['info']('Question Deleted Successfully', 'Infomation');
                Swal.fire('Deleted', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        });
    }
    else {
        var QTitle = FinalQuestion[id].QuestionTitle;
        var Qanswer = FinalQuestion[id].Answer;
        for (var i = 0; i <= FinalQuestion.length; i++) {
            if (FinalQuestion[i] == null) {
                continue;
            }
            var QT = FinalQuestion[i].QuestionTitle;
            var QN = FinalQuestion[i].Answer;
            if (QT == QTitle && QN == Qanswer) {
                FinalQuestion.splice(i, 1);
                i--;
            }
        }
        AddQuestionList();
        toastr['info']('Answer Deleted Successfully', 'Infomation');
        //var copyArray = FinalQuestion.slice();
        //FinalQuestion = [,];
        //for (var i = 0; i < copyArray.length; i++) {
        //    if (copyArray[i] == null) {
        //        continue;
        //    }
        //    FinalQuestion.push({
        //        'QuestionID': i, 'Answer': copyArray[i].Answer, 'QuestionTitle': copyArray[i].QuestionTitle, 'QuestionType': copyArray[i].QuestionType, 'IsMandatory': copyArray[i].IsMandatory, 'SurveyTitle': copyArray[i].SurveyTitle, 'QuestionValue': copyArray[i].QuestionValue, 'IsDeleted': copyArray[i].IsDeleted/*, 'AnswersCount': AnswersCount*/
        //    });
        //}
    }
}

function getanswers(id) {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "html",
        url: "/Survey/GetAnswers",
        data: JSON.stringify({ 'id': id }),
        success: function (data) {
            //alert("Er");
            $('.optionList').removeClass("d-none");
            $('.optionList').addClass("d-inherit");
            $('#optionList').html(data);
        },
        error: function (error) {
            //alert("Error" + error.message);

        }
    });
}

function Pageload() {
    ;
    QuestionID = 0;
    var questionindex = 0;

    for (var i = 2; i < getAnswer.length; i += 3) {
        QuestionID++;

        var x = getAnswer[i];

        if (x % 2 > 0) {
            questionindex = x;
        }
        else if (x % 2 == 0) {
            questionindex = x + 1;
        }

        var FindQID = getQuestion[questionindex - 1];
        var FindQ = getQuestion[questionindex];

        var QTy = QTypes[x];
        var FindM = QIsMandatory[x];
        var FindV = QTypeValue[x];
        if (x % 2 == 0) {
            FindV = QTypeValue[x + 1];
        }
        //QTypeValue[x + 1];
        var FindC = QAnsCount[x];

        FinalQuestion.push({
            'QuestionID': FindQID, 'Answer': getAnswer[i - 1], 'QuestionTitle': FindQ, 'QuestionType': QTy, 'IsMandatory': FindM, 'SurveyTitle': SurT, 'QuestionValue': FindV, 'IsDeleted': SurIsDeleted, 'AnswersCount': FindC, 'SurveyID': SurveyID
        });

    }
    AddQuestionList();
}

$(document).ready(function () {
    //$('.zero-configuration').DataTable();
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
});

//function drop_handler(ev) {
//    console.log("Drop");
//    ev.currentTarget.style.background = "lightyellow";

//    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
//}


$(function () {

    $("#sortable").sortable({
        update: function (event, ui) {
            const ul = document.getElementById('sortable');
            const listItems = ul.getElementsByTagName('li');
            var listA = [];
            var spilt = 1;
            // Loop through the NodeList object.
            for (let i = 0; i <= listItems.length - 1; i++) {
                if (i >= 9) {
                    spilt = 2
                }
                //console.log(listItems[i].getElementsByTagName('a')[0].textContent.substring(1));
                listA.push(listItems[i].getElementsByTagName('a')[0].textContent.substring(spilt))
                //console.log(listA);
                //console.log(listA[i]);
            }
            //AddQuestionList();
            BuildQuestionArray(listA);
        }
    });// Questtions
    $("#sortable").disableSelection();
    $("#optionList").sortable({
        update: function (event, ui) {

            const ul = document.getElementById('optionList');
            const listItems = ul.getElementsByTagName('li');
            var listAn = [];
            var spilt = 1;
            // Loop through the NodeList object.
            for (let i = 0; i <= listItems.length - 1; i++) {
                if (i >= 9) {
                    spilt = 2
                }
                //console.log(listItems[i].getElementsByTagName('a')[0].textContent.substring(1));
                listAn.push(listItems[i].textContent.slice(0, -1));
            }
            //AddQuestionList();
            BuildAnswerArray(listAn);
        }
    });// Answers
    $("#optionList").disableSelection();
});

/*-------------------------------------Survey Job Page------------------------------*/

function GetSurveyInfo(SurveyId, Title, CreationDate) {
    ;
    SurveyInfoID = SurveyId;
    document.getElementById('SurveyTxt').value = Title;
    document.getElementById('CreationDate').innerHTML = CreationDate;
    //console.log(SurveyId);
    //console.log(Title);
    //console.log(CreationDate);
    $("#ModalCenter .close").click();
};

function showOptions(s) {
    
    ProviderListID = s[s.selectedIndex].id;
    ProviderListName = s[s.selectedIndex].text;
    var select = $("#OptionDDL");
    if (ProviderListID==5) {
        select.empty();

        select.append($('<option/>', {
            value: 0,
            text: 'Select Criteria'
        }));

        select.append($('<option/>', {
            value: ProviderListID,
            text: ProviderListName
        }));
        return;
    }
    select.empty();
    $.getJSON('/survey/BindCriteriaValue/' + s[s.selectedIndex].id, function (data) {
        //select.append($('<option/>', {
        //    value: 0,
        //    text: "Select a State"
        //}));
        $.each(data, function (index, itemData) {
            //console.log(itemData);
            select.append($('<option/>', {
                value: itemData.Value,
                text: itemData.Text
            }));
        });
    });
    //console.log(s[s.selectedIndex].value); // get value
    //console.log(s[s.selectedIndex].id); // get id
}

function AddOptionfun() {
    if (SelectCriteriaID != 0 && ProviderListID != 0) {
        SelectCriteriaID = $('#OptionDDL').val();
        var liID = ProviderListID + "-" + SelectCriteriaID;
        var li = "(" + ProviderListName + ") - " + SelectCriteriaValue;
        if (OptionDDL != "") {
            $('.ValueOptionList').removeClass("d-none");
            $('.ValueOptionList').addClass("d-inherit");
            $(".ValueOptionList").append('<li class="ui-state-default" id=' + liID + '> <span class="ui-icon ui-icon-arrowthick-2-n-s"></span><a class="OptionText">' + li + '</a><a href="#" title="delete" class="itemDelete">x</a> </li>');
            sharejob.push(ProviderListID + "-" + SelectCriteriaID);
        }
        SelectCriteriaID = 0;
        //ProviderListID = 0;
    }
    else if (SelectCriteriaID == 5) {
        sharejob.push(5 + "-" + 0);
    }
    else {
        toastr['Error']('You should select Criteria first', 'Error');
    }
};
// Remove item from Criteria Value Survey share Job page
$('.ValueOptionList').on('click', '.itemDelete', function () {
    ;
    var id = $(this).closest('li').attr('id');
    sharejob.remove(id)
    $(this).closest('li').remove();
    if ($('.itemDelete').length == 0) {
        $('.ValueOptionList').addClass("d-none");
        $('.ValueOptionList').removeClass("d-inherit");
    }
});

function myNewFunction(sel) {
    //var t = sel.options[sel.selectedIndex].id;
    //if (sel.options[sel.selectedIndex].id != 0) {
    SelectCriteriaValue = sel[sel.selectedIndex].text;
    SelectCriteriaID = $('#OptionDDL').val();
    //}
    //else {
    //    toastr['error']('You should select Criteria first', 'Infomation');
    //}
    //alert(SelectCriteriaValue);
}

Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function SaveShareJob() {
    if (SurveyInfoID != 0 && sharejob.length > 0) {
        {
            var SharingDate = document.getElementById('SharingDate').value;
            var ShareMethod = document.getElementById('ShareMethodId').value;
            var IsValid = document.getElementById('IsDeleted').checked;
            $.ajax({
                type: "POST",
                url: "/Survey/SaveShareJob",
                contentType: "application/json;charset=utf-8",
                data: JSON.stringify({ 'ProviderCriteriaList': sharejob, 'SurveyInfoID': SurveyInfoID, 'SharingDate': SharingDate, 'ShareMethod': ShareMethod, 'IsValid': IsValid }),
                success: (data) => {
                    toastr['success']('Survey saved successfully ', 'success');
                    $('#ShareJobList').empty();
                    $('#ShareJobList').html(data);
                },
                error: function () {
                    //alert("Error");
                }
            });
        }
    }
    else {
        toastr['Error']('You should select survey and Criteria first', 'Error');
    }
}

function DeleteSurveyShareJob(SsjId) {
    Swal.fire({
        title: 'Do you want to Delete this Shared Survey?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Yes`,
        denyButtonText: `No`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            $.ajax({
                type: "POST",
                url: "/Survey/DeleteShareJob",
                data: JSON.stringify({ 'SsjId': SsjId }),
                contentType: "application/json;charset=utf-8",
                success: (data) => {
                    $('#ShareJobList').empty();
                    $('#ShareJobList').html(data);
                },
                error: function () {
                    //alert("Error");
                }
            });

            Swal.fire('Deleted', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
        }
    });

}
//=========================================Survey Feed back=================================
// get Answers from checkbox Questions

function checboxanswerchage(id) {
    ;
    if (document.getElementById(id).checked) {
        answerFeddback.push(id);

    }
    else {
        answerFeddback.remove(id);
    }
}
// get Answers from Radio Button Questions
function radioanswerchage(quesansid) {
    ;
    //var id = quesansid.split("-");
    //console.log(id);
    for (var i = 0; i < answerFeddback.length; i++) {
        var a = answerFeddback[i].split("-")[0];
        var q = quesansid.split("-")[0];
        if (answerFeddback[i].split("-")[0] == quesansid.split("-")[0]) {
            answerFeddback.remove(answerFeddback[i]);
        }
    }
    answerFeddback.push(quesansid);
}

function SaveFeedBack() {
    var checkMandatory = true;
    for (var i = 0; i < FeedBackQuestion.length; i++) {
        if (FeedBackQuestion[i].mandatory == "True") {
            for (var j = 0; j < answerFeddback.length; j++) {
                if (FeedBackQuestion[i].questionid == answerFeddback[j].split("-")[0]) {
                    checkMandatory = true;
                    break;
                }
                else {
                    checkMandatory = false;
                }
            }
        }
    }
    if (checkMandatory == true) {
        var notes = [];
        for (var i = 0; i < FeedBackQuestion.length; i++) {
            var k = "T " + FeedBackQuestion[i].questionid;
            var textq = document.getElementById(k).value;
            var t = FeedBackQuestion[i].questionid + "-" + textq;
            notes.push(t);
        }
        // save feed back
        var hiddenPartiId = $('#hiddenPartiId').val();

        $.ajax({
            type: "POST",
            url: "/Survey/SaveFeedback",
            data: JSON.stringify({ 'PartID': hiddenPartiId, 'Answers': answerFeddback, 'notes': notes, 'FeedbackOverAllRate': FeedbackOverAllRate }),
            contentType: "application/json;charset=utf-8",
            success: (data) => {
                $('#ratedive').empty();
                $('#ratedive').html(data);
                $('#buttonControl').css('display', 'none');
            },
            error: function () {
                //alert("Error");
            }
        });
        /////////////////////////////////////////////
    }
    else {
        toastr['Error']('Some Question is Mandatory', 'Error');
    }
};

// =============================Star=====================================

function GetStarQuestion(QuestionID, rant) {
    ;
    for (var i = 0; i < answerFeddback.length; i++) {
        //var a = answerFeddback[i].split("-")[0];
        //var q = quesansid.split("-")[0];
        if (answerFeddback[i].split("-")[0] == QuestionID) {
            answerFeddback.remove(answerFeddback[i]);
        }
    }
    var x = QuestionID + "-" + rant;
    answerFeddback.push(x);
};

// ========================================GetRate========================
function GetRate(rate) {
    FeedbackOverAllRate = rate;
};

$(document).ready(function () {
    $('.zero-configuration').DataTable();
});





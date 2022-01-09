//$(document).ready(function () {
//    var menuUL = document.getElementById("main-menu-navigation");
//    var navitem = menuUL.getElementsByClassName("nav-item");
//    for (var i = 0; i < navitem.length; i++) {
//        navitem[i].addEventListener("click", function () {
//            //console.log("hiii");
//            var current = document.getElementsByClassName("navitemactive");
//            current[0].className = current[0].className.replace(" navitemactive", "");
//            this.className += " navitemactive";
//            var SubItem = this.getElementsByTagName("Li")[0];
//            //SubItem.className += " is-shown";
//             //this.className += " menu-collapsed-open";
//            SubItem.addEventListener("click", function () {
//                this.className += " WhiteActive";
//                console.log("hiii");
//            });
//        });
//    }
//});


//$('#main-menu-navigation').on('click', '.nav-item', function () {
//    $('#main-menu-navigation .nav-item.navitemactive').removeClass('navitemactive');
//    $(this).addClass('navitemactive');
//    //$(this).find("ul li").addClass('is-shown');
//    //$(this).addClass('menu-collapsed-openMenu');
//    //$(this).removeClass('menu-collapsed-open');
//})
$(document).ready(function () {
    var bodyID = $('body').attr('id');
    // home
    if (bodyID == "HomeBody") {
        $('.HomeBody').addClass('navitemactive');
    }
    else {
        $('.HomeBody').removeClass('navitemactive');
    }
    //provider management
    if (bodyID == "ProvidersListSub") {
        $('.ProviderManagementBody').addClass('navitemactive');
        $('.ProviderManagementBody').addClass('menu-collapsed-open');
        $('.ProvidersListSub').addClass('Subitemactive');
    }
    else if (bodyID == "ProviderNewContractSub") {
        $('.ProviderManagementBody').addClass('navitemactive');
        $('.ProviderManagementBody').addClass('menu-collapsed-open');
        $('.ProviderNewContractSub').addClass('Subitemactive');
    }
    else if (bodyID == "ProviderContractsSub") {
        $('.ProviderManagementBody').addClass('navitemactive');
        $('.ProviderManagementBody').addClass('menu-collapsed-open');
        $('.ProviderContractsSub').addClass('Subitemactive');
    }
    else if (bodyID == "IntegrationWorkOrderSub") {
        $('.ProviderManagementBody').addClass('navitemactive');
        $('.ProviderManagementBody').addClass('menu-collapsed-open');
        $('.IntegrationWorkOrderSub').addClass('Subitemactive');
    }
    else if (bodyID == "ClaimStatusSub") {
        $('.ProviderManagementBody').addClass('navitemactive');
        $('.ProviderManagementBody').addClass('menu-collapsed-open');
        $('.ClaimStatusSub').addClass('Subitemactive');
    }
    else {
        $('.ProviderManagementBody').removeClass('navitemactive');
        $('.ProvidersListSub').removeClass('Subitemactive');
        $('.ProviderNewContractSub').removeClass('Subitemactive');
        $('.ProviderContractsSub').removeClass('Subitemactive');
        $('.IntegrationWorkOrderSub').removeClass('Subitemactive');
        $('.ClaimStatusSub').removeClass('Subitemactive');
    }
     // provider information
    //if (bodyID == "ProviderInformationBody") {
    //    $('.ProviderInformationBody').addClass('navitemactive');
    //    $('.ProviderInformationBody').addClass('menu-collapsed-open');
    //    $('.ClaimStatusSub').addClass('Subitemactive');
    //}
    //else {
    //    $('.ProviderInformationBody').removeClass('navitemactive');
    //    $('.ClaimStatusSub').removeClass('Subitemactive');
    //}
     // Vendor management
    if (bodyID == "VendorListSub") {
        $('.VendorManagementBody').addClass('navitemactive');
        $('.VendorManagementBody').addClass('menu-collapsed-open');
        $('.VendorListSub').addClass('Subitemactive');
    }
    else if (bodyID == "NewVendorContractSub") {
        $('.VendorManagementBody').addClass('navitemactive');
        $('.VendorManagementBody').addClass('menu-collapsed-open');
        $('.NewVendorContractSub').addClass('Subitemactive');
    }
    else if (bodyID == "VendorContractsSub") {
        $('.VendorManagementBody').addClass('navitemactive');
        $('.VendorManagementBody').addClass('menu-collapsed-open');
        $('.VendorContractsSub').addClass('Subitemactive');
    }
    else if (bodyID == "VendorIntegrationRequestsSub") { // Vendor Integration Requests --> ViewBag.PageActive = "VendorIntegrationRequestsSub";
        $('.VendorManagementBody').addClass('navitemactive');
        $('.VendorManagementBody').addClass('menu-collapsed-open');
        $('.VendorIntegrationRequestsSub').addClass('Subitemactive');
    }
    else {
        $('.VendorManagementBody').removeClass('navitemactive');
        $('.VendorListSub').removeClass('Subitemactive');
        $('.NewVendorContractSub').removeClass('Subitemactive');
        $('.VendorContractsSub').removeClass('Subitemactive');
        $('.VendorIntegrationRequestsSub').removeClass('Subitemactive');
    }
     // Survey management
    if (bodyID == "SurveyManagementBody") {
        $('.SurveyManagementBody').addClass('navitemactive');
        $('.SurveyManagementBody').addClass('menu-collapsed-open');
        $('.SurveyBuilderSub').addClass('Subitemactive');
    }
    else if (bodyID == "ScheduledSub") {
        $('.SurveyManagementBody').addClass('navitemactive');
        $('.SurveyManagementBody').addClass('menu-collapsed-open');
        $('.ScheduledSub').addClass('Subitemactive');
    }
    else {
        $('.SurveyManagementBody').removeClass('navitemactive');
        $('.SurveyBuilderSub').removeClass('Subitemactive');
        $('.ScheduledSub').removeClass('Subitemactive');
    }
    // Notification --> ViewBag.PageActive = "NotificationSub";
    if (bodyID == "NotificationSub") {
        $('.NotificationBody').addClass('navitemactive');
        $('.NotificationBody').addClass('menu-collapsed-open');
        $('.NotificationSub').addClass('Subitemactive');
    }
    else {
        $('.NotificationBody').removeClass('navitemactive');
        //$('.SurveyBuilderSub').removeClass('Subitemactive');
        $('.NotificationSub').removeClass('Subitemactive');
    }
    // User  -->  ViewBag.PageActive = "AllUserSub";
    if (bodyID == "AllUserSub") {
        $('.UsersBody').addClass('navitemactive');
        $('.UsersBody').addClass('menu-collapsed-open');
        $('.AllUserSub').addClass('Subitemactive');
    }
    else {
        $('.UsersBody').removeClass('navitemactive');
        //$('.SurveyBuilderSub').removeClass('Subitemactive');
        $('.AllUserSub').removeClass('Subitemactive');
    }
    if (bodyID == "VendorIntegrationRequestsBody") {
        $('#VendorIntegrationRequestsBody .IntegrationRequestsBody').addClass('navitemactive');
        $('.VendorIntegrationRequestsBodySub').addClass('Subitemactive');
        $('#VendorIntegrationRequestsBody .IntegrationRequestsBody').addClass('menu-collapsed-open');
    }
    else {
        $('#VendorIntegrationRequestsBody .IntegrationRequestsBody').removeClass('navitemactive');
        $('.VendorIntegrationRequestsBodySub').removeClass('Subitemactive');
    }
    if (bodyID == "ProviderIntegrationRequestsBody") {
        $('#ProviderIntegrationRequestsBody .IntegrationRequestsBody').addClass('navitemactive');
        $('.ProviderIntegrationRequestsBodySub').addClass('Subitemactive');
        $('#ProviderIntegrationRequestsBody .IntegrationRequestsBody').addClass('menu-collapsed-open');
    }
    else {
        $('#ProviderIntegrationRequestsBody .IntegrationRequestsBody').removeClass('navitemactive');
        $('.ProviderIntegrationRequestsBodySub').removeClass('Subitemactive');
    }
    // Dashboard --> ViewBag.PageActive = "DashboardBody";
    if (bodyID == "DashboardBody") {
        $('.DashboardBody').addClass('navitemactive');
        $('.DashboardBody').addClass('menu-collapsed-open');
        $('.DashboardSub').addClass('Subitemactive');
    }
    else {
        $('.DashboardBody').removeClass('navitemactive');
        $('.DashboardSub').removeClass('Subitemactive');
    }
    // Developer Console --> ViewBag.PageActive = "SubscriptionSub";
    if (bodyID == "SubscriptionSub") {
        $('.DeveloperConsoleBody').addClass('navitemactive');
        $('.DeveloperConsoleBody').addClass('menu-collapsed-open');
        $('.SubscriptionSub').addClass('Subitemactive');
    }
    else {
        $('.DeveloperConsoleBody').removeClass('navitemactive');
        $('.SubscriptionSub').removeClass('Subitemactive');
    }
    // switch (bodyID) {
    //     case "IntegrationRequestsBody":
    //         $('.IntegrationRequestsBody').addClass('navitemactive');
    //         //$('.IntegrationRequestsBody').addClass('menu-collapsed-open');
    //      break;
    //     case "AllContractBody":
    //         $('.AllContractBody').addClass('navitemactive');
    //         //$('.AllContractBody').addClass('menu-collapsed-open');
    //      break;
    //     default:
    //         $('.IntegrationRequestsBody').removeClass('navitemactive');
    //         $('.AllContractBody').removeClass('navitemactive');
    //      /* other functions */
    //};
})
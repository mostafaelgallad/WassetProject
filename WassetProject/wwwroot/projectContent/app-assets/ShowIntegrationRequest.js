var Modules = "";
var Databases = "";
var FrontendLanguages = "";
var BackendLanguages = "";
var ApplicationDeploymentOptions = "";
var IntegrationOptionsAvailable = "";
var CustomizationOptions = "";
var ApplicationLanguages = "";
var ApplicationSupport = "";

function SetInitialProfileObjectValues(modelObject) {
    Modules = modelObject.FkVendSys.Modules;
    Databases = modelObject.FkVendSys.Databases;
    FrontendLanguages = modelObject.FkVendSys.FrontendLanguageUsed;
    BackendLanguages = modelObject.FkVendSys.BackendLanguagesUsed;
    ApplicationDeploymentOptions = modelObject.FkVendSys.ApplicationDeploymentOptions;
    IntegrationOptionsAvailable = modelObject.FkVendSys.IntegrationOptionsAvailable;
    ApplicationLanguages = modelObject.FkVendSys.ApplicationLanguages;
    ApplicationSupport = modelObject.FkVendSys.ApplicationSupport;

    var ModulesList = Modules.split(',');
    for (var i = 0; i < ModulesList.length; i++) {
        if (ModulesList[i] == "1") {
            document.getElementById("Insurance").checked = true;
        }
        else if (ModulesList[i] == "2") {
            document.getElementById("Frontoffice").checked = true;
        }
        else if (ModulesList[i] == "3") {
            document.getElementById("EMR").checked = true;
        }
        else if (ModulesList[i] == "4") {
            document.getElementById("LIS").checked = true;
        }
        else if (ModulesList[i] == "5") {
            document.getElementById("RIS").checked = true;
        }
        else if (ModulesList[i] == "6") {
            document.getElementById("Finance").checked = true;
        }
        else if (ModulesList[i] == "7") {
            document.getElementById("MasterSettings").checked = true;
        }
        else if (ModulesList[i] == "8") {
            document.getElementById("Billing").checked = true;
        }
        else if (ModulesList[i] == "9") {
            document.getElementById("Integration").checked = true;
        }
        else if (ModulesList[i] == "10") {
            document.getElementById("Others").checked = true;
        }
    }

    var DatabasesList = Databases.split(',');
    for (var i = 0; i < DatabasesList.length; i++) {
        if (DatabasesList[i] == "1") {
            document.getElementById("Oracle").checked = true;
        }
        else if (DatabasesList[i] == "2") {
            document.getElementById("MySQL").checked = true;
        }
        else if (DatabasesList[i] == "3") {
            document.getElementById("MSSQLServer").checked = true;
        }
        else if (DatabasesList[i] == "4") {
            document.getElementById("PostgreSQL").checked = true;
        }
        else if (DatabasesList[i] == "5") {
            document.getElementById("DB2").checked = true;
        }
        else if (DatabasesList[i] == "6") {
            document.getElementById("NoSQL").checked = true;
        }
        else if (DatabasesList[i] == "7") {
            document.getElementById("Others").checked = true;
        }
    }

    var FrontendLanguagesList = FrontendLanguages.split(',');
    for (var i = 0; i < FrontendLanguagesList.length; i++) {
        if (FrontendLanguagesList[i] == "1") {
            document.getElementById("HTML").checked = true;
        }
        else if (FrontendLanguagesList[i] == "2") {
            document.getElementById("JavaScript").checked = true;
        }
        else if (FrontendLanguagesList[i] == "3") {
            document.getElementById("OthersLang").checked = true;
        }
    }

    var BackendLanguages = BackendLanguages.split(',');
    for (var i = 0; i < BackendLanguages.length; i++) {
        if (BackendLanguages[i] == "1") {
            document.getElementById("PHP").checked = true;
        }
        else if (BackendLanguages[i] == "2") {
            document.getElementById("Python").checked = true;
        }
        else if (BackendLanguages[i] == "3") {
            document.getElementById("Java").checked = true;
        }
        else if (BackendLanguages[i] == "4") {
            document.getElementById("DotNET").checked = true;
        }
        else if (BackendLanguages[i] == "5") {
            document.getElementById("Ruby").checked = true;
        }
        else if (BackendLanguages[i] == "6") {
            document.getElementById("NodeJs").checked = true;
        }
        else if (BackendLanguages[i] == "7") {
            document.getElementById("OthersBackLang").checked = true;
        }
    }

    var ApplicationDeploymentOptionsList = ApplicationDeploymentOptions.split(',');
    for (var i = 0; i < ApplicationDeploymentOptionsList.length; i++) {
        if (ApplicationDeploymentOptionsList[i] == "1") {
            document.getElementById("OnPremises").checked = true;
        }
        else if (ApplicationDeploymentOptionsList[i] == "2") {
            document.getElementById("Cloud").checked = true;
        }
        else if (ApplicationDeploymentOptionsList[i] == "3") {
            document.getElementById("Hybrid").checked = true;
        }
        else if (ApplicationDeploymentOptionsList[i] == "4") {
            document.getElementById("OthersAppOption").checked = true;
        }
    }

    var IntegrationOptionsAvailableList = IntegrationOptionsAvailable.split(',');
    for (var i = 0; i < IntegrationOptionsAvailableList.length; i++) {
        if (IntegrationOptionsAvailableList[i] == "1") {
            document.getElementById("DatabaseIntegration").checked = true;
        }
        else if (IntegrationOptionsAvailableList[i] == "2") {
            document.getElementById("RESTAPI").checked = true;
        }
        else if (IntegrationOptionsAvailableList[i] == "3") {
            document.getElementById("SOAPAPI").checked = true;
        }
        else if (IntegrationOptionsAvailableList[i] == "4") {
            document.getElementById("HL7").checked = true;
        }
        else if (IntegrationOptionsAvailableList[i] == "5") {
            document.getElementById("NotAvailable").checked = true;
        }
        else if (IntegrationOptionsAvailableList[i] == "6") {
            document.getElementById("OthersIntegration").checked = true;
        }
    }

    var ApplicationLanguagesList = ApplicationLanguages.split(',');
  
    for (var i = 0; i < ApplicationLanguagesList.length; i++) {
        if (ApplicationLanguagesList[i] == "1") {
            document.getElementById("English").checked = true;
        }
        else if (ApplicationLanguagesList[i] == "2") {
            document.getElementById("Arabic").checked = true;
        }
        else if (ApplicationLanguagesList[i] == "3") {
            document.getElementById("OthersAppLang").checked = true;
        }
    }

    var ApplicationSupportList = ApplicationSupport.split(',');
    for (var i = 0; i < ApplicationSupportList.length; i++) {
        if (ApplicationSupportList[i] == "1") {
            document.getElementById("OnlineSupport").checked = true;
        }
        else if (ApplicationSupportList[i] == "2") {
            document.getElementById("OnSiteSupport").checked = true;
        }
        else if (ApplicationSupportList[i] == "3") {
            document.getElementById("OtherSupport").checked = true;
        }
    }
}
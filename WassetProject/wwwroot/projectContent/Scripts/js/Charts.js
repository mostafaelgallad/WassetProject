const APIURL = "https://localhost:44357/dash/";
let headers = {};

async function getToken() {
    return await $.ajax({
        url: APIURL + 'authenticate/D@sh/D@shP@ssWord?',
        type: "Get",
        success: function (data) {

        }
    });
}

function GetAllDashboardInformation() {
    let ProvidersPerEachVendor = [];
    let ProvidersPerEachRegion = [];
    let providerPayerCount = [];
    let payer = [];
    let contractProvider = [];
    let contractVendors = [];
    let ProvidersPerEachPRO = [];
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetAllDashboardInformation',
            type: "Get",
            headers: headers,
            success: function (data) {
                //handle returned data
                Object.keys(data.NumberOfProviderUnderEachVendor).forEach(function (key) {
                    let HandleReturnedValue = { "x": key, "y": data.NumberOfProviderUnderEachVendor[key] }
                    ProvidersPerEachVendor.push(HandleReturnedValue)
                });

                Object.keys(data.GetNumberOfProviderUnderEachRegion).forEach(function (key) {
                    let HandleReturnedValue = { "x": key, "y": data.GetNumberOfProviderUnderEachRegion[key] }
                    ProvidersPerEachRegion.push(HandleReturnedValue)
                });

                Object.keys(data.GetNumberOfProviderUnderEachPayer).forEach(function (key) {
                    providerPayerCount.push(data.GetNumberOfProviderUnderEachPayer[key])
                    payer.push(key)
                });

                Object.keys(data.ContractProviderCount).forEach(function (key) {
                    //the obj key represent an active contracts count contract and it's value the inactive contracts count
                    //the order of pushing items to the array will be the index[0] = key (active) index[1] = value (inactive)
                    contractProvider.push(parseInt(key))
                    contractProvider.push(data.ContractProviderCount[key])
                    $('#ActiveProviderCount').text(data.ContractProviderCount[key])
                    $('#inActiveProviderCount').text(key)
                });

                Object.keys(data.ContractVendorCount).forEach(function (key) {
                    //the obj key represent an active contracts count contract and it's value the inactive contracts count
                    //the order of pushing items to the array will be the index[0] = key (active) index[1] = value (inactive)
                    contractVendors.push(parseInt(key))
                    contractVendors.push(data.ContractVendorCount[key])
                    $('#ActiveVendorCount').text(key)
                    $('#inActiveVendorCount').text(data.ContractVendorCount[key])
                });
                // render provider per each payer chart
                var ProvidersPayerchartOptions = {
                    series: providerPayerCount,
                    chart: {
                        width: "100%",
                        type: 'pie',
                    },
                    labels: payer,
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: "95%"
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                };
                var ProvidersPayerchart = new ApexCharts(document.querySelector("#ProvidersPayerchart"), ProvidersPayerchartOptions);
                ProvidersPayerchart.render();
                // update Providers per each vendor chart
                chart.updateSeries([{
                    name: 'Providers',
                    data: ProvidersPerEachVendor
                }])
                // update Active Provider chart
                ActiveProviderchart.updateSeries(contractProvider)
                // update Active vendor chart
                ActiveVendorchart.updateSeries(contractVendors)
                // update  Providers per each region chart
                regionChart.updateSeries([{
                    name: 'Providers',
                    data: ProvidersPerEachRegion
                }])
            }
        });
    });
}

//============================
function GetRegisteredVendors() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetRegisteredVendors',
            type: "Get",
            headers: headers,
            success: function (data) {
                $('#RegisteredVendors').countTo({ from: 0, to: data });
            }
        });
    });
}

function GetApprovedVendors() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetApprovedVendorCount',
            type: "Get",
            headers: headers,
            success: function (data) {
                $('#approvedVendorCount').countTo({ from: 0, to: data });
            }
        });
    });
}

function GetContractedVendors() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetContractVendorCount',
            type: "Get",
            headers: headers,
            success: function (data) {
                let activeContractedVendors = 0;
                Object.keys(data).forEach(function (key) {
                    activeContractedVendors = key;
                });
                $('#ContractVendorCount').countTo({ from: 0, to: activeContractedVendors });
            }
        });
    });
}

function GetIntegratedVendors() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetIntegratedVendorCount',
            type: "Get",
            headers: headers,
            success: function (data) {
                $('#IntegratedVendorCount').countTo({ from: 0, to: data });
            }
        });
    });
}

function GetLiveProviderCount() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetLiveProviderCount',
            type: "Get",
            headers: headers,
            success: function (data) {
                $('#liveProviders').countTo({ from: 0, to: data });
                //$('#notLiveProviders').attr("data-to", data).countTo();
            }
        });
    });
}

function GetApprovedProviderCount() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetApprovedProviderCount',
            type: "Get",
            headers: headers,
            success: function (data) {
                $('#approvedProvidersCount').countTo({ from: 0, to: data });
                //$('#notLiveProviders').attr("data-to", data).countTo();
            }
        });
    });
}

function GetProviderCount() {
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetProviderCount',
            type: "Get",
            headers: headers,
            success: function (data) {
                $('#totalProviders').countTo({ from: 0, to: data });
            }
        });
    });
}

function GetNumberOfProviderUnderEachBRO() {
    let ProvidersPerEachPRO = [];
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetNumberOfProviderUnderEachBRO',
            type: "Get",
            headers: headers,
            success: function (data) {
                // handle returned data
                Object.keys(data).forEach(function (key) {
                    let HandleReturnedValue = { "x": key, "y": data[key] }
                    ProvidersPerEachPRO.push(HandleReturnedValue)
                });

                ProvidersPROchart.toggleSeries("Providers")
                ProvidersPROchart.updateSeries([{
                    name: 'Providers',
                    data: ProvidersPerEachPRO
                }])
            }
        });
    });
}

function GetNumberOfProviderUnderEachVendor() {
    let ProvidersPerEachVendor = [];
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetNumberOfProviderUnderEachVendor',
            type: "Get",
            headers: headers,
            success: function (data) {
                // handle returned data
                Object.keys(data).forEach(function (key) {
                    let HandleReturnedValue = { "x": key, "y": data[key] }
                    ProvidersPerEachVendor.push(HandleReturnedValue)
                });

                chart.toggleSeries("Providers")
                chart.updateSeries([{
                    name: 'Providers',
                    data: ProvidersPerEachVendor
                }])
            }
        });
    });
}

function GetNumberOfProviderUnderEachRegion() {
    let ProvidersPerEachRegion = [];
    Promise.all([
        getToken(),
    ]).then(data => {
        headers = {
            'Accept': 'application/json',
            'Authorization': "Bearer " + data[0]
        }
        $.ajax({
            url: APIURL + 'Dashboard/GetNumberOfProviderUnderEachRegion',
            type: "Get",
            headers: headers,
            success: function (data) {
                Object.keys(data).forEach(function (key) {
                    let HandleReturnedValue = { "x": key, "y": data[key] }
                    ProvidersPerEachRegion.push(HandleReturnedValue)
                });
                regionChart.toggleSeries("Providers")
                regionChart.updateSeries([{
                    name: 'Providers',
                    data: ProvidersPerEachRegion
                }])
            }
        });
    });
}

$("#registeredVendorsRefresh").on('click', function () { GetRegisteredVendors() })
$("#approvedVendorsRefresh").on('click', function () { GetApprovedVendors() })
$("#integratedVendorsRefresh").on('click', function () { GetIntegratedVendors() })
$("#contractedVendorsRefresh").on('click', function () { GetContractedVendors() })
$("#chartsRefresh").on('click', function () { GetNumberOfProviderUnderEachVendor() })
$("#liveProviderCountRefresh").on('click', function () { GetLiveProviderCount() })
$("#approvedProviderCountRefresh").on('click', function () { GetApprovedProviderCount() })
$("#providerCountRefresh").on('click', function () { GetProviderCount() })
$("#providersPerEachPRORefresh").on('click', function () { GetNumberOfProviderUnderEachBRO() })
$("#ProvidersPerEachRegionRefresh").on('click', function () { GetNumberOfProviderUnderEachRegion() })

Promise.all([
    GetAllDashboardInformation(),
    GetApprovedVendors(),
    GetContractedVendors(),
    GetIntegratedVendors(),
    GetRegisteredVendors(),
    GetNumberOfProviderUnderEachBRO(),
    GetLiveProviderCount(),
    GetApprovedProviderCount(),
    GetProviderCount()
]);
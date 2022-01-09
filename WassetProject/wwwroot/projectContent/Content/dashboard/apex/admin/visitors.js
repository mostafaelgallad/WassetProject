var options = {
  chart: {
    height: 215,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '30%',
    },
  },
  dataLabels: {
    enabled: true
  },
  series: [{
    name: 'item1',
    data: [44, 55, 41, 67, 22, 43]
  },{
    name: 'item2',
    data: [13, 23, 20, 8, 13, 27]
  }],
  xaxis: {
    type: 'Monthes',
      categories: ['January', 'February', 'March', 'April', 'May', 'June', ],  },
  legend: {
    offsetx: -7
  },
  fill: {
    opacity: 1
  },
    colors: ['#24bb4f', '#ea9715'],
  tooltip: {
    y: {
      formatter: function(val) {
        return  "Visitors " + val + "k"
      }
    }
  },
}
var chart = new ApexCharts(
  document.querySelector("#visitors"),
  options
);
chart.render();



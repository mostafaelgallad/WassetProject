var options = {
  chart: {
    height: 280,
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
    name: 'جدة',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 49, 15, 26, 55]
  },{
    name: 'الرياض',
    data: [13, 23, 20, 8, 13, 27, 36, 22, 54, 28, 31, 26]
  }],
  xaxis: {
    type: 'الشهور',
    categories: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيه', 'يوليو', 'اغسطس', 'سبتمبر', 'اكتوبر', 'نوفمبر', 'ديسمبر'],
  },
  legend: {
    offsetx: -7
  },
  fill: {
    opacity: 1
  },
  colors: ['#ee0000', '#999999'],
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



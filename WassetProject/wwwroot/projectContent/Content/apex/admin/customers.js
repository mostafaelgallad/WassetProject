var options = {
  chart: {
    height: 233,
    type: 'donut',
  },
  labels: ['جديد', 'قديم'],
  legend: {
    show: false,
  },
  series: [700, 300],
  stroke: {
    width: 1,
  },
  colors: ['#ee0000', '#999999'],
}
var chart = new ApexCharts(
  document.querySelector("#customers"),
  options
);
chart.render();
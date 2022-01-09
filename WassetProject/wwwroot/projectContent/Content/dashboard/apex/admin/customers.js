var options = {
  chart: {
    height: 210,
    type: 'donut',
  },
  labels: ['new', 'old'],
  legend: {
    show: false,
  },
  series: [700, 300],
  stroke: {
    width: 1,
    },
    dataLabels: {
        enabled: true,
       
        
        textAnchor: 'left',
        distributed: true,
        offsetX: 0,
        offsetY: 0,
      
        background: {
            enabled: true,
            foreColor: '#fff',
            padding: 0,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 0.9,
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#000',
                opacity: 0.45
            }
        },
        dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: '#000',
            opacity: 0.45
        }
    },

    colors: ['#fc960f', '#999999'],
}
var chart = new ApexCharts(
  document.querySelector("#customers"),
  options
);
chart.render();
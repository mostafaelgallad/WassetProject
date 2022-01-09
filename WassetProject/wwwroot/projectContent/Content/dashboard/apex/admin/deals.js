var options = {
  chart: {
    height: 265,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 4
  },
  series: [{
    name: 'Reveue',
    data: [300, 400, 600, 500, 700]
  }, {
    name: 'Costs',
    data: [100, 200, 400, 300, 500]
  }],
  grid: {
    row: {
      colors: ['#ffffff'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    type: 'month',
    categories: ["jan", "feb", "mar", "Apr", "May"], 
    labels: {
      show: true,
      rotate: 90,
      //rotateAlways: true,
    },               
  },
    colors: ['#fc960f', '#999999'],
  markers: {
    size: 5,
    opacity: 0.2,
      colors: ['#fc960f', '#999999'],
    strokeColor: "#fff",
    strokeWidth: 3,
    hover: {
      size: 7,
    }
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy'
    },
  }
}

var chart = new ApexCharts(
  document.querySelector("#deals"),
  options
);

chart.render();

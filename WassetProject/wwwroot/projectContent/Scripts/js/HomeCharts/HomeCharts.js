


window.onload = function () {
//start apex chart
	var SplineChart4options = {
		series: [{
			name: 'Total Orders',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#f41127',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#f41127"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2.4,
			curve: 'smooth'
		},
		colors: ["#f41127"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var SplineChart4 = new ApexCharts(document.querySelector("#SplineChart4"), SplineChart4options);
	SplineChart4.render();

	var SplineChart5options = {
		series: [{
			name: 'Total Income',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#008FFB',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#008FFB"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2.4,
			curve: 'smooth'
		},
		colors: ["#008FFB"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var SplineChart5 = new ApexCharts(document.querySelector("#SplineChart5"), SplineChart5options);
	SplineChart5.render();
	// chart 3
	var SplineChart6options = {
		series: [{
			name: 'Total Users',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#ffb207',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#ffb207"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2.4,
			curve: 'smooth'
		},
		colors: ["#ffb207"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var SplineChart6 = new ApexCharts(document.querySelector("#SplineChart6"), SplineChart6options);
	SplineChart6.render();

	var SplineChart7options = {
		series: [{
			name: 'Comments',
			data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
		}],
		chart: {
			type: 'area',
			height: 65,
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#29cc39',
			},
			sparkline: {
				enabled: true
			}
		},
		markers: {
			size: 0,
			colors: ["#29cc39"],
			strokeColors: "#fff",
			strokeWidth: 2,
			hover: {
				size: 7,
			}
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '45%',
				endingShape: 'rounded'
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			show: true,
			width: 2.4,
			curve: 'smooth'
		},
		colors: ["#29cc39"],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1
		},
		tooltip: {
			theme: 'dark',
			fixed: {
				enabled: false
			},
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function (seriesName) {
						return ''
					}
				}
			},
			marker: {
				show: false
			}
		}
	};
	var SplineChart7 = new ApexCharts(document.querySelector("#SplineChart7"), SplineChart7options);
	SplineChart7.render();

//chart1

	var ColumnChartoptions = {
		chart: {
			height: 250,
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
		}, {
			name: 'item2',
			data: [13, 23, 20, 8, 13, 27]
		}],
		xaxis: {
			type: 'Monthes',
			categories: ['January', 'February', 'March', 'April', 'May', 'June',],
		},
		yaxis: {
			reversed: true
		},
		legend: {
			offsetx: -7
		},
		fill: {
			opacity: 1
		},
		colors: ['#24bb4f', '#ea9715'],
		tooltip: {
			y: {
				formatter: function (val) {
					return "Visitors " + val + "k"
				}
			}
		},
	}
	var ColumnChartchart = new ApexCharts(
		document.querySelector("#ColumnChart"),
		ColumnChartoptions
	);
	ColumnChartchart.render();


//chart2
	var MultipleAxeschartoptions = {
		series: [
			{
			name: "Desktops",
			data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
		},
			{
				data: [20, 29, 37, 36, 44, 45, 50, 58]
			}
		],
		chart: {
			height: 250,
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'straight'
		},
		//title: {
		//	text: 'Product Trends by Month',
		//	align: 'left'
		//},
		grid: {
			row: {
				colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
				opacity: 0.5
			},
		},
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
		},
		yaxis: [
			{
				title: {
					text: "Series A"
				},
			},
			{
				opposite: true,
				title: {
					text: "Series B"
				}
			}
		],
	};

	var MultipleAxeschart = new ApexCharts(document.querySelector("#MultipleAxeschart"), MultipleAxeschartoptions);
	MultipleAxeschart.render();





//chart 3

	// setup 
	const data = {
		labels: ['Mon', 'Tue'],
		datasets: [{
			label: 'Weekly Sales',
			data: [18, 12],
			backgroundColor: [
				'rgba(255, 26, 104, 1)',
				'rgba(54, 162, 235, 1)',
			],
			borderColor: [
				'rgba(255, 26, 104, 1)',
				'rgba(54, 162, 235, 1)',
			],
			borderWidth: 1
		}]
	};
	const data1 = {
		labels: ['Mon', 'Tue'],
		datasets: [{
			label: 'Weekly Sales',
			data: [20, 22],
			backgroundColor: [
				'rgba(255, 26, 104, 1)',
				'rgba(54, 162, 235, 1)',
			],
			borderColor: [
				'rgba(255, 26, 104, 1)',
				'rgba(54, 162, 235, 1)',
			],
			borderWidth: 1
		}]
	};
	const data2 = {
		labels: ['Mon', 'Tue'],
		datasets: [{
			label: 'Weekly Sales',
			data: [16, 15],
			backgroundColor: [
				'rgba(255, 26, 104, 1)',
				'rgba(54, 162, 235, 1)',
			],
			borderColor: [
				'rgba(255, 26, 104, 1)',
				'rgba(54, 162, 235, 1)',
			],
			borderWidth: 1
		}]
	};

	// config 
	const config = {
		type: 'bar',
		data,
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	};

	// render init block
	const ctx = document.getElementById('myChart');
	const myChart = new Chart(
		ctx,
		config
	);

	function clickHandler(click) {
		const points1 = myChart.getElementsAtEventForMode(click, 'nearest', { intersect: true }, true);
		if (points1.lenght) {
			const firstPoint = points1[0];
			console.log(firstPoint)
		}
	}
	ctx.onclick = clickHandler;




	//var options = {
	//	series: [{
	//		data: makeData()
	//	}],
	//	chart: {
	//		id: 'barYear',
	//		height: 400,
	//		width: '100%',
	//		type: 'bar',
	//		events: {
	//			dataPointSelection: function (e, chart, opts) {
	//				var quarterChartEl = document.querySelector("#chart-quarter");
	//				var yearChartEl = document.querySelector("#chart-year");

	//				if (opts.selectedDataPoints[0].length === 1) {
	//					if (quarterChartEl.classList.contains("active")) {
	//						updateQuarterChart(chart, 'barQuarter')
	//					} else {
	//						yearChartEl.classList.add("chart-quarter-activated")
	//						quarterChartEl.classList.add("active");
	//						updateQuarterChart(chart, 'barQuarter')
	//					}
	//				} else {
	//					updateQuarterChart(chart, 'barQuarter')
	//				}

	//				if (opts.selectedDataPoints[0].length === 0) {
	//					yearChartEl.classList.remove("chart-quarter-activated")
	//					quarterChartEl.classList.remove("active");
	//				}

	//			},
	//			updated: function (chart) {
	//				updateQuarterChart(chart, 'barQuarter')
	//			}
	//		}
	//	},
	//	plotOptions: {
	//		bar: {
	//			distributed: true,
	//			horizontal: true,
	//			barHeight: '75%',
	//			dataLabels: {
	//				position: 'bottom'
	//			}
	//		}
	//	},
	//	dataLabels: {
	//		enabled: true,
	//		textAnchor: 'start',
	//		style: {
	//			colors: ['#fff']
	//		},
	//		formatter: function (val, opt) {
	//			return opt.w.globals.labels[opt.dataPointIndex]
	//		},
	//		offsetX: 0,
	//		dropShadow: {
	//			enabled: true
	//		}
	//	},

	//	colors: colors,

	//	states: {
	//		normal: {
	//			filter: {
	//				type: 'desaturate'
	//			}
	//		},
	//		active: {
	//			allowMultipleDataPointsSelection: true,
	//			filter: {
	//				type: 'darken',
	//				value: 1
	//			}
	//		}
	//	},
	//	tooltip: {
	//		x: {
	//			show: false
	//		},
	//		y: {
	//			title: {
	//				formatter: function (val, opts) {
	//					return opts.w.globals.labels[opts.dataPointIndex]
	//				}
	//			}
	//		}
	//	},
	//	title: {
	//		text: 'Yearly Results',
	//		offsetX: 15
	//	},
	//	subtitle: {
	//		text: '(Click on bar to see details)',
	//		offsetX: 15
	//	},
	//	yaxis: {
	//		labels: {
	//			show: false
	//		}
	//	}
	//};

	//var chart = new ApexCharts(document.querySelector("#chart-year"), options);
	//chart.render();

	//var optionsQuarter = {
	//	series: [{
	//		data: []
	//	}],
	//	chart: {
	//		id: 'barQuarter',
	//		height: 400,
	//		width: '100%',
	//		type: 'bar',
	//		stacked: true
	//	},
	//	plotOptions: {
	//		bar: {
	//			columnWidth: '50%',
	//			horizontal: false
	//		}
	//	},
	//	legend: {
	//		show: false
	//	},
	//	grid: {
	//		yaxis: {
	//			lines: {
	//				show: false,
	//			}
	//		},
	//		xaxis: {
	//			lines: {
	//				show: true,
	//			}
	//		}
	//	},
	//	yaxis: {
	//		labels: {
	//			show: false
	//		}
	//	},
	//	title: {
	//		text: 'Quarterly Results',
	//		offsetX: 10
	//	},
	//	tooltip: {
	//		x: {
	//			formatter: function (val, opts) {
	//				return opts.w.globals.seriesNames[opts.seriesIndex]
	//			}
	//		},
	//		y: {
	//			title: {
	//				formatter: function (val, opts) {
	//					return opts.w.globals.labels[opts.dataPointIndex]
	//				}
	//			}
	//		}
	//	}
	//};

	//var chartQuarter = new ApexCharts(document.querySelector("#chart-quarter"), optionsQuarter);
	//chartQuarter.render();


	//chart.addEventListener('dataPointSelection', function (e, chart, opts) {
	//	var quarterChartEl = document.querySelector("#chart-quarter");
	//	var yearChartEl = document.querySelector("#chart-year");

	//	if (opts.selectedDataPoints[0].length === 1) {
	//		if (quarterChartEl.classList.contains("active")) {
	//			updateQuarterChart(chart, 'barQuarter')
	//		}
	//		else {
	//			yearChartEl.classList.add("chart-quarter-activated")
	//			quarterChartEl.classList.add("active");
	//			updateQuarterChart(chart, 'barQuarter')
	//		}
	//	} else {
	//		updateQuarterChart(chart, 'barQuarter')
	//	}

	//	if (opts.selectedDataPoints[0].length === 0) {
	//		yearChartEl.classList.remove("chart-quarter-activated")
	//		quarterChartEl.classList.remove("active");
	//	}

	//})

	//chart.addEventListener('updated', function (chart) {
	//	updateQuarterChart(chart, 'barQuarter')
	//})

	//document.querySelector("#model").addEventListener("change", function (e) {
	//	chart.updateSeries([{
	//		data: makeData()
	//	}])
	//})




	//var canvas = document.getElementById('chart');
	//new Chart(canvas, {
	//	type: 'line',
	//	data: {
	//		labels: ['1', '2', '3', '4', '5'],
	//		datasets: [{
	//			label: 'A',
	//			yAxisID: 'A',
	//			data: [100, 96, 84, 76, 69]
	//		}, {
	//			label: 'B',
	//			yAxisID: 'B',
	//			data: [1, 1, 1, 1, 0]
	//		}]
	//	},
	//	options: {
	//		scales: {
	//			yAxes: [{
	//				id: 'A',
	//				type: 'linear',
	//				position: 'left',
	//			}, {
	//				id: 'B',
	//				type: 'linear',
	//				position: 'right',
	//				ticks: {
	//					max: 1,
	//					min: 0
	//				}
	//			}]
	//		}
	//	}
	//});


}

//,color: "#FC960F",   ,color: "#24BB4F",    ,color: "#00ACF0",
//color: "rgba(34,175,71,0.7)", green
//color: "rgba(255,191,54,0.8)", orange
//color: "rgba(54,158,173,.7)", blue
import * as soda from "@traviswheelerlab/soda"

let axis = new soda.AxisChart({selector: '#axis-chart'});
let lineChart = new soda.LineChart({selector: '#line-chart', binHeight:100});
let barChart = new soda.BarChart({selector: '#bar-chart', binHeight:100});
let heatmapChart = new soda.HeatmapChart({selector: '#heatmap-chart', binHeight:20});

let charts = [axis, lineChart, barChart, heatmapChart]

let zoomController = new soda.ZoomController();
let resizeController = new soda.ResizeController();

zoomController.addComponents(charts)
resizeController.addComponents(charts)

window.onresize = () => resizeController.trigger();

let renderParams: soda.LineChartRenderParams = {
    data: ann,
    queryStart: 0,
    queryEnd: 1000,
    maxY: 1
};

axis.initialRender(renderParams);
lineChart.initialRender(renderParams);
barChart.initialRender(renderParams);
heatmapChart.initialRender(renderParams);

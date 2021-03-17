let layerCount = soda.intervalGraphLayout(ann);

let renderParams: soda.TrackChartRenderParams = {
    queryStart: 0,
    queryEnd: w,
    maxY: layerCount
};

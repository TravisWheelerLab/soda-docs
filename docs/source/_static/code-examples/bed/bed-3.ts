
let leftMost = ann.reduce(function(prev, curr) {
    return prev.x < curr.x ? prev : curr;
});
let rightMost = ann.reduce(function(prev, curr) {
    return (prev.x + prev.w) > (curr.x + curr.w) ? prev : curr;
});

let n = soda.intervalGraphLayout(ann);

let renderParams: soda.TrackChartRenderParams = {
    queryStart: leftMost.x,
    queryEnd: rightMost.getX2(),
    maxY: n
};

axis.initialRender(renderParams);
chart.initialRender(renderParams);

let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

let rectConf: soda.RectangleConfig<soda.BedAnnotation, soda.TrackChart<soda.TrackChartRenderParams>> = {
    selector: 'bedAnn',
    fillColor: (a: soda.BedAnnotation) => colorScale(a.id),
    strokeColor: (a: soda.BedAnnotation) => colorScale(a.id),
};

soda.rectangleGlyph(chart, ann, rectConf);

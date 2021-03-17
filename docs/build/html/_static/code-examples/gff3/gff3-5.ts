let n = soda.intervalGraphLayout(groups);

let leftMost = groups.reduce(function(prev, curr) {
    return prev.x < curr.x ? prev : curr;
})

let rightMost = groups.reduce(function(prev, curr) {
    return (prev.x + prev.w) > (curr.x + curr.w) ? prev : curr;
})

let renderParams: soda.TrackChartRenderParams = {
    queryStart: leftMost.x,
    queryEnd: rightMost.x2,
    maxY: n
};

axis.initialRender(renderParams);
chart.initialRender(renderParams);

let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

let rectConf: soda.ChevronRectangleConfig<soda.Gff3Annotation, soda.TrackChart<soda.TrackChartRenderParams>> = {
    selector: 'exon',
    fillColor: (a) => colorScale(a.parent!.id),
    strokeColor: (a) => colorScale(a.parent!.id),
    disableChevronAt: 50000,
};

soda.chevronRectangleGlyph(chart, exonAnn, rectConf);

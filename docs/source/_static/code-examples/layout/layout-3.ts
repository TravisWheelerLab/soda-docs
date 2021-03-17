
let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

let rectConf: soda.RectangleConfig<soda.Annotation, soda.TrackChart<soda.TrackChartRenderParams>> = {
    selector: 'ann',
    fillColor: (a: soda.Annotation) => colorScale(a.id),
    strokeColor: (a: soda.Annotation) => colorScale(a.id)
};

axis.initialRender(renderParams);
chart.initialRender(renderParams);

soda.rectangleGlyph(chart, ann, rectConf);

function randInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));

import * as d3 from 'd3';
import * as soda from "@traviswheelerlab/soda"

let axis = new soda.AxisChart({selector: '#axis-chart'});
let chart = new soda.TrackChart({selector: '#track-chart'});

let zoomController = new soda.ZoomController();
let resizeController = new soda.ResizeController();

zoomController.addComponent(axis);
zoomController.addComponent(chart);

resizeController.addComponent(axis);
resizeController.addComponent(chart);

window.onresize = () => resizeController.trigger();

let n = 500;
let w = 100000;
let ann: soda.Annotation[] = [];
for (let i = 0; i < n; i++) {
    let annConf: soda.AnnotationConfig = {
        id: `${i}`,
        w: randInt(1000),
        x: randInt(w),
        y: i,
    };
    ann.push(new soda.Annotation(annConf));
}

let layerCount = soda.intervalGraphLayout(ann);

let renderParams: soda.TrackChartRenderParams = {
    queryStart: 0,
    queryEnd: w,
    maxY: layerCount
};

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
}

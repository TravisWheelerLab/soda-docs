import * as d3 from 'd3';
import * as soda from "@traviswheelerlab/soda"

let axis = new soda.AxisChart({selector: '#axis-chart-2'});
let chart = new soda.TrackChart({selector: '#track-chart-2'});
let chart2 = new soda.TrackChart({selector: '#track-chart-3'});
let chart3 = new soda.TrackChart({selector: '#track-chart-4'});

let charts = [axis, chart, chart2, chart3];

let zoomController = new soda.ZoomController();
let resizeController = new soda.ResizeController();

zoomController.addComponents(charts);
resizeController.addComponents(charts);

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

let axisParams: soda.AxisRenderParams = {
    queryEnd: w,
    queryStart: 0
};

axis.initialRender(axisParams);

let colorScale = d3.scaleOrdinal(d3.schemeCategory10);
let rectConf = {
    selector: 'ann',
    fillColor: (a: soda.Annotation) => colorScale(a.id),
    strokeColor: (a: soda.Annotation) => colorScale(a.id)
};

for (let i = 1; i < charts.length; i++) {
    let layerCount = 0;
    if (i == 1) {
        layerCount = soda.intervalGraphLayout(ann);
    }
    else if (i == 2) {
        layerCount = soda.heuristicGraphLayout(ann);
    }
    else if (i == 3) {
        layerCount = soda.greedyGraphLayout(ann);
    }

    let trackParams: soda.TrackChartRenderParams = {
        maxY: layerCount,
        queryEnd: w,
        queryStart: 0
    };

    charts[i].initialRender(trackParams);
    soda.rectangleGlyph(charts[i], ann, rectConf);
}

function randInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

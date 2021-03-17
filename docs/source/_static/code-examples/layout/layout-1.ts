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

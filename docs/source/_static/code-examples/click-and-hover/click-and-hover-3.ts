let hoverConf: soda.HoverConfig<soda.Annotation> = {
    mouseover: (s: d3.Selection<any, any, any, any>, a: soda.Annotation) => { console.log(`${a.id} hovered`) },
    mouseout: (s: d3.Selection<any, any, any, any>, a: soda.Annotation) => { console.log(`${a.id} out`) }
};

soda.hoverBehavior(ann, hoverConf);

let clickConf1: soda.ClickConfig<soda.Annotation> = {
    click: (s: d3.Selection<any, any, any, any>, a: soda.Annotation) => { console.log(`${a.id} clicked`) },
};

let clickConf2: soda.ClickConfig<soda.Annotation> = {
    click: (s: d3.Selection<any, any, any, any>, a: soda.Annotation) => { alert(`${a.id} clicked`) },
};

soda.clickBehavior(ann, clickConf1);
soda.clickBehavior(ann, clickConf2);

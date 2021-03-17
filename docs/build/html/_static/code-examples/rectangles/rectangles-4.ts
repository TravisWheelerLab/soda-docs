let ann: soda.Annotation[] = [];
for (let i = 0; i < 10; i++) {
    let annConf: soda.AnnotationConfig = {
        id: `${i}`,
        w: 100,
        x: i * 100,
        y: i,
    };
    ann.push(new soda.Annotation(annConf));
}

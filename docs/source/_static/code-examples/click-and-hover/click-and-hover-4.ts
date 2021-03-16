let tooltipConf: soda.TooltipConfig<soda.Annotation, soda.TrackChart<any>> = {
    text: (a: soda.Annotation) => a.id,
};

soda.tooltip(chart, ann, tooltipConf);

let groups: soda.AnnotationGroup<soda.Gff3Annotation>[] = [];
for (let id of parentIds) {
    let group = exonAnn.filter((ann) => ann.parent!.gff3Id == id);
    let annGroup = new soda.AnnotationGroup<soda.Gff3Annotation>(group[0]);
    for (let ann of group) {
        annGroup.add(ann);
    }
    groups.push(annGroup);
}


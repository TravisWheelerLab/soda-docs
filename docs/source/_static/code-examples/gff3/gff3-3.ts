let exonAnn = ann.filter((a) => a.type == 'exon');

let parentIds = exonAnn.reduce<string[]>((ids, ann) => ids.concat([ann.parent!.gff3Id!]), [])
parentIds = parentIds.filter((ann, index, self) => self.indexOf(ann) === index);

.. role:: trst-class
.. role:: trst-interface
.. role:: trst-function
.. role:: trst-property
.. role:: trst-property-desc
.. role:: trst-method
.. role:: trst-method-desc
.. role:: trst-parameter
.. role:: trst-type
.. role:: trst-type-parameter

.. _Gff3AnnotationConfig:

:trst-interface:`Gff3AnnotationConfig`
======================================

.. rst-class:: trst-interface-desc

A simple interface that holds the arguments for a Gff3Annotation constructor.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`AnnotationConfig<AnnotationConfig>`

Properties
----------

----

:trst-property:`attributes`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A map of attributes for the annotation. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Map<Map>` <string, string []>

:trst-property:`children`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The annotations that are considered as a sub-component of this annotation. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Gff3Annotation<Gff3Annotation>` []

:trst-property:`derivatives`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The annotations that are considered as derived from this annotation. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Gff3Annotation<Gff3Annotation>` []

:trst-property:`derivedFrom`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The annotation from which this one is derived. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Gff3Annotation<Gff3Annotation>`

:trst-property:`gff3Id`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The ID from the GFF3 file. This comes from the optional attributes. For more information see https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md#description-of-the-format 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`h`
++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`id`
+++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`orientation`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The chromosome strand. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Orientation<Orientation>`

:trst-property:`parent`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The annotation(s) that this one is a sub-component of. In the GFF3 spec, a feature can have multiple parents. In those cases, the feature is probably meant to be visualized multiple times as a part of distinct groups of features. This does not really work very well with the way that SODA is designed. Instead, we create multiple SODA Gff3Annotation objects for each identical copy of a feature, and each one gets exactly one different parent. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Gff3Annotation<Gff3Annotation>`

:trst-property:`phase`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

A field for the 'CDS' type. It is used to indicate where the next codon begins relative to the current CDS feature. For more information refer to https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Phase<Phase>`

:trst-property:`score`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

A metric that should give some measure of significance, e.g. e-values or p-values. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`seqId`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The sequence to which the annotation references. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`source`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The source of the annotation, e.g. the software or database. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`type`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

The type of annotation, e.g gene or exon. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`w`
++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

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

.. _Gff3Annotation:

:trst-class:`Gff3Annotation`
============================

.. rst-class:: trst-class-desc

An Annotation definition for GFF3 records.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`Annotation<Annotation>`

**Implements**
 .. rst-class:: trst-implements

  :ref:`OrientedAnnotation<OrientedAnnotation>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new Gff3Annotation(config): Gff3Annotation
:Parameters:
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Gff3AnnotationConfig<Gff3AnnotationConfig>`
   

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

:trst-property:`id`
+++++++++++++++++++

.. rst-class:: trst-property-desc

A unique identifier for an Annotation object. Currently, it is up to users to make sure that this field is uniquely assigned. SODA will not behave as intended if two distinct Annotations have the same id. 
 
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

.. rst-class:: trst-property-desc

The width of the annotation in semantic coordinates. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

The x position of the annotation in semantic coordinates (generally a position on a chromosome in base pairs) 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

The y position of the annotation. This rarely has semantic meaning, and is probably used to prevent horizontal overlap or preserve clarity in the visualization. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

Methods
-------

----

:trst-method:`addChild`
+++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addChild(ann): void
:Parameters:
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Gff3Annotation<Gff3Annotation>`
   

:trst-method:`addDerivative`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addDerivative(ann): void
:Parameters:
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Gff3Annotation<Gff3Annotation>`
   

:trst-method:`getW`
+++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the width. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getW(): number

:trst-method:`getX`
+++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the x coordinate. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getX(): number

:trst-method:`getX2`
++++++++++++++++++++

.. rst-class:: trst-method-desc

Gets the x2 coordinate. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getX2(): number

:trst-method:`setY`
+++++++++++++++++++

.. rst-class:: trst-method-desc

Sets the y coordinate. This exists largely to let the layout module be oblivious to the existence of AnnotationGroups. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setY(y): void
:Parameters:
 :trst-parameter:`y`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

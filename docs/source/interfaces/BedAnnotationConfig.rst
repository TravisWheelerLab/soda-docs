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

.. _BedAnnotationConfig:

:trst-interface:`BedAnnotationConfig`
=====================================

.. rst-class:: trst-interface-desc

A simple interface that holds the arguments for a BedAnnotation constructor.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`AnnotationConfig<AnnotationConfig>`

Properties
----------

----

:trst-property:`id`
+++++++++++++++++++

.. rst-class:: trst-property-desc

A unique identifier for an Annotation object. Currently, it is up to users to make sure that this field is uniquely assigned. SODA will not behave as intended if two distinct Annotations have the same id. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`itemRgb`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The color that the feature should be drawn. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`name`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

The name of the record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`orientation`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The orientation of the record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Forward<Forward>` | :ref:`Reverse<Reverse>` | :ref:`Unknown<Unknown>` | :ref:`Unoriented<Unoriented>`

:trst-property:`score`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The score of the record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`thickEnd`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A BED field that describes at which coordinate the feature should stop being drawn "thickly." 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`thickStart`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A BED field that describes at which coordinate the feature should be drawn "thickly." 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

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

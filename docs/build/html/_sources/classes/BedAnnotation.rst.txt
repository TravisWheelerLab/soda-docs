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

.. _BedAnnotation:

:trst-class:`BedAnnotation`
===========================

.. rst-class:: trst-class-desc

An Annotation definition for BED records.

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

  new BedAnnotation(config): BedAnnotation
:Parameters:
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`BedAnnotationConfig<BedAnnotationConfig>`
   

Properties
----------

----

:trst-property:`h`
++++++++++++++++++

.. rst-class:: trst-property-desc

The height of an annotation in the visualization. This is currently not used by the SODA core. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

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

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`name`
+++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`orientation`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The orientation. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Orientation<Orientation>`

:trst-property:`score`
++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`thickEnd`
+++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`thickStart`
+++++++++++++++++++++++++++

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

Methods
-------

----

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
   

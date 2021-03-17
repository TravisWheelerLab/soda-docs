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

.. _TextAnnotation:

:trst-interface:`TextAnnotation`
================================

.. rst-class:: trst-interface-desc

An interface to represent an Annotation that will be represented as text. Generally, this will be a label that is rendered near another Annotation. TextAnnotations are capable of trying to be "smart" about displaying their underlying data. They can be provided with a list of strings of various levels of detail/length, and they will display the most detailed/longest text that will fit inside of the space available in the target Chart. When paired with the default TextAnnotation ZoomBehavior, this behavior can be dynamically applied as the Chart is zoomed or changes dimensions.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`Annotation<Annotation>`

Properties
----------

----

:trst-property:`drawThresholds`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of thresholds, measured in the semantic width of the current view in a Chart, at which the different levels of text detail will be displayed. When TextAnnotations are passed to the TextGlyph() function, these values are precomputed before an initial render takes place. These should not be set directly. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number []

:trst-property:`id`
+++++++++++++++++++

.. rst-class:: trst-property-desc

A unique identifier for an Annotation object. Currently, it is up to users to make sure that this field is uniquely assigned. SODA will not behave as intended if two distinct Annotations have the same id. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`text`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of text at different levels of detail/length. These should sorted in order of increasing detail. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string []

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
   

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

.. _SequenceConfig:

:trst-interface:`SequenceConfig`
================================

.. rst-class:: trst-interface-desc

An interface that holds the parameters for rendering sequence glyphs.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`GlyphConfig<GlyphConfig>`

:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`SequenceAnnotation<SequenceAnnotation>`
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any>
   
Properties
----------

----

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`w`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the semantic width coordinate of the sequence glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (a: A, c: C): number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the semantic x coordinate of the sequence glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (a: A, c: C): number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the y coordinate of the sequence glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (a: A, c: C): number

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

:trst-property:`backgroundColor`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the color of the background behind the text. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (d: CharacterDatum, c: C): string

:trst-property:`backgroundOpacity`
++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the opacity of the background behind the text. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (d: CharacterDatum, c: C): string

:trst-property:`characterX`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the x coordinate of each character in the sequence glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (d: CharacterDatum, c: C): number

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`strokeColor`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke color of the text. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (d: CharacterDatum, c: C): string

:trst-property:`strokeOpacity`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke opacity of the text. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (d: CharacterDatum, c: C): number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the y coordinate of the sequence glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

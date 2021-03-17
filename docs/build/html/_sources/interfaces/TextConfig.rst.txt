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

.. _TextConfig:

:trst-interface:`TextConfig`
============================

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`GlyphConfig<GlyphConfig>`

:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`TextAnnotation<TextAnnotation>`
   
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

:trst-property:`text`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to extract a list of text to display from the represented Annotation object. It is a list of text because TextGlyphs can display varying length text depending on how much room is available in the target Chart's SVG viewport. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (a: A, c: C): None

:trst-property:`textPad`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The number of pixels to pad the text width. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the semantic x coordinate of the text glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the y coordinate of the text glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`zoom`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

A custom defined zoom behavior for all of the glyphs rendered with this config. This is intended to be used by experienced users only. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ZoomBehavior<ZoomBehavior>` <:ref:`C<C>`, :ref:`Selection<Selection>` <:ref:`SVGTextElement<SVGTextElement>`, :ref:`A<A>`, :ref:`HTMLElement<HTMLElement>`, any>>

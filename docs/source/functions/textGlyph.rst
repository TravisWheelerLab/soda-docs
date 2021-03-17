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

.. _textGlyph:

:trst-function:`textGlyph`
==========================

.. rst-class:: trst-function-desc

This renders a list of Annotation objects in a target chart as text glyphs. These are most likely to be used as labels that will be affixed next to another glyph.

:Call signature:
 .. rst-class:: trst-call-signature

  textGlyph<A, C>(chart, ann, conf): void
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`TextAnnotation<TextAnnotation>` <:ref:`A<A>`>
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any, :ref:`C<C>`>
   
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 The target Chart.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-desc
 The list of Annotation objects to be rendered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>` []
   
 :trst-parameter:`conf`

 .. rst-class:: trst-parameter-desc
 The parameters for configuring the style of the lines. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`TextConfig<TextConfig>` <:ref:`A<A>`, :ref:`C<C>`>
   

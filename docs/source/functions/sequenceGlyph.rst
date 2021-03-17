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

.. _sequenceGlyph:

:trst-function:`sequenceGlyph`
==============================

.. rst-class:: trst-function-desc

An experimental function that renders a list of Annotation objects in a target chart as sequence glyphs. In a sequence glyph, each integer semantic coordinate that the Annotation covers is rendered as a character. This works, but it is very hard on performance.

:Call signature:
 .. rst-class:: trst-call-signature

  sequenceGlyph<A, D, C>(chart, ann, conf): void
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`SequenceAnnotation<SequenceAnnotation>` <:ref:`A<A>`>
   
:Type parameters:
 :trst-type-parameter:`D`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     D extends :ref:`CharacterDatum<CharacterDatum>`
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any, :ref:`C<C>`>
   
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>` []
   
 :trst-parameter:`conf`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`SequenceConfig<SequenceConfig>` <:ref:`A<A>`, :ref:`C<C>`>
   

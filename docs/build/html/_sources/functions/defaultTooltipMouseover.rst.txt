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

.. _defaultTooltipMouseover:

:trst-function:`defaultTooltipMouseover`
========================================

:Call signature:
 .. rst-class:: trst-call-signature

  defaultTooltipMouseover<A, C>(a, c, config): void
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any, :ref:`C<C>`>
   
:Parameters:
 :trst-parameter:`a`

 .. rst-class:: trst-parameter-desc
 The Annotation object whose representative glyph has been hovered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>`
   
 :trst-parameter:`c`

 .. rst-class:: trst-parameter-desc
 The Chart in which the glyph has been rendered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-desc
 The config to be applied to the tooltip. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`TooltipConfig<TooltipConfig>` <:ref:`A<A>`, :ref:`C<C>`>
   

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

.. _brushXBehavior:

:trst-function:`brushXBehavior`
===============================

.. rst-class:: trst-function-desc

Add a brushX behavior to a chart.

:Call signature:
 .. rst-class:: trst-call-signature

  brushXBehavior<A, C>(chart, config): void
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
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 The Chart to add the behavior to.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-desc
 The configuration of the behavior. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`BrushXConfig<BrushXConfig>` <:ref:`A<A>`, :ref:`C<C>`>
   

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

.. _verticalAxis:

:trst-function:`verticalAxis`
=============================

.. rst-class:: trst-function-desc

This renders Annotations as vertical axes in a chart. This is intended to be used in conjunction with one of the plotting glyph modules. The vertical axes can be fixed in place, but they are configured to move during zoom events by default.

:Call signature:
 .. rst-class:: trst-call-signature

  verticalAxis<A, C>(chart, ann, conf): void
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
 The Chart in which we will render the axes.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-desc
 The Annotations to be rendered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>` []
   
 :trst-parameter:`conf`

 .. rst-class:: trst-parameter-desc
 The parameters for configuring the styling of the axes. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`VerticalAxisConfig<VerticalAxisConfig>` <:ref:`A<A>`, :ref:`C<C>`>
   

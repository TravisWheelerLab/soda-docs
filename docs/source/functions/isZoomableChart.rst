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

.. _isZoomableChart:

:trst-function:`isZoomableChart`
================================

.. rst-class:: trst-function-desc

A custom type guard to check if an arbitrary chart is a ZoomableChart. This is currently not a very strict guard, and it should be used with caution.

:Call signature:
 .. rst-class:: trst-call-signature

  isZoomableChart<T>(chart): chart
:Type parameters:
 :trst-type-parameter:`T`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     T, generic
   
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 The Chart to type check. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Chart<Chart>` <:ref:`T<T>`>
   

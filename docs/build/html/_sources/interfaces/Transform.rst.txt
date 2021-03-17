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

.. _Transform:

:trst-interface:`Transform`
===========================

.. rst-class:: trst-interface-desc

Stub interface for the `Transform` class in D3, which doesn't appear to be exported from the D3 types package. A D3 Transform object is generated when a browser zoom event occurs in a DOM element that D3 has been configured to listen for zoom events in. It can then be used to scale and translate both DOM elements and D3 scales.

Properties
----------

----

:trst-property:`k`
++++++++++++++++++

.. rst-class:: trst-property-desc

The scaling factor. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

The x translation amount. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

The y translation amount. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

Methods
-------

----

:trst-method:`rescaleX`
+++++++++++++++++++++++

.. rst-class:: trst-method-desc

A callback that can modify d3 scale to appropriately represent coordinate translations in the context of the new zoom level. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  rescaleX(scale): ScaleLinear
:Parameters:
 :trst-parameter:`scale`

 .. rst-class:: trst-parameter-desc
 The the original scale to be transformed. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ScaleLinear<ScaleLinear>` <number, number>
   

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

.. _axisRenderCallback:

:trst-function:`axisRenderCallback`
===================================

.. rst-class:: trst-function-desc

A simple callback function that for rendering an AxisChart. This largely exists as a convenience function to be used with a :ref:`QueryController` and/or :ref:`TrackRack`. Typically, a QueryParams object provides the parameters with which a query can be made to an external source (e.g. annotation database) and build RenderParams from the response. In this case, an AxisChart currently only needs the start and end coordinates of a query to render, so we can build RenderParams directly from the QueryParams.

:Call signature:
 .. rst-class:: trst-call-signature

  axisRenderCallback(axis, query): void
:Parameters:
 :trst-parameter:`axis`

 .. rst-class:: trst-parameter-desc
 The AxisChart to be rendered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`AxisChart<AxisChart>`
   
 :trst-parameter:`query`

 .. rst-class:: trst-parameter-desc
 The QueryParameters 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`QueryParameters<QueryParameters>`
   

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

.. _TrackRack:

:trst-class:`TrackRack`
=======================

.. rst-class:: trst-class-desc

This class is a convenience class for setting up multi-track visualizations. It maintains a ZoomController, ResizeController, and a QueryController for all added Charts. When a chart is added, it is placed onto the 'rack,' which is a div that consists of two columns. The Left column has an SVG for each Chart, suitable for labeling/information. The right column holds all of the charts.

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new TrackRack<Q>(config): TrackRack
:Type parameters:
 :trst-type-parameter:`Q`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     Q extends :ref:`QueryParameters<QueryParameters>`
   
:Parameters:
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`TrackRackConfig<TrackRackConfig>` <:ref:`Q<Q>`>
   

Properties
----------

----

:trst-property:`charts`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The list of Charts that live in this TrackRack. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Chart<Chart>` <any> []

:trst-property:`compCount`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The number of Charts that live in this TrackRack. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`divSelection`
+++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A D3 selection to the HTML div that contains the entire TrackRack. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Selection<Selection>` <:ref:`HTMLDivElement<HTMLDivElement>`, unknown, :ref:`HTMLElement<HTMLElement>`, any>

:trst-property:`queryController`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The QueryController that will be used across all added Charts. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`QueryController<QueryController>` <:ref:`Q<Q>`>

:trst-property:`resizeController`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The ResizeController that will be used across all added Charts. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ResizeController<ResizeController>`

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A string that can be used to uniquely select the target DOM container via d3.select(). 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`zoomController`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The ZoomController that will be used across all added Charts. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ZoomController<ZoomController>`

Methods
-------

----

:trst-method:`add`
++++++++++++++++++

.. rst-class:: trst-method-desc

Adds a chart to the TrackRack. This will expect that the Chart has been instantiated without a selector. If the Chart has been instantiated with a selector, you might get some weird behavior. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  add<C>(chart, renderCallbacks, title): void
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any, :ref:`C<C>`>
   
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 The chart to be added.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`renderCallbacks`

 .. rst-class:: trst-parameter-desc
 The callbacks that are responsible for accepting query parameters and calling render on the added Chart. If fewer callbacks are provided than there are width thresholds in the QueryController, the last callback will be used repeatedly.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     (chart: C, query: Q): void []
   
 :trst-parameter:`title`

 .. rst-class:: trst-parameter-desc
 The text that will be placed adjacent to the added Chart in the left column of the 'rack.' 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

:trst-method:`initialRender`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This makes sure the ZoomController is appropiately set up for a new query then calls initalRender() on the queryController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  initialRender(query): void
:Parameters:
 :trst-parameter:`query`

 .. rst-class:: trst-parameter-desc
 The provided QueryParameters. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Q<Q>`
   

:trst-method:`render`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This uses the provided QueryParameters as arguments in each Chart's render callback. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  render(query): void
:Parameters:
 :trst-parameter:`query`

 .. rst-class:: trst-parameter-desc
 The provided QueryParameters. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Q<Q>`
   

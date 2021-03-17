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

.. _QueryController:

:trst-class:`QueryController`
=============================

.. rst-class:: trst-class-desc

This class can be used to automate querying and rendering for groups of Charts. A QueryController should be defined such that it manages charts with common query parameters.

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new QueryController<Q>(config): QueryController
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
   
     :ref:`QueryControllerConfig<QueryControllerConfig>` <:ref:`Q<Q>`>
   

Properties
----------

----

:trst-property:`_prevQuery`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The most recent query parameters used for rendering. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Q<Q>`

:trst-property:`charts`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The Charts that the QueryController is managing. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Chart<Chart>` <any> []

:trst-property:`currentThreshold`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The current width threshold that the view places the QueryController in. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`currentView`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The semantic dimensions of the current view displayed in the charts. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ViewRange<ViewRange>`

:trst-property:`lastAlert`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The time in milliseconds of the last alert. This is used by the polling function to decide when to fire a new query. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`polling`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A boolean flag that indicates whether or not the controller is currently in the process of checking for the end of a stream of alerts. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  boolean

:trst-property:`queryBuilder`
+++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function that can produce a new QuerySignature given the previous query and a ViewRange 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (prevQuery: Q, view: ViewRange): Q

:trst-property:`renderCallbacks`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of callback functions that are responsible for rendering charts. The functions should be placed in the same order here that they are in the charts property. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (chart: any, query: Q): void [] []

:trst-property:`widthThresholds`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of thresholds in the semantic view with that determine which rendering callbacks are used at certain zoom levels. This is intended to be used to help set varying levels of detail in a visualization. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number []

Methods
-------

----

:trst-method:`add`
++++++++++++++++++

.. rst-class:: trst-method-desc

Adds a chart to the QueryController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  add<C>(chart, renderCallbacks): void
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
   

:trst-method:`alert`
++++++++++++++++++++

.. rst-class:: trst-method-desc

This would typically be called by a ZoomController every time there is a zoom event. It receives the updated ViewRange information and starts the polling process. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  alert(view): void
:Parameters:
 :trst-parameter:`view`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ViewRange<ViewRange>`
   

:trst-method:`getPrevQuery`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getPrevQuery(): Q

:trst-method:`getThreshold`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Get the index of the current threshold for the view. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getThreshold(): number

:trst-method:`initialRender`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This initializes the currentView attribute to match the query then calls render(). 
 

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
   

:trst-method:`poll`
+++++++++++++++++++

.. rst-class:: trst-method-desc

 This function polls the last alert time to check if it has been long enough to run a new query. It is called  by alert() using the JS setTimeout() function. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  poll(self): void
:Parameters:
 :trst-parameter:`self`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`QueryController<QueryController>` <:ref:`Q<Q>`>
   

:trst-method:`query`
++++++++++++++++++++

.. rst-class:: trst-method-desc

After a stream of alerts has finished, this function is called to check if the view has moved outside of the range of the previous query. If it has, the queryBuilder callback is used to generate a new query, and then render() is called with that query. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  query(): void

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
   

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

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Chart<Chart>` <any> []

:trst-property:`compCount`
++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`divSelection`
+++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Selection<Selection>` <:ref:`HTMLDivElement<HTMLDivElement>`, unknown, :ref:`HTMLElement<HTMLElement>`, any>

:trst-property:`queryController`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`QueryController<QueryController>` <:ref:`Q<Q>`>

:trst-property:`resizeController`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ResizeController<ResizeController>`

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`zoomController`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ZoomController<ZoomController>`

Methods
-------

----

:trst-method:`add`
++++++++++++++++++

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

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`renderCallbacks`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     (chart: C, query: Q): void []
   
 :trst-parameter:`title`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

:trst-method:`initialRender`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  initialRender(query): void
:Parameters:
 :trst-parameter:`query`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Q<Q>`
   

:trst-method:`render`
+++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  render(query): void
:Parameters:
 :trst-parameter:`query`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Q<Q>`
   

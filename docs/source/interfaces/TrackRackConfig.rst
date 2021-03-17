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

.. _TrackRackConfig:

:trst-interface:`TrackRackConfig`
=================================

.. rst-class:: trst-interface-desc

A simple interface that holds the arguments for a TrackRack constructor.

:Type parameters:
 :trst-type-parameter:`Q`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     Q extends :ref:`QueryParameters<QueryParameters>`
   
Properties
----------

----

:trst-property:`queryBuilder`
+++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function that can produce a new QuerySignature given the previous query and a ViewRange. This is passed to the internal QueryController. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (prevQuery: Q, view: ViewRange): Q

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A string that can be used to uniquely select the target DOM container via d3.select(). 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`widthThresholds`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of query width thresholds at which to switch renderCallbacks. This is passed to the internal QueryController. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number []

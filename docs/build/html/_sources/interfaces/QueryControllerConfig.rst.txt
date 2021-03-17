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

.. _QueryControllerConfig:

:trst-interface:`QueryControllerConfig`
=======================================

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

A callback function that can produce a new QuerySignature given the previous query and a ViewRange 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (prevQuery: Q, view: ViewRange): Q

:trst-property:`widthThresholds`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number []

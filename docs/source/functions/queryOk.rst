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

.. _queryOk:

:trst-function:`queryOk`
========================

.. rst-class:: trst-function-desc

A simple function to check if QueryParameters seem valid. It currently checks if query.start > query.end and whether or not either parameter is NaN.

:Call signature:
 .. rst-class:: trst-call-signature

  queryOk(query): boolean
:Parameters:
 :trst-parameter:`query`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`QueryParameters<QueryParameters>`
   

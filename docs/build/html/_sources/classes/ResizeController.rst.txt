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

.. _ResizeController:

:trst-class:`ResizeController`
==============================

.. rst-class:: trst-class-desc

This class can be used to synchronize and propagate browser resize events across different Charts.

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new ResizeController(): ResizeController

Properties
----------

----

:trst-property:`components`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of Charts that the ResizeController will control. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ResizableChart<ResizableChart>` <any> []

Methods
-------

----

:trst-method:`addComponent`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This registers a Chart to the controller. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addComponent<T>(component): void
:Type parameters:
 :trst-type-parameter:`T`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     T, generic
   
:Parameters:
 :trst-parameter:`component`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ResizableChart<ResizableChart>` <:ref:`T<T>`>
   

:trst-method:`addComponents`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This registers a list of Charts to the controller. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addComponents(components): void
:Parameters:
 :trst-parameter:`components`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ResizableChart<ResizableChart>` <any> []
   

:trst-method:`resize`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This is the method that will actually call resize() on all of the controller's registered components. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  resize(): void

:trst-method:`trigger`
++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method will check if any of the component's container's dimensions have changed, and then it will call resize() if they have. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  trigger(): void

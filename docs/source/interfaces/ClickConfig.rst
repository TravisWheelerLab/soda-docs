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

.. _ClickConfig:

:trst-interface:`ClickConfig`
=============================

.. rst-class:: trst-interface-desc

A simple interface to provide a common pattern for defining behavior that should be executed when a SODA glyph is clicked by a user.

:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>`
   
Properties
----------

----

:trst-property:`ann`
++++++++++++++++++++

.. rst-class:: trst-property-desc

The Annotation to which a click behavior will be bound. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`A<A>`

:trst-property:`click`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function that will be responsible for executing the click behavior. It will implicitly receive references to both a D3 Selection to the Annotation's representative glyph and the Annotation object itself. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (s: Selection <any, any, any, any>, a: A): void

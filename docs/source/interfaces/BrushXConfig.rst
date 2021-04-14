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

.. _BrushXConfig:

:trst-interface:`BrushXConfig`
==============================

.. rst-class:: trst-interface-desc

An interface to define the configuration for registering a brushXBehavior.

:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>`
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any>
   
Properties
----------

----

:trst-property:`brush`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The callback that is repeatedly called throughout the brush event (as the brush is moved). 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (args: BrushCallbackArgs <A, C>): void

:trst-property:`end`
++++++++++++++++++++

.. rst-class:: trst-property-desc

The callback for the end of the brush event. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (args: BrushCallbackArgs <A, C>): void

:trst-property:`start`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The callback for the start of the brush event. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (args: BrushCallbackArgs <A, C>): void

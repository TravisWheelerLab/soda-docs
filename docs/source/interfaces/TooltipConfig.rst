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

.. _TooltipConfig:

:trst-interface:`TooltipConfig`
===============================

.. rst-class:: trst-interface-desc

An interface that holds the parameters for configuring a glyph tooltip.

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

:trst-property:`ann`
++++++++++++++++++++

.. rst-class:: trst-property-desc

The Annotation object whose representative glyph we are binding the tooltip to. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`A<A>`

:trst-property:`backgroundColor`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function to set the background color of the tooltip. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`borderRadius`
+++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function to set the border radius of the tooltip. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`opacity`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function to set the opacity of the tooltip. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`padding`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function to set the css padding on of the tooltip. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`text`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function to set the tooltip text. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (a: A, c: C): string

:trst-property:`textColor`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback function to set the tooltip text color. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

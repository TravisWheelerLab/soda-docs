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

.. _RuleController:

:trst-class:`RuleController`
============================

.. rst-class:: trst-class-desc

This plugin object allows a dynamic vertical rule to be added to any Chart.

**Implements**
 .. rst-class:: trst-implements

  :ref:`Plugin<Plugin>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new RuleController(): RuleController

Properties
----------

----

:trst-property:`activeComponent`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The component that the RuleController has identified as the one that the user is currently hovering with the mouse. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ChartBase<ChartBase>` <any>

:trst-property:`components`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of Charts that the RuleController will place rules in. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ChartBase<ChartBase>` <any> []

:trst-property:`enabled`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A boolean flag that describes whether or not the rules are being displayed. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  boolean

:trst-property:`ruleDivs`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of the rule divs controlled by the controller. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Selection<Selection>` <any, any, any, any> []

:trst-property:`tooltipDivs`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of the rule tooltips controlled by the controller. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Selection<Selection>` <any, any, any, any> []

Methods
-------

----

:trst-method:`addComponent`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Add a component to the RuleController and add a rule to that component. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addComponent(component): void
:Parameters:
 :trst-parameter:`component`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ChartBase<ChartBase>` <any>
   

:trst-method:`addComponents`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method registers a list of components with the RuleController. 
 

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
   
     :ref:`ChartBase<ChartBase>` <any> []
   

:trst-method:`alert`
++++++++++++++++++++

.. rst-class:: trst-method-desc

This should be called by registered components whenever the height of a component changes. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  alert(): void

:trst-method:`chartMouseMove`
+++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method is routed to the mousemove event on each components' SVG viewport. It updates the activeComponent property, and then moves the rule to follow the mouse position. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  chartMouseMove(chart): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ChartBase<ChartBase>` <any>
   

:trst-method:`createRuleTooltip`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

A utility function that creates the tooltip that floats next to the rule. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  createRuleTooltip(chart): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ChartBase<ChartBase>` <any>
   

:trst-method:`createVerticalRule`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

A utility function that creates the actual rule. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  createVerticalRule(chart): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ChartBase<ChartBase>` <any>
   

:trst-method:`disable`
++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  disable(): void

:trst-method:`enable`
+++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  enable(): void

:trst-method:`moveRule`
+++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method is responsible for moving the rule on each of the RuleController's components. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  moveRule(): void

:trst-method:`toggle`
+++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  toggle(self): void
:Parameters:
 :trst-parameter:`self`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`RuleController<RuleController>`
   

:trst-method:`updateRuleSize`
+++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method checks each component's height, and adjusts that height of each embedded rule to match it. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  updateRuleSize(): void

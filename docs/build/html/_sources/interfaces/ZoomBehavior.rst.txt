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

.. _ZoomBehavior:

:trst-interface:`ZoomBehavior`
==============================

.. rst-class:: trst-interface-desc

An interface that serves to provide a common pattern for defining unique re-rendering behavior for distinct groups of glyphs rendered with SODA.

:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-desc
 A ZoomBehavior should be typed with the Chart extension that it will be applied in. This provides the re-rendering function with any properties of that target Chart extension that may be necessary to appropriately re-render the glyphs.

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any>
   
:Type parameters:
 :trst-type-parameter:`S`

 .. rst-class:: trst-type-parameter-desc
 A ZoomBehavior should be typed with the type of D3 selection that it is intended to be applied to. This may help illuminate errors that could occur when the ZoomBehavior is inadvertently applied to a D3 selection to the wrong glyphs/DOM elements. 

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     S extends :ref:`d3.Selection<d3.Selection>` <any, any, any, any>
   
Properties
----------

----

:trst-property:`id`
+++++++++++++++++++

.. rst-class:: trst-property-desc

A unique identifier for the ZoomBehavior. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The selector string is used as an argument to d3.selectAll(), and it should be unique such that selectAll() returns a D3 selection only to the ZoomBehavior's intended target glyphs. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

Methods
-------

----

:trst-method:`apply`
++++++++++++++++++++

.. rst-class:: trst-method-desc

Typically, a ZoomBehavior will make a D3 selection using the ZoomBehaviors selector property as an argument, then call apply() with the target Chart and the selection as arguments. This function should be responsible for making any necessary changes to the attributes and style of the DOM elements in that selection. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  apply(chart, selection): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 The Chart in which the target glyphs have been rendered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`selection`

 .. rst-class:: trst-parameter-desc
 A D3 selection to the target glyphs. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`S<S>`
   

:trst-method:`applyDuration`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This should be the same exact function as apply, except it should use the D3 transition function to make the behavior seem animated. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  applyDuration(chart, selection, duration): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-desc
 The Chart in which the target glyphs have been rendered.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`selection`

 .. rst-class:: trst-parameter-desc
 A D3 selection to the target glyphs.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`S<S>`
   
 :trst-parameter:`duration`

 .. rst-class:: trst-parameter-desc
 The time in milliseconds over which the application of the ZoomBehavior will take place. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

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

.. _ForwardChevronZoomBehavior:

:trst-class:`ForwardChevronZoomBehavior`
========================================

**Implements**
 .. rst-class:: trst-implements

  :ref:`ZoomBehavior<ZoomBehavior>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new ForwardChevronZoomBehavior<A, C>(selector): ForwardChevronZoomBehavior
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any, :ref:`C<C>`>
   
:Parameters:
 :trst-parameter:`selector`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

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

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  apply(chart, selection): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`selection`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Selection<Selection>` <:ref:`SVGPatternElement<SVGPatternElement>`, :ref:`A<A>`, :ref:`HTMLElement<HTMLElement>`, any>
   

:trst-method:`applyDuration`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  applyDuration(chart, selection, duration): void
:Parameters:
 :trst-parameter:`chart`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`C<C>`
   
 :trst-parameter:`selection`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Selection<Selection>` <:ref:`SVGPatternElement<SVGPatternElement>`, :ref:`A<A>`, :ref:`HTMLElement<HTMLElement>`, any>
   
 :trst-parameter:`duration`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

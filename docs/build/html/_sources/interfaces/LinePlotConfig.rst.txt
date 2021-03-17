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

.. _LinePlotConfig:

:trst-interface:`LinePlotConfig`
================================

.. rst-class:: trst-interface-desc

An interface that holds the parameters to style a line plot.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`GlyphConfig<GlyphConfig>`

:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`PlotAnnotation<PlotAnnotation>`
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any>
   
Properties
----------

----

:trst-property:`lineFunc`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A custom defined d3.Line function, which is what is used to determine the x and y coordinates of each point. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Line<Line>` <:ref:`PointDatum<PointDatum>`>

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`strokeColor`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke color of the line plot. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`strokeDashArray`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke dash array of the line plot. Supplying this will allow lines to be dotted/dashed. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`strokeOpacity`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke opacity of the line plot. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`strokeWidth`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke width of the line plot. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`zoom`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

A custom defined zoom behavior for all of the glyphs rendered with this config. This is intended to be used by experienced users only. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ZoomBehavior<ZoomBehavior>` <:ref:`C<C>`, :ref:`Selection<Selection>` <:ref:`SVGElement<SVGElement>`, :ref:`A<A>`, :ref:`HTMLElement<HTMLElement>`, any>>

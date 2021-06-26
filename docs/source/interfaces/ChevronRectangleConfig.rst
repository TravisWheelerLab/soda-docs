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

.. _ChevronRectangleConfig:

:trst-interface:`ChevronRectangleConfig`
========================================

.. rst-class:: trst-interface-desc

An interface that holds the parameters for rendering and configuring a chevron rectangle glyph.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`ChevronPrimitiveConfig<ChevronPrimitiveConfig>` :ref:`RectangleConfig<RectangleConfig>`

:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`OrientedAnnotation<OrientedAnnotation>`
   
:Type parameters:
 :trst-type-parameter:`C`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     C extends :ref:`Chart<Chart>` <any>
   
Properties
----------

----

:trst-property:`backgroundFillColor`
++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the color attribute of the rectangle that is used for the background of the chevron glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`backgroundFillOpacity`
++++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the opacity attribute of the rectangle that is used for the background of the chevron glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`backgroundH`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the height attribute of the rectangle that is used for the background of the chevron glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`chevronFillColor`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the fill color of the SVG path that is placed inside of the background rectangle. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`chevronFillOpacity`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the fill opacity of the SVG path that is placed inside of the background rectangle. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`chevronH`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the height of the chevron SVG path that is placed inside of the background rectangle. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`chevronSpacing`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the spacing between chevrons in the SVG pattern that is affixed to the glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`chevronStrokeColor`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke color of the SVG path that is placed inside of the background rectangle. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`chevronStrokeOpacity`
+++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke opacity of the SVG path that is placed inside of the background rectangle. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`chevronStrokeWidth`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke width of the SVG path that is placed inside of the background rectangle. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`chevronY`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the y coordinate of the chevron pattern. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`disableChevronAt`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The semantic query width at which the chevron patterns will be disabled. At this point, they will look like regular rectangles or lines. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`fillColor`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the fill color of the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`fillOpacity`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the fill opacity of the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`h`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the height of the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`strokeColor`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke color of the border around the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): string

:trst-property:`strokeOpacity`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the opacity of the border around the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`strokeWidth`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the stroke width of the border around the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`w`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the width of the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the semantic x coordinate of the rectangle glyph. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (a: A, c: C): number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

A callback to define the y coordinate of the rectangle glyph. 
 
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

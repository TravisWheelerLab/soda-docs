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

.. _ResizableChart:

:trst-interface:`ResizableChart`
================================

.. rst-class:: trst-interface-desc

A simple interface that defines what a Chart needs to implement in order to be registered to a ResizeController.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`Chart<Chart>`

:Type parameters:
 :trst-type-parameter:`T`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     T, generic
   
Properties
----------

----

:trst-property:`_xScale`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A d3 scale that the Chart will use to translate between semantic and SVG viewport coordinates. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ScaleLinear<ScaleLinear>` <number, number>

:trst-property:`binHeight`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels of a horizontal bin in the visualization. Generally, the y coordinate of an Annotation glyph will be given in terms of which bin it should be rendered in. This defaults to a value of 10. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`height`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels of the Chart's SVG viewport. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A string that can be used to uniquely select the target DOM container via d3.select(). 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`svgSelection`
+++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A d3 selection of the Chart's SVG viewport. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Selection<Selection>` <any, any, any, any>

:trst-property:`verticalPad`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The amount of space in pixels to pad the top and bottom of the chart. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`width`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The width in pixels of the Chart's SVG viewport. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

Methods
-------

----

:trst-method:`getContainerHeight`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should return the height of the Chart's DOM container. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getContainerHeight(): number

:trst-method:`getContainerWidth`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should return the width of the Chart's DOM container. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getContainerWidth(): number

:trst-method:`getSemanticViewRange`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should return the semantic dimensions of what is currently displayed in the Chart's SVG viewport. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSemanticViewRange(): None

:trst-method:`getXScale`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should return a reference to whatever d3 scale the chart is using for coordinate translation. This may be a scale internal to the Chart, or it may be a ZoomController's scale. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getXScale(): ScaleLinear

:trst-method:`render`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should be responsible for rendering glyphs inside of the Chart. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  render(params): void
:Parameters:
 :trst-parameter:`params`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`T<T>`
   

:trst-method:`resize`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should be responsible for resizing the Chart whenever necessary. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  resize(): void

:trst-method:`setToContainerDimensions`
+++++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should set the size of the SVG viewport to match the Chart's DOM container. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setToContainerDimensions(): void

:trst-method:`setToSvgDimensions`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should set the Chart's internal dimensions to match the SVG viewport dimensions. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setToSvgDimensions(): void

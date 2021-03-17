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

.. _ChartBase:

:trst-class:`ChartBase`
=======================

.. rst-class:: trst-class-desc

This is an abstract class that provides some default implementations for Charts. It basically just handles creating and keeping track of an SVG viewport in the DOM, creating a d3 scale that is used to translate between semantic coordinates and viewport coordinates, and provides some utility methods to get information about the dimensions of a Chart's container in the DOM.

:**Implements**:
 .. rst-class:: trst-implements

  :ref:`Chart<Chart>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new ChartBase<P>(config): ChartBase
:Type parameters:
 :trst-type-parameter:`P`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     P extends :ref:`ChartRenderParams<ChartRenderParams>`
   
:Parameters:
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ChartConfig<ChartConfig>`
   

Properties
----------

----

:trst-property:`_renderParams`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The last used render parameters. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`P<P>`

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

:trst-property:`plugins`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of plugins attached to the Chart. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Plugin<Plugin>` []

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

:trst-method:`alertPlugins`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This calls each of this Chart's attached plugin's alert() method. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  alertPlugins(): void

:trst-method:`getContainerDimensions`
+++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This uses d3 to select the Chart's DOM container and returns a DOMRect that describes that containers dimensions. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getContainerDimensions(): DOMRect

:trst-method:`getContainerHeight`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This returns the Chart's DOM container's height in pixels. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getContainerHeight(): number

:trst-method:`getContainerWidth`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This returns the Chart's DOM container's width in pixels. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getContainerWidth(): number

:trst-method:`getRenderParams`
++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the Chart's previously used render parameters. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getRenderParams(): P

:trst-method:`getSelector`
++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Get the string selector to the container that the Chart lives in. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSelector(): string

:trst-method:`getSemanticViewRange`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Get the semantic coordinate range of what is currently shown in the Chart's viewport. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSemanticViewRange(): None

:trst-method:`getSvgDimensions`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This returns a DOMRect that describes the SVG viewport's dimensions. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSvgDimensions(): DOMRect

:trst-method:`getSvgHeight`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This returns the width of the SVG viewport in pixels. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSvgHeight(): number

:trst-method:`getSvgWidth`
++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This returns the width of the SVG viewport in pixels. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSvgWidth(): number

:trst-method:`getXScale`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Get a reference to the Chart's internal d3 scale used for translating between semantic and viewport coordinates. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getXScale(): ScaleLinear

:trst-method:`inRender`
+++++++++++++++++++++++

.. rst-class:: trst-method-desc

This abstract method should be implemented to use soda's glyph rendering module to actually render the appropriate glyphs using the provided render parameters. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  inRender(params): void
:Parameters:
 :trst-parameter:`params`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`P<P>`
   

:trst-method:`postRender`
+++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This abstract method should be implemented to perform anything that needs to be done in the chart after a render has taken place. This will generally be things like alerting plugins or calling the zoom trigger. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  postRender(params): void
:Parameters:
 :trst-parameter:`params`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`P<P>`
   

:trst-method:`preRender`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This abstract method should be implemented to perform anything that needs to be done in the Chart before it actually starts to render something. This will generally be things like updating the query range parameters. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  preRender(params): void
:Parameters:
 :trst-parameter:`params`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`P<P>`
   

:trst-method:`render`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This method just stores the render parameters on the Chart and calls preRender(), inRender(), and postRender(). This is set up this way since preRender() and postRender() will often have common implementations, but inRender() generally will not. 
 

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
   
     :ref:`P<P>`
   

:trst-method:`setHeight`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This set's the Chart's height to an explicit pixel value. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setHeight(height): void
:Parameters:
 :trst-parameter:`height`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

:trst-method:`setToContainerDimensions`
+++++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This figures out the Chart's DOM container's dimensions, and sets the Chart's viewport SVG to fill those dimensions. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setToContainerDimensions(): void

:trst-method:`setToSvgDimensions`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This figures out the Chart's SVG viewport dimensions, and sets the Chart's internal dimensions to match. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setToSvgDimensions(): void

:trst-method:`setXScale`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Set the internal d3 scale to map from the provided semantic query range to the Chart's current viewport dimensions. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setXScale(queryStart, queryEnd): void
:Parameters:
 :trst-parameter:`queryStart`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   
 :trst-parameter:`queryEnd`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

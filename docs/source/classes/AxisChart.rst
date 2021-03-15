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

.. _AxisChart:

:trst-class:`AxisChart`
=======================

.. rst-class:: trst-class-desc

The AxisChart is a simple chart that displays a horizontal axis with semantic coordinates.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`ChartBase<ChartBase>`

**Implements**
 .. rst-class:: trst-implements

  :ref:`ResizableChart<ResizableChart>`
, :ref:`ZoomableChart<ZoomableChart>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new AxisChart(config): AxisChart
:Parameters:
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ChartConfig<ChartConfig>`
   

Properties
----------

----

:trst-property:`_axis`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The d3 Axis object that will be rendered by the AxisChart. It will be defined after render() is called. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Axis<Axis>` <number | None>

:trst-property:`_axisSelection`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A d3 selection to the DOM elements that the axis will be rendered as. It will be defined after render() is called. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Selection<Selection>` <any, any, any, any>

:trst-property:`_queryEnd`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The end of the currently displayed query in semantic coordinates. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`_queryStart`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The start of the currently displayed query in semantic coordinates. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`_renderParams`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The last used render parameters. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`AxisRenderParams<AxisRenderParams>`

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

:trst-property:`zoomBehaviors`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The list of ZoomBehaviors for the Chart. There won't actually be any ZoomBehaviors for an AxisChart, as it uses the default d3 zooming functionality. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ZoomBehavior<ZoomBehavior>` <:ref:`AxisChart<AxisChart>`, any> []

:trst-property:`zoomController`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The ZoomController that this chart accepts zoom events from. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ZoomController<ZoomController>`

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

:trst-method:`clearAxis`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This removes all of the SVG elements that the AxisChart has rendered. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  clearAxis(): void

:trst-method:`getAxis`
++++++++++++++++++++++

.. rst-class:: trst-method-desc

The getter function for the d3 Axis object. This should be used when accessing the axis. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getAxis(): Axis

:trst-method:`getAxisSelection`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

The getter for the d3 selection of all of the SVG elements rendered by the AxisChart. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getAxisSelection(): Selection

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

:trst-method:`getQueryEnd`
++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

The getter for _queryEnd. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getQueryEnd(): number

:trst-method:`getQueryStart`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

The getter for _queryStart. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getQueryStart(): number

:trst-method:`getRenderParams`
++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the Chart's previously used render parameters. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getRenderParams(): AxisRenderParams

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

The getter for the d3 scale that is used for the axis. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getXScale(): ScaleLinear

:trst-method:`getZoomBehaviors`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This returns the AxisCharts ZoomBehaviors. Currently, this returns an empty list by default, since AxisCharts do not actually use ZoomBehaviors. Instead, this calls internal functions that will appropriately re-render the AxisChart for the new zoom level. This is somewhat of a bandaid fix, and I expect it to change at some point. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getZoomBehaviors(): None

:trst-method:`inRender`
+++++++++++++++++++++++

.. rst-class:: trst-method-desc

This creates the d3 Axis object and uses it to render the SVG elements. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  inRender(): void

:trst-method:`postRender`
+++++++++++++++++++++++++

.. rst-class:: trst-method-desc

There is currently no postRender routine for the AxisChart, so this does nothing. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  postRender(): void

:trst-method:`preRender`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This updates the query range with the given parameters, and then uses setXScale() to set the internal d3 scale. 
 

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
   
     :ref:`AxisRenderParams<AxisRenderParams>`
   

:trst-method:`registerZoomController`
+++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Register a ZoomController to the AxisChart. This will not currently register the AxisChart with a ZoomController. Instead, when a Chart is added to a ZoomController, the ZoomController will call this method using itself as an argument. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  registerZoomController(controller): void
:Parameters:
 :trst-parameter:`controller`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ZoomController<ZoomController>`
   

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
   
     :ref:`AxisRenderParams<AxisRenderParams>`
   

:trst-method:`resize`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This resizes the Axis to fit the size of its container. This will be called by a ResizeController if one is assigned to the AxisChart. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  resize(): void

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

This uses the AxisChart's current queryStart and queryEnd to set the d3 scale used for the axis. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setXScale(): void

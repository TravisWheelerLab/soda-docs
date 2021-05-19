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

.. _HeatmapChart:

:trst-class:`HeatmapChart`
==========================

.. rst-class:: trst-class-desc

This is a Chart class that renders a single PlotAnnotation as a heatmap.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`TrackChart<TrackChart>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new HeatmapChart(config): HeatmapChart
:Parameters:
 :trst-parameter:`config`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`HeatmapChartConfig<HeatmapChartConfig>`
   

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

  undefined | :ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`

:trst-property:`_xScale`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A d3 scale that the Chart will use to translate between semantic and SVG viewport coordinates. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ScaleLinear<ScaleLinear>` <number, number>

:trst-property:`binCount`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

This keeps track of the number of vertical "bins" present in this TrackChart's current visualization. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`binHeight`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels of a horizontal bin in the visualization. Generally, the y coordinate of an Annotation glyph will be given in terms of which bin it should be rendered in. This defaults to a value of 10. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`colorScale`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ScaleSequential<ScaleSequential>` <string>

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

:trst-property:`scaleExtent`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of two numbers that define the extent to which a zoom event is allowed to transform the TrackChart's underlying scale. Simply put, this controls how far in and out a user will be able to zoom. The first number is the maximum zoom-out factor, and the second is the maximum zoom-in factor. For example, setting this to [1, 10] will prevent a user from zooming out past the point at which the chart is initially rendered, and allow them to zoom in by a factor of 10. For more info, see https://github.com/d3/d3-zoom/blob/master/README.md#zoom_scaleExtent 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  None

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

:trst-property:`translateExtent`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

This is a callback function that is used to set the translate extent (left/right panning) allowed when a zoom event is applied to the TrackChart. It needs to be a callback, because it needs the absolute width of the TrackChart's SVG viewport, which is allowed to change throughout the TrackChart's lifetime. For example, setting this to: (chart) => [[0, 0], [chart.width, chart.height]] will restrict the panning in the TrackChart to exactly the range that was initially rendered. For more info, see https://github.com/d3/d3-zoom/blob/master/README.md#zoom_translateExtent 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  (chart: TrackChart <any>): None

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

:trst-property:`yOffset`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

This defines which bin (starting from the top) this TrackChart will start rendering in. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`zoomBehaviors`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The list of ZoomBehaviors that this chart will pass to the ZoomController during a zoom event. These objects define how all of the different glyphs rendered in this TrackChart will be transformed during a zoom event. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ZoomBehavior<ZoomBehavior>` <:ref:`TrackChart<TrackChart>` <:ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`>, any> []

:trst-property:`zoomController`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The ZoomController that this chart accepts zoom events from. If the TrackChart has a ZoomController, it will default to using the controller's scale instead of the TrackChart's internal scale. 
 
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

:trst-method:`callZoomTrigger`
++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This is the handler method that will be called when the SVG viewport receives a browser zoom event. If there is no ZoomController defined, it will do nothing. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  callZoomTrigger(): void

:trst-method:`configureZoom`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This configures the SVG viewport to appropriately handle browser zoom events. It is called in the constructor, and in the TrackChart's resize() method. Currently, most of what this does is prevent zooming with the scroll wheel unless the ctrl key is pressed, and re-applies the scale and translate extents. Eventually, this should end up being parameterized to be a bit more user-configurable. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  configureZoom(): void

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

  getRenderParams(): HeatmapChartRenderParams

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

Getter for the TrackChart's d3 scale that maps between semantic coordinates and viewport coordinates. If there is ZoomController assigned to the TrackChart, it will return the ZoomController's scale instead. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getXScale(): ScaleLinear

:trst-method:`getZoomBehaviors`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This is called by a ZoomController during a zoom event to receive the list of ZoomBehaviors that the ZoomController will then use to re-render the glyphs in the TrackChart appropriately given the new zoom level. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getZoomBehaviors(): None

:trst-method:`getZoomController`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

A getter for the ZoomController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getZoomController(): ZoomController

:trst-method:`inRender`
+++++++++++++++++++++++

.. rst-class:: trst-method-desc

This uses the heatmap plot glyph module to render the heatmap. 
 

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
   
     :ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`
   

:trst-method:`initialRender`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This resets the x scale to agree with the render parameters then calls render(). This method should be called for an initial render, or a render that is intended to reset the view in some way (e.g. whenever a 'submit query' button is pressed in a form). 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  initialRender(params): void
:Parameters:
 :trst-parameter:`params`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`
   

:trst-method:`postRender`
+++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This is called by render() after inRender() is called. Here, it is responsible for just calling the TrackChart's zoom trigger. 
 

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
   
     :ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`
   

:trst-method:`preRender`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This sets the binCount and height of the TrackChart to accommodate the render. 
 

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
   
     :ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`
   

:trst-method:`registerZoomController`
+++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Register a ZoomController to the TrackChart. This will not currently register the TrackChart with a ZoomController. Instead, when a Chart is added to a ZoomController, the ZoomController will call this method using itself as an argument. 
 

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
   
     :ref:`HeatmapChartRenderParams<HeatmapChartRenderParams>`
   

:trst-method:`resize`
+++++++++++++++++++++

.. rst-class:: trst-method-desc

This resizes the TrackChart to fit the size of its container. This will be called by a ResizeController if one is assigned to the TrackChart. The default behavior is for the TrackChart to fill its container, reconfigure the zoom settings to match the new size, and then re-render the glyphs to appropriately fit in the new dimensions. 
 

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

This takes the provided query arguments and sets the d3 scale to map between the provided semantic range and the TrackChart's actual SVG viewport coordinate space. If there is a ZoomController assigned to the TrackChart, it will set the ZoomController's scale instead. 
 

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
   

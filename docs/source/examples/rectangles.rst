Drawing Rectangles
==================
This example is implemented in TypeScript.
To get started, we'll first want to import d3 and SODA.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-1.ts
    :language: typescript

Next, we'll create two SODA objects: an :ref:`AxisChart` and a :ref:`TrackChart`.
The AxisChart constructor expects a :ref:`ChartConfig` argument, and the TrackChart expects a :ref:`TrackChartConfig` argument.
In this case, both config objects only provide a CSS selector that identifies the DOM container that the charts will be inserted into.
Once these objects are instantiated, the charts will exist in the DOM as empty SVG elements.

.. literalinclude:: ../_static/code-examples/rectangles/main.ts
    :language: typescript

Once we have our charts, we'll create a :ref:`ZoomController` and a :ref:`ResizeController`, which are objects that make it easy to synchronize zoom and resize events across multiple charts.
Once the controllers are created, we configure them to manage both of our charts, and we wire the ResizeController to trigger upon a browser resize event.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-3.ts
    :language: typescript

Now we'll need some annotation data to work with.
In SODA, annotation data is represented with :ref:`Annotation` objects.
For this example, we'll manually create a handful of Annotations.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-4.ts
    :language: typescript

Before rendering SODA Charts, they need to be initialized with a RenderParams object.
At a minimum, the RenderParams object supplies the initial coordinate range that will be rendered in the Chart.

In our case, we'll need both an :ref:`AxisRenderParams` and a :ref:`TrackChartRenderParams`.
It turns out that TrackChartRenderParams implicitly implements the AxisRenderParams interface, so we'll only need the former.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-5.ts
    :language: typescript

All SODA glyphs are configurable with config object that is passed as an argument into a rendering function.
The config objects have type parameters for both the type of Annotation object and Chart object that will be used.
Each style option is set via a callback function that implicitly receives a reference to an Annotation and the Chart it is being rendered in.
This allows annotation glyphs to be dynamically styled using data stored on Annotations or Charts.

Here, we'll create a :ref:`RectangleConfig` object that is appropriately typed with Annotation and TrackChart.
Every glyph config requires a selector string, which is used to group glyphs rendered by distinct calls to the SODA rendering API together.
To color the fill and stroke of the rectangles, we'll supply callback functions that use each Annotation's id property as the argument to a D3 color scale.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-6.ts
    :language: typescript

We now have everything we need to render the rectangles.
First, we'll render each chart with our RenderParams, which will prepare the charts to appropriately display our annotations.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-7.ts
    :language: typescript

.. raw:: html
    :file: ../_static/example-builds/rectangles/index.html

----

Finally, we'll make a single call to the :ref:`rectangleGlyph` function, which will render our rectangles.

.. literalinclude:: ../_static/code-examples/rectangles/rectangles-8.ts
    :language: typescript

.. raw:: html
    :file: ../_static/example-builds/rectangles-2/index.html

----

The full code:

.. literalinclude:: ../_static/code-examples/rectangles/main.ts
    :language: typescript

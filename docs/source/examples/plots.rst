.. _drawing-plots:

Drawing plots
=============

SODA supplies specialized Chart classes that render data as line plots, bar plots, and heatmaps within the semantic coordinate system of a visualization.
This example shows a short run of GC content data visualized by each of the plot Charts.
We'll start off by instantiating each of the plot Charts.

.. literalinclude:: ../_static/code-examples/plots/plots-1.ts
    :language: typescript

Next, we'll take the GC data and make a :ref:`PlotAnnotation` with it.
PlotAnnotation objects are meant to describe a segment of point data.

.. literalinclude:: ../_static/code-examples/plots/plots-2.ts
    :language: typescript

The plot Chart classes expect a single PlotAnnotation in their RenderParam arguments.

.. literalinclude:: ../_static/code-examples/plots/plots-3.ts
    :language: typescript

.. raw:: html
    :file: ../_static/example-builds/plots/index.html

----

The full code:

.. literalinclude:: ../_static/code-examples/plots/plots.ts
    :language: typescript

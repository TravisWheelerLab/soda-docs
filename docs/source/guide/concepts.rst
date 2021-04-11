.. _guide-concepts:

Concepts
========
This section presents a high-level overview of the concepts involved in developing an application with SODA.

Annotation objects
------------------
Annotation objects are SODA's internal representation of annotation data.
The base Annotation implementation stores only positional information and a unique identifier field.
Typically, a developer will implement an extension of the Annotation class, adding properties for auxiliary data.

Chart objects
-------------
Annotation objects are rendered as glyphs inside of Chart objects, which are largely wrappers around SVG viewports in a web browser.
SODA provides an abstract base Chart class, along with some functional extended charts for common visualization patterns.
For heavily customized visualizations, developers should implement an extension of a Chart class.

The charts provided by SODA are:

- :ref:`TrackChart`
- :ref:`AxisChart`
- :ref:`BarChart`
- :ref:`LineChart`
- :ref:`HeatmapChart`

Glyph Rendering
---------------
In a SODA visualization, Annotation objects are passed to the rendering module to render SVG glyphs inside of a Chart.
Annotations can be rendered as rectangles, lines, arrows, text, bar plots, line plots, or heatmaps.
Glyph style attributes are defined with callback functions that implicitly receive references to the represented Annotation object and the target Chart.

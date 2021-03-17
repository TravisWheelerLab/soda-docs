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

.. _LineChartConfig:

:trst-interface:`LineChartConfig`
=================================

.. rst-class:: trst-interface-desc

A simple interface that holds the arguments for the LineChart constructor.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`TrackChartConfig<TrackChartConfig>`

Properties
----------

----

:trst-property:`binHeight`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels of a horizontal bin in the visualization. Generally, the y coordinate of an Annotation glyph will be given in terms of which bin it should be rendered in. This defaults to a value of 10. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`height`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels of the Chart's SVG viewport. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`scaleExtent`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | None

:trst-property:`selector`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A string that can be used to uniquely select the target DOM container via d3.select(). 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | string

:trst-property:`translateExtent`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | (chart: TrackChart <any>): None

:trst-property:`verticalPad`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels with which to pad the top and bottom of the SVG viewport with empty space. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`width`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The height in pixels of the Chart's SVG viewport. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

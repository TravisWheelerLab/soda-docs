.. _simple-examples-bed:

Rendering BED data
==================

SODA provides a module that allows developers to easily parse BED formatted data and visualize it with SODA.
We'll start off with the typical setup of an AxisChart and a TrackChart.

.. literalinclude:: ../../_static/code-examples/bed/bed-1.ts
    :language: typescript

Then, we'll take a string of data in the BED6 format and parse it into :ref:`BedAnnotation` objects, which extend the base :ref:`Annotation`.

.. literalinclude:: ../../_static/code-examples/bed/bed-2.ts
    :language: typescript

After a little bit of work to appropriately build some RenderParams, we can go straight to rendering the BedAnnotations as rectangles.

.. literalinclude:: ../../_static/code-examples/bed/bed-3.ts
    :language: typescript


.. raw:: html
    :file: ../../_static/example-builds/bed/index.html

----

.. literalinclude:: ../../_static/code-examples/bed/bed.ts
    :language: typescript

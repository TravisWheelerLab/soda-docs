.. _gff3-data:

Rendering GFF3 data
===================

SODA provides a module that allows developers to easily parse GFF3 formatted data and visualize it with SODA.
We'll start off with the typical setup of an AxisChart and a TrackChart.

.. literalinclude:: ../../_static/code-examples/gff3/gff3-1.ts
    :language: typescript

Then, we'll take a string of data in the GFF3 format and parse it into :ref:`Gff3Annotation` objects, which extend the base :ref:`Annotation`.

.. literalinclude:: ../../_static/code-examples/gff3/gff3-2.ts
    :language: typescript

We'll filter out just the exons, then get a list of the IDs of each of their parent annotations (transcripts).

.. literalinclude:: ../../_static/code-examples/gff3/gff3-3.ts
    :language: typescript

We can create an :ref:`AnnotationGroup` for each set of Annotations that share a parent.

.. literalinclude:: ../../_static/code-examples/gff3/gff3-4.ts
    :language: typescript

After applying a layout function to the AnnotationGroups and little bit of work to appropriately build some RenderParams, we can render the Gff3Annotations as chevron rectangles.

.. literalinclude:: ../../_static/code-examples/gff3/gff3-5.ts
    :language: typescript

.. raw:: html
    :file: ../../_static/example-builds/gff3/index.html

----

The full code:

.. literalinclude:: ../../_static/code-examples/gff3/gff3.ts
    :language: typescript

.. _simple-examples-layout:

Using the layout module
=======================

For cases in which the vertical placement of annotation glyphs has no semantic meaning in a visualization, SODA provides a layout optimization module.
This example will demonstrate the layout with several hundred randomized Annotations in a TrackChart.

.. literalinclude:: ../../_static/code-examples/layout/layout-1.ts
    :language: typescript

Once we have our randomly placed Annotations, we can simply pass them into a layout function.
In this case, we will use :ref:`intervalGraphLayout`.
The layout functions directly modify the **y** property on each of the Annotation objects and returns the number of layers used in the layout.

.. literalinclude:: ../../_static/code-examples/layout/layout-2.ts
    :language: typescript

Now, we can simply render the Annotations as usual.

.. literalinclude:: ../../_static/code-examples/layout/layout-3.ts
    :language: typescript

.. raw:: html
    :file: ../../_static/example-builds/layout/index.html

----

The full code:

.. literalinclude:: ../../_static/code-examples/layout/layout.ts
    :language: typescript

----

SODA provides three layout algorithms:,

- :ref:`intervalGraphLayout`
- :ref:`greedyGraphLayout`
- :ref:`heuristicGraphLayout`

The following example shows how all three perform on the same set of Annotations.

.. literalinclude:: ../../_static/code-examples/layout/layout-4.ts
    :language: typescript

.. raw:: html
    :file: ../../_static/example-builds/layout-2/index.html

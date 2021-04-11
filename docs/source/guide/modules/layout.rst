.. _layout:

Layout
======

The coordinate spaces of sequence annotations are usually one dimensional (e.g. position on a chromosome).
In these cases, only the horizontal positioning of a glyph in a visualization has semantic meaning, and verticality is only introduced to prevent the visual overlap of distinct features.
SODA provides a module that optimizes the vertical layout of annotation glyphs to conserve vertical screen real estate while preventing any horizontal overlap.
For situations in which vertical positioning *does* have semantic meaning, a developer is free to define their own layout.

There are currently three SODA layout functions:

- :ref:`greedyGraphLayout`
- :ref:`heuristicGraphLayout`
- :ref:`intervalGraphLayout`

Each defines a layout using a different reduction of the  `graph coloring problem`_.
The layout functions directly modify the y properties of the Annotations objects supplied as arguments.

.. _graph coloring problem: https://en.wikipedia.org/wiki/Graph_coloring

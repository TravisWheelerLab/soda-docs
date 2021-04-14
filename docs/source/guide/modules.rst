.. _guide-modules:

Modules
=======

.. warning::
    This part of the API is the most likely to change.

The following SODA modules provide a set of features that simplify and augment the process of rendering glyphs:

- :ref:`Parsing<parse>` - parsing routines and complementary Annotation extensions for GFF3 and BED data
- :ref:`Layout management<layout>` - defines glyph layouts that optimize for vertical space while preventing horizontal overlap
- :ref:`ID mapping<id-map>` - a module that maps Annotation objects to DOM elements
- :ref:`Zooming and panning<zoom>` - add realtime zooming and panning to Charts
- :ref:`Resizing<resize>` - a simple way to handle Chart response to browser resize events
- :ref:`Query management<query>` - a framework that helps manage data queries and the use of their responses to render glyphs
- :ref:`Multi-track management<track-rack>` - a framework that helps manage multi-track visualizations
- :ref:`Click and hover behaviors<click-and-hover>` - define the behavior executed when glyphs are clicked or hovered
- :ref:`Brush behaviors<brush>` - define the behavior executed when a brush selection is made in a chart

.. toctree::
    :maxdepth: 2
    :hidden:

    modules/parse
    modules/layout
    modules/id-map
    modules/zoom
    modules/resize
    modules/query
    modules/track-rack
    modules/click-and-hover
    modules/brush

.. _guide-modules:

Modules
=======

The following SODA modules provide a set of features that simplify and augment the process of rendering glyphs:

- :ref:`Parsing<parse>` - parsing routines and complementary Annotation extensions for GFF3 and BED data
- :ref:`Layout management<layout>` - defines glyph layouts that optimize for vertical space while preventing horizontal overlap
- :ref:`Zooming and panning<zoom>` - adds realtime zooming and panning to Charts
- :ref:`Resizing<resize>` - a simple way to handle Chart response to browser resize events
- :ref:`Query management<query>` - a framework that helps manage data queries and the use of their responses to render glyphs
- :ref:`Click behaviors<click>` - a simple way to define the behavior when a glyph is clicked
- :ref:`Hover behaviors<hover>` - simple way to define the behavior when a glyph is hovered

.. toctree::
    :maxdepth: 2
    :hidden:

    modules/parse
    modules/layout
    modules/zoom
    modules/resize
    modules/query
    modules/click
    modules/hover

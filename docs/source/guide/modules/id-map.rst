.. _id-map:

ID mapping
==========

Whenever a glyph is rendered with the rendering module, SODA internally keeps simple records of the Annotation objects used and the DOM elements created.

This module is primitive and may be brittle, but the following utility functions are provided:

- :ref:`getAllAnnotationIds' - get a list of all of the Annotation IDs that have been used to render a glyph
- :ref:`getAnnotationById` - get a reference to an Annotation object by its ID
- :ref:`getSelectionById` - get a `D3 selection`_ to the last glyph that was rendered by its represented Annotation ID

.. _D3 selection: https://github.com/d3/d3-selection

.. _zoom:

Zooming and panning
===================

Realtime horizontal zooming and panning can easily be added to a SODA visualization by registering Charts with a :ref:`ZoomController` object.
ZoomControllers can be configured to manage and synchronize the zoom level of multiple Charts in a visualization.

For an example of how this works, see any of the :ref:`simple examples<guide-simple-examples>`.

The way in which glyphs are re-rendered in response to a zoom event can be adjusted by providing a custom :ref:`ZoomBehavior` in the glyph config argument in a call to a rendering function.

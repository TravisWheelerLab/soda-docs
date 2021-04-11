.. _resize:

Resizing
========

The resize module provides a simple object, a :ref:`ResizeController` that mostly provides a single, convenient method to bind to a browser resize event.
A Chart needs to have a resize() method to be registered to ResizeController.

The :ref:`TrackChart`.resize() implementation maintains the semantic width of the current visualization and resizes the glyphs accordingly.

For an example of how this works, see any of the :ref:`simple examples<guide-simple-examples>`.

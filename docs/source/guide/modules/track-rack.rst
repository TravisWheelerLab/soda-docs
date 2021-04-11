.. _track-rack:

Multi-track management
======================

The multi-track management module provides a convenient framework that help set up and manage multi-track visualizations.
You'll notice that this is quite similar to using a :ref:`QueryController`, which is because this module is a simple wrapper around the QueryController.

To make use of the module, you'll need to:

- instantiate a :ref:`TrackRack` object
- register one or more charts with it
- provide a set of view width thresholds at which rendering will change
- provide rendering callback functions that accompany the width thresholds
- provide a :ref:`QueryBuilder` callback function, which defines how to build a new data query from the one that was previously used

The TrackRack is one of the more recent SODA features, and it still needs refinement and proper example/tutorial.

For the meantime, you can instead check out how it's used in the `ULTRA-SODA example application`_.
The ULTRA-SODA rendering callback implementations can be found `here`_, and the configuration of the TrackRack can be found on `this page`_.

.. _ULTRA-SODA example application: https://sodaviz.org/ulra-soda.html
.. _here: https://github.com/TravisWheelerLab/ultra-soda/blob/master/src/ultra-callbacks.ts
.. _this page: https://github.com/TravisWheelerLab/ultra-soda/blob/master/example/main.ts

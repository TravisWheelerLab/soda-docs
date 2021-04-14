.. _query:

Query management
================

The query management module provides a convenient framework that helps automate data queries and the use of their response to render glyphs.

To make use of the module, you'll need to:

- Instantiate a :ref:`QueryController` object
- Register one or more charts with it
- Provide a set of view width thresholds at which rendering will change
- Provide rendering callback functions that accompany the width thresholds
- Provide a :ref:`QueryBuilder` callback function, which defines how to build a new data query from the one that was previously used

Query management is one of the more recent SODA features, and it still needs refinement and a proper example/tutorial.

For the meantime, you can instead check out how it's used in the `Rmsk-SODA example application`_.
The Rmsk-SODA rendering callback implementations can be found `here`_, and the configuration of the QueryController can be found on `this page`_.

.. _Rmsk-SODA example application: https://sodaviz.org/rmsk-soda.html
.. _here: https://github.com/TravisWheelerLab/rmsk-soda/blob/master/src/rmsk-callbacks.ts
.. _this page: https://github.com/TravisWheelerLab/rmsk-soda/blob/master/example/main.ts

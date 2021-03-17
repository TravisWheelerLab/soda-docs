.. role:: trst-class
.. role:: trst-interface
.. role:: trst-function
.. role:: trst-property
.. role:: trst-property-desc
.. role:: trst-method
.. role:: trst-method-desc
.. role:: trst-parameter
.. role:: trst-type
.. role:: trst-type-parameter

.. _heuristicGraphLayout:

:trst-function:`heuristicGraphLayout`
=====================================

.. rst-class:: trst-function-desc

This function takes a list of Annotation objects and uses a non-deterministic greedy graph coloring heuristic to assign each of them a y coordinate in terms of horizontal bins that will prevent any horizontal overlap when they are rendered in a Chart.

:Call signature:
 .. rst-class:: trst-call-signature

  heuristicGraphLayout(ann, nIters, tolerance): number
:Parameters:
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Annotation<Annotation>` []
   
 :trst-parameter:`nIters`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   
 :trst-parameter:`tolerance`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

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

.. _greedyGraphLayout:

:trst-function:`greedyGraphLayout`
==================================

.. rst-class:: trst-function-desc

This function takes a list of Annotation objects and uses a deterministic greedy graph coloring algorithm to assign each of them a y coordinate in terms of horizontal bins that will prevent any horizontal overlap when they are rendered in a Chart.

:Call signature:
 .. rst-class:: trst-call-signature

  greedyGraphLayout<A>(ann, tolerance, vertSortFunction): number
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Parameters:
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>` []
   
 :trst-parameter:`tolerance`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   
 :trst-parameter:`vertSortFunction`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     (verts: string [], graph: AnnotationGraph <A>): void
   

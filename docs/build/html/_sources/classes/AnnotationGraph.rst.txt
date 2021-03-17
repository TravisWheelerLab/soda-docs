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

.. _AnnotationGraph:

:trst-class:`AnnotationGraph`
=============================

.. rst-class:: trst-class-desc

This class represents Annotations as a graph, in which there is an edge between two Annotations if they horizontally overlap in semantic coordinate space.

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new AnnotationGraph<A>(ann, tolerance, edgeFunction): AnnotationGraph
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Parameters:
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>` []
   
 :trst-parameter:`tolerance`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   
 :trst-parameter:`edgeFunction`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     (a: A, b: A, tolerance: number): boolean
   

Properties
----------

----

:trst-property:`degrees`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

This maps from Annotation id A to the number of edges it shares with other Annotations. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Map<Map>` <string, number>

:trst-property:`edges`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

This maps from Annotation id A to a list of Annotation id's that annotation id A shares an edge with. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Map<Map>` <string, string []>

:trst-property:`idMap`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

This maps from Annotation id's to Annotation objects 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Map<Map>` <string, :ref:`A<A>`>

Methods
-------

----

:trst-method:`getAnnotationFromId`
++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getAnnotationFromId(id): A
:Parameters:
 :trst-parameter:`id`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

:trst-method:`getEdges`
+++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getEdges(n): None
:Parameters:
 :trst-parameter:`n`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

:trst-method:`getVertices`
++++++++++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getVertices(): None

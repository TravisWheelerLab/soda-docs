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

.. _AnnotationGroup:

:trst-class:`AnnotationGroup`
=============================

.. rst-class:: trst-class-desc

An Annotation class that contains a group of Annotations. Mostly, this is used to maintain the group of Annotations at the same vertical position--all Annotations in the group will be set to the same y coordinate when the setY() method is called on the AnnotationGroup.

:**Extends**:
 .. rst-class:: trst-extends

  :ref:`Annotation<Annotation>`

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new AnnotationGroup<A>(conf): AnnotationGroup
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Parameters:
 :trst-parameter:`conf`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`AnnotationGroupConfig<AnnotationGroupConfig>` <:ref:`A<A>`>
   

Properties
----------

----

:trst-property:`group`
++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`A<A>` []

:trst-property:`h`
++++++++++++++++++

.. rst-class:: trst-property-desc

The height of an annotation in the visualization. This is currently not used by the SODA core. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`id`
+++++++++++++++++++

.. rst-class:: trst-property-desc

A unique identifier for an Annotation object. Currently, it is up to users to make sure that this field is uniquely assigned. SODA will not behave as intended if two distinct Annotations have the same id. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`w`
++++++++++++++++++

.. rst-class:: trst-property-desc

The width of the annotation in semantic coordinates. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

The x position of the annotation in semantic coordinates (generally a position on a chromosome in base pairs) 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`x2`
+++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`y`
++++++++++++++++++

.. rst-class:: trst-property-desc

The y position of the annotation. This rarely has semantic meaning, and is probably used to prevent horizontal overlap or preserve clarity in the visualization. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

Methods
-------

----

:trst-method:`add`
++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  add(ann): void
:Parameters:
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`A<A>`
   

:trst-method:`getW`
+++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the width. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getW(): number

:trst-method:`getX`
+++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the x coordinate. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getX(): number

:trst-method:`getX2`
++++++++++++++++++++

.. rst-class:: trst-method-desc

Gets the x2 coordinate. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getX2(): number

:trst-method:`setY`
+++++++++++++++++++

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setY(y): void
:Parameters:
 :trst-parameter:`y`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

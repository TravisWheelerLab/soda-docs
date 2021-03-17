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

.. _customBedParse:

:trst-function:`customBedParse`
===============================

.. rst-class:: trst-function-desc

A function that uses a custom parsing callback function to parse a string of BED records into an arbitrary type of Annotation objects.

:Call signature:
 .. rst-class:: trst-call-signature

  customBedParse<A>(lines, parseCallback): None
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-desc
 The Annotation type that this function will return. 

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Parameters:
 :trst-parameter:`lines`

 .. rst-class:: trst-parameter-desc
 The BED records, newline separated.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   
 :trst-parameter:`parseCallback`

 .. rst-class:: trst-parameter-desc
 The callback function that defines how to transform a BedRecord object into an Annotation object.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     (bedObj: BedRecord): A
   

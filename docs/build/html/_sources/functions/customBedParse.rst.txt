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

:Call signature:
 .. rst-class:: trst-call-signature

  customBedParse<A>(lines, parseCallback): None
:Type parameters:
 :trst-type-parameter:`A`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     A extends :ref:`Annotation<Annotation>` <:ref:`A<A>`>
   
:Parameters:
 :trst-parameter:`lines`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   
 :trst-parameter:`parseCallback`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     (bedObj: BedRecord): A
   

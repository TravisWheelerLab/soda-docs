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

.. _gff3ParseFlat:

:trst-function:`gff3ParseFlat`
==============================

.. rst-class:: trst-function-desc

This function takes a string of newline delimited GFF3 records and parses them into SODA Gff3Annotation objects. The objects are returned in a flat array with no semantic grouping.

:Call signature:
 .. rst-class:: trst-call-signature

  gff3ParseFlat(lines): None
:Parameters:
 :trst-parameter:`lines`

 .. rst-class:: trst-parameter-desc
 The string of newline delimited GFF3 records.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

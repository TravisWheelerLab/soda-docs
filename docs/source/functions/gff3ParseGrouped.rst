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

.. _gff3ParseGrouped:

:trst-function:`gff3ParseGrouped`
=================================

.. rst-class:: trst-function-desc

This function takes a string of newline delimited GFF3 records and parses them into SODA Gff3Annotation objects. Each group of objects with parent/children relationships is placed in an array, and the list of those group arrays is returned.

:Call signature:
 .. rst-class:: trst-call-signature

  gff3ParseGrouped(lines): None
:Parameters:
 :trst-parameter:`lines`

 .. rst-class:: trst-parameter-desc
 The string of newline delimited GFF3 records.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   

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

.. _BedRecord:

:trst-interface:`BedRecord`
===========================

.. rst-class:: trst-interface-desc

An interface that describes the SODA representation of a BED record object created by gmod/bed-js (see https://github.com/GMOD/bed-js).

Properties
----------

----

:trst-property:`blockCount`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A BED field that describes the number of (typically discontiguous) "blocks" that make up this record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`blockSizes`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of the sizes of each block counted by the blockCount field. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number []

:trst-property:`blockStarts`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The offset from chromStart at which each block starts. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number []

:trst-property:`chrom`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The name of the chromosome that the record is on. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`chromEnd`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The end coordinate of the record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`chromStart`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The start coordinate of the record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`itemRgb`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The color that the feature should be drawn. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`name`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

The name of the record. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`score`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The score of the record. This metric is rarely consistent across various data sources. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`strand`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

A number that represents the chromosome strand that the record is on. In the BED format spec, this is either a '+' or a '-'. Here, it's a number because that's what gmod/bed-js changes it into. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`thickEnd`
+++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A BED field that describes at which coordinate the feature should stop being drawn "thickly." 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`thickStart`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A BED field that describes at which coordinate the feature should be drawn "thickly." 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

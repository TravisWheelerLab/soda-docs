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

.. _Gff3Record:

:trst-interface:`Gff3Record`
============================

.. rst-class:: trst-interface-desc

An interface that describes the SODA representation of a GFF3 record created by gmod/gff3-js (see https://github.com/GMOD/gff-js).

Properties
----------

----

:trst-property:`attributes`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

This field can hold any number of tag-value pairs. It can get very complicated (see http://gmod.org/wiki/GFF3) 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Object<Object>`

:trst-property:`child_features`
+++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A tag that is often in the attributes of a GFF3 record. It describes any other features in the data that are a child of this feature. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Gff3Record<Gff3Record>` [] []

:trst-property:`derived_features`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A tag that is often in the attributes of a GFF3 record. It describes any other features in the data that are derived from this feature. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Gff3Record<Gff3Record>` [] []

:trst-property:`end`
++++++++++++++++++++

.. rst-class:: trst-property-desc

The end coordinate of the feature. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`phase`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

A field for the CDS type. This is either 0, 1, or 2 to describe the phase of the codons. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`score`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The score of the record. This metric is rarely consistent across various data sources. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`seq_id`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The name of the chromosome or scaffold that the record is on. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`source`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The source of the record, e.g. software title or database. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`start`
++++++++++++++++++++++

.. rst-class:: trst-property-desc

The start coordinate of the feature. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

:trst-property:`strand`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

A string that represents the chromosome strand that the record is on, it should be either '+' for forward or '-' for reverse. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`type`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

The type of the feature. This is supposed to be a term from the SOFA sequence ontology (see http://www.sequenceontology.org/so_wiki/index.php/Category:SO:SOFA). 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

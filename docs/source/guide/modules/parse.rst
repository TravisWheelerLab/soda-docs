.. _parse:

Parsing
=======

The parsing module provides routines to parse BED and GFF3 data into Annotation objects.
We will likely make improvements to the parsing module and support additional formats as need arises.

Under the hood, SODA uses the `bed-js`_ and `gff-js`_ tools developed by `gmod`_ to parse BED and GFF3 data.
The SODA parsing functions expect the data to be encoded as strings, with newline delimited records.

BED
---

The BED format has three required fields and nine optional fields (see the `BED format specification`_ for more info).
There are two SODA functions that parse BED data:

customBedParse()
++++++++++++++++
The :ref:`customBedParse` function should be used to convert BED records into a custom Annotation extension object.
Along with a string of newline delimited BED records, function must be supplied with a callback function that implements a translation from a :ref:`BedRecord` object into an :ref:`Annotation` object.
The customBedParse function has a type parameter, A, that must extend the base Annotation implementation.
The return of the callback function is typed with A, which helps enforces type safety in the object conversion when a developer needs to turn a BED record into a custom Annotation extension.

bed6Parse()
+++++++++++

The :ref:`bed6Parse` function explicitly parses BED records into :ref:`BedAnnotation` objects with the first six properties from the BED specification defined.
The remaining properties on the returned objects will be undefined.

For a complete example, see the :ref:`simple BED rendering example<simple-examples-bed>`.

GFF3
----

The GFF3 format has nine fields (see the `GFF3 format specification`_ for more info).

There are two functions that parse GFF3 data:

gff3ParseFlat()
+++++++++++++++

The :ref:`gff3ParseFlat` function parses GFF3 records into :ref:`Gff3Annotation` objects.
GFF3 records often have a nesting relationship of varying complexity.
While the references that define those relationships are preserved in the properties of the resulting objects, this function doesn't attempt to use the relationships to logically group the Annotation objects.

For a complete example, see the :ref:`simple GFF3 rendering example<simple-examples-gff3>`.

gff3ParseGrouped()
++++++++++++++++++

The :ref:`gff3ParseFlat` function parses GFF3 records into lists of :ref:`Gff3Annotation` objects that share the same parent record.

.. _bed-js: https://github.com/GMOD/bed-js
.. _gff-js: https://github.com/GMOD/gff-js
.. _gmod: http://gmod.org/wiki/Main_Page
.. _BED format specification: https://genome.ucsc.edu/FAQ/FAQformat.html#format1
.. _GFF3 format specification: https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md


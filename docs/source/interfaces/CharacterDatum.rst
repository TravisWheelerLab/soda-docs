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

.. _CharacterDatum:

:trst-interface:`CharacterDatum`
================================

.. rst-class:: trst-interface-desc

A simple interface to represent a single character and it's relative position in a SequenceAnnotation.

Properties
----------

----

:trst-property:`char`
+++++++++++++++++++++

.. rst-class:: trst-property-desc

The character. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  string

:trst-property:`columnType`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The type of the column in the alignment (if this CharacterDatum represents a column in a sequence alignment): match, substitution or gap. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`Match<Match>` | :ref:`Substitution<Substitution>` | :ref:`Gap<Gap>`

:trst-property:`parent`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The SequenceAnnotation that this CharacterDatum belongs to. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`SequenceAnnotation<SequenceAnnotation>`

:trst-property:`x`
++++++++++++++++++

.. rst-class:: trst-property-desc

The character's semantic position relative to the SequenceAnnotation's semantic position. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  number

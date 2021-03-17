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

.. _isCompactAnn:

:trst-function:`isCompactAnn`
=============================

.. rst-class:: trst-function-desc

A type guard function to check whether an arbitrary Annotation object is compactable. This may not currently be entirely robust, but it should be fine to use with reasonable caution.

:Call signature:
 .. rst-class:: trst-call-signature

  isCompactAnn(a): a
:Parameters:
 :trst-parameter:`a`

 .. rst-class:: trst-parameter-desc
 The Annotation object to type check. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Annotation<Annotation>`
   

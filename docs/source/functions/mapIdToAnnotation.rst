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

.. _mapIdToAnnotation:

:trst-function:`mapIdToAnnotation`
==================================

.. rst-class:: trst-function-desc

This function stores a reference to an Annotation object in an internal map that is keyed by string id's. By default, the SODA rendering module will call this function to map each rendered Annotation with its id property.

:Call signature:
 .. rst-class:: trst-call-signature

  mapIdToAnnotation(id, ann): void
:Parameters:
 :trst-parameter:`id`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     string
   
 :trst-parameter:`ann`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Annotation<Annotation>`
   

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

.. _ZoomController:

:trst-class:`ZoomController`
============================

.. rst-class:: trst-class-desc

This class can be used to synchronize and propagate browser zoom events across different Charts.

Constructor
-----------

----

:Call signature:
 .. rst-class:: trst-call-signature

  new ZoomController(): ZoomController

Properties
----------

----

:trst-property:`_queryController`
+++++++++++++++++++++++++++++++++

.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`QueryController<QueryController>` <any>

:trst-property:`_queryEnd`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The end of the semantic query range that the ZoomController expects its components to be displaying. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`_queryStart`
++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The start of the semantic query range that the ZoomController expects its components to be displaying. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`_width`
+++++++++++++++++++++++

.. rst-class:: trst-property-desc

The width in pixels that the ZoomController expects all of its components to have. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | number

:trst-property:`_xScale`
++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The initial D3 scale that the ZoomController will use to translate between semantic coordinates and the component's SVG viewport coordinates. This scale will be rescaled and stored as _zoomedXScale after a zoom event takes place. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ScaleLinear<ScaleLinear>` <number, number>

:trst-property:`_zoomedXScale`
++++++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

The rescaled D3 scale that gets created after a zoom event. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  undefined | :ref:`ScaleLinear<ScaleLinear>` <number, number>

:trst-property:`components`
+++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A list of Charts that the ZoomController will control. 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`ZoomableChart<ZoomableChart>` <any> []

:trst-property:`transform`
++++++++++++++++++++++++++

.. rst-class:: trst-property-desc

A D3 Transform object that represents the current zoom level relative to the initial render 
 
.. rst-class:: trst-property-dl

:Type:
 .. rst-class:: trst-type

  :ref:`Transform<Transform>`

Methods
-------

----

:trst-method:`addComponent`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method registers a component with the ZoomController. It will also register itself on the added component. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addComponent<T>(component): void
:Type parameters:
 :trst-type-parameter:`T`

 .. rst-class:: trst-type-parameter-dl

   :Type constraint:
    .. rst-class:: trst-type-constraint
   
     T, generic
   
:Parameters:
 :trst-parameter:`component`

 .. rst-class:: trst-parameter-desc
 The component to be added. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ZoomableChart<ZoomableChart>` <:ref:`T<T>`>
   

:trst-method:`addComponents`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method registers a list of components with the ZoomController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  addComponents(components): void
:Parameters:
 :trst-parameter:`components`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`ZoomableChart<ZoomableChart>` <any> []
   

:trst-method:`checkComponentWidthEquality`
++++++++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This utility method checks if any of the ZoomController's components have widths that differ from each other. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  checkComponentWidthEquality(): boolean

:trst-method:`checkForTransformDifference`
++++++++++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This utility function compares an arbitrary D3 Transform object to the ZoomController's internal Transform object and checks if they represent different zoom transforms. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  checkForTransformDifference(transform): boolean
:Parameters:
 :trst-parameter:`transform`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Transform<Transform>`
   

:trst-method:`checkForWidthChange`
++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This utility method checks if any of the ZoomController's components have a width that differs from the ZoomController's internal assumed width. After the first component with a different width is found, the method returns true. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  checkForWidthChange(): boolean

:trst-method:`getQueryEnd`
++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the assumed end of the semantic query range of the components of the ZoomController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getQueryEnd(): number

:trst-method:`getQueryStart`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the assumed start of the semantic query range of the components of the ZoomController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getQueryStart(): number

:trst-method:`getSemanticViewRange`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Get the semantic start, end and width of the query that is currently rendered in the ZoomController's components. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getSemanticViewRange(): ViewRange

:trst-method:`getWidth`
+++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the assumed width of the components of the ZoomController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getWidth(): number

:trst-method:`getXScale`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the initial D3 scale. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getXScale(): ScaleLinear

:trst-method:`getZoomedXScale`
++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

Getter for the D3 scale that has been rescaled to match the current zoom level. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  getZoomedXScale(): ScaleLinear

:trst-method:`handleResize`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method should be called whenever we know that the ZoomController's components' widths have changed. It updates the ZoomController's assumed component with to match the component width, adjusts the D3 scales appropriately, and then re-renders the charts to display the semantic query range of the components before the resize occurred. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  handleResize(): void

:trst-method:`setQueryRange`
++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method updates the internal assumed query range of the ZoomController. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setQueryRange(queryStart, queryEnd): void
:Parameters:
 :trst-parameter:`queryStart`

 .. rst-class:: trst-parameter-desc
 Empty comment

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   
 :trst-parameter:`queryEnd`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

:trst-method:`setToComponentWidth`
++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method sets the internal assumed width of the ZoomController to the width of its first component. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setToComponentWidth(): void

:trst-method:`setXScale`
++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method redefines the ZoomController's internal D3 scale with the internal assumed semantic query and component width. For example, if the controlled components are resized in the browser, this should be called so that the scale behaves as intended when transforming between semantic and viewport coordinates. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  setXScale(): void

:trst-method:`trigger`
++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method is called by a ZoomableChart whenever it receives a browser zoom event. It first checks to see if any of the components have changed size and responds by appropriately updating the ZoomController to accommodate any changes. Next, it checks if the component supplied a D3 Transform argument that actually represents a different zoom level. If the Transform is actually different, it will update the D3 scales and re-render all of the components. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  trigger(callerTransform): void
:Parameters:
 :trst-parameter:`callerTransform`

 .. rst-class:: trst-parameter-desc
  

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     :ref:`Transform<Transform>`
   

:trst-method:`updateCompTransforms`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

D3 stores Transform objects on DOM elements that have received zoom events. Whenever an element receives a zoom event, the Transform object that bubbles up is computed relative to that pre-existing internal Transform. As such, these internal Transforms need to be set manually whenever a zoom event is propagated onto a component that did not originally receive that event. This method will set each of the ZoomController's components' internal Transforms to match the ZoomController's internal Transform. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  updateCompTransforms(): void

:trst-method:`updateZoomedScale`
++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method rescales the internal D3 Scale with the internal D3 Transform object and stores it on the _zoomedXScale property. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  updateZoomedScale(): void

:trst-method:`zoomToRange`
++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

 This method will adjust the view of each of the ZoomController's components to match the semantic range  provided in the arguments. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  zoomToRange(start, end): void
:Parameters:
 :trst-parameter:`start`

 .. rst-class:: trst-parameter-desc
 The start of the new range.

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   
 :trst-parameter:`end`

 .. rst-class:: trst-parameter-desc
 The end of the new range. 

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

:trst-method:`zoomedRender`
+++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This method will get a list of ZoomBehaviors from each of its components, and then, for each ZoomBehavior, it will make a D3 Selection to the target glyphs and call the ZoomBehavior's apply() callback with that selection and the component as arguments. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  zoomedRender(): void

:trst-method:`zoomedRenderDuration`
+++++++++++++++++++++++++++++++++++

.. rst-class:: trst-method-desc

This does the same thing as zoomedRender, but it uses the applyDuration() function on each ZoomBehavior, which makes the ZoomBehavior application seem animated. 
 

.. rst-class:: trst-method-field-list

:Call signature:
 .. rst-class:: trst-call-signature

  zoomedRenderDuration(duration): void
:Parameters:
 :trst-parameter:`duration`

 .. rst-class:: trst-parameter-dl

   :Type:
    .. rst-class:: trst-type
   
     number
   

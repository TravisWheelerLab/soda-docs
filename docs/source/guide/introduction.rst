.. _guide-introduction:

Introduction
============

SODA is web-based library that aims to provide a simple, modular framework for easily building dynamic and interactive visualizations of biological sequence annotation.
Visualizations produced by SODA can be easily integrated with web pages, and it is easy to define interactions between SODA components and other page features.

Before you start
----------------

SODA is still in the early stages of its development and is currently maintained by one person.
As such, you may find yourself thinking that there are obvious (and sometimes seemingly trivial to implement) gaps in the feature set.

The SODA project adheres to the `semantic versioning`_ guidelines, so any (intentional) breaking changes to the API will be accompanied by a bump in the major version number.
Be advised that for the foreseeable future, updates to the library may be infrequent and the API will likely change considerably.

In a perfect world, the SODA versioning would have began in the 0.x.y range, but the first build was inadvertently uploaded to npm at version 1.0.0.
Since npm has strict policies regarding both removing packages (`for good reasons`_) and rewriting version history, we have elected to move forward with the library versioning as is.
To make things a bit more complicated, we consider version 1.3.0 to be the first public release, which was tagged to accompany the initial submission of the SODA publication (currently in the process of review).
For all versions prior to 1.3.0, the API is lightly documented inline in the source code.
Our intention is to reach the level of API stability that would typically be associated with a software 1.0 release by the time that SODA reaches version 2.0

Design philosophies
-------------------
The development of SODA is guided by a handful of design philosophies:

- **SODA is developed in TypeScript and makes extensive use of type parameters**

TypeScript does a fantastic job of adding static typing to JavaScript.
If you're not familiar with TypeScript, check out the `TypeScript handbook`_.

Although they may make development more tedious, types make code much safer and easier to understand and maintain.
Beyond that, type parameters are an invaluable tool that allow APIs to be flexible in the face of the implementation of new types in a project.
If you'd like to learn more about type parameters, check out the TypeScript handbook section on `generics`_.

In spite of this, you are free to reject TypeScript and use SODA in the context of a JavaScript project, but we don't recommend it.

- **SODA features are built around the use of callback functions**

If you've spent any time developing with JavaScript, you're probably familiar with the concept of callback functions.
However, if you've never used callback functions before, it's probably worth taking a quick moment to check out the MDN Web Docs section on `callback functions`_.

Callback functions are used throughout SODA to produce dynamic behavior (e.g. glyph response to zoom events or the way a glyph is styled) in response to events and data.

- **SODA is not a visualization tool--it is a library with which visualization tools can be built**

There are countless biological sequence annotation visualization tools that provide an out of the box solution for visualizing data.
In particular, full-featured genome browsers (such as the ones hosted by `UCSC`_, `NCBI`_, `ENSEMBL`_) are immensely popular platforms.
However, these types of tools are not useful for groups who wish to produce a custom visualization that expresses the nuances of their own flavor of annotation data.
Even though they tend to be open source, the adoption of a *hefty* technology stack that underlies a genome browser is probably overkill for most scenarios, and this doesn't even take into account the difficulties a developer may have in trying to coerce the tool into a new visualization pattern.

That's where SODA comes in: it's a library that abstracts over `D3`_ in an attempt to reduce the time cost of developing customized visualizations for sequence annotation.
For a developer who is intimately familiar with building visualizations from the ground up using general purpose visualization libraries, SODA may not be very helpful.
That being said, D3 has a reputation for being `hard to learn`_ to learn and many people think that it's `misunderstood`_.
SODA aims to make this type of development process more accessible, lessening the burden of learning an entire framework like D3.

- **SODA makes few assumptions about client data and the way it should be visualized**

Building on the sentiment from the previous bullet, SODA never makes stylistic decisions for you.
Instead, you are in complete control of deciding how data is visually represented and how that representation changes in response to interactions with the visualization.
The only assumption that SODA makes about your data is that it lives inside a one-dimensional coordinate space (e.g. base pairs in a chromosome).

- **SODA features are modular**

Where possible, SODA modules aim to be independent from one another, so that each can be used without conflict or some form of dependence.
As new features emerge, it is often easier to develop them in a way that violates this philosophy, but the goal is for this to become much less common (or even disappear entirely) as the library reaches maturity.

.. _for good reasons: https://qz.com/646467/how-one-programmer-broke-the-internet-by-deleting-a-tiny-piece-of-code/
.. _semantic versioning: https://semver.org/
.. _TypeScript handbook: https://www.typescriptlang.org/docs/handbook/intro.html
.. _generics: https://www.typescriptlang.org/docs/handbook/2/generics.html
.. _callback functions: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
.. _UCSC: https://genome.ucsc.edu/
.. _NCBI: https://www.ncbi.nlm.nih.gov/genome/
.. _ENSEMBL: https://ensembl.org/index.html
.. _D3: https://d3js.org/
.. _hard to learn: https://medium.com/nightingale/why-d3-is-so-hard-to-learn-from-bl-ocks-a2ac258964af
.. _misunderstood: https://medium.com/dailyjs/the-trouble-with-d3-4a84f7de011f

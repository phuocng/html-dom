---
category: Basic
keywords:
title: Select the children of an element
---

Get the children nodes of the `ele` element:

```js
const childNodes = ele.childNodes;
```

By looping over the chidren, you can get the first or last child:

```js
const first = childNodes[0];
const last = childNodes[childNodes.length - 1];
```

There are properties to access the first and last child directly:

```js
const first = ele.firstChild;
const last = ele.lastChild;
```

### See also

-   [Get the parent node of an element](/get-the-parent-node-of-an-element)
-   [Loop over a nodelist](/loop-over-a-nodelist)

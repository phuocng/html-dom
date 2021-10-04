---
category: Basic
keywords:
title: Clone an element
---

```js
const cloned = ele.cloneNode(true);
```

Using the `cloneNode(true)` method will deep copy a given element. In the sample code above, all attributes and children of the original node `ele` will be cloned in `cloned` as well.

Passing `false` produces a cloned node that keeps only the attributes and the original node:

```js
const cloned = ele.cloneNode(false);
```

### See also

-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Print an image](/print-an-image)

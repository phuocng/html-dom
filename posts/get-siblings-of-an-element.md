---
category: Basic
keywords: all siblings, next sibling, nextSibling, parentNode, previous sibling, previousSibling
title: Get siblings of an element
---

### Get the previous sibling

```js
const prev = ele.previousSibling;
```

### Get the next sibling

```js
const next = ele.nextSibling;
```

### Get all siblings

```js
// Get the parent node
const parent = ele.parentNode;

// Filter the children, exclude the element
const siblings = [].slice.call(parent.children).filter(function (child) {
    return child !== ele;
});
```

### See also

-   [Create a range slider](/create-a-range-slider)
-   [Create an image comparison slider](/create-an-image-comparison-slider)
-   [Create resizable split views](/create-resizable-split-views)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Swap two nodes](/swap-two-nodes)
-   [Zoom an image](/zoom-an-image)

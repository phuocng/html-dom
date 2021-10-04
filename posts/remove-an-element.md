---
category: Basic
keywords:
title: Remove an element
---

### 1. Use the remove method

Note that the [`remove`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) method isn't supported in Internet Explorer.

```js
ele.remove();
```

### 2. Use the removeChild method

```js
if (ele.parentNode) {
    ele.parentNode.removeChild(ele);
}
```

### See also

-   [Calculate the size of scrollbar](/calculate-the-size-of-scrollbar)
-   [Copy text to the clipboard](/copy-text-to-the-clipboard)
-   [Download a file](/download-a-file)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Measure the width of given text of given font](/measure-the-width-of-given-text-of-given-font)
-   [Print an image](/print-an-image)
-   [Remove all children of a node](/remove-all-children-of-a-node)
-   [Show a ghost element when dragging an element](/show-a-ghost-element-when-dragging-an-element)
-   [Show a loading indicator when an iframe is being loaded](/show-a-loading-indicator-when-an-iframe-is-being-loaded)
-   [Sort a table by clicking its headers](/sort-a-table-by-clicking-its-headers)

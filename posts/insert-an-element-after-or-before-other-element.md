---
category: Basic
keywords: insert after, insert before, insertAdjacentElement, insertBefore, nextSibling
title: Insert an element after or before other element
---

### Insert after

Insert the `ele` element after the `refEle` element:

```js
refEle.parentNode.insertBefore(ele, refEle.nextSibling);

// Or
refEle.insertAdjacentElement('afterend', ele);
```

### Insert before

Insert the `ele` element before the `refEle` element:

```js
refEle.parentNode.insertBefore(ele, refEle);

// Or
refEle.insertAdjacentElement('beforebegin', ele);
```

### See also

-   [Append to an element](/append-to-an-element)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Insert given html after or before an element](/insert-given-html-after-or-before-an-element)
-   [Prepend to an element](/prepend-to-an-element)
-   [Swap two nodes](/swap-two-nodes)

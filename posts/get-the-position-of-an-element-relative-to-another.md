---
category: Basic
keywords: element position, getBoundingClientRect
title: Get the position of an element relative to another
---

Assume that we're going to measure the top and left positions of the `ele` element relative to the `target` element.

```js
// Get the top, left coordinates of two elements
const eleRect = ele.getBoundingClientRect();
const targetRect = ele.getBoundingClientRect();

// Calculate the top and left positions
const top = eleRect.top - targetRect.top;
const left = eleRect.left - targetRect.left;
```

### See also

-   [Calculate the mouse position relative to an element](/calculate-the-mouse-position-relative-to-an-element)
-   [Get the position of an element relative to the document](/get-the-position-of-an-element-relative-to-the-document)
-   [Position an element absolutely to another element](/position-an-element-absolutely-to-another-element)

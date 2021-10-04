---
category: Basic
keywords:
title: Get the position of an element relative to the document
---

```js
// Get the top, left coordinates of the element
const rect = ele.getBoundingClientRect();

// Add the scroll postion to get the full distance from the element
// to the top, left sides of the document
const top = rect.top + document.body.scrollTop;
const left = rect.left + document.body.scrollLeft;
```

### See also

-   [Calculate the mouse position relative to an element](/calculate-the-mouse-position-relative-to-an-element)
-   [Get the position of an element relative to another](/get-the-position-of-an-element-relative-to-another)

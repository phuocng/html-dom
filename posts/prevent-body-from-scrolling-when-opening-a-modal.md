---
category: Basic
keywords: overflow hidden, prevent scrolling, remove CSS style, removeProperty, set CSS styles
title: Prevent body from scrolling when opening a modal
---

```js
// Disable scrolling on the `body` element when opening a modal
document.body.style.overflow = 'hidden';

// Allow to scroll when closing the modal
document.body.style.removeProperty('overflow');
```

### See also

-   [Set CSS style for an element](/set-css-style-for-an-element)

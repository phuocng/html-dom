---
category: Intermediate
keywords:
title: Check if an element is scrollable
---

The following function returns `true` if the `ele` element is scrollable.

```js
const isScrollable = function (ele) {
    // Compare the height to see if the element has scrollable content
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    // It's not enough because the element's `overflow-y` style can be set as
    // * `hidden`
    // * `hidden !important`
    // In those cases, the scrollbar isn't shown
    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowHidden;
};
```

### See also

-   [Get css styles of an element](/get-css-styles-of-an-element)
-   [Get the first scrollable parent of an element](/get-the-first-scrollable-parent-of-an-element)

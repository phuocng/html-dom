---
category: Basic
keywords: check element visible viewport, clientHeight, clientWidth, documentElement, getBoundingClientRect, innerHeight, innerWidth
title: Check if an element is in the viewport
---

The following functions return `true` if the `ele` element is visible in the viewport:

```js
const isInViewport = function (ele) {
    const rect = ele.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
```

### See also

-   [Check if an element is visible in a scrollable container](/check-if-an-element-is-visible-in-a-scrollable-container)
-   [Get the document height and width](/get-the-document-height-and-width)
-   [Scroll an element to ensure it is visible in a scrollable container](/scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container)

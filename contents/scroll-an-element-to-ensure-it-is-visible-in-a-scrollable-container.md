---
category: Intermediate
keywords: check element visible container, clientHeight, offsetTop, scrollTop
title: Scroll an element to ensure it is visible in a scrollable container
---

The following functions scrolls the `ele` element if it's not [visible](/check-if-an-element-is-visible-in-a-scrollable-container) in its scrollable container:

```js
const scrollToBeVisible = function (ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    if (eleTop < containerTop) {
        // Scroll to the top of container
        container.scrollTop -= containerTop - eleTop;
    } else if (eleBottom > containerBottom) {
        // Scroll to the bottom of container
        container.scrollTop += eleBottom - containerBottom;
    }
};
```

### See also

-   [Check if an element is in the viewport](/check-if-an-element-is-in-the-viewport)
-   [Check if an element is visible in a scrollable container](/check-if-an-element-is-visible-in-a-scrollable-container)

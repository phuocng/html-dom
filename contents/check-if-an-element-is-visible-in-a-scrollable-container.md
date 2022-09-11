---
category: Intermediate
keywords: check element visible container, clientHeight, offsetTop, scrollTop
title: Check if an element is visible in a scrollable container
---

The following functions return `true` if the `ele` element is visible in its scrollable container:

```js
const isVisible = function (ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    // The element is fully visible in the container
    return (
        (eleTop >= containerTop && eleBottom <= containerBottom) ||
        // Some part of the element is visible in the container
        (eleTop < containerTop && containerTop < eleBottom) ||
        (eleTop < containerBottom && containerBottom < eleBottom)
    );
};
```

We also can perform the check based on the bounding rectangles of both element and container:

```js
const isVisible = function (ele, container) {
    const { bottom, height, top } = ele.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;
};
```

### See also

-   [Check if an element is in the viewport](/check-if-an-element-is-in-the-viewport)
-   [Scroll an element to ensure it is visible in a scrollable container](/scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container)

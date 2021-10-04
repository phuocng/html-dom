---
category: Basic
keywords:
title: Check an element against a selector
---

```js
// Return true if `ele` matches the CSS selector `selector`
const matches = function (ele, selector) {
    return (
        ele.matches ||
        ele.matchesSelector ||
        ele.msMatchesSelector ||
        ele.mozMatchesSelector ||
        ele.webkitMatchesSelector ||
        ele.oMatchesSelector
    ).call(ele, selector);
};
```

### See also

-   [Get the closest element by given selector](/get-the-closest-element-by-given-selector)

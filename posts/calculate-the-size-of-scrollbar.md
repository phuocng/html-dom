---
category: Intermediate
keywords:
title: Calculate the size of scrollbar
---

### 1. Subtract `clientWidth` from `offsetWidth`

The `clientWidth` property indicates the width without scrollbar. The `offsetWidth`, on the other hand, includes the scrollbar if there is.

Here is the simple calculation to determine the width of scrollbar:

```js
const scrollbarWidth = document.body.offsetWidth - document.body.clientWidth;
```

### 2. Use a fake element

We create two fake `div` elements, one of them is the child of the other. Then calculate the difference between their widths.

```js
const calculateScrollbarWidth = function () {
    // Create the parent element
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';

    // Append it to `body`
    document.body.appendChild(outer);

    // Create the child element
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculate the difference between their widths
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    // Remove the parent element
    document.body.removeChild(outer);

    return scrollbarWidth;
};
```

This method doesn't work on macOS if the _Show scroll bars_ option is set as _Automatically based on mouse or trackpad_ or _When scrolling_.

![Show scroll bars option on macOS](/assets/scroll-macos.png)

### See also

-   [Append to an element](/append-to-an-element)
-   [Create an element](/create-an-element)
-   [Determine the height and width of an element](/determine-the-height-and-width-of-an-element)
-   [Remove an element](/remove-an-element)

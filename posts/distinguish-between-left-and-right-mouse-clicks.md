---
category: Basic
keywords: addEventListener, mousedown event, mouseup event, which button
title: Distinguish between left and right mouse clicks
---

The `mousedown` and `mouseup` event handlers let us know which mouse button is clicked:

```js
ele.addEventListener('mousedown', function (e) {
    // e.button === 0: the left button is clicked
    // e.button === 1: the middle button is clicked
    // e.button === 2: the right button is clicked
    // e.button === 3: the `Browser Back` button is clicked
    // e.button === 4: the `Browser Forward` button is clicked
});
```

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)

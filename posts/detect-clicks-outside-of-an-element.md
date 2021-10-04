---
category: Basic
keywords:
title: Detect clicks outside of an element
---

Check if a click was outside of the `ele` element:

```js
document.addEventListener('click', function (evt) {
    const isClickedOutside = !ele.contains(evt.target);

    // `isClickedOutside` is true if the clicked target is outside of `ele`
});
```

### Use case

-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Check if an element is a descendant of another](/check-if-an-element-is-a-descendant-of-another)
-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)

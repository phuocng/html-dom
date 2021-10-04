---
category: Basic
keywords:
title: Create one time event handler
---

### 1. Use the once option

When attach a handler to given event, you can pass `{ once: true }` to the last parameter of the `addEventListener` method:

```js
const handler = function (e) {
    // The event handler
};

ele.addEventListener('event-name', handler, { once: true });
```

Note that this option isn't supported in IE.

### 2. Self-remove the handler

```js
const handler = function (e) {
    // The event handler
    // Do something ...

    // Remove the handler
    e.target.removeEventListener(e.type, handler);
};

ele.addEventListener('event-name', handler);
```

### Use case

-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)

### See also

-   [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers)
-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)

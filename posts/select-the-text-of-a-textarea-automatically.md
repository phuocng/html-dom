---
category: Basic
keywords:
title: Select the text of a textarea automatically
---

Assume that `ele` represents a textarea element.

```js
ele.addEventListener('focus', function (e) {
    // Select the text
    e.target.select();
});
```

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Trigger an event](/trigger-an-event)

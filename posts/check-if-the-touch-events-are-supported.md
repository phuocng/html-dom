---
category: Basic
keywords: check touch events supported, DocumentTouch
title: Check if the touch events are supported
---

Check if the current browser supports the touch events:

```js
const touchSupported = 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch);
```

### See also

-   [Detect mobile browsers](/detect-mobile-browsers)

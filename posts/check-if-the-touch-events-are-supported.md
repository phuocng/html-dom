---
title: Check if the touch events are supported
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords: check touch events supported, DocumentTouch
---

Check if the current browser supports the touch events:

```js
const touchSupported = 'ontouchstart' in window || 
    (window.DocumentTouch && document instanceof DocumentTouch);
```

## More

* [Detect mobile browsers](/detect-mobile-browsers)
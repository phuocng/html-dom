---
category: Basic
keywords:
title: Execute code when the document is ready
---

```js
const ready = function (cb) {
  // Check if the `document` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
      })
    : cb();
};

// Usage
ready(function() {
    // Do something when the document is ready
    ...
});
```

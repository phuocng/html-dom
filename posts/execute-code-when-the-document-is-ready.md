---
title: Execute code when the document is ready
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
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
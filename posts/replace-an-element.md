---
title: Replace an element
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

The `ele` will be removed from the DOM tree, and is replaced with `newEle`:

```js
ele.parentNode.replaceChild(newEle, ele);
```
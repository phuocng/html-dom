---
category: Basic
layout: layouts/post.njk
keywords:
title: Replace an element
---

The `ele` will be removed from the DOM tree, and is replaced with `newEle`:

```js
ele.parentNode.replaceChild(newEle, ele);
```

---
title: Wrap an element around a given element
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

Wrap the `wrapper` element around the `ele` element:

```js
// First, insert `wrapper` before `ele` in its parent node
ele.parentNode.insertBefore(wrapper, ele);

// And then, turn `ele` into a children of `wrapper`
wrapper.appendChild(ele);
```

## More

* [Unwrap an element](/unwrap-an-element)
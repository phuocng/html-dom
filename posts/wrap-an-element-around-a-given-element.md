---
category: Basic
keywords:
title: Wrap an element around a given element
---

Wrap the `wrapper` element around the `ele` element:

```js
// First, insert `wrapper` before `ele` in its parent node
ele.parentNode.insertBefore(wrapper, ele);

// And then, turn `ele` into a children of `wrapper`
wrapper.appendChild(ele);
```

### See also

-   [Unwrap an element](/unwrap-an-element)

---
title: Unwrap an element
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

Remove the `ele` element except its children:

```js
// Get the parent node
const parent = ele.parentNode;

// Move all children node to the parent
while (ele.firstChild) {
    parent.insertBefore(ele.firstChild, ele);
}

// `ele` becomes an empty element
// Remove it from the parent
parent.removeChild(ele);
```

## More

* [Remove all children of a node](/remove-all-children-of-a-node)
* [Wrap an element around a given element](/wrap-an-element-around-a-given-element)
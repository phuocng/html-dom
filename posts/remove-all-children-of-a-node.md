---
category: Basic
keywords:
title: Remove all children of a node
---

### 1. Empty the inner HTML (not recommended)

```js
ele.innerHTML = '';
```

This method isn't recommended because it doesn't remove event handlers of child node. Hence, it might cause a memory leak if you are managing a big list of elements.

### 2. Remove child nodes

Remove its child node until it doesn't have any children.

```js
while (node.firstChild) {
    node.removeChild(node.firstChild);
}
```

### See also

-   [Remove an element](/remove-an-element)
-   [Unwrap an element](/unwrap-an-element)

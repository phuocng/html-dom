---
category: Basic
keywords:
title: Check if an element is a descendant of another
---

Assume that we want to find out if the `child` element is a descendant of the `parent` element.

### 1. Use the contains method

```js
const isDescendant = parent.contains(child);
```

### 2. Go up from the child until see the parent

```js
// Check if `child` is a descendant of `parent`
const isDescendant = function (parent, child) {
    let node = child.parentNode;
    while (node) {
        if (node === parent) {
            return true;
        }

        // Traverse up to the parent
        node = node.parentNode;
    }

    // Go up until the root but couldn't find the `parent`
    return false;
};
```

### See also

-   [Detect clicks outside of an element](/detect-clicks-outside-of-an-element)
-   [Get the parent node of an element](/get-the-parent-node-of-an-element)

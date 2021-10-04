---
category: Basic
keywords: insertBefore, nextSibling, parentNode, swap nodes
title: Swap two nodes
---

The function below swaps two given nodes, `nodeA` and `nodeB`:

```js
const swap = function (nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
};
```

### See also

-   [Get siblings of an element](/get-siblings-of-an-element)
-   [Get the parent node of an element](/get-the-parent-node-of-an-element)
-   [Insert an element after or before other element](/insert-an-element-after-or-before-other-element)

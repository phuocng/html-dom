---
title: Select the text content of an element
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords: createRange, getSelection, removeAllRanges, select text content, selectNodeContents
---

The following function selects the text content of the `ele` element:

```js
const selectText = function(ele) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
};
```

## More

* [Copy highlighted code to the clipboard](/copy-highlighted-code-to-the-clipboard)
* [Get the selected text](/get-the-selected-text)
* [Paste as plain text](/paste-as-plain-text)
* [Save and restore the text selection](/save-and-restore-the-text-selection)
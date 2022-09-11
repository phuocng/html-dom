---
category: Intermediate
keywords: addRange, getRangeAt, getSelection, rangeCount, removeAllRanges, restore range, window get selection
title: Save and restore the text selection
---

Here are the functions for saving and restoring the text selection:

```js
// Save the selection
// Return a `Range` instance if there is a selected text
const save = function () {
    const selection = window.getSelection();
    return selection.rangeCount === 0 ? null : selection.getRangeAt(0);
};

// Restore the selection
// `range` is a `Range` object
const restore = function (range) {
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
};
```

### See also

-   [Copy highlighted code to the clipboard](/copy-highlighted-code-to-the-clipboard)
-   [Get the direction of the text selection](/get-the-direction-of-the-text-selection)
-   [Get the selected text](/get-the-selected-text)
-   [Paste as plain text](/paste-as-plain-text)
-   [Select the text content of an element](/select-the-text-content-of-an-element)

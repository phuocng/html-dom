---
category: Intermediate
keywords: anchorNode, anchorOffset, createRange, focusNode, focusOffset, get selected text, range collapsed, setEnd, setStart, window getSelection
title: Get the direction of the text selection
---

The following function returns `forward` if user selected text from the left to right. It returns `backward` in the other case.

```js
const getDirection = function () {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.focusNode, selection.focusOffset);

    return range.collapsed ? 'backward' : 'forward';
};
```

### See also

-   [Get the selected text](/get-the-selected-text)
-   [Save and restore the text selection](/save-and-restore-the-text-selection)

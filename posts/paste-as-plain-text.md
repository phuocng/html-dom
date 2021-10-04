---
category: Intermediate
keywords: addRange, clipboardData, createTextNode, deleteContents, execCommand, getRangeAt, getSelection, get text from clipboard, insertNode, insert text current position, paste plain text, queryCommandSupported removeAllRanges, selectNodeContents
title: Paste as plain text
---

Assume that we have a `contenteditable` element as below:

```html
<div contenteditable id="editor"></div>
```

In order to paste the plain text only in the element, we have to handle the `paste` event:

```js
const editorEle = document.getElementById('editor');

// Handle the `paste` event
editorEle.addEventListener('paste', function (e) {
    // Prevent the default action
    e.preventDefault();

    // Get the copied text from the clipboard
    const text = e.clipboardData
        ? (e.originalEvent || e).clipboardData.getData('text/plain')
        : // For IE
        window.clipboardData
        ? window.clipboardData.getData('Text')
        : '';

    if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, text);
    } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
});
```

Try to paste some rich text in the following `contenteditable` element:

### Demo

:demo[]{title="Paste as plain text" url="/demo/paste-as-plain-text/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Copy highlighted code to the clipboard](/copy-highlighted-code-to-the-clipboard)
-   [Copy text to the clipboard](/copy-text-to-the-clipboard)
-   [Create an element](/create-an-element)
-   [Get the selected text](/get-the-selected-text)
-   [Prevent the default action of an event](/prevent-the-default-action-of-an-event)
-   [Save and restore the text selection](/save-and-restore-the-text-selection)
-   [Select the text content of an element](/select-the-text-content-of-an-element)

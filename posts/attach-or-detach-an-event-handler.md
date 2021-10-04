---
category: Basic
keywords: addEventListener, attach event handler, detach event handler, removeEventListener
title: Attach or detach an event handler
---

### Use the on attribute (not recommended)

You can set the event handler via the `on{eventName}` attribute, where `eventName` represents the name of event.
For example:

```js
ele.onclick = function() {
    ...
};

// Remove the event handler
delete ele.onclick;
```

This approach isn't recommended because we can only attach one handler for each event. Setting the `onclick` attribute, for example, will override any existing handler for the `click` event.

### Use the addEventListener method

```js
const handler = function() {
    ...
};

// Attach handler to the `click` event
ele.addEventListener('click', handler);

// Detach the handler from the `click` event
ele.removeEventListener('click', handler);
```

Note that the event name is passed as the first parameter in both the `addEventListener` and `removeEventListener` methods.
It differs from the first approach which requires to prefix the event name with `on`.

If you want the handler to be invoke once, then look at the [Create one time event handler](/create-one-time-event-handler) post.

### See also

-   [Allow to enter particular characters only](/allow-to-enter-particular-characters-only)
-   [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers)
-   [Calculate the mouse position relative to an element](/calculate-the-mouse-position-relative-to-an-element)
-   [Communication between an iframe and its parent window](/communication-between-an-iframe-and-its-parent-window)
-   [Copy highlighted code to the clipboard](/copy-highlighted-code-to-the-clipboard)
-   [Count the number of characters of a textarea](/count-the-number-of-characters-of-a-textarea)
-   [Create a custom scrollbar](/create-a-custom-scrollbar)
-   [Create a range slider](/create-a-range-slider)
-   [Create an image comparison slider](/create-an-image-comparison-slider)
-   [Create resizable split views](/create-resizable-split-views)
-   [Detect if the caps lock is on](/detect-if-the-caps-lock-is-on)
-   [Distinguish between left and right mouse clicks](/distinguish-between-left-and-right-mouse-clicks)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Drag to scroll](/drag-to-scroll)
-   [Export a table to csv](/export-a-table-to-csv)
-   [Get size of the selected file](/get-size-of-the-selected-file)
-   [Get the size of an image](/get-the-size-of-an-image)
-   [Highlight an element when dragging a file over it](/highlight-an-element-when-dragging-a-file-over-it)
-   [Make a draggable element](/make-a-draggable-element)
-   [Make a resizable element](/make-a-resizable-element)
-   [Paste as plain text](/paste-as-plain-text)
-   [Placeholder for a contenteditable element](/placeholder-for-a-contenteditable-element)
-   [Press shift and enter for a new line](/press-shift-and-enter-for-a-new-line)
-   [Prevent the default action of an event](/prevent-the-default-action-of-an-event)
-   [Print an image](/print-an-image)
-   [Replace broken images](/replace-broken-images)
-   [Resize an iframe to fit its content](/resize-an-iframe-to-fit-its-content)
-   [Resize an image](/resize-an-image)
-   [Resize columns of a table](/resize-columns-of-a-table)
-   [Resize the width of a text box to fit its content automatically](/resize-the-width-of-a-text-box-to-fit-its-content-automatically)
-   [Select the text of a textarea automatically](/select-the-text-of-a-textarea-automatically)
-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)
-   [Show a ghost element when dragging an element](/show-a-ghost-element-when-dragging-an-element)
-   [Show a loading indicator when an iframe is being loaded](/show-a-loading-indicator-when-an-iframe-is-being-loaded)
-   [Show or hide table columns](/show-or-hide-table-columns)
-   [Sort a table by clicking its headers](/sort-a-table-by-clicking-its-headers)
-   [Zoom an image](/zoom-an-image)

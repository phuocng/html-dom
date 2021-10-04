---
category: Basic
keywords: addEventListener, clientX, clientY, getBoundingClientRect, mouse position
title: Calculate the mouse position relative to an element
---

The following code calculates the mouse position relative to the clicked element:

```js
ele.addEventListener('mousedown', function (e) {
    // Get the target
    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
});
```

### Use case

-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Drag to scroll](/drag-to-scroll)
-   [Get the position of an element relative to another](/get-the-position-of-an-element-relative-to-another)
-   [Get the position of an element relative to the document](/get-the-position-of-an-element-relative-to-the-document)
-   [Make a draggable element](/make-a-draggable-element)
-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)
-   [Show or hide table columns](/show-or-hide-table-columns)

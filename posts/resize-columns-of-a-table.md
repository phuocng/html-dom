---
category: Advanced
keywords:
title: Resize columns of a table
---

Assume that we want to resize any column of the following table:

```html
<table id="resizeMe" class="table">
    ...
</table>
```

### Prepare the resizer

For each column, we insert a `div` element indicating that the associated column can be resized. The resizer element is positioned absolutely inside the column. The CSS styles for them would be as below:

```css
.table th {
    position: relative;
}
.resizer {
    /* Displayed at the right side of column */
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    cursor: col-resize;
    user-select: none;
}
```

To [create](/create-an-element) resizers and [append](/append-to-an-element) them to columns, we have to [query](/select-an-element-or-list-of-elements) and [loop over](/loop-over-a-nodelist) all columns:

```js
// Query the table
const table = document.getElementById('resizeMe');

// Query all headers
const cols = table.querySelectorAll('th');

// Loop over them
[].forEach.call(cols, function (col) {
    // Create a resizer element
    const resizer = document.createElement('div');
    resizer.classList.add('resizer');

    // Set the height
    resizer.style.height = `${table.offsetHeight}px`;

    // Add a resizer element to the column
    col.appendChild(resizer);

    // Will be implemented in the next section
    createResizableColumn(col, resizer);
});
```

### Handle the resizer's events

We are going to implement a function, `createResizableColumn`, which accepts two parameters:

-   `col` that represents the table header
-   `resizer` that represents the resizer element within the column

In order to allow user to resize `col`, we have to handle three events:

-   `mousedown` on the resizer: Track the current position of mouse
-   `mousemove` on `document`: Calculate how far the mouse has been moved, and adjust the width of the column
-   `mouseup` on `document`: Remove the event handlers of `document`

```js
const createResizableColumn = function (col, resizer) {
    // Track the current position of mouse
    let x = 0;
    let w = 0;

    const mouseDownHandler = function (e) {
        // Get the current mouse position
        x = e.clientX;

        // Calculate the current width of column
        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);

        // Attach listeners for document's events
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // Determine how far the mouse has been moved
        const dx = e.clientX - x;

        // Update the width of column
        col.style.width = `${w + dx}px`;
    };

    // When user releases the mouse, remove the existing event listeners
    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    resizer.addEventListener('mousedown', mouseDownHandler);
};
```

> **Tip**
>
> This post uses the [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers) tip

### Highlight the resizer

We can improve the user experience a little bit. When user hovers or clicks on the resizer, it can be hightlighted.
To demonstrate the idea in the most simple way, we add a solid border to the `:hover` selector:

```css
.resizer:hover,
.resizing {
    border-right: 2px solid blue;
}
```

The `resizing` class is added to the resizer while user clicks and drags the resizer:

```js
const mouseDownHandler = function(e) {
    ...
    resizer.classList.add('resizing');
};

const mouseUpHandler = function() {
    ...
    resizer.classList.remove('resizing');
};
```

### Demo

:demo[]{title="Resize columns of a table" url="/demo/resize-columns-of-a-table/index.html"}

### See also

-   [Add or remove class from an element](/add-or-remove-class-from-an-element)
-   [Append to an element](/append-to-an-element)
-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Create an element](/create-an-element)
-   [Drag to scroll](/drag-to-scroll)
-   [Get css styles of an element](/get-css-styles-of-an-element)
-   [Loop over a nodelist](/loop-over-a-nodelist)
-   [Make a draggable element](/make-a-draggable-element)
-   [Make a resizable element](/make-a-resizable-element)
-   [Set css style for an element](/set-css-style-for-an-element)

import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we want to resize any column of the following table:

~~~ html
<table id="resizeMe" class="table">
    ...
</table>
~~~

## Prepare the resizer

For each column, we insert a \`div\` element indicating that the associated column can be resized.
The resizer element is positioned absolutely inside the column. The CSS styles for them would be as below:

~~~ css
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
~~~

To [create](/create-an-element) resizers and [append](/append-to-an-element) them to columns, we have to [query](/select-an-element-or-list-of-elements)
and [loop over](/loop-over-a-nodelist) all columns:

~~~ javascript
// Query the table
const table = document.getElementById('resizeMe');

// Query all headers
const cols = table.querySelectorAll('th');

// Loop over them
[].forEach.call(cols, function(col) {
    // Create a resizer element
    const resizer = document.createElement('div');
    resizer.classList.add('resizer');

    // Set the height
    resizer.style.height = \`\${table.offsetHeight}px\`;

    // Add a resizer element to the column
    col.appendChild(resizer);

    // Will be implemented in the next section
    createResizableColumn(col, resizer);
});
~~~

## Handle the resizer's events

We are going to implement a function, \`createResizableColumn\`,  which accepts two parameters:

* \`col\` that represents the table header
* \`resizer\` that represents the resizer element within the column

In order to allow user to resize \`col\`, we have to handle three events:

* \`mousedown\` on the resizer: Track the current position of mouse
* \`mousemove\` on \`document\`: Calculate how far the mouse has been moved, and adjust the width of the column
* \`mouseup\` on \`document\`: Remove the event handlers of \`document\`

~~~ javascript
const createResizableColumn = function(col, resizer) {
    // Track the current position of mouse
    let x = 0;
    let w = 0;

    const mouseDownHandler = function(e) {
        // Get the current mouse position
        x = e.clientX;

        // Calculate the current width of column
        const styles = window.getComputedStyle(col);
        w = parseInt(styles.width, 10);

        // Attach listeners for document's events
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        // Determine how far the mouse has been moved
        const dx = e.clientX - x;

        // Update the width of column
        col.style.width = \`\${w + dx}px\`;
    };

    // When user releases the mouse, remove the existing event listeners
    const mouseUpHandler = function() {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    resizer.addEventListener('mousedown', mouseDownHandler);
};
~~~

## Highlight the resizer

We can improve the user experience a little bit. When user hovers or clicks on the resizer, it can be hightlighted.
To demonstrate the idea in the most simple way, we add a solid border to the \`:hover\` selector:

~~~ css
.resizer:hover, .resizing {
    border-right: 2px solid blue;
}
~~~

The \`resizing\` class is added to the resizer while user clicks and drags the resizer:

~~~ javascript
const mouseDownHandler = function(e) {
    ...
    resizer.classList.add('resizing');
};

const mouseUpHandler = function() {
    ...
    resizer.classList.remove('resizing');
};
~~~
`}
/>
<Demo src='/demo/resize-columns-of-a-table/index.html' />
<RelatedPosts
    slugs={[
        'add-or-remove-class-from-an-element',
        'append-to-an-element',
        'attach-or-detach-an-event-handler',
        'create-an-element',
        'get-css-styles-of-an-element',
        'loop-over-a-nodelist',
        'make-a-draggable-element',
        'make-a-resizable-element',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

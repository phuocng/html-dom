import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            addEventListener, drag drop list, drag drop table row, getBoundingClientRect, insert node before,
            insertBefore, mousedown event, mousemove event, mouseup event, next sibling,
            nextElementSibling, previous sibling, previousElementSibling, sortable list, swap nodes
        `}
    />
</Helmet>
<Markdown
    content={`
Before taking a look at this example, it's recommended to visit this [post](/drag-and-drop-element-in-a-list) to know
how we can drag and drop element in a list.

Now we can use the same technique to apply to the table rows. The basic idea is

* When user starts moving the table row, we create a list of items. Each item is cloned from each row of table.
* We show the list at the same position as table, and hide the table.
* At this step, moving row around is actually moving the list item.
* When user drags an item, we determine the index of target item within the list. And move the original dragged row to before or after the
row associated with the end index.

Let's get started with the basic markup of table:

~~~ html
<table id="table">
    ...
</table>
~~~

## Basic setup

As mentioned in the [Drag and drop element in a list](/drag-and-drop-element-in-a-list) example, we need handle three events:

* \`mousedown\` for the first cell of any row, so user can click and drag the first cell in each row
* \`mousemove\` for \`document\`: This event triggers when user moves the row around, and we will create and insert a placeholder row
depending on the direction (up or down)
* \`mouseup\` for \`document\`: This event occurs when user drags the row.

Here is the skeleton of these event handlers:

~~~ javascript
// Query the table
const table = document.getElementById('table');

const mouseDownHandler = function(e) {
    ...

    // Attach the listeners to \`document\`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    ...
};

const mouseUpHandler = function() {
    ...
    // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

// Query all rows
table.querySelectorAll('tr').forEach(function(row, index) {
    // Ignore the header
    // We don't want user to change the order of header
    if (index === 0) {
        return;
    }

    // Get the first cell of row
    const firstCell = row.firstElementChild;
    firstCell.classList.add('draggable');

    // Attach event handler
    firstCell.addEventListener('mousedown', mouseDownHandler);
});
~~~

## Clone the table when user is moving a row

Since this task is performed once, we need a flag to track if it's executed:

~~~ javascript
let isDraggingStarted = false;

const mouseMoveHandler = function(e) {
    if (!isDraggingStarted) {
        isDraggingStarted = true;

        cloneTable();
    }
    ...
};
~~~

\`cloneTable\` creates an element that has the same position as the table, and is shown right before the table:

~~~ javascript
let list;

const cloneTable = function() {
    // Get the bounding rectangle of table
    const rect = table.getBoundingClientRect();

    // Get the width of table
    const width = parseInt(window.getComputedStyle(table).width);

    // Create new element
    list = document.createElement('div');
    
    // Set the same position as table
    list.style.position = 'absolute';
    list.style.left = \`\${rect.left}px\`;
    list.style.top = \`\${rect.top}px\`;

    // Insert it before the table
    table.parentNode.insertBefore(list, table);

    // Hide the table
    table.style.visibility = 'hidden';
};
~~~

Imagine that \`list\` consists of items which are cloned from the table rows:

~~~ javascript
const cloneTable = function() {
    ...

    // Loop over the rows
    table.querySelectorAll('tr').forEach(function(row) {
        const item = document.createElement('div');

        const newTable = document.createElement('table');
        const newRow = document.createElement('tr');

        // Query the cells of row
        const cells = [].slice.call(row.children);
        cells.forEach(function(cell) {
            const newCell = cell.cloneNode(true);
            newRow.appendChild(newCell);
        });

        newTable.appendChild(newRow);
        item.appendChild(newTable);

        list.appendChild(item);
    });
};
~~~

After this step, we have the following \`list\`:

~~~ html
<!-- The list -->
<div>
    <!-- First item -->
    <div>
        <table>
            <!-- The first row of original table -->
            <tr>...</tr>
        </table>
    </div>

    <!-- Second item -->
    <div>
        <table>
            <!-- The second row of original table -->
            <tr>...</tr>
        </table>
    </div>

    <!-- ... -->
</div>

<!-- The original table -->
<table>
    ...
</table>
~~~

It's worth noting that when cloning cells in each item, we have to set the cell width same as the original cell.
So the item looks like the original row completely:

~~~ javascript
cells.forEach(function(cell) {
    const newCell = cell.cloneNode(true);
    // Set the width as the original cell
    newCell.style.width = \`\${parseInt(window.getComputedStyle(cell).width)}px\`;
    newRow.appendChild(newCell);
});
~~~

## Determine the indexes of dragging and target rows

~~~ javascript
let draggingEle;        // The dragging element
let draggingRowIndex;   // The index of dragging row

const mouseDownHandler = function(e) {
    // Get the original row
    const originalRow = e.target.parentNode;
    draggingRowIndex = [].slice.call(table.querySelectorAll('tr')).indexOf(originalRow);
};

const mouseMoveHandler = function(e) {
    if (!isDraggingStarted) {
        cloneTable();

        // Query the dragging element
        draggingEle = [].slice.call(list.children)[draggingRowIndex];
    }
};

const mouseUpHandler = function() {
    // Get the end index
    const endRowIndex = [].slice.call(list.children).indexOf(draggingEle);
};
~~~

As we have \`draggingRowIndex\` and \`endRowIndex\`, it's now easy to check if user drops to the top of bottom of table.
And we can decide how to move the target row [before or after the dragging row](/insert-an-element-after-or-before-other-element):

~~~ javascript
const mouseUpHandler = function() {
    // Move the dragged row to \`endRowIndex\`
    let rows = [].slice.call(table.querySelectorAll('tr'));
    draggingRowIndex > endRowIndex
        // User drops to the top
        ? rows[endRowIndex].parentNode.insertBefore(rows[draggingRowIndex], rows[endRowIndex])
        // User drops to the bottom
        : rows[endRowIndex].parentNode.insertBefore(rows[draggingRowIndex], rows[endRowIndex].nextSibling);
};
~~~

Following is the final demo. Try to drag and drop the first cell of any row.
`}
/>
<Demo src='/demo/drag-and-drop-table-row' />
<RelatedPosts
    slugs={[
        'add-or-remove-class-from-an-element',
        'attach-or-detach-an-event-handler',
        'calculate-the-mouse-position-relative-to-an-element',
        'clone-an-element',
        'create-an-element',
        'drag-and-drop-element-in-a-list',
        'get-siblings-of-an-element',
        'insert-an-element-after-or-before-other-element',
        'loop-over-a-nodelist',
        'make-a-draggable-element',
        'remove-an-element',
        'select-an-element-or-list-of-elements',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

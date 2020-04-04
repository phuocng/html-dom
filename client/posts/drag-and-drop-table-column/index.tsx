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

The same technique can be applied to the table columns. The basic idea is

* When user starts moving a table column, we create a list of items. Each item is cloned from each column of table.
* We show the list at the same position as table, and hide the table.
* At this step, moving column around is actually moving the list item.
* When user drags an item, we determine the index of target item within the list. And swap the columns associated with the dragging and end indexes.

Let's get started with the basic markup of table:

~~~ html
<table id="table">
    ...
</table>
~~~

## Basic setup

As mentioned in the [Drag and drop element in a list](/drag-and-drop-element-in-a-list) example, we need handle three events:

* \`mousedown\` for the all header cells, so user can click and drag the first cell in each column
* \`mousemove\` for \`document\`: This event triggers when user moves the column around, and we will create and insert a placeholder column
depending on the direction (left or right)
* \`mouseup\` for \`document\`: This event occurs when user drags the column.

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

// Query all header cells
table.querySelectorAll('th').forEach(function(headerCell) {
    // Attach event handler
    headerCell.addEventListener('mousedown', mouseDownHandler);
});
~~~

## Clone the table when user is moving a column

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

Imagine that \`list\` consists of items which are cloned from the table columns:

~~~ javascript
const cloneTable = function() {
    ...

    // Get all cells
    const originalCells = [].slice.call(table.querySelectorAll('tbody td'));

    const originalHeaderCells = [].slice.call(table.querySelectorAll('th'));
    const numColumns = originalHeaderCells.length;

    // Loop through the header cells
    originalHeaderCells.forEach(function(headerCell, headerIndex) {
        const width = parseInt(window.getComputedStyle(headerCell).width);

        // Create a new table from given row
        const item = document.createElement('div');
        item.classList.add('draggable');

        const newTable = document.createElement('table');

        // Header
        const th = headerCell.cloneNode(true);
        let newRow = document.createElement('tr');
        newRow.appendChild(th);
        newTable.appendChild(newRow);

        const cells = originalCells.filter(function(c, idx) {
            return (idx - headerIndex) % numColumns === 0;
        });
        cells.forEach(function(cell) {
            const newCell = cell.cloneNode(true);
            newRow = document.createElement('tr');
            newRow.appendChild(newCell);
            newTable.appendChild(newRow);
        });

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
            <!-- The first column of original table -->
            <tr>...</tr>
            <tr>...</tr>
            ...
        </table>
    </div>

    <!-- Second item -->
    <div>
        <table>
            <!-- The second column of original table -->
            <tr>...</tr>
            <tr>...</tr>
            ...
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
So the item looks like the original column completely:

~~~ javascript
originalHeaderCells.forEach(function(headerCell, headerIndex) {
    // Get the width of original cell
    const width = parseInt(window.getComputedStyle(headerCell).width);

    newTable.style.width = \`\${width}px\`;

    cells.forEach(function(cell) {
        const newCell = cell.cloneNode(true);
        newCell.style.width = \`\${width}px\`;
        ...
    });
});
~~~

## Determine the indexes of dragging and target columns

~~~ javascript
let draggingEle;        // The dragging element
let draggingRowIndex;   // The index of dragging column

const mouseDownHandler = function(e) {
    // Get the index of dragging column
    draggingColumnIndex = [].slice.call(table.querySelectorAll('th')).indexOf(e.target);
};

const mouseMoveHandler = function(e) {
    if (!isDraggingStarted) {
        cloneTable();

        // Query the dragging element
        draggingEle = [].slice.call(list.children)[draggingColumnIndex];
    }
};

const mouseUpHandler = function() {
    // Get the end index
    const endColumnIndex = [].slice.call(list.children).indexOf(draggingEle);
};
~~~

As we have \`draggingColumnIndex\` and \`endColumnIndex\`, it's now easy to check if user drops to the left or right of table.
And we can decide how to move the target column [before or after the dragging column](/insert-an-element-after-or-before-other-element):

~~~ javascript
const mouseUpHandler = function() {
    // Move the dragged column to \`endColumnIndex\`
    table.querySelectorAll('tr').forEach(function(row) {
        const cells = [].slice.call(row.querySelectorAll('th, td'));
        draggingColumnIndex > endColumnIndex
            ? cells[endColumnIndex].parentNode.insertBefore(cells[draggingColumnIndex], cells[endColumnIndex])
            : cells[endColumnIndex].parentNode.insertBefore(cells[draggingColumnIndex], cells[endColumnIndex].nextSibling);
    });
};
~~~

Following is the final demo. Try to drag and drop the first cell of any column.
`}
/>
<Demo src='/demo/drag-and-drop-table-column/index.html' />
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

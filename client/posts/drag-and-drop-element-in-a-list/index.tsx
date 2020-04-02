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
            addEventListener, drag drop list, getBoundingClientRect, insert node before, insertBefore,
            mousedown event, mousemove event, mouseup event, next sibling, nextElementSibling,
            previous sibling, previousElementSibling, sortable list, swap nodes
        `}
    />
</Helmet>
<Markdown
    content={`
In this example, we will create a sortable list whose items can be dragged and dropped inside it:

~~~ html
<div id="list">
    <div class="draggable">A</div>
    <div class="draggable">B</div>
    <div class="draggable">C</div>
    <div class="draggable">D</div>
    <div class="draggable">E</div>
</div>
~~~

Each item has class of \`draggable\` indicating that user can drag it:

~~~ css
.draggable {
    cursor: move;
    user-select: none;
}
~~~

## Make items draggable

By using the similar approach mentioned in the [_Make a draggable element_](/make-a-draggable-element) post,
we can turn each item into a draggable element:

~~~ javascript
// The current dragging item
let draggingEle;

// The current position of mouse relative to the dragging element
let x = 0;
let y = 0;

const mouseDownHandler = function(e) {
    const draggingEle = e.target;

    // Calculate the mouse position
    const rect = draggingEle.getBoundingClientRect();
    x = e.pageX - rect.left;
    y = e.pageY - rect.top;

    // Attach the listeners to \`document\`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // Set position for dragging element
    draggingEle.style.position = 'absolute';
    draggingEle.style.top = \`\${e.pageY - y}px\`; 
    draggingEle.style.left = \`\${e.pageX - x}px\`;
};
~~~

The \`mouseup\` event handler will remove the position styles of dragging item and cleans up the event handlers:

~~~ javascript
const mouseUpHandler = function() {
    // Remove the position styles
    draggingEle.style.removeProperty('top');
    draggingEle.style.removeProperty('left');
    draggingEle.style.removeProperty('position');

    x = null;
    y = null;
    draggingEle = null;

    // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
~~~

Now we can attach the \`mousedown\` event to each item by [looping over](/loop-over-a-nodelist) the list of items:

~~~ javascript
// Query the list element
const list = document.getElementById('list');

// Query all items
[].slice.call(list.querySelectorAll('.draggable')).forEach(function(item) {
    item.addEventListener('mousedown', mouseDownHandler);
});
~~~

## Add a placeholder

Let's take a look at the list of items again:

~~~ html
A
B
C
D
E
~~~

When we drag an item, \`C\` for example, the next item (\`D\`) will move up to the top and takes the area of the dragging element (\`C\`).
To fix that, we create a dynamic placeholder element and [insert it](/insert-an-element-after-or-before-other-element) right before the dragging element.
The height of placeholder must be the same as dragging element.

The placeholder is created once during the mouse moving, so we add a new flag \`isDraggingStarted\` to track it:

~~~ javascript
let placeholder;
let isDraggingStarted = false;

const mouseMoveHandler = function(e) {
    const draggingRect = draggingEle.getBoundingClientRect();

    if (!isDraggingStarted) {
        // Update the flag
        isDraggingStarted = true;
        
        // Let the placeholder take the height of dragging element
        // So the next element won't move up
        placeholder = document.createElement('div');
        placeholder.classList.add('placeholder');
        draggingEle.parentNode.insertBefore(
            placeholder,
            draggingEle.nextSibling
        );

        // Set the placeholder's height
        placeholder.style.height = \`\${draggingRect.height}px\`;
    }
    
    ...
}
~~~

The placeholder will be [removed](/remove-an-element) as soon as the users drop the item:

~~~ javascript
const mouseUpHandler = function() {
    // Remove the placeholder
    placeholder && placeholder.parentNode.removeChild(placeholder);
    
    ...
};
~~~

Here is the order of element when user drags and moves an item around:

~~~ html
A
B
placeholder   <- The dynamic placeholder
C             <- The dragging item
D
E
~~~

## Determine if user moves item up or down

First of all, we need a helper function to check if an item is above or below another one.

A \`nodeA\` is treated as above of \`nodeB\` if the horizontal center point of \`nodeA\` is less than \`nodeB\`.
The center point of a node can be calculated by taking the sum of its top and half of its height:

~~~ javascript
const isAbove = function(nodeA, nodeB) {
    // Get the bounding rectangle of nodes
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();

    return (rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2);
};
~~~

As user moves the item around, we define the previous and next [sibling items](/get-siblings-of-an-element):

~~~ javascript
const mouseMoveHandler = function(e) {
    // The current order:
    // prevEle
    // draggingEle
    // placeholder
    // nextEle
    const prevEle = draggingEle.previousElementSibling;
    const nextEle = placeholder.nextElementSibling;    
};
~~~

If user moves the item to the top, we will swap the placeholder and the previous item:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...

    // User moves item to the top
    if (prevEle && isAbove(draggingEle, prevEle)) {
        // The current order    -> The new order
        // prevEle              -> placeholder
        // draggingEle          -> draggingEle
        // placeholder          -> prevEle
        swap(placeholder, draggingEle);
        swap(placeholder, prevEle);
        return;
    }
};
~~~

Similarly, we will swap the next and dragging item if we detect that user moves item down to the bottom:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...

    // User moves the dragging element to the bottom
    if (nextEle && isAbove(nextEle, draggingEle)) {
        // The current order    -> The new order
        // draggingEle          -> nextEle
        // placeholder          -> placeholder
        // nextEle              -> draggingEle
        swap(nextEle, placeholder);
        swap(nextEle, draggingEle);
    }
};
~~~

Here, \`swap\` is a small function for [swapping two nodes](/swap-two-nodes):

~~~ javascript
const swap = function(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move \`nodeA\` to before the \`nodeB\`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move \`nodeB\` to before the sibling of \`nodeA\`
    parentA.insertBefore(nodeB, siblingA);
};
~~~

Following is the final demo. Try to drag and drop any item!
`}
/>
<Demo src='/demo/drag-and-drop-element-in-a-list' />
<RelatedPosts
    slugs={[
        'add-or-remove-class-from-an-element',
        'attach-or-detach-an-event-handler',
        'calculate-the-mouse-position-relative-to-an-element',
        'create-an-element',
        'drag-and-drop-table-row',
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

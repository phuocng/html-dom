import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we want to turn the following element to draggable element:

~~~ html
<div id="dragMe" class="draggable">Drag me</div>
~~~

The element needs to have the following styles:

~~~ css
.draggable {
    /* Indicate the element draggable */
    cursor: move;

    /* It will be positioned absolutely */
    position: absolute;

    /* Doesn't allow to select the content inside */
    user-select: none;
}
~~~

In order to make it draggable, we need to handle three events:

* \`mousedown\` on the element: Track the current position of mouse
* \`mousemove\` on \`document\`: Calculate how far the mouse has been moved, and determine the position of element
* \`mouseup\` on \`document\`: Remove the event handlers of \`document\`

~~~ javascript
// The current position of mouse
let x = 0;
let y = 0;

// Query the element
const ele = document.getElementById('dragMe');

// Handle the mousedown event
// that's triggered when user drags the element
const mouseDownHandler = function(e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    
    // Attach the listeners to \`document\`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Set the position of element
    ele.style.top = \`\${ele.offsetTop + dy}px\`; 
    ele.style.left = \`\${ele.offsetLeft + dx}px\`;

    // Reassign the position of mouse
    x = e.clientX;
    y = e.clientY;
};

const mouseUpHandler = function() {
    // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};

ele.addEventListener('mousedown', mouseDownHandler);
~~~
`}
/>
<Demo src='/demo/make-a-draggable-element' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'calculate-the-mouse-position-relative-to-an-element',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'make-a-resizable-element',
        'resize-columns-of-a-table',
        'set-css-style-for-an-element',
        'show-a-ghost-element-when-dragging-an-element',
    ]}
/>
</>
    );
};

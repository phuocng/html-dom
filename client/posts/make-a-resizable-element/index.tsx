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
<div id="resizeMe" class="resizable">Resize me</div>
~~~

First, we need to prepare some elements that indicate the element is resizable. They are placed absolutely at the four sides of the original element.
To make the demo simply, I only prepare two of them which are placed at the right and bottom sides:

~~~ html
<div id="resizeMe" class="resizable">
    Resize me
    <div class="resizer resizer-r"></div>
    <div class="resizer resizer-b"></div>
</div>
~~~

Here is the basic styles for the layout:

~~~ css
.resizable {
    position: relative;
}
.resizer {
    /* All resizers are positioned absolutely inside the element */
    position: absolute;
}

/* Placed at the right side */
.resizer-r {
    cursor: col-resize;
    height: 100%;
    right: 0;
    top: 0;
    width: 5px;
}

/* Placed at the bottom side */
.resizer-b {
    bottom: 0;
    cursor: row-resize;
    height: 5px;
    left: 0;
    width: 100%;
}
~~~

To make the element resizable, we are going to handle three events:

* \`mousedown\` on the resizers: Track the current position of mouse and dimension of the original element
* \`mousemove\` on \`document\`: Calculate how far the mouse has been moved, and adjust the dimension of the element
* \`mouseup\` on \`document\`: Remove the event handlers of \`document\`

~~~ javascript
// Query the element
const ele = document.getElementById('resizeMe');

// The current position of mouse
let x = 0;
let y = 0;

// The dimension of the element
let w = 0;
let h = 0;

// Handle the mousedown event
// that's triggered when user drags the resizer
const mouseDownHandler = function(e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;

    // Calculate the dimension of element
    const styles = window.getComputedStyle(ele);
    w = parseInt(styles.width, 10);
    h = parseInt(styles.height, 10);

    // Attach the listeners to \`document\`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    // Adjust the dimension of element
    ele.style.width = \`\${w + dx}px\`;
    ele.style.height = \`\${h + dy}px\`;
};

const mouseUpHandler = function() {
    // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
~~~

All the event handlers are ready. Finally, we attach the \`mousedown\` event handler to all the resizers:

~~~ javascript
// Query all resizers
const resizers = ele.querySelectorAll('.resizer');

// Loop over them
[].forEach.call(resizers, function(resizer) {
	resizer.addEventListener('mousedown', mouseDownHandler);	
});
~~~
`}
/>
<Demo src='/demo/make-a-resizable-element/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'loop-over-a-nodelist',
        'make-a-draggable-element',
        'resize-columns-of-a-table',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

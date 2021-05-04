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
            addEventListener, clientX, clientY, cursor grab, cursor grabbing,
            drag element, drag scroll, mousedown event, mousemove event, mouseup event,
            remove CSS property, scrollLeft, scrollTop, set CSS property
        `}
    />
</Helmet>
<Markdown
    content={`
User often uses the mouse to scroll in a scrollable container. In addition to that, some applications also allow user to
scroll by dragging the element. You can see that feature implemented in a [PDF viewer](https://react-pdf-viewer.dev), [Figma](https://www.figma.com)
and many more.

This post shows you a simple way to archive that feature with vanilla JavaScript.

Assume that we have a scrollable container as below:

~~~ html
<div id="container" class="container">
    ...
</div>
~~~

The element must have at least two CSS properties:

~~~ css
.container {
    cursor: grab;
    overflow: auto;
}
~~~

The \`cursor: grab\` indicates that the element can be clicked and dragged.

## Scroll to given position

As long as the element is scrollable, we can scroll it to given position by setting the \`scrollTop\` or \`scrollLeft\` property:

~~~ javascript
const ele = document.getElementById('container');
ele.scrollTop = 100;
ele.scrollLeft = 150;
~~~

## Drag to scroll

The implementation is quite straightforward. By using the similar technique in the [Make a draggable element](/make-a-draggable-element) post,
we start with handling the \`mousedown\` event which occurs when user clicks the element:

~~~ javascript
let pos = { top: 0, left: 0, x: 0, y: 0 };

const mouseDownHandler = function(e) {
    pos = {
        // The current scroll 
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
~~~

> ## Tip
>
> This post uses the [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers) tip.

\`pos\` stores the current scroll and mouse positions. When user moves the mouse, we calculate how far it has been moved,
and then scroll to the element to the same position:

~~~ javascript
const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    const dy = e.clientY - pos.y;

    // Scroll the element
    ele.scrollTop = pos.top - dy;
    ele.scrollLeft = pos.left - dx;
};
~~~

> ## Good practice
>
> As you see above, the \`left\`, \`top\`, \`x\`, and \`y\` properties are related to each other.
> It's better to encapsulate them in a single variable \`pos\` instead of creating four variables.

Last but not least, we can improve the user experience by [setting](/set-css-style-for-an-element) some CSS properties when user starts moving the mouse:

~~~ javascript
const mouseDownHandler = function(e) {
    // Change the cursor and prevent user from selecting the text
    ele.style.cursor = 'grabbing';
    ele.style.userSelect = 'none';
    ...
};
~~~

These CSS properties are reset when the mouse is released:

~~~ javascript
const mouseUpHandler = function() {
    ele.style.cursor = 'grab';
    ele.style.removeProperty('user-select');
};
~~~

## Use cases

* [Create a custom scrollbar](/create-a-custom-scrollbar)

Hopefully you love the following demo!
`}
/>
<Demo src='/demo/drag-to-scroll/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'calculate-the-mouse-position-relative-to-an-element',
        'create-a-range-slider',
        'create-an-image-comparison-slider',
        'create-resizable-split-views',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'make-a-draggable-element',
        'make-a-resizable-element',
        'resize-columns-of-a-table',
        'set-css-style-for-an-element',
        'show-a-ghost-element-when-dragging-an-element',
        'zoom-an-image',
    ]}
/>
</>
    );
};

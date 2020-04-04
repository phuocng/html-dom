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
            addEventListener, data attribute, getBoundingClientRect, mousedown event, mousemove event,
            mouseup event, next sibling, nextElementSibling, previous sibling, previousElementSibling,
            set css style, split view
        `}
    />
</Helmet>
<Markdown
    content={`
In this post, we'll add an element to resize children of a given element.
The original element could be organized as below:

~~~ html
<div style="display: flex">
    <!-- Left element -->
    <div>Left</div>

    <!-- The resizer -->
    <div class="resizer" id="dragMe"></div>

    <!-- Right element -->
    <div>Right</div>
</div>
~~~

In order to place the left, resizer and right elements in the same row, we add the \`display: flex\` style to the parent.

## Update the width of left side when dragging the resizer element

It's recommended to look at this [post](/make-a-draggable-element) to see how we can make an element draggable.

In our case, the resizer can be dragged horizontally. First, we have to store the mouse position and the left side's width when user starts clicking the resizer:

~~~ javascript
// Query the element
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;

// The current position of mouse
let x = 0;
let y = 0;

// Width of left side
let leftWidth = 0;

// Handle the mousedown event
// that's triggered when user drags the resizer
const mouseDownHandler = function(e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to \`document\`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

// Attach the handler
resizer.addEventListener('mousedown', mouseDownHandler);
~~~

Looking at the structure of our markup, the left and right side are previous and next sibling of resizer.
They can be [retrieved](/get-siblings-of-an-element) as you see above:

~~~ javascript
const leftSide = resizer.previousElementSibling;
const rightSide = resizer.nextElementSibling;
~~~

Next, when user moves the mouse around, we determine how far the mouse has been moved and then update the width for the left side:

~~~ javascript
const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
    leftSide.style.width = \`\${newLeftWidth}%\`;
};
~~~

There're two important things that I would like to point out here:

* The width of left side is set based on the number of percentages of the parent's width. It keeps the ratio of left and side widths,
and makes two sides look good when user resizes the browser.
* It's not necessary to update the width of right side if we always force it to take the remaining width:

~~~ html
<div style="display: flex">
    <!-- Left element -->
    ...

    <!-- The resizer -->
    ...

    <!-- Right element -->
    <div style="flex: 1 1 0%;">Right</div>
</div>
~~~

## Fix the flickering issue

When user moves the resizer, we should update its cursor:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    resizer.style.cursor = 'col-resize';
};
~~~

But it causes another issue. As soon as the user moves the mouse around, we will see the default mouse cursor beause the
mouse isn't on top of the resizer. User will see the screen flickering because the cursor is changed continuously.

To fix that, we set the cursor for the entire page:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    document.body.style.cursor = 'col-resize';
};
~~~

We also prevent the mouse events and text selection in both sides by [setting the values](/set-css-style-for-an-element)
for \`user-select\` and \`pointer-events\`:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    leftSide.style.userSelect = 'none';
    leftSide.style.pointerEvents = 'none';

    rightSide.style.userSelect = 'none';
    rightSide.style.pointerEvents = 'none';
};
~~~

These styles are removed right after the user stops moving the mouse:

~~~ javascript
const mouseUpHandler = function() {
    resizer.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftSide.style.removeProperty('user-select');
    leftSide.style.removeProperty('pointer-events');

    rightSide.style.removeProperty('user-select');
    rightSide.style.removeProperty('pointer-events');

    // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
~~~

Below is the demo that you can play with.
`}
/>
<Demo src='/demo/create-resizable-split-views/index.html' />
<Markdown
    content={`
## Support vertical direction

It's easy to support splitting the side vertically. Instead of updating the width of left side, now we update the height of the top side:

~~~ javascript
const prevSibling = resizer.previousElementSibling;
let prevSiblingHeight = 0;

const mouseDownHandler = function(e) {
    const rect = prevSibling.getBoundingClientRect();
    prevSiblingHeight = rect.height;
};

const mouseMoveHandler = function(e) {
    const h = (prevSiblingHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
    prevSibling.style.height = \`\${h}%\`;
};
~~~

We also change the cursor when user moves the resizer element:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...
    resizer.style.cursor = 'row-resize';
    document.body.style.cursor = 'row-resize';
};
~~~

## Support both directions

Let's say that the right side wants to be split into two resizable elements. 

We have two resizer elements currently. To indicate the splitting direction for each resizer, we add a custom attribute \`data-direction\`:

~~~ html
<div style="display: flex">
    <div>Left</div>
    <div class="resizer" data-direction="horizontal"></div>

    <!-- The right side -->
    <div style="display: flex; flex: 1 1 0%; flex-direction: column">
        <div>Top</div>
        <div class="resizer" data-direction="vertical"></div>
        <div style="flex: 1 1 0%">Bottom</div>
    </div>
</div>
~~~

Later, we can [retrieve the attribute](/get-set-and-remove-data-attributes) from the resizer element:

~~~ javascript
const direction = resizer.getAttribute('data-direction') || 'horizontal';
~~~

The logic of setting the width or height of previous sibling depends on the direction:

~~~ javascript
const mouseMoveHandler = function(e) {
    switch (direction) {
        case 'vertical':
            const h = (prevSiblingHeight + dy) * 100 / resizer.parentNode.getBoundingClientRect().height;
            prevSibling.style.height = \`\${h}%\`;
            break;
        case 'horizontal':
        default:
            const w = (prevSiblingWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
            prevSibling.style.width = \`\${w}%\`;
            break;
    }

    const cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    resizer.style.cursor = cursor;
    document.body.style.cursor = cursor;

    ...
};
~~~

> ## Tip
>
> Using custom \`data-\` attribute is a good way to manage variables associated with the element.

Enjoy the demo!
`}
/>
<Demo src='/demo/create-resizable-split-views/direction.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'get-set-and-remove-data-attributes',
        'get-siblings-of-an-element',
        'loop-over-a-nodelist',
        'make-a-draggable-element',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

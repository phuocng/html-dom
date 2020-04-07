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
            addEventListener, getBoundingClientRect, image comparison slider, mousedown event, mousemove event,
            mouseup event, previous sibling, previousElementSibling, next sibling, nextElementSibling,
            set css style, set element width
        `}
    />
</Helmet>
<Markdown
    content={`
In this post, we'll create a slider for comparing two imges visually. The slider has three elements organized as below:

~~~ html
<div class="container">
    <!-- Show the modified image -->
    <div class="modified-image"></div>

    <!-- The resizer -->
    <div class="resizer" id="dragMe"></div>

    <!-- The original image -->
    <img src="/path/to/original/image.png" />
</div>
~~~

## The markup

Initially, the modified image will take half width of the container. It's positioned absolutely to the container:

~~~ css
.container {
    position: relative;
}
.modified-image {
    /* Absolute position */
    left: 0;
    position: absolute;
    top: 0;

    /* Take full height and half width of container */
    height: 100%;
    width: 50%;
}
~~~

We don't use the \`img\` tag to display the modified image here because the image could be scaled. Instead, we use the modified
image as the background of modified element:

~~~ html
<div
    class="modified-image"
    style="background-image: url('/path/to/modified/image.png')"
>
</div>
~~~

The modified element uses more styles for showing the background image at desired position:

~~~ css
.modified-image {
    background-position: top;
    background-repeat: no-repeat;
    background-size: auto 100%;
    ...
}
~~~

It's a lot easier to set the position for the resizer. It is displayed at the center of container:

~~~ css
.resizer {
    /* Absolute position */
    left: 50%;
    position: absolute;
    top: 0;

    /* Size */
    height: 100%;
    width: 2px;

    /* Background */
    background-color: #cbd5e0;

    /* Indicate that it can be resized */
    cursor: ew-resize;
}
~~~

## Handle the events

When user moves the resizer, we calculate how far the mouse has been moved. Then set the position for the modified and resizer elements
based on the current mouse position.

For more information about the idea, you can look at the [create resizable split views](/create-resizable-split-views) post.
Here is the piece of code:

~~~ javascript
// Query the element
const resizer = document.getElementById('dragMe');
const leftSide = resizer.previousElementSibling;

// The current position of mouse
let x = 0;
let y = 0;

// The width of modified element
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

const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    let newLeftWidth = (leftWidth + dx) * 100 / resizer.parentNode.getBoundingClientRect().width;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);

    // Set the width for modified and resizer elements
    leftSide.style.width = \`\${newLeftWidth}%\`;
    resizer.style.left = \`\${newLeftWidth}%\`;
};

// Attach the handler
resizer.addEventListener('mousedown', mouseDownHandler);
~~~

When user moves the mouse around, we have to make sure that the mouse isn't moved to out of the container.
That's why we have to compare the \`newLeftWidth\` with 0 and 100 percentages:

~~~ javascript
const mouseMoveHandler = function(e) {
    ...

    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);
};
~~~

Below is the demo that you can play with.

_Photo by [frank mckenna](https://unsplash.com/@frankiefoto) on [Unsplash](https://unsplash.com/photos/OD9EOzfSOh0)_
`}
/>
<Demo src='/demo/create-an-image-comparison-slider/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-a-range-slider',
        'create-resizable-split-views',
        'get-siblings-of-an-element',
        'make-a-draggable-element',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

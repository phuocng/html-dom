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
            addEventListener, getBoundingClientRect, mousedown event, mousemove event, mouseup event, 
            previous sibling, previousElementSibling, next sibling, nextElementSibling, range input,
            range slider, set css style, set element width
        `}
    />
</Helmet>
<Markdown
    content={`
This post introduces two popular ways to create a range slider.

## 1. Use a \`range\` input

HTML provides a built-in \`range\` input:

~~~ html
<input type="range" />
~~~

It's supported in mordern browsers, IE 10 and later. But there're some limitations such as:
* You can't customize the knob
* At the time of writing this, the vertical-oriented slider [isn't supported](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#Browser_compatibility) 
in all mordern browsers

Jump to the next section if you want to have a customizable slider.

> ## Tip
> 
> Using the similar technique mentioned in this [post](/check-if-the-native-date-input-is-supported), we can check if the \`range\` input
> is supported or not:
>
> ~~~ javascript
> const isRangeInputSupported = function() {
>     const ele = document.createElement('input');
>     ele.setAttribute('type', 'range');
>     // If the browser doesn't support the \`range\` input,
>     // the \`type\` attribute will be reverted back to \`text\`
>     return ele.type !== 'text';
> };
> ~~~

## 2. Create a customizable range slider

A slider is a combination of three parts: a knob, and two sides located at the left and right of the knob.

~~~ html
<div class="container">
    <div class="left"></div>
    <div class="knob" id="knob"></div>
    <div class="right"></div>
</div>
~~~

These parts are placed in the same row. The right element takes the available width. So, we can use the following styles
to build the layout:

~~~ css
.container {
    /* Content is centered horizontally */
    align-items: center;
    display: flex;

    /* Size */
    height: 1.5rem;
}
.right {
    /* Take the remaining width */
    flex: 1;
    height: 2px;
}
~~~

You can take a look at the demo to see the full styles of elements.

> ## Resource
>
> This [page](https://csslayout.io/patterns/slider) demonstrates the simplest layout for a range slider

### Handle the events

The idea of making the knob [draggable](/make-a-draggable-element) is quite simple:

* Handle the knob's \`mousedown\` event. The handler stores the mouse position:

~~~ javascript
// Query the element
const knob = document.getElementById('knob');
const leftSide = knob.previousElementSibling;

// The current position of mouse
let x = 0;
let y = 0;
let leftWidth = 0;

// Handle the mousedown event
// that's triggered when user drags the knob
const mouseDownHandler = function(e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to \`document\`
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};
~~~

* When the knob is moving, based on the current and original mouse position, we know how far the mouse has been moved.
We then set the width for the left side:

~~~ javascript
const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const containerWidth = knob.parentNode.getBoundingClientRect().width;
    let newLeftWidth = (leftWidth + dx) * 100 / containerWidth;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);

    leftSide.style.width = \`\${newLeftWidth}%\`;
};
~~~

There're more small things that aren't listed in this post since you can see them in the demo's source.
But I always recommend to cleanup everything when the handlers aren't used:

~~~ javascript
// Triggered when user drops the knob
const mouseUpHandler = function() {
    ...

    // Remove the handlers of \`mousemove\` and \`mouseup\`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
};
~~~

Enjoy the demo!
`}
/>
<Demo src='/demo/create-a-range-slider/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-an-image-comparison-slider',
        'create-resizable-split-views',
        'get-siblings-of-an-element',
        'make-a-draggable-element',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

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
            custom scrollbar, drag to scroll, fake scrollbar, scrollbar-color, scrollbar-width,
            webkit-scrollbar, webkit-scrollbar-track, webkit-scrollbar-thumb,
        `}
    />
</Helmet>
<Markdown
    content={`
You can customize the look and feel of the browser's scrollbar by changing some CSS properties.
For example, we can use the \`:-webkit-scrollbar\` styles on the latest version of Chrome, Edge and Safari:

~~~ css
body::-webkit-scrollbar {
    width: .75rem;
}
*::-webkit-scrollbar-track {
    background-color: #edf2f7;
}
*::-webkit-scrollbar-thumb {
    background-color: #718096;
    border-radius: 9999px;
}
~~~

On Firefox, we can use the new \`scrollbar-width\` and \`scrollbar-color\` styles:

~~~ css
body {
    scrollbar-width: thin;
    /* The color of thumb and track areas */
    scrollbar-color: #718096 #edf2f7;
}
~~~

Unfortunately, the \`-webkit-scrollbar\` styles [aren't standard](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar) 
and isn't recommended to use on production sites.

In this post, you'll see how to hide the default scrollbar and create a fake, customizable scrollbar.

Assume that our target is a scrollable element whose \`height\` or \`max-height\` style is set:

~~~ html
<div id="content" class="content" style="overflow: auto; max-height: ...;">
    ...
</div>
~~~

## Hide the default scrollbar

We wrap the content in a container which has the same \`height\` or \`max-height\` as the content. Instead of setting max height for the content,
it'll take the full height.

~~~ html
<div id="wrapper" class="wrapper">
    <div id="content" class="content">
        ...
    </div>
</div>
~~~

We block the scrolling in the wrapper and still allow user to scroll in the content:

~~~ css
.wrapper {
    max-height: 32rem;
    overflow: hidden;
}
.content {
    height: 100%;
    overflow: auto;
}
~~~

It's easy to hide the default scrollbar by using a negative margin:

~~~ css
.content {
    margin-right: -1rem;
    padding-right: 1rem;
}
~~~

## Position the fake scrollbar

In this step, we'll create an element representing the fake scrollbar. It'll be positioned at the right side of the wrapper,
and has the same height as wrapper.

To do so, we will use the third approach mentioned in the [Position an element absolutely to another element](/position-an-element-absolutely-to-another-element) post:

~~~ html
<div id="wrapper">
    ...
</div>

<!-- Use an anchor -->
<div id="anchor" style="left: 0; position: absolute; top: 0"></div>

<!-- Fake scrollbar -->
<div id="scrollbar" style="position: absolute; width: .75rem;"></div>
~~~

The scrollbar is shown at the desired position by setting the \`top\` and \`left\` styles:

~~~ javascript
// Query elements
const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');
const anchor = document.getElementById('anchor');
const scrollbar = document.getElementById('scrollbar');

// Get the bounding rectangles
const wrapperRect = wrapper.getBoundingClientRect();
const anchorRect = anchor.getBoundingClientRect();

// Set the scrollbar position
const top = wrapperRect.top - anchorRect.top;
const left = wrapperRect.width + wrapperRect.left - anchorRect.left;
scrollbar.style.top = \`\${top}px\`;
scrollbar.style.left = \`\${left}px\`;
~~~

The scrollbar has the same height as the wrapper:

~~~ javascript
scrollbar.style.height = \`\${wrapperRect.height}px\`;
~~~

## Organize the scrollbar

The scrollbar consists of two parts:
* A track element that lets user know that there's a scrollbar. It takes the full size of scrollbar
* A thumb element that user can click on and drag to scroll

~~~ html
<div id="scrollbar">
    <div id="track" class="track"></div>
    <div id="thumb" class="thumb"></div>
</div>
~~~

These parts are positioned absolutely to the scrollbar, therefore they have the following styles:

~~~ css
.track {
    left: 0;
    position: absolute;
    top: 0;

    /* Take full size */
    height: 100%;
    width: 100%;
}
.thumb {
    left: 0;
    position: absolute;
    
    /* Take full width */
    width: 100%;
}
~~~

Initially, the thumb's height is calculated based on the ratio between normal and scroll [heights](/determine-the-height-and-width-of-an-element)
of the content element:

~~~ javascript
// Query element
const track = document.getElementById('track');
const thumb = document.getElementById('thumb');

const scrollRatio = content.clientHeight / content.scrollHeight;
thumb.style.height = \`\${scrollRatio * 100}%\`;
~~~

## Drag the thumb to scroll

Please visit the [Drag to scroll](/drag-to-scroll) post to see the details. Below is the implementation in our use case:

~~~ javascript
let pos = { top: 0, y: 0 };

const mouseDownThumbHandler = function(e) {
    pos = {
        // The current scroll 
        top: content.scrollTop,
        // Get the current mouse position
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
    // How far the mouse has been moved
    const dy = e.clientY - pos.y;

    // Scroll the content
    content.scrollTop = pos.top + dy / scrollRatio;
};

// Attach the \`mousedown\` event handler
thumb.addEventListener('mousedown', mouseDownThumbHandler);
~~~

When user drags the thumb element as well as scroll the content element, we have to update the position of the thumb element.
Here is the \`scroll\` event handler of the content element:

~~~ javascript
const scrollContentHandler = function() {
    window.requestAnimationFrame(function() {
        thumb.style.top = \`\${content.scrollTop * 100 / content.scrollHeight}%\`;
    });
};

content.addEventListener('scroll', scrollContentHandler);
~~~

## Jump when clicking the track

There is another way to scroll. User can jump in the content element by clicking a particular point in the track element.
Again, we have to calculate and update the \`scrollTop\` property for the content element:

~~~ javascript
const trackClickHandler = function(e) {
    const bound = track.getBoundingClientRect();
    const percentage = (e.clientY - bound.top) / bound.height;
    content.scrollTop = percentage * (content.scrollHeight - content.clientHeight);
};

track.addEventListener('click', trackClickHandler);
~~~

I hope this post isn't too long and you can follow until here. Following is the final demo. Enjoy!
`}
/>
<Demo src='/demo/create-a-custom-scrollbar/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'determine-the-height-and-width-of-an-element',
        'drag-to-scroll',
        'position-an-element-absolutely-to-another-element',
    ]}
/>
</>
    );
};

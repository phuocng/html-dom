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
            cancelAnimationFrame, full page scroll, pageYOffset, requestAnimationFrame, scroll-behavior property,
            scrollIntoView, scrollIntoView behavior smooth, scrollTo, smoothly scroll
        `}
    />
</Helmet>
<Markdown
    content={`
As mentioned in the [Scroll to an element](/scroll-to-an-element) post, we can scroll to given element smoothly by passing
\`behavior: 'smooth'\`:

~~~ javascript
ele.scrollIntoView({ behavior: 'smooth' });
~~~

or applying the CSS property \`scroll-behavior\` to the target element:

~~~ css
scroll-behavior: smooth;
~~~

Both methods [aren't supported](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#Browser_compatibility) in IE and Safari, and don't
allow to customize the animation.

This post introduces a smoothly scroll implementation which also allows us to customize the animation effect and duration.
We'll demonstrate in a popular use case that user can jump between sections by clicking associated navigation button.

> ## Resource
>
> The post doesn't mention how to add a navigation fixed on the left (or right) of the page. You can see a
> simple way to [create a fixed navigation](https://csslayout.io/patterns/fixed-at-side) on the [CSS Layout](https://csslayout.io) site.

The navigation consists of some \`a\` elements:

~~~ html
<a href="#section-1" class="trigger"></a>
<a href="#section-2" class="trigger"></a>
...

<div id="section-1">...</div>
<div id="section-2">...</div>
~~~

Clicking the link will scroll the page to a particular element that can be determined by the \`href\` attribute.

~~~ javascript
const triggers = [].slice.call(document.querySelectorAll('.trigger'));
triggers.forEach(function(ele) {
    ele.addEventListener('click', clickHandler);
});
~~~

The \`clickHandler\` function handles the \`click\` event of a navigation element. 
It determintes the target section based on the \`href\` attribute. Notice that we will scroll to the target section ourselves,
hence the [default action](/prevent-the-default-action-of-an-event) will be ignored: 

~~~ javascript
const clickHandler = function(e) {
    // Prevent the default action
    e.preventDefault();

    // Get the \`href\` attribute
    const href = e.target.getAttribute('href');
    const id = href.substr(1);
    const target = document.getElementById(id);

    scrollToTarget(target);
};
~~~

Don't worry if you haven't seen the \`scrollToTarget\` function. As the name implies, the function will scroll the page to given \`target\`.

## Scroll to given target

It is the main part of the post. To scroll to given point, we can use \`window.scrollTo(0, y)\` where \`y\` indicates the distance from the top
of the page to the target.

> ## Good to know
>
> It's also possible to set \`behavior: 'smooth'\`:
> 
> ~~~ javascript
> window.scrollTo({ top, left, behavior: 'smooth' })
> ~~~
>
> The option [isn't supported](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#Browser_Compatibility) in IE and Safari.

What we're going to do is to move from the starting point to the ending point in given duration.
* The starting point is the current y-axis offset, \`window.pageYOffset\`
* The ending point is the top distance of the target. It can be retrieved as \`target.getBoundingClientRect().top\`
* The duration is a number of milliseconds. You can change it to a configurable option, but in this post, it's set as 800.

~~~ javascript
const duration = 800;

const scrollToTarget = function(target) {
    const top = target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const diff = top;

    let startTime = null;
    let requestId;
    
    const loop = function(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }

        // Elapsed time in miliseconds
        const time = currentTime - startTime;

        const percent = Math.min(time / duration, 1);
        window.scrollTo(0, startPos + diff * percent);
        
        if (time < duration) {
            // Continue moving
            requestId = window.requestAnimationFrame(loop);
        } else {
            window.cancelAnimationFrame(requestId);
        }
    };
    requestId = window.requestAnimationFrame(loop);
};
~~~

As you see, we tell the browser to execute the \`loop\` function before the next paint happens. 
At the first time, \`startTime\` will be initialized as the current timestamp (\`currentTime\`).

We then calculate how many milliseconds has gone:

~~~ javascript
const time = currentTime - startTime;
~~~

Based on the elapsed time and the duration, it's so easy to calculate the number of percentages we have been moving,
and scroll to that position:

~~~ javascript
// \`percent\` is in the range of 0 and 1
const percent = Math.min(time / duration, 1);
window.scrollTo(0, startPos + diff * percent);
~~~

Finally, if there's remaining time, we continue looping. Otherwise, we cancel the last request:

~~~ javascript
if (time < duration) {
    // Continue moving
    requestId = window.requestAnimationFrame(loop);
} else {
    window.cancelAnimationFrame(requestId);
}
~~~

> ## Good practice
>
> It's common to think of using \`setTimeout()\` or \`setInterval()\` when we need to move between given points in the given duration.
> But it's recommended to use [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
> which gives better performance animation.

## Customize the animation

Currently, we move to the target equally per millisecond. We move the same distance every milliseconds.
If you want, you can replace the current linear movement with other [easing functions](https://1loc.dev/#easing-functions).

Look at [this website](https://easings.net) to imagine how each easing produces different animations.

The code below uses the \`easeInQuad\` animation:

~~~ javascript
const easeInQuad = function(t) {
    return t * t;
};

const loop = function(currentTime) {
    ...
    const percent = Math.min(time / duration, 1);
    window.scrollTo(0, startPos + diff * easeInQuad(percent));
});
~~~

In the following demo, try to move between sections by clicking an circle on the left.
`}
/>
<Demo src='/demo/scroll-to-an-element-smoothly/index.html' />
<RelatedPosts
    slugs={[
        'scroll-to-an-element',
        'scroll-to-top-of-the-page',
    ]}
/>
</>
    );
};

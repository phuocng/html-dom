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
        content='absolute position, element position, getBoundingClientRect'
    />
</Helmet>
<Markdown
    content={`
It's a common requirement that asks for an element to be shown absolutely to a particular element. We can list some cases, such as
* Show a popover when clicking an element
* Show a tooltip when moving the mouse over an element
* Or show a context menu when right-clicking an element 

In this post, you'll see three ways to archive that requirement. They are implemented to demonstrate the first use case where
we display a popover under a given target.

First of all, assume that the target and popover elements are two simple \`div\` elements as below:

~~~ html
<div id="target">...</div>
<div id="popover">...</div>
~~~

> ## Resource
>
> The implementations don't tell you how to add an arrow to the popover. You can take a look at this [page](https://csslayout.io/patterns/popover-arrow/)
> to see how it can be done with CSS.

## 1. Use absolute CSS

This is the easiest way. To position the popover absolutely to the target, we can place the popover in the target

~~~ html
<div id="target" class="target">
    ...
    <div id="popover" class="popover">
        ...
    </div>
</div>
~~~

and apply the simple CSS styles as below:

~~~ css
.target {
    position: relative;
}
.popover {
    left: 50%;
    position: absolute;
    top: 100%;
    transform: translate(-50%, .75rem);
}
~~~

This way uses CSS only and doesn't require any position calculation. Anyway, it doesn't work if the target has the \`overflow: hidden\` style.

In the demo below, clicking the _Toggle overflow:hidden_ button will make the popover hidden as well.
`}
/>
<Demo src='/demo/position-an-element-absolutely-to-another-element/css.html' />
<Markdown
    content={`
## 2. Append the popover to \`body\`

This approach comes from the idea of putting the popover to \`body\`:

~~~ html
<body>
    <div id="target">...</div>

    <div id="popover">...</div>
</body>
~~~

We still use the absolute style for the popover, but this time we need to calculate the \`top\` and \`left\` properties.

It's easy to determine them based on the bounding rectangles of the target and popover:

~~~ javascript
const target = document.getElementById('target');
const popover = document.getElementById('popover');

const targetRect = target.getBoundingClientRect();
const popoverRect = popover.getBoundingClientRect();

const top = targetRect.top + targetRect.height;
const left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
~~~

We also need space for the arrow at the top, so let's add some offset:

~~~ javascript
popover.style.top = \`\${top + 8}px\`;
popover.style.left = \`\${left}px\`;
~~~
`}
/>
<Demo src='/demo/position-an-element-absolutely-to-another-element/absolute.html' />
<Markdown
    content={`
## 3. Use an anchor element

This approach is similar to the previous one. The difference is that instead of appending the popover to \`body\`, we add an anchor
between the target and popover.

~~~ html
<div id="target">...</div>
<div id="anchor" class="anchor"></div>
<div id="popover">...</div>
~~~

The anchor is positioned absolutely as following:

~~~ css
.anchor {
    left: 0;
    position: absolute;
    top: 0;
}
~~~

The popover's top and left properties have to subtract the top and left values of the anchor from the one we calculate in the previous
section:

~~~ javascript
const target = document.getElementById('target');
const anchor = document.getElementById('anchor');
const popover = document.getElementById('popover');

const targetRect = target.getBoundingClientRect();
const anchorRect = anchor.getBoundingClientRect();
const popoverRect = popover.getBoundingClientRect();

const top = targetRect.top + targetRect.height;
const left = targetRect.left + targetRect.width / 2 - popoverRect.width / 2;

popover.style.top = \`\${top - anchorRect.top + 8}px\`;
popover.style.left = \`\${left - anchorRect.left}px\`;
~~~

## Use cases

* [Create a custom scrollbar](/create-a-custom-scrollbar)
`}
/>
<Demo src='/demo/position-an-element-absolutely-to-another-element/anchor.html' />
<RelatedPosts
    slugs={[
        'get-the-position-of-an-element-relative-to-another',
    ]}
/>
</>
    );
};

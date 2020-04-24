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
            addEventListener, clientX, clientY, contextmenu event, custom context menu,
            detect click outside, getBoundingClientRect, mouse position, prevent default action, set element position
        `}
    />
</Helmet>
<Markdown
    content={`
The browser will show the default context menu when user right-clicks on the page. Sometimes, we want to replace the default menu
with our own menu that allows user to perform additional actions.

This post illustrates a simple implementation.

First of all, let's create an element that we want to show a customized context menu element:

~~~ html
<div id="element">Right-click me</div>

<ul id="menu">...</menu>
~~~

## Prevent the default context menu from being displayed

To do that, we just [prevent the default action](/prevent-the-default-action-of-an-event) of the \`contextmenu\` event:

~~~ javascript
const ele = document.getElementById('element');
ele.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
~~~

## Show the menu at clicked position

We will calculate the position of menu, but it need to be positioned absolutely to its container firstly.
So, let's place the element and menu to a container whose position is \`relative\`:

~~~ html
<div class="relative">
    <div id="element">Right-click me</div>

    <ul id="menu" class="absolute hidden">...</menu>
</div>
~~~

The \`relative\`, \`absolute\` and \`hidden\` classes are defined as following:

~~~ css
.relative {
    position: relative;
}
.absolute {
    position: absolute;
}
.hidden {
    /* The menu is hidden at first */
    display: none;
}
~~~

> ## Resource
>
> This post doesn't tell how to build the menu. It's up to you but [CSS Layout](https://csslayout.io/patterns/menu) is a nice resource to look at.

It's the time to set the position for the menu. It can be calculated based on [the mouse position](/calculate-the-mouse-position-relative-to-an-element):

~~~ javascript
ele.addEventListener('contextmenu', function(e) {
    const rect = ele.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set the position for menu
    menu.style.top = \`\${y}px\`;
    menu.style.left = \`\${x}px\`;

    // Show the menu
    menu.classList.remove('hidden');
});
~~~

## Close the menu when clicking outside

We can handle the \`click\` event of \`document\`, and determine if user [clicks outside](/detect-clicks-outside-of-an-element) of the menu:

~~~ javascript
ele.addEventListener('contextmenu', function(e) {
    ...
    document.addEventListener('click', documentClickHandler);
});

// Hide the menu when clicking outside of it
const documentClickHandler = function(e) {
    const isClickedOutside = !menu.contains(e.target);
    if (isClickedOutside) {
        // Hide the menu
        menu.classList.add('hidden');

        // Remove the event handler
        document.removeEventListener('click', documentClickHandler);
    }
};
~~~

The menu is hidden by [adding](/add-or-remove-class-from-an-element) the \`hidden\` class. 

More importantly, the \`click\` event handler is also removed from \`document\` as we don't need to handle that when the menu is hidden.
This technique is mentioned in the [Create one time event handler](/create-one-time-event-handler) post.

> ## Tip
>
> This post uses the [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers) tip.

## Use case

* [Show or hide table columns](/show-or-hide-table-columns)

Finally, following is the demo you can play with!
`}
/>
<Demo src='/demo/show-a-custom-context-menu-at-clicked-position/index.html' />
<RelatedPosts
    slugs={[
        'add-or-remove-class-from-an-element',
        'attach-event-handlers-inside-other-handlers',
        'attach-or-detach-an-event-handler',
        'calculate-the-mouse-position-relative-to-an-element',
        'create-one-time-event-handler',
        'prevent-the-default-action-of-an-event',
        'set-css-style-for-an-element',
        'show-or-hide-table-columns',
    ]}
/>
</>
    );
};

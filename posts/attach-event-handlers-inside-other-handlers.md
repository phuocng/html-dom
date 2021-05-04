import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, attach event handler, detach event handler, removeEventListener' />
</Helmet>
<Markdown
    content={`
Usually, there are many event handlers which handle different events for different elements. These events could depend on each other.

Let's look at a common use case. When user clicks a button, we will open a modal at the center of screen. The modal can be closed by pressing
the Escape key.

There are two handlers here:
* The first one handles the \`click\` event of the button
* The second one handles the \`keydown\` event of the entire \`document\`

We often create two separated handlers as following:

~~~ javascript
const handleClick = function() {
    // Open the modal
};

const handleKeydown = function(e) {
    // Close the modal if the Escape key is pressed
};

// Assume that \`buttonEle\` represents the button element
buttonEle.addEventListener('click', handleClick);
document.addEventListener('keydown', handleKeydown);
~~~

The \`handleKeydown\` handler depends on \`handleClick\` because we only check the pressed key if the modal is already opened.
It's a common way to add a flag to track if the modal is opened or not:

~~~ javascript
let isModalOpened = false;

const handleClick = function() {
    // Turn on the flag
    isModalOpened = true;
    // Open the modal ...
};

const handleKeydown = function(e) {
    // Check if the modal is opened first
    if (isModalOpened) {
        // Check the pressed key ...
    }
};
~~~

More elements, more dependent events and more flags! As the result, it's more difficult to maintain the code.

Instead of adding event separately at first, we add an event handler right inside another one which it depends on.
Here is how the tip approaches:

~~~ javascript
const handleClick = function() {
    document.addEventListener('keydown', handleKeydown);  
};
~~~

No flag at all! The code is more readable and easier to understand.

## Use cases

You can see the tip used in another posts:

* [Create a custom scrollbar](/create-a-custom-scrollbar)
* [Create a range slider](/create-a-range-slider)
* [Create an image comparison slider](/create-an-image-comparison-slider)
* [Create resizable split views](/create-resizable-split-views)
* [Drag to scroll](/drag-to-scroll)
* [Make a draggable element](/make-a-draggable-element)
* [Make a resizable element](/make-a-resizable-element)
* [Print an image](/print-an-image)
* [Resize columns of a table](/resize-columns-of-a-table)
* [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)
* [Show or hide table columns](/show-or-hide-table-columns)
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-one-time-event-handler',
    ]}
/>
</>
    );
};

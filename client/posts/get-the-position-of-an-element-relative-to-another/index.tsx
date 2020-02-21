import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Assume that we're going to measure the top and left positions of the \`ele\` element relative to the \`target\` element.

~~~ javascript
// Get the top, left coordinates of two elements
const eleRect = ele.getBoundingClientRect();
const targetRect = ele.getBoundingClientRect();

// Calculate the top and left positions
const top = eleRect.top - targetRect.top;
const left = eleRect.left - targetRect.left;
~~~

## Might be useful

* [Get the position of an element relative to the document](get-the-position-of-an-element-relative-to-the-document)
`}
/>
    );
};

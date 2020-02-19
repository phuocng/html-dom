import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Get the previous sibling

~~~ javascript
const next = ele.previousSibling;
~~~

## Get the next sibling

~~~ javascript
const next = ele.nextSibling;
~~~

## Get all siblings

~~~ javascript
// Get the parent node
const parent = ele.parentNode;

// Filter the children, exclude the element
const siblings = Array.from(parent.children).filter(function(child) {
    return child !== ele;
});
~~~
`}
/>
    );
};

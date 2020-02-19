import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Remove the \`ele\` element except its children:

~~~ javascript
// Get the parent node
const parent = ele.parentNode;

// Move all children node to the parent
while (ele.firstChild) {
    parent.insertBefore(ele.firstChild, ele);
}

// \`ele\` becomes an empty element
// Remove it from the parent
parent.removeChild(ele);
~~~

## Might be useful

* [Remove all children of a node](/remove-all-children-of-a-node)
* [Wrap an element around a given element](/wrap-an-element-around-a-given-element)
`}
/>
    );
};

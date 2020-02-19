import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Get the children nodes of the \`ele\` element:

~~~ javascript
const childNodes = ele.childNodes;
~~~

By looping over the chidren, you can get the first or last child:

~~~ javascript
const first = childNodes[0];
const last = childNodes[childNodes.length - 1];
~~~

There are properties to access the first and last child directly:

~~~ javascript
const first = ele.firstChild;
const last = ele.lastChild;
~~~

## Might be useful

* [Get the parent node of an element](/get-the-parent-node-of-an-element)
* [Loop over a NodeList](/loop-over-a-nodelist)
`}
/>
    );
};

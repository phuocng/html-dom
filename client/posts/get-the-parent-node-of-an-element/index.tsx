import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Returns the parent node of the \`ele\` element:

~~~ javascript
const parent = ele.parentNode;
~~~

## Might be useful

* [Select the children of an element](/select-the-children-of-an-element)
`}
/>
    );
};

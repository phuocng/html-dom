import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Insert after

Insert the \`ele\` element after the \`refEle\` element:

~~~ javascript
refEle.parentNode.insertBefore(ele, refEle.nextSibling);
~~~

## Insert before

Insert the \`ele\` element before the \`refEle\` element:

~~~ javascript
refEle.parentNode.insertBefore(ele, refEle);
~~~

## Might be useful

* [Prepend to an element](/prepend-to-an-element)
`}
/>
    );
};

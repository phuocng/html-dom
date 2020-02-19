import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Add the \`ele\` element to the beginning of the \`target\` element:

~~~ javascript
target.insertBefore(ele, target.firstChild);
~~~

## Might be useful

* [Append to an element](/append-to-an-element)
* [Insert an element after or before other element](/insert-an-element-after-or-before-other-element)
`}
/>
    );
};

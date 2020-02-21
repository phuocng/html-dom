import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Append the \`ele\` element to the end of the \`target\` element:

~~~ javascript
target.appendChild(ele);
~~~

## Might be useful

* [Download a file](/download-a-file)
* [Prepend to an element](/prepend-to-an-element)
`}
/>
    );
};

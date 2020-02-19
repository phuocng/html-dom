import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Returns the raw text content of the \`ele\` element and its children.
All the HTML tags are excluded.

~~~ javascript
const text = ele.textContent();
~~~

## Might be useful

* [Get or set the HTML of an element](/get-or-set-the-html-of-an-element)
`}
/>
    );
};

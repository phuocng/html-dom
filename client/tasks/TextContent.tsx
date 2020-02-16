import React from 'react';

import Markdown from '../components/Markdown';

const TextContent: React.FC<{}> = () => {
    return (
<Markdown
    content={`
Returns the raw text content of the \`ele\` element and its children.
All the HTML tags are excluded.

~~~ javascript
const text = ele.textContent();
~~~
`}
/>
    );
};

export default TextContent;

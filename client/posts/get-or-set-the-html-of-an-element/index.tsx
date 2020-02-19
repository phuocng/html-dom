import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Get the HTML

~~~ javascript
// Get the HTML
const html = ele.innerHTML;
~~~

## Set the HTML

~~~ javascript
// Set the HTML
ele.innerHTML = '<h1>Hello World!</h1>';
~~~

## Might be useful

* [Get the text content of an element](/get-the-text-content-of-an-element)
`}
/>
    );
};

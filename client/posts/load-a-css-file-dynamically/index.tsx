import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
~~~ javascript
// Create new link element
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/path/to/js/file.css');

// Append to the \`head\` element
document.head.appendChild(link);
~~~

## Might be useful

* [Load a JavaScript file dynamically](/load-a-javascript-file-dynamically)
`}
/>
    );
};

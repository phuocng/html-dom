import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Create new element

~~~ javascript
const ele = document.createElement('div');
~~~

## Create new text node

~~~ javascript
const ele = document.createTextNode('Hello World!');
~~~

## Might be useful

* [Copy text to the clipboard](/copy-text-to-the-clipboard)
* [Download a file](/download-a-file)
`}
/>
    );
};

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
`}
/>
    );
};

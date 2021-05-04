import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Get the document title

~~~ javascript
const title = document.title;
~~~

## Set the document title

~~~ javascript
document.title = 'Hello World';
~~~
`}
/>
    );
};

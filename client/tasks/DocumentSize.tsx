import React from 'react';

import Markdown from '../components/Markdown';

const DocumentSize: React.FC<{}> = () => {
    return (
<Markdown
    content={`
## Get the document height

~~~ javascript
// Full height, including the scroll part
const fullHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
~~~

## Get the document width

~~~ javascript
// Full width, including the scroll part
const fullWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
~~~
`}
/>
    );
};

export default DocumentSize;

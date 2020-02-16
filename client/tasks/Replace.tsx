import React from 'react';

import Markdown from '../components/Markdown';

const Replace: React.FC<{}> = () => {
    return (
<Markdown
    content={`
The \`ele\` will be removed from the DOM tree, and is replaced with \`newEle\`:

~~~ javascript
ele.parentNode.replaceChild(newEle, ele);
~~~
`}
/>
    );
};

export default Replace;

import React from 'react';

import Markdown from '../components/Markdown';

const Parent: React.FC<{}> = () => {
    return (
<Markdown
    content={`
Returns the parent node of the \`ele\` element:

~~~ javascript
const parent = ele.parentNode;
~~~
`}
/>
    );
};

export default Parent;

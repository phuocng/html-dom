import React from 'react';

import Markdown from '../components/Markdown';

const Append: React.FC<{}> = () => {
    return (
<Markdown
    content={`
Append the \`ele\` element to the end of \`target\` element:

~~~ javascript
target.appendChild(ele);
~~~
`}
/>
    );
};

export default Append;

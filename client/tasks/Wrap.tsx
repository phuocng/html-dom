import React from 'react';

import Markdown from '../components/Markdown';

const Wrap: React.FC<{}> = () => {
    return (
<Markdown
    content={`
Wrap the \`wrapper\` element around the \`ele\` element:

~~~ javascript
// First, insert \`wrapper\` before \`ele\` in its parent node
ele.parentNode.insertBefore(wrapper, ele);

// And then, turn \`ele\` into a children of \`wrapper\`
wrapper.appendChild(ele);
~~~
`}
/>
    );
};

export default Wrap;

import React from 'react';

import Markdown from '../components/Markdown';

const Insert: React.FC<{}> = () => {
    return (
<Markdown
    content={`
## Insert after

Insert the \`ele\` element after the \`refEle\` element:

~~~ javascript
refEle.parentNode.insertBefore(ele, refEle.nextSibling);
~~~

## Insert before

Insert the \`ele\` element before the \`refEle\` element:

~~~ javascript
refEle.parentNode.insertBefore(ele, refEle);
~~~
`}
/>
    );
};

export default Insert;

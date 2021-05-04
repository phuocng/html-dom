import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
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
<RelatedPosts
    slugs={[
        'unwrap-an-element',
    ]}
/>
</>
    );
};

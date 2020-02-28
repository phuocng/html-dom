import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Append the \`ele\` element to the end of the \`target\` element:

~~~ javascript
target.appendChild(ele);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'copy-text-to-the-clipboard',
        'download-a-file',
        'prepend-to-an-element',
    ]}
/>
</>
    );
};

import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
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
<RelatedPosts
    slugs={[
        'prepend-to-an-element',
    ]}
/>
</>
    );
};

import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Returns the parent node of the \`ele\` element:

~~~ javascript
const parent = ele.parentNode;
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-a-descendant-of-another',
        'get-the-first-scrollable-parent-of-an-element',
        'select-the-children-of-an-element',
    ]}
/>
</>
    );
};

import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='parent node, parentNode' />
</Helmet>
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
        'swap-two-nodes',
        'zoom-an-image',
    ]}
/>
</>
    );
};

import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='insert after, insert before, insertAdjacentElement, insertBefore, nextSibling' />
</Helmet>
<Markdown
    content={`
## Insert after

Insert the \`ele\` element after the \`refEle\` element:

~~~ javascript
refEle.parentNode.insertBefore(ele, refEle.nextSibling);

// Or
refEle.insertAdjacentElement('afterend', ele);
~~~

## Insert before

Insert the \`ele\` element before the \`refEle\` element:

~~~ javascript
refEle.parentNode.insertBefore(ele, refEle);

// Or
refEle.insertAdjacentElement('beforebegin', ele);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'append-to-an-element',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-row',
        'insert-given-html-after-or-before-an-element',
        'prepend-to-an-element',
        'swap-two-nodes',
    ]}
/>
</>
    );
};

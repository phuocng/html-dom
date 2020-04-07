import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='all siblings, next sibling, nextSibling, parentNode, previous sibling, previousSibling' />
</Helmet>
<Markdown
    content={`
## Get the previous sibling

~~~ javascript
const prev = ele.previousSibling;
~~~

## Get the next sibling

~~~ javascript
const next = ele.nextSibling;
~~~

## Get all siblings

~~~ javascript
// Get the parent node
const parent = ele.parentNode;

// Filter the children, exclude the element
const siblings = [].slice.call(parent.children).filter(function(child) {
    return child !== ele;
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'create-a-range-slider',
        'create-an-image-comparison-slider',
        'create-resizable-split-views',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'swap-two-nodes',
    ]}
/>
</>
    );
};

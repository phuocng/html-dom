import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content='element position, getBoundingClientRect'
    />
</Helmet>
<Markdown
    content={`
Assume that we're going to measure the top and left positions of the \`ele\` element relative to the \`target\` element.

~~~ javascript
// Get the top, left coordinates of two elements
const eleRect = ele.getBoundingClientRect();
const targetRect = ele.getBoundingClientRect();

// Calculate the top and left positions
const top = eleRect.top - targetRect.top;
const left = eleRect.left - targetRect.left;
~~~
`}
/>
<RelatedPosts
    slugs={[
        'calculate-the-mouse-position-relative-to-an-element',
        'get-the-position-of-an-element-relative-to-the-document',
        'position-an-element-absolutely-to-another-element',
    ]}
/>
</>
    );
};

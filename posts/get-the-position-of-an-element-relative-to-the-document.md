import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
// Get the top, left coordinates of the element
const rect = ele.getBoundingClientRect();

// Add the scroll postion to get the full distance from the element
// to the top, left sides of the document
const top = rect.top + document.body.scrollTop;
const left = rect.left + document.body.scrollLeft;
~~~
`}
/>
<RelatedPosts
    slugs={[
        'calculate-the-mouse-position-relative-to-an-element',
        'get-the-position-of-an-element-relative-to-another',
    ]}
/>
</>
    );
};

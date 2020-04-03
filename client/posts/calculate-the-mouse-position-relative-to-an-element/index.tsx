import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, clientX, clientY, getBoundingClientRect, mouse position' />
</Helmet>
<Markdown
    content={`
The following code calculates the mouse position relative to the clicked element:

~~~ javascript
ele.addEventListener('mousedown', function(e) {
    // Get the target
    const target = e.target;

    // Get the bounding rectangle of target
    const rect = target.getBoundingClientRect();

    // Mouse position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'get-the-position-of-an-element-relative-to-another',
        'get-the-position-of-an-element-relative-to-the-document',
        'make-a-draggable-element',
    ]}
/>
</>
    );
};

import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
The following function returns \`true\` if the \`ele\` element is scrollable.

~~~ javascript
const isScrollable = function(ele) {
    // Compare the height to see if the element has scrollable content
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    // It's not enough because the element's \`overflow-y\` style can be set as
    // * \`hidden\`
    // * \`hidden !important\`
    // In those cases, the scrollbar isn't shown
    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowHidden;
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-css-styles-of-an-element',
        'get-the-first-scrollable-parent-of-an-element',
    ]}
/>
</>
    );
};

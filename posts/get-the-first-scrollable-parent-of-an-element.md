import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Starting from the given \`ele\` element, we traverse all parents up to the root of document (\`document.body\`).
For each parent node, we check if it is a [scrollable node](/check-if-an-element-is-scrollable).

~~~ javascript
const isScrollable = function(ele) {
    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;

    const overflowYStyle = window.getComputedStyle(ele).overflowY;
    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

    return hasScrollableContent && !isOverflowHidden;
};

const getScrollableParent = function(ele) {
    return (!ele || ele === document.body)
        ? document.body
        : (isScrollable(ele) ? ele : getScrollableParent(ele.parentNode));
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-scrollable',
        'get-the-parent-node-of-an-element',
    ]}
/>
</>
    );
};

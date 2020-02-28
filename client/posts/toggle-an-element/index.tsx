import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
To toggle the element, we update the \`display\` property:

~~~ javascript
const toggle = function(ele) {
    const display = ele.style.display;
    ele.style.display = display === 'none' ? 'block' : 'none';
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'set-css-style-for-an-element',
        'show-or-hide-an-element',
    ]}
/>
</>
    );
};

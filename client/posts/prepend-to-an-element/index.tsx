import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Add the \`ele\` element to the beginning of the \`target\` element:

~~~ javascript
target.insertBefore(ele, target.firstChild);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'append-to-an-element',
        'insert-an-element-after-or-before-other-element',
        'insert-given-html-after-or-before-an-element',
    ]}
/>
</>
    );
};

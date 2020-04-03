import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
const cloned = ele.cloneNode(true);
~~~

Using the \`cloneNode(true)\` method will deep copy a given element. In the sample code above, all attributes and children of the original node \`ele\`
will be cloned in \`cloned\` as well.

Passing \`false\` produces a cloned node that keeps only the attributes and the original node:

~~~ javascript
const cloned = ele.cloneNode(false);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
    ]}
/>
</>
    );
};

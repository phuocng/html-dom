import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Remove the \`ele\` element except its children:

~~~ javascript
// Get the parent node
const parent = ele.parentNode;

// Move all children node to the parent
while (ele.firstChild) {
    parent.insertBefore(ele.firstChild, ele);
}

// \`ele\` becomes an empty element
// Remove it from the parent
parent.removeChild(ele);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'remove-all-children-of-a-node',
        'wrap-an-element-around-a-given-element',
    ]}
/>
</>
    );
};

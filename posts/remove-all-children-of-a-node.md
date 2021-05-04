import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 1. Empty the inner HTML (not recommended)

~~~ javascript
ele.innerHTML = '';
~~~

This method isn't recommended because it doesn't remove event handlers of child node. Hence, it might cause a memory leak if you
are managing a big list of elements.

## 2. Remove child nodes

Remove its child node until it doesn't have any children.

~~~ javascript
while (node.firstChild) {
    node.removeChild(node.firstChild);
}
~~~
`}
/>
<RelatedPosts
    slugs={[
        'remove-an-element',
        'unwrap-an-element',
    ]}
/>
</>
    );
};

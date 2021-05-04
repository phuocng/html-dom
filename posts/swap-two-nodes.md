import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='insertBefore, nextSibling, parentNode, swap nodes' />
</Helmet>
<Markdown
    content={`
The function below swaps two given nodes, \`nodeA\` and \`nodeB\`:

~~~ javascript
const swap = function(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move \`nodeA\` to before the \`nodeB\`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move \`nodeB\` to before the sibling of \`nodeA\`
    parentA.insertBefore(nodeB, siblingA);
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-siblings-of-an-element',
        'get-the-parent-node-of-an-element',
        'insert-an-element-after-or-before-other-element',
    ]}
/>
</>
    );
};

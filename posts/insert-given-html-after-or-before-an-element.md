import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='insertAdjacentHTML' />
</Helmet>
<Markdown
    content={`
## Insert after

Insert \`html\` after the \`ele\` element:

~~~ javascript
ele.insertAdjacentHTML('afterend', html);
~~~

## Insert before

Insert \`html\` before the \`ele\` element:

~~~ javascript
ele.insertAdjacentHTML('beforebegin', html);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'append-to-an-element',
        'insert-an-element-after-or-before-other-element',
        'prepend-to-an-element',
    ]}
/>
</>
    );
};

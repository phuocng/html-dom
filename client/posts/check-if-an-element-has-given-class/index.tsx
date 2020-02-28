import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
ele.classList.contains('class-name');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'add-or-remove-class-from-an-element',
    ]}
/>
</>
    );
};

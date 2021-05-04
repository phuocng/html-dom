import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
location.href = '/the/new/url';
~~~
`}
/>
<RelatedPosts
    slugs={[
        'reload-the-current-page',
    ]}
/>
</>
    );
};

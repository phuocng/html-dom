import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Reload and keep the POST data

~~~ javascript
location.reload();
~~~

## Reload and ignore the POST data

~~~ javascript
location.href = location.href;
~~~
`}
/>
<RelatedPosts
    slugs={[
        'redirect-to-another-page',
    ]}
/>
</>
    );
};

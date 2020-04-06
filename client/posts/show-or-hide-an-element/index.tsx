import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Show an element

~~~ javascript
ele.style.display = '';
~~~

## Hide an element

~~~ javascript
ele.style.display = 'none';
~~~
`}
/>
<RelatedPosts
    slugs={[
        'detect-if-the-caps-lock-is-on',
        'get-size-of-the-selected-file',
        'set-css-style-for-an-element',
        'show-a-loading-indicator-when-an-iframe-is-being-loaded',
        'toggle-an-element',
    ]}
/>
</>
    );
};

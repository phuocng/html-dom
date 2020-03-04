import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Get the HTML

~~~ javascript
// Get the HTML
const html = ele.innerHTML;
~~~

## Set the HTML

~~~ javascript
// Set the HTML
ele.innerHTML = '<h1>Hello World!</h1>';
~~~
`}
/>
<RelatedPosts
    slugs={[
        'detect-if-the-caps-lock-is-on',
        'get-the-text-content-of-an-element',
        'placeholder-for-a-contenteditable-element',
    ]}
/>
</>
    );
};

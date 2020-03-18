import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='get element HTML, HTML of element, innerHTML, set element HTML' />
</Helmet>
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
        'count-the-number-of-characters-of-a-textarea',
        'detect-if-the-caps-lock-is-on',
        'get-size-of-the-selected-file',
        'get-the-text-content-of-an-element',
        'placeholder-for-a-contenteditable-element',
        'sort-a-table-by-clicking-its-headers',
        'strip-html-from-a-given-text',
    ]}
/>
</>
    );
};

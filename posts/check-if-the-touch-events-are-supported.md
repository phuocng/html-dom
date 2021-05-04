import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='check touch events supported, DocumentTouch' />
</Helmet>
<Markdown
    content={`
Check if the current browser supports the touch events:

~~~ javascript
const touchSupported = 'ontouchstart' in window || 
    (window.DocumentTouch && document instanceof DocumentTouch);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'detect-mobile-browsers',
    ]}
/>
</>
    );
};

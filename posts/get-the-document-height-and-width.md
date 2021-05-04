import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            clientHeight, clientWidth, document height, document width, offsetHeight,
            offsetWidth, scrollHeight, scrollWidth
        `}
    />
</Helmet>
<Markdown
    content={`
## Get the document height

~~~ javascript
// Full height, including the scroll part
const fullHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
~~~

## Get the document width

~~~ javascript
// Full width, including the scroll part
const fullWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-in-the-viewport',
    ]}
/>
</>
    );
};

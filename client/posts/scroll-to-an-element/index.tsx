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
        content='scrollIntoView, scrollIntoView behavior smooth, smoothly scroll'
    />
</Helmet>
<Markdown
    content={`
## Scroll to the \`ele\` element

~~~ javascript
ele.scrollIntoView();
~~~

## Smoothly scroll

The \`behavior\` option [isn't supported](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#Browser_compatibility) in IE.

~~~ javascript
ele.scrollIntoView({ behavior: 'smooth' });
~~~
`}
/>
<RelatedPosts
    slugs={[
        'scroll-to-top-of-the-page',
    ]}
/>
</>
    );
};

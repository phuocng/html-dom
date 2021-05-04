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
        content='overflow hidden, prevent scrolling, remove CSS style, removeProperty, set CSS styles'
    />
</Helmet>
<Markdown
    content={`
~~~ javascript
// Disable scrolling on the \`body\` element when opening a modal
document.body.style.overflow = 'hidden';

// Allow to scroll when closing the modal
document.body.style.removeProperty('overflow');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'set-css-style-for-an-element'
    ]}
/>
</>
    );
};

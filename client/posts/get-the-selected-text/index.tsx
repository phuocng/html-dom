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
        content='get selected text, window getSelection'
    />
</Helmet>
<Markdown
    content={`
~~~ javascript
const selectedText = window.getSelection().toString();
~~~
`}
/>
<RelatedPosts
    slugs={[
        'paste-as-plain-text',
        'save-and-restore-the-text-selection',
        'select-the-text-content-of-an-element',
    ]}
/>
</>
    );
};

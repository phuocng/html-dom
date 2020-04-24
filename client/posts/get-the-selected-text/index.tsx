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
        'copy-highlighted-code-to-the-clipboard',
        'get-the-direction-of-the-text-selection',
        'paste-as-plain-text',
        'save-and-restore-the-text-selection',
        'select-the-text-content-of-an-element',
    ]}
/>
</>
    );
};

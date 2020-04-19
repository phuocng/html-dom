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
        content='createRange, getSelection, removeAllRanges, select text content, selectNodeContents'
    />
</Helmet>
<Markdown
    content={`
The following function selects the text content of the \`ele\` element:

~~~ javascript
const selectText = function(ele) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'copy-highlighted-code-to-the-clipboard',
        'get-the-selected-text',
        'paste-as-plain-text',
        'save-and-restore-the-text-selection',
    ]}
/>
</>
    );
};

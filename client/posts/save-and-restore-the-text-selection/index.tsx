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
        content='addRange, getRangeAt, getSelection, rangeCount, removeAllRanges, restore range, window get selection'
    />
</Helmet>
<Markdown
    content={`
Here are the functions for saving and restoring the text selection:

~~~ javascript
// Save the selection
// Return a \`Range\` instance if there is a selected text
const save = function() {
    const selection = window.getSelection();
    return selection.rangeCount === 0 ? null : selection.getRangeAt(0);
};

// Restore the selection
// \`range\` is a \`Range\` object
const restore = function(range) {
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'copy-highlighted-code-to-the-clipboard',
        'get-the-direction-of-the-text-selection',
        'get-the-selected-text',
        'paste-as-plain-text',
        'select-the-text-content-of-an-element',
    ]}
/>
</>
    );
};

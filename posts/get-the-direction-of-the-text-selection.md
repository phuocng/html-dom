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
        content='anchorNode, anchorOffset, createRange, focusNode, focusOffset, get selected text, range collapsed, setEnd, setStart, window getSelection'
    />
</Helmet>
<Markdown
    content={`
The following function returns \`forward\` if user selected text from the left to right.
It returns \`backward\` in the other case.

~~~ javascript
const getDirection = function() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(selection.anchorNode, selection.anchorOffset);
    range.setEnd(selection.focusNode, selection.focusOffset);

    return range.collapsed ? 'backward' : 'forward';
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-the-selected-text',
        'save-and-restore-the-text-selection',
    ]}
/>
</>
    );
};

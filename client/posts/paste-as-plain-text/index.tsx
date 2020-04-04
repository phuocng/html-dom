import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            addRange, clipboardData, createTextNode, deleteContents, execCommand,
            getRangeAt, getSelection, get text from clipboard, insertNode, insert text current position,
            paste plain text, queryCommandSupported, removeAllRanges, selectNodeContents
         `}
    />
</Helmet>
<Markdown
    content={`
Assume that we have a \`contenteditable\` element as below:

~~~ html
<div contenteditable id="editor"></div>
~~~

In order to paste the plain text only in the element, we have to handle the \`paste\` event:

~~~ javascript
const editorEle = document.getElementById('editor');

// Handle the \`paste\` event
editorEle.addEventListener('paste', function(e) {
    // Prevent the default action
    e.preventDefault();

    // Get the copied text from the clipboard
    const text = (e.clipboardData)
        ? (e.originalEvent || e).clipboardData.getData('text/plain')
        // For IE
        : (window.clipboardData ? window.clipboardData.getData('Text') : '');
    
    if (document.queryCommandSupported('insertText')) {
        document.execCommand('insertText', false, text);
    } else {
        // Insert text at the current position of caret
        const range = document.getSelection().getRangeAt(0);
        range.deleteContents();

        const textNode = document.createTextNode(text);
        range.insertNode(textNode);
        range.selectNodeContents(textNode);
        range.collapse(false);

        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
});
~~~

Try to paste some rich text in the following \`contenteditable\` element:
`}
/>
<Demo src='/demo/paste-as-plain-text/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'copy-text-to-the-clipboard',
        'create-an-element',
        'prevent-the-default-action-of-an-event',
    ]}
/>
</>
    );
};

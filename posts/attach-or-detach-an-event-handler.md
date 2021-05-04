import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, attach event handler, detach event handler, removeEventListener' />
</Helmet>
<Markdown
    content={`
## Use the on attribute (not recommended)

You can set the event handler via the \`on{eventName}\` attribute, where \`eventName\` represents the name of event.
For example:

~~~ javascript
ele.onclick = function() {
    ...
};

// Remove the event handler
delete ele.onclick;
~~~

This approach isn't recommended because we can only attach one handler for each event. Setting the \`onclick\` attribute, for example,
will override any existing handler for the \`click\` event.

## Use the addEventListener method

~~~ javascript
const handler = function() {
    ...
};

// Attach handler to the \`click\` event
ele.addEventListener('click', handler);

// Detach the handler from the \`click\` event
ele.removeEventListener('click', handler);
~~~

Note that the event name is passed as the first parameter in both the \`addEventListener\` and \`removeEventListener\` methods.
It differs from the first approach which requires to prefix the event name with \`on\`.

If you want the handler to be invoke once, then look at the [Create one time event handler](/create-one-time-event-handler) post.
`}
/>
<RelatedPosts
    slugs={[
        'allow-to-enter-particular-characters-only',
        'attach-event-handlers-inside-other-handlers',
        'calculate-the-mouse-position-relative-to-an-element',
        'communication-between-an-iframe-and-its-parent-window',
        'copy-highlighted-code-to-the-clipboard',
        'count-the-number-of-characters-of-a-textarea',
        'create-a-custom-scrollbar',
        'create-a-range-slider',
        'create-an-image-comparison-slider',
        'create-resizable-split-views',
        'detect-if-the-caps-lock-is-on',
        'distinguish-between-left-and-right-mouse-clicks',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'drag-to-scroll',
        'export-a-table-to-csv',
        'get-size-of-the-selected-file',
        'get-the-size-of-an-image',
        'highlight-an-element-when-dragging-a-file-over-it',
        'make-a-draggable-element',
        'make-a-resizable-element',
        'paste-as-plain-text',
        'placeholder-for-a-contenteditable-element',
        'press-shift-and-enter-for-a-new-line',
        'prevent-the-default-action-of-an-event',
        'print-an-image',
        'review-an-image-before-uploading-it',
        'replace-broken-images',
        'resize-an-iframe-to-fit-its-content',
        'resize-an-image',
        'resize-columns-of-a-table',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
        'select-the-text-of-a-textarea-automatically',
        'show-a-custom-context-menu-at-clicked-position',
        'show-a-ghost-element-when-dragging-an-element',
        'show-a-loading-indicator-when-an-iframe-is-being-loaded',
        'show-or-hide-table-columns',
        'sort-a-table-by-clicking-its-headers',
        'zoom-an-image',
    ]}
/>
</>
    );
};

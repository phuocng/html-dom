import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that \`frame\` represents the iframe element.

~~~ javascript
frame.addEventListener('load', function() {
    // Get the height of the content
    const height = frame.contentDocument.body.scrollHeight;

    // Set the height of iframe
    frame.setAttribute('height', \`\${height}px\`);
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'show-a-loading-indicator-when-an-iframe-is-being-loaded',
    ]}
/>
</>
    );
};

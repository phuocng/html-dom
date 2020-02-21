import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
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

## Might be useful

* [Attach or detach an event handler](/attach-or-detach-an-event-handler)
`}
/>
    );
};

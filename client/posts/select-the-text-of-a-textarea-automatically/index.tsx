import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that \`ele\` represents a textarea element.

~~~ javascript
ele.addEventListener('focus', function(e) {
    // Select the text
    e.target.select();
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'trigger-an-event',
    ]}
/>
</>
    );
};

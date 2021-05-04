import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, mousedown event, mouseup event, which button' />
</Helmet>
<Markdown
    content={`
The \`mousedown\` and \`mouseup\` event handlers let us know which mouse button is clicked:

~~~ javascript
ele.addEventListener('mousedown', function(e) {
    // e.button === 0: the left button is clicked
    // e.button === 1: the middle button is clicked
    // e.button === 2: the right button is clicked
    // e.button === 3: the \`Browser Back\` button is clicked
    // e.button === 4: the \`Browser Forward\` button is clicked
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
    ]}
/>
</>
    );
};

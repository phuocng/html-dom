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
    // e.which === 1: the left button is clicked
    // e.which === 2: the middle button is clicked
    // e.which === 3: the right button is clicked
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

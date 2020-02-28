import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Check if a click was outside of the \`ele\` element:

~~~ javascript
document.addEventListener('click', function(evt) {
    const isClickedOutside = !ele.contains(evt.target);

    // \`isClickedOutside\` is true if the clicked target is outside of \`ele\`
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'check-if-an-element-is-a-descendant-of-another',
    ]}
/>
</>
    );
};

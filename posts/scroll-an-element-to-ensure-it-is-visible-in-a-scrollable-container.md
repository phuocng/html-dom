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
        content={`
            check element visible container, clientHeight, offsetTop, scrollTop
        `}
    />
</Helmet>
<Markdown
    content={`
The following functions scrolls the \`ele\` element if it's not [visible](/check-if-an-element-is-visible-in-a-scrollable-container)
in its scrollable container:

~~~ javascript
const scrollToBeVisible = function(ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    if (eleTop < containerTop) {
        // Scroll to the top of container
        container.scrollTop -= (containerTop - eleTop);
    } else if (eleBottom > containerBottom) {
        // Scroll to the bottom of container
        container.scrollTop += (eleBottom - containerBottom);
    }
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-in-the-viewport',
        'check-if-an-element-is-visible-in-a-scrollable-container',
    ]}
/>
</>
    );
};

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
The following functions return \`true\` if the \`ele\` element is visible in its scrollable container:

~~~ javascript
const isVisible = function(ele, container) {
    const eleTop = ele.offsetTop;
    const eleBottom = eleTop + ele.clientHeight;

    const containerTop = container.scrollTop;
    const containerBottom = containerTop + container.clientHeight;

    // The element is fully visible in the container
    return (eleTop >= containerTop && eleBottom <= containerBottom) ||
        // Some part of the element is visible in the container
        (eleTop < containerTop && containerTop < eleBottom) ||
        (eleTop < containerBottom && containerBottom < eleBottom);
};
~~~

We also can perform the check based on the bounding rectangles of both element and container:

~~~ javascript
const isVisible = function(ele, container) {
    const { bottom, height, top } = ele.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    return top <= containerRect.top
        ? (containerRect.top - top <= height)
        : (bottom - containerRect.bottom <= height);
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-in-the-viewport',
        'scroll-an-element-to-ensure-it-is-visible-in-a-scrollable-container',
    ]}
/>
</>
    );
};

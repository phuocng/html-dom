import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
// Return true if \`ele\` matches the CSS selector \`selector\`
const matches = function(ele, selector) {
    return (
        ele.matches || 
        ele.matchesSelector || 
        ele.msMatchesSelector || 
        ele.mozMatchesSelector || 
        ele.webkitMatchesSelector || 
        ele.oMatchesSelector
    ).call(ele, selector);
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-the-closest-element-by-given-selector',
    ]}
/>
</>
    );
};

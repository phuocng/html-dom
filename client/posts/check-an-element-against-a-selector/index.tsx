import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
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

## Might be useful

* [Get the closest element by given selector](/get-the-closest-element-by-given-selector)
`}
/>
    );
};

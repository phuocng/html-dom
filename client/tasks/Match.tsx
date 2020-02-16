import React from 'react';

import Markdown from '../components/Markdown';

const Match: React.FC<{}> = () => {
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
`}
/>
    );
};

export default Match;

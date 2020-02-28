import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 1. Use the native closest() method

~~~ javascript
const result = ele.closest(selector);
~~~

Note that the [closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) method isn't supported in IE.

## 2. Traverse up until find the matching element

~~~ javascript
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

// Find the closest element to \`ele\` and matches the \`selector\`
const closest = function(ele, selector) {
    let e = ele;
    while (e) {
        if (matches(e, selector)) {
            break;
        }
        e = e.parentNode;
    }
    return e;
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-an-element-against-a-selector',
    ]}
/>
</>
    );
};

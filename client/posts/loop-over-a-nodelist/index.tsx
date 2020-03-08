import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that \`elements\` is a NodeList that matches given selector:

~~~ javascript
const elements = document.querySelectorAll(...);
~~~

You can loop over \`elements\` by using one of the approach below:

## 1. Use the spread operator

~~~ javascript
[...elements].forEach(function(ele) {
    ...
});
~~~

## 2. Use the Array methods

~~~ javascript
Array.from(elements).forEach(function(ele) {
    ...
});

// Or
[].forEach.call(elements, function(ele) {
    ...
})
~~~

## 3. Use the forEach method

If you don't have to support Internet Explorer, then use the [\`forEach\`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) method:

~~~ javascript
elements.forEach(function(ele) {
    ...
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'make-a-resizable-element',
        'replace-broken-images',
        'resize-columns-of-a-table',
        'select-an-element-or-list-of-elements',
        'select-the-children-of-an-element',
        'sort-a-table-by-clicking-its-headers',
    ]}
/>
</>
    );
};

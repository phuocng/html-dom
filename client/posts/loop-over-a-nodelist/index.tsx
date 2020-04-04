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

## 1. Use the ES6 spread operator

~~~ javascript
[...elements].forEach(function(ele) {
    ...
});
~~~

## 2. Use the Array methods

~~~ javascript
// \`Array.from\` is not supported on IE
Array.from(elements).forEach(function(ele) {
    ...
});

// Or
[].forEach.call(elements, function(ele) {
    ...
});

// Or
[].slice.call(elements, 0).forEach(function(ele) {
    ...
});
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
        'create-resizable-split-views',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'export-a-table-to-csv',
        'make-a-resizable-element',
        'replace-broken-images',
        'resize-columns-of-a-table',
        'select-an-element-or-list-of-elements',
        'select-the-children-of-an-element',
        'serialize-form-data-into-a-query-string',
        'sort-a-table-by-clicking-its-headers',
        'upload-files-with-ajax',
    ]}
/>
</>
    );
};

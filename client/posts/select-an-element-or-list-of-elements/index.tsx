import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Select an element by given ID

~~~ javascript
<div id="hello" />

document.getElementById('hello');
~~~

## Select elements by class name

Returns the list of elements that have \`hello\` class within a given element:

~~~ javascript
ele.getElementsByClassName('hello');
~~~

## Select elements by tag name

Returns the list of \`span\` inside a given element:

~~~ javascript
ele.getElementsByTagName('span');
~~~

## Select elements by CSS selector

Returns the list of elements that match a given selector:

~~~ javascript
ele.querySelectorAll('div.hello');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-row',
        'export-a-table-to-csv',
        'loop-over-a-nodelist',
        'sort-a-table-by-clicking-its-headers',
    ]}
/>
</>
    );
};

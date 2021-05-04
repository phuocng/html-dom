import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Add a class to an element

Note that multiple parameters for the \`add()\` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

~~~ javascript
ele.classList.add('class-name');

// Add multiple classes (Not supported in IE 11)
ele.classList.add('another', 'class', 'name');
~~~

## Remove a class from an element

Note that multiple parameters for the \`remove()\` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

~~~ javascript
ele.classList.remove('class-name');

// Remove multiple classes (Not supported in IE 11)
ele.classList.remove('another', 'class', 'name');
~~~

## Toggle a class

~~~ javascript
ele.classList.toggle('class-name');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-has-given-class',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'highlight-an-element-when-dragging-a-file-over-it',
        'resize-columns-of-a-table',
        'show-a-custom-context-menu-at-clicked-position',
    ]}
/>
</>
    );
};

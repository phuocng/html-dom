import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Add a class to an element

~~~ javascript
ele.classList.add('class-name');

// Add multiple classes
ele.classList.add('another', 'class', 'name');
~~~

## Remove a class from an element

~~~ javascript
ele.classList.remove('class-name');

// Remove multiple classes
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
        'highlight-an-element-when-dragging-a-file-over-it',
        'resize-columns-of-a-table',
    ]}
/>
</>
    );
};

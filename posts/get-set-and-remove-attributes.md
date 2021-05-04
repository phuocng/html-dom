import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='getAttribute, get element attribute, removeAttribute, remove element attribute, setAttribute, set element attribute' />
</Helmet>
<Markdown
    content={`
## Get the attribute's value

~~~ javascript
// Get the \`title\` attribute of a link element
const title = link.getAttribute('title');
~~~

## Set the attribute's value

~~~ javascript
// Set the width and height of an image
image.setAttribute('width', '100px');
image.setAttribute('height', '120px');
~~~

## Remove the attribute

~~~ javascript
// Remove the \`title\` attribute
ele.removeAttribute('title');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-the-native-date-input-is-supported',
        'count-the-number-of-characters-of-a-textarea',
        'get-set-and-remove-data-attributes',
        'placeholder-for-a-contenteditable-element',
        'print-an-image',
        'toggle-password-visibility',
    ]}
/>
</>
    );
};

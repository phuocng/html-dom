import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Replace the broken images with an image telling visitors that they are not found:

~~~ javascript
// Assume that I want to replace all images on the page
const images = document.querySelectorAll('img');

// Loop over them
[].forEach.call(images, function(ele) {
    ele.addEventListener('error', function(e) {
        e.target.src = '/path/to/404/image.png';
    });
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'loop-over-a-nodelist',
    ]}
/>
</>
    );
};

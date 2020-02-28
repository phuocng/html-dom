import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Show an element

~~~ javascript
ele.style.display = '';
~~~

## Hide an element

~~~ javascript
ele.style.display = 'none';
~~~
`}
/>
<RelatedPosts
    slugs={[
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

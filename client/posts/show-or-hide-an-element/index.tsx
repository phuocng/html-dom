import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
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

## Might be useful

* [Set CSS style for an element](/set-css-style-for-an-element)
`}
/>
    );
};

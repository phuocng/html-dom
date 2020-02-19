import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
~~~ javascript
ele.classList.contains('class-name');
~~~

## Might be useful

* [Add or remove class from an element](/add-or-remove-class-from-an-element)
`}
/>
    );
};

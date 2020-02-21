import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
~~~ javascript
location.href = '/the/new/url';
~~~

## Might be useful

* [Reload the current page](reload-the-current-page)
`}
/>
    );
};

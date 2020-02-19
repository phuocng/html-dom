import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Reload and keep the POST data

~~~ javascript
window.location.reload();
~~~

## Reload and ignore the POST data

~~~ javascript
window.location.href = window.location.href;
~~~
`}
/>
    );
};

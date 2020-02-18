import React from 'react';

import Markdown from '../components/Markdown';

const Reload: React.FC<{}> = () => {
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

export default Reload;

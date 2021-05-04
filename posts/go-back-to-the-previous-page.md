import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
~~~ javascript
history.back();

// Or
history.go(-1);
~~~
`}
/>
    );
};

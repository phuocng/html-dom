import React from 'react';

import Markdown from '../components/Markdown';

const HasClass: React.FC<{}> = () => {
    return (
<Markdown
    content={`
~~~ javascript
ele.classList.contains('class-name');
~~~
`}
/>
    );
};

export default HasClass;

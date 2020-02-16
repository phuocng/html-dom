import React from 'react';

import Markdown from '../components/Markdown';

const Show: React.FC<{}> = () => {
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
`}
/>
    );
};

export default Show;

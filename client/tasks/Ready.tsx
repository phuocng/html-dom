import React from 'react';

import Markdown from '../components/Markdown';

const Ready: React.FC<{}> = () => {
    return (
<Markdown
    content={`
~~~ javascript
document.addEventListener('DOMContentLoaded', function(){
    ...
});
~~~
`}
/>
    );
};

export default Ready;

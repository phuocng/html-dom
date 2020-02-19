import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
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

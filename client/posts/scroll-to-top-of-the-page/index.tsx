import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
In general, you can scroll to a point whose coordinates indicates the distance from it to the top and left side of document:

~~~ javascript
window.scrollTo(pageX, pageY);
~~~

So, the following code scrolls to top of the page:

~~~ javascript
window.scrollTo(0, 0);
~~~
`}
/>
    );
};

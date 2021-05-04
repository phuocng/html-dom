import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Assume that \`ele\` represents the element that you want to check if it has the focus currently:

~~~ javascript
const hasFocus = ele === document.activeElement;
~~~
`}
/>
    );
};

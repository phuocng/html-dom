import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Setting the style via the \`style\` property:

~~~ javascript
ele.style.backgroundColor = 'red';
ele.style['backgroundColor'] = 'red';
ele.style['background-color'] = 'red';
~~~

Multiple styles can be set at the same time by overwriting or updating the \`cssText\` property:

~~~ javascript
// Add new style
el.style.cssText += 'background-color: red; color: white';

// Ignore previous styles
el.style.cssText = 'background-color: red; color: white';
~~~

## Might be useful

* [Get CSS styles of an element](/get-css-styles-of-an-element)
* [Show or hide an element](show-or-hide-an-element)
`}
/>
    );
};

import React from 'react';

import Markdown from '../components/Markdown';

const Attribute: React.FC<{}> = () => {
    return (
<Markdown
    content={`
## Get the attribute's value

~~~ javascript
// Get the \`title\` attribute of a link element
const title = link.getAttribute('title');
~~~

## Set the attribute's value

~~~ javascript
// Set the width and height of an image
image.setAttribute('width', '100px');
image.setAttribute('height', '120px');
~~~

## Remove the attribute

~~~ javascript
// Remove the \`title\` attribute
ele.removeAttribute('title');
~~~
`}
/>
    );
};

export default Attribute;

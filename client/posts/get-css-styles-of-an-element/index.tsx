import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
We can get all CSS styles via the \`getComputedStyle\` method:

~~~ javascript
const styles = window.getComputedStyle(ele, null);
~~~

From there, it's easy to access the value of specific style:

~~~ javascript
// Get the background color
const bgColor = styles.backgroundColor;
~~~

For the style that has a vendor prefix which starts with a hyphen (-), we can get the style value by passing the style:

~~~ javascript
const textSizeAdjust = styles['-webkit-text-size-adjust'];
~~~

The \`getPropertyValue\` method produces the same result:

~~~ javascript
const bgColor = styles.getPropertyValue('background-color');

// Or turn the parameter to camelCase format:
const bgColor = styles.getPropertyValue('backgroundColor');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-an-element-is-scrollable',
        'get-the-default-value-of-a-css-property',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

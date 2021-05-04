import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
The following function returns \`true\` if the current browser supports the native date input \`<input type="date" />\`:

~~~ javascript
const isDateInputSupported = function() {
    // Create new input element
    const ele = document.createElement('input');

    // Set the type attribute
    ele.setAttribute('type', 'date');

    const invalidValue = 'not-a-valid-date';

    // Set an invalid value
    ele.setAttribute('value', invalidValue);

    // If the browser supports the date input,
    // it won't have effect on the \`value\` attribute
    // \`ele.value\` will be an empty string
    // 
    // In the other case, the input is treated as normal text input
    // and \`ele.value\` returns the original value
    return ele.value !== invalidValue;
};
~~~

This approach can be used to check other HTML 5 input types such as \`email\`, [\`range\`](/create-a-range-slider), \`url\`, etc.
`}
/>
<RelatedPosts
    slugs={[
        'create-a-range-slider',
        'create-an-element',
        'get-set-and-remove-attributes',
    ]}
/>
</>
    );
};

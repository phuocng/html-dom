import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
Assume that \`ele\` represents a textarea element.

~~~ javascript
ele.addEventListener('focus', function(e) {
    // Select the text
    e.target.select();
});
~~~

## Might be useful

* [Attach or detach an event handler](/attach-or-detach-an-event-handler)
* [Trigger an event](/trigger-an-event)
`}
/>
    );
};

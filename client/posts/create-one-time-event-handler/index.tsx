import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## 1. Use the once option

When attach a handler to given event, you can pass \`{ once: true }\` to the last parameter of the
\`addEventListener\` method:

~~~ javascript
const handler = function(e) {
    // The event handler
};

ele.addEventListener('event-name', handler, { once: true });
~~~

Note that this option isn't support in IE.

## 2. Self-remove the handler

~~~ javascript
const handler = function(e) {
    // The event handler
    // Do something ...

    // Remove the handler
    e.target.removeEventListener(e.type, handler);
};

ele.addEventListener('event-name', handler);
~~~

## Might be useful

* [Attach or detach an event handler](/attach-or-detach-an-event-handler)
`}
/>
    );
};

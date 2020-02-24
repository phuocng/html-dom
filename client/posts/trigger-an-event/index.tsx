import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Trigger event for inputs

There are some special events that are avaialble as the method's element. You can call them directly such as following:

~~~ javascript
// For text box and textarea
ele.focus();
ele.blur();

// For form element
formEle.reset();
formEle.submit();

// For any element
ele.click();
~~~

## Trigger a native event

~~~ javascript
const trigger = (ele, eventName) {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(eventName, true, false);
    ele.dispatchEvent(e);
};
~~~

You can trigger the \`change\`, \`keyup\`, \`mousedown\` and more by calling

~~~ javascript
trigger(ele, 'mousedown');
~~~

## Trigger a custom event

The sample code below triggers a custom event named \`hello\` with a data of \`{ message: 'Hello World' }\`:

~~~ javascript
const e = document.createEvent('CustomEvent');
e.initCustomEvent('hello', true, true, { message: 'Hello World' });

// Trigger the event
ele.dispatchEvent(e);
~~~

## Might be useful

* [Copy text to the clipboard](/copy-text-to-the-clipboard)
* [Download a file](/download-a-file)
`}
/>
    );
};

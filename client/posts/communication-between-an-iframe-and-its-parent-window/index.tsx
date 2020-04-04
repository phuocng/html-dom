import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Send data from an iframe to its parent window

~~~ javascript
// Called from the iframe
window.parent.postMessage(message, '*');
~~~

Where \`message\` is a string. If you want to send multiple data, you can encode in JSON:

~~~ javascript
// Called from the iframe
const message = JSON.stringify({
    message: 'Hello from iframe',
    date: Date.now(),
});
window.parent.postMessage(message, '*');
~~~

## Send data from a page to its child iframe

~~~ javascript
// Called from the page
frameEle.contentWindow.postMessage(message, '*');
~~~

Where \`frameEle\` represents the iframe element.

## Receive the sent data

In the iframe or main page, you can listen on the \`message\` event to receive the sent data:

~~~ javascript
window.addEventListener('message', function(e) {
    // Get the sent data
    const data = e.data;
    
    // If you encode the message in JSON before sending them, 
    // then decode here
    // const decoded = JSON.parse(data);
});
~~~

> ## Tip
>
> If you send or receive message from different iframes, you can include a parameter to indicate where the message comes from.
>
> ~~~ javascript
> // From a child iframe
> const message = JSON.stringify({
>   channel: 'FROM_FRAME_A',
>   ...
});
> window.parent.postMessage(message, '*');
> ~~~
>
> Then in the main page, you can distinguish the messages by looking at the parameter:
>
> ~~~ javascript
> window.addEventListener('message', function(e) {
>   const data = JSON.parse(e.data);
>   // Where does the message come from
>   const channel = data.channel;
> });
> ~~~

Here is an example demonstrates how to send a simple message between
a [page](https://github.com/phuoc-ng/html-dom/blob/master/demo/communication-between-an-iframe-and-its-parent-window/index.html)
and [a child iframe](https://github.com/phuoc-ng/html-dom/blob/master/demo/communication-between-an-iframe-and-its-parent-window/iframe.html):
`}
/>
<Demo src='/demo/communication-between-an-iframe-and-its-parent-window/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
    ]}
/>
</>
    );
};

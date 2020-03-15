import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we want to let users know if the caps lock is on while they are entering the value for an input (a password field, for example):

~~~ html
<input type="text" id="textbox" />

<div id="message" />
~~~

The element with \`id\` of \`message\` will be used to show the message.

## 1. Use the getModifierState() function

The [getModifierState()](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState) function returns the state of given modifier key.
It can let us know if the \`CapsLock\` key is pressed by calling \`getModifierState('CapsLock')\` from the event object.

~~~ javascript
const textboxEle = document.getElementById('textbox');
const messageEle = document.getElementById('message');

textboxEle.addEventListener('keydown', function(e) {
    const capsLockOn = e.getModifierState('CapsLock');

    // Update the content of message
    messageEle.innerHTML = capsLockOn ? 'Caps lock is ON' : '';

    // Show or hide the message based on the CapsLock state
    messageEle.style.display = capsLockOn ? 'block' : 'none';
});
~~~

This approach doesn't support the case that users press the _Shift_ key.

## 2. Support the Shift key

The caps lock is treated as ON if users press 
* an uppercase letter without Shift
* or an lowercase letter with Shift

~~~ javascript
const textboxEle = document.getElementById('textbox');
const messageEle = document.getElementById('message');

textboxEle.addEventListener('keypress', function(e) {
    const isMac = /Mac/.test(navigator.platform);

    const keyCode = e.keyCode || e.which;

    // Is the _Shift_ key pressed?
    const shiftKey = e.shiftKey || keyCode === 16;

    // Get the pressed character
    const s = String.fromCharCode(keyCode);
    const capsLockOn = 
        (s.toUpperCase() === s && s.toLowerCase() !== s && !(shiftKey && isMac)) ||
        (s.toUpperCase() !== s && s.toLowerCase() === s && shiftKey);

    messageEle.innerHTML = capsLockOn ? 'Caps lock is ON' : '';
    messageEle.style.display = capsLockOn ? 'block' : 'none';
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'detect-mac-os-browser',
    ]}
/>
</>
    );
};

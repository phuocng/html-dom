import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, 事件绑定, input event, 表单事件, keypress event, preventDefault, selectionEnd, selectionStart, setSelectionRange' />
</Helmet>
<Markdown
    content={`
In this example, we will force users to enter characters from given set only. Specifically, the supported characters
in this demonstration include the digits and space. Of course, you can apply the idea for other characters as well.

Here is our input element:

~~~ html
<input type="text" id="input" />
~~~

## 1. Handle the events

By handling the \`keypress\` event, we can prevent user from entering characters except digits and space:

~~~ javascript
const ele = document.getElementById('input');

ele.addEventListener('keypress', function(e) {
    // Get the code of pressed key
    const key = e.which || e.keyCode;

    // 0, 1, ..., 9 have key code of 48, 49, ..., 57, respectively
    // Space has key code of 32
    if (key != 32 && (key < 48 || key > 57)) {
        // Prevent the default action
        e.preventDefault();
    }
});
~~~

It looks good but isn't enough since user is still able to paste or drag unsupported characters to the input.
These cases can be handled by the \`input\` event:

~~~ javascript
// Track the current value
let currentValue = ele.value || '';

ele.addEventListener('input', function(e) {
    const target = e.target;

    // If users enter supported character (digits or space)
    /^[0-9\\s]*$/.test(target.value)
        // Backup the current value
        ? currentValue = target.value
        // Otherwise, restore the value
        // Note that in this case, \`e.preventDefault()\` doesn't help
        : target.value = currentValue;
});
~~~

Here we check if the value matches the regular expression \`/^[0-9\\s]*$/\` that covers the digit and space characters.

It fixes the cases where users paste from the keyboard (\`Ctrl + V\`), context menu or drop text to the input.

But there's another issue. Calling \`target.value = currentValue\` will put the cursor at the end of input.
We have to persist the cursor's position.

~~~ javascript
// Track the current cursor's position
const selection = {};

ele.addEventListener('keydown', function(e) {
    const target = e.target;
    selection = {
        selectionStart: target.selectionStart,
        selectionEnd: target.selectionEnd,
    };
});
~~~

When user changes the input value, we will restore both the value and selection positions if the value isn't supported:

~~~ javascript
ele.addEventListener('input', function(e) {
    const target = e.target;

    if (/^[0-9\s]*$/.test(target.value)) {
        currentValue = target.value;
    } else {
        // Users enter the not supported characters
        // Restore the value and selection
        target.value = currentValue;
        target.setSelectionRange(
            selection.selectionStart,
            selection.selectionEnd
        );
    }
});
~~~

We can combine the tracked properties (\`value\`, \`selectionStart\` and \`selectionEnd\`) to a single variable as you
see in the demo at the end.

## 2. Use the special input

We can use a special HTML 5 input to serve particular use cases:

| \`input\`                     | Description                       |
|-------------------------------|-----------------------------------|
| \`<input type="color" />\`    | Let user specify a color          |
| \`<input type="date" />\`     | Let user enter a date             |
| \`<input type="email" />\`    | Let user enter an email address   |
| \`<input type="number" />\`   | Let user enter numbers only       |
| \`<input type="tel" />\`      | Let user enter a telephone number |
| \`<input type="time" />\`     | Let user enter a time             |
| \`<input type="url" />\`      | Let user enter a URL              |

There are more built-in types that you can explore [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types).

In our specific example, \`<input type="number" />\` doesn't help because it doesn't allow to enter a space.
`}
/>
<Demo src='/demo/allow-to-enter-particular-characters-only' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'prevent-the-default-action-of-an-event',
    ]}
/>
</>
    );
};

---
category: Basic
keywords: addEventListener, keydown event, keyCode, preventDefault, shift enter, shiftKey
title: Press Shift and Enter for a new line
---

By default, pressing `Enter` or `Shift` and `Enter` will generate a new line for a textarea element.

In some cases such as an inline editable element, or a messaging application, you would like to submit the data when user presses `Enter`. The only way to generate a new line is to press `Shift` and `Enter`.

Assume that we have the following textarea element:

```html
<textarea id="message"></textarea>
```

To prevent the default behavior of pressing the `Enter` key, we can handle the `keydown` event:

```js
const ele = document.getElementById('message');

ele.addEventListener('keydown', function (e) {
    // Get the code of pressed key
    const keyCode = e.which || e.keyCode;

    // 13 represents the Enter key
    if (keyCode === 13 && !e.shiftKey) {
        // Don't generate a new line
        e.preventDefault();

        // Do something else such as send the message to back-end
        // ...
    }
});
```

In the demo below, pressing `Enter` will do nothing:

### Demo

:demo[]{title="Press Shift and Enter for a new line" url="/demo/press-shift-and-enter-for-a-new-line/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Prevent the default action of an event](/prevent-the-default-action-of-an-event)

---
category: Basic
keywords:
title: Toggle password visibility
---

Assume that we have two elements. A password element, and a button for toggling the visibility of the password:

```html
<input type="password" id="password" />

<button id="toggle">Toggle</button>
```

In order to show the password, we turn the password element to an usual textbox whose `type` attribute is `text`:

```js
// Query the elements
const passwordEle = document.getElementById('password');
const toggleEle = document.getElementById('toggle');

toggleEle.addEventListener('click', function () {
    const type = passwordEle.getAttribute('type');

    passwordEle.setAttribute(
        'type',
        // Switch it to a text field if it's a password field
        // currently, and vice versa
        type === 'password' ? 'text' : 'password'
    );
});
```

### Demo

:demo[]{title="Toggle password visibility" url="/demo/toggle-password-visibility/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Get set and remove attributes](/get-set-and-remove-attributes)

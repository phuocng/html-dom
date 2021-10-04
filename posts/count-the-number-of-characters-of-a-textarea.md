---
category: Basic
keywords: display number of characters, maxlength attribute
title: Count the number of characters of a textarea
---

Assume that we have a `textarea` and a normal `div` elements for showing how many characters user has been entering:

```html
<textarea id="message"></textarea>
<div id="counter"></div>
```

### Use the `maxlength` attribute

The `maxlength` attribute sets the maximum number of characters that user can put in the textarea.

```html
<textarea maxlength="200" id="message"></textarea>
```

### Count the number of characters

Handle the `input` event which is triggered if the value of element is changed:

```js
const messageEle = document.getElementById('message');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    counterEle.innerHTML = `${currentLength}/${maxLength}`;
});
```

> **Good to know**
>
> The common mistake is to capture the `keyup` event. It doesn't work in some cases such as:
>
> -   User drags a text into the textarea
> -   User right-clicks in the textarea and chooses _Paste_ from the context menu

### Demo

:demo[]{title="Count the number of characters of a textarea" url="/demo/count-the-number-of-characters-of-a-textarea/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Get or set the html of an element](/get-or-set-the-html-of-an-element)
-   [Get set and remove attributes](/get-set-and-remove-attributes)

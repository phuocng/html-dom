---
category: Intermediate
keywords:
title: Resize the width of a text box to fit its content automatically
---

Let's say that an input has the `id` of `textbox` as below:

```html
<input type="text" id="textbox" />
```

To adjust its width based on its content dynamically, we create a fake element whose content is the same as the input value. And we set the input's width as the fake element's width.

```js
// Create a div element
const fakeEle = document.createElement('div');

// Hide it completely
fakeEle.style.position = 'absolute';
fakeEle.style.top = '0';
fakeEle.style.left = '-9999px';
fakeEle.style.overflow = 'hidden';
fakeEle.style.visibility = 'hidden';
fakeEle.style.whiteSpace = 'nowrap';
fakeEle.style.height = '0';

// We copy some styles from the textbox that effect the width
const textboxEle = document.getElementById('textbox');

// Get the styles
const styles = window.getComputedStyle(textboxEle);

// Copy font styles from the textbox
fakeEle.style.fontFamily = styles.fontFamily;
fakeEle.style.fontSize = styles.fontSize;
fakeEle.style.fontStyle = styles.fontStyle;
fakeEle.style.fontWeight = styles.fontWeight;
fakeEle.style.letterSpacing = styles.letterSpacing;
fakeEle.style.textTransform = styles.textTransform;

fakeEle.style.borderLeftWidth = styles.borderLeftWidth;
fakeEle.style.borderRightWidth = styles.borderRightWidth;
fakeEle.style.paddingLeft = styles.paddingLeft;
fakeEle.style.paddingRight = styles.paddingRight;

// Append the fake element to `body`
document.body.appendChild(fakeEle);
```

The function below sets the HTML for the fake element, calculates its width and sets the result to the original input.

```js
const setWidth = function () {
    const string = textboxEle.value || textboxEle.getAttribute('placeholder') || '';
    fakeEle.innerHTML = string.replace(/\s/g, '&' + 'nbsp;');

    const fakeEleStyles = window.getComputedStyle(fakeEle);
    textboxEle.style.width = fakeEleStyles.width;
};
```

> This [post](/measure-the-width-of-given-text-of-given-font) introduces more ways to measure the width of given text in given font

Finally, we invoke the `setWidth` function when users change the input value by listening on the `input` event:

```js
setWidth();

textboxEle.addEventListener('input', function (e) {
    setWidth();
});
```

### Demo

:demo[]{title="Resize the width of a text box to fit its content automatically" url="/demo/resize-the-width-of-a-text-box-to-fit-its-content-automatically/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Create an element](/create-an-element)
-   [Get CSS styles of an element](/get-css-styles-of-an-element)
-   [Measure the width of given text of given font](/measure-the-width-of-given-text-of-given-font)
-   [Remove an element](/remove-an-element)
-   [Scale a text to fit inside of an element](/scale-a-text-to-fit-inside-of-an-element)
-   [Set CSS style for an element](/set-css-style-for-an-element)

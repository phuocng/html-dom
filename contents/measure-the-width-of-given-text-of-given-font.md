---
category: Intermediate
keywords:
title: Measure the width of given text of given font
---

### 1. Use the canvas' measureText() method

```js
const measureWidth = function (text, font) {
    // Create new `canvas` element
    const canvas = document.createElement('canvas');

    // Get the context
    const context = canvas.getContext('2d');

    // Set the font
    context.font = font;

    // Measure the text
    const metrics = context.measureText(text);

    // Return the width in pixels
    return metrics.width;
};
```

### 2. Use a fake element

```js
const measureWidth = function (text, font) {
    // Create an element
    const ele = document.createElement('div');

    // Set styles
    ele.style.position = 'absolute';
    ele.style.visibility = 'hidden';
    ele.style.whiteSpace = 'nowrap';
    ele.style.left = '-9999px';

    // Set font and text
    ele.style.font = font;
    ele.innerText = text;

    // Append to the body
    document.body.appendChild(ele);

    // Get the width
    const width = window.getComputedStyle(ele).width;

    // Remove the element
    document.body.removeChild(ele);

    return width;
};
```

### See also

-   [Create an element](/create-an-element)
-   [Get CSS styles of an element](/get-css-styles-of-an-element)
-   [Remove an element](/remove-an-element)
-   [Resize the width of a text box to fit its content automatically](/resize-the-width-of-a-text-box-to-fit-its-content-automatically)
-   [Scale a text to fit inside of an element](/scale-a-text-to-fit-inside-of-an-element)
-   [Set CSS style for an element](/set-css-style-for-an-element)

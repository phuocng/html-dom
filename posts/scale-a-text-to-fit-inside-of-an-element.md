---
category: Intermediate
keywords:
title: Scale a text to fit inside of an element
---

Let's say that we want to scale a text inside a headline:

```html
<div id="headline">Hello World</div>
```

First of all, we need to measure the width of element with its current font size and [text content](/get-the-text-content-of-an-element). For more information, you can take a look at this [post](/measure-the-width-of-given-text-of-given-font).

```js
const measureWidth = function(text, font) {
    // Measure the width of given text for given font
    ...
};

// Query the element
const ele = document.getElementById('headline');

// Get the styles
const styles = window.getComputedStyle(ele);

// Get the font size and font style
const font = styles.font;
const fontSize = parseInt(styles.fontSize);

const measured = measureWidth(ele.textContent, font);
```

Now we can calculate how much the element is scaled by comparing the measured width and the [full width](/determine-the-height-and-width-of-an-element):

```js
const scale = ele.clientWidth / parseFloat(measured);
```

Finally, we set the font size as the element scales up to full width:

```js
const scaleFontSize = Math.floor(scale * fontSize);
ele.style.fontSize = `${scaleFontSize}px`;
```

### Demo

:demo[]{title="Scale a text to fit inside of an element" url="/demo/scale-a-text-to-fit-inside-of-an-element/index.html"}

### See also

-   [Determine the height and width of an element](/determine-the-height-and-width-of-an-element)
-   [Get css styles of an element](/get-css-styles-of-an-element)
-   [Get the text content of an element](/get-the-text-content-of-an-element)
-   [Measure the width of given text of given font](/measure-the-width-of-given-text-of-given-font)
-   [Resize the width of a text box to fit its content automatically](/resize-the-width-of-a-text-box-to-fit-its-content-automatically)
-   [Set css style for an element](/set-css-style-for-an-element)

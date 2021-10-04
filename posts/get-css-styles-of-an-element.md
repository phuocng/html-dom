---
category: Basic
keywords:
title: Get CSS styles of an element
---

We can get all CSS styles via the `getComputedStyle` method:

```js
const styles = window.getComputedStyle(ele, null);
```

From there, it's easy to access the value of specific style:

```js
// Get the background color
const bgColor = styles.backgroundColor;
```

For the style that has a vendor prefix which starts with a hyphen (-), we can get the style value by passing the style:

```js
const textSizeAdjust = styles['-webkit-text-size-adjust'];
```

The `getPropertyValue` method produces the same result:

```js
const bgColor = styles.getPropertyValue('background-color');

// Or turn the parameter to camelCase format:
const bgColor = styles.getPropertyValue('backgroundColor');
```

### See also

-   [Check if an element is scrollable](/check-if-an-element-is-scrollable)
-   [Get the default value of a css property](/get-the-default-value-of-a-css-property)
-   [Measure the width of given text of given font](/measure-the-width-of-given-text-of-given-font)
-   [Resize columns of a table](/resize-columns-of-a-table)
-   [Resize the width of a text box to fit its content automatically](/resize-the-width-of-a-text-box-to-fit-its-content-automatically)
-   [Scale a text to fit inside of an element](/scale-a-text-to-fit-inside-of-an-element)
-   [Set css style for an element](/set-css-style-for-an-element)

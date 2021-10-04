---
category: Basic
keywords:
title: Set CSS style for an element
---

### Set a CSS style

Setting the style via the `style` property:

```js
ele.style.backgroundColor = 'red';
ele.style['backgroundColor'] = 'red';
ele.style['background-color'] = 'red';
```

Multiple styles can be set at the same time by overwriting or updating the `cssText` property:

```js
// Add new style
el.style.cssText += 'background-color: red; color: white';

// Ignore previous styles
el.style.cssText = 'background-color: red; color: white';
```

### Remove a CSS style

```js
ele.style.removeProperty('background-color');

// Does NOT work
ele.style.removeProperty('backgroundColor');
```

### See also

-   [Create a range slider](/create-a-range-slider)
-   [Create an image comparison slider](/create-an-image-comparison-slider)
-   [Create resizable split views](/create-resizable-split-views)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Drag to scroll](/drag-to-scroll)
-   [Get css styles of an element](/get-css-styles-of-an-element)
-   [Make a draggable element](/make-a-draggable-element)
-   [Make a resizable element](/make-a-resizable-element)
-   [Measure the width of given text of given font](/measure-the-width-of-given-text-of-given-font)
-   [Prevent body from scrolling when opening a modal](/prevent-body-from-scrolling-when-opening-a-modal)
-   [Print an image](/print-an-image)
-   [Resize columns of a table](/resize-columns-of-a-table)
-   [Resize the width of a text box to fit its content automatically](/resize-the-width-of-a-text-box-to-fit-its-content-automatically)
-   [Scale a text to fit inside of an element](/scale-a-text-to-fit-inside-of-an-element)
-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)
-   [Show a loading indicator when an iframe is being loaded](/show-a-loading-indicator-when-an-iframe-is-being-loaded)
-   [Show or hide an element](/show-or-hide-an-element)
-   [Toggle an element](/toggle-an-element)
-   [Zoom an image](/zoom-an-image)

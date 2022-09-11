---
category: Intermediate
keywords: addEventListener, appendChild, clone node, iframe srcdoc, load event, print image, removeChild, set CSS style, setAttribute, window print
title: Print an image
---

You can print a web page by clicking the _Print_ menu of browser or pressing the shortcut `Ctrl+P` (or `command+P` on macOS). Calling the `window.print()` function provides the same result which prints the entire page.

In order to print an image, we can insert the image element to a fake `iframe` element, and call the `print()` function on the iframe's window. Assume that the page has an image element and a print button as below:

```html
<img id="image" src="/path/to/image.jpg" /> <button id="print">Print</button>
```

The printing image could be handled inside the button's `click` event:

```js
// Query the element
const printBtn = document.getElementById('print');

printBtn.addEventListener('click', function() {
    ...
});
```

### Create a fake iframe

```js
// Create a fake iframe
const iframe = document.createElement('iframe');

// Make it hidden
iframe.style.height = 0;
iframe.style.visibility = 'hidden';
iframe.style.width = 0;

// Set the iframe's source
iframe.setAttribute('srcdoc', '<html><body></body></html>');

document.body.appendChild(iframe);
```

### Insert the image when the iframe is ready

Despite the fact that the iframe source is a simple HTML, not a remote path as defined by the `src` attribute, we have to wait for the iframe to be loaded completely:

```js
iframe.addEventListener('load', function () {
    // Clone the image
    const image = document.getElementById('image').cloneNode();
    image.style.maxWidth = '100%';

    // Append the image to the iframe's body
    const body = iframe.contentDocument.body;
    body.style.textAlign = 'center';
    body.appendChild(image);
});
```

Invoke the `print()` function on the iframe's window as soon as the image is loaded:

```js
iframe.addEventListener('load', function() {
    ...
    image.addEventListener('load', function() {
        // Invoke the print when the image is ready
        iframe.contentWindow.print();
    });
});
```

> **Tip**
>
> This post uses the [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers) tip

### Remove the iframe

The dynamic iframe will be [removed](/remove-an-element) when user starts printing the image or closes the print window:

```js
iframe.contentWindow.addEventListener('afterprint', function () {
    iframe.parentNode.removeChild(iframe);
});
```

Pressing the _Print_ button below to see it in action!

_Photo by [Rod Long](https://unsplash.com/@rodlong) on [Unsplash](https://unsplash.com/photos/J-ygvQbilXU)_

### Demo

:demo[]{title="Print an image" url="/demo/print-an-image/index.html"}

### See also

-   [Append to an element](/append-to-an-element)
-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Clone an element](/clone-an-element)
-   [Create an element](/create-an-element)
-   [Get set and remove attributes](/get-set-and-remove-attributes)
-   [Remove an element](/remove-an-element)
-   [Set CSS style for an element](/set-css-style-for-an-element)

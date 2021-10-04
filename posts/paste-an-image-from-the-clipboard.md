---
category: Intermediate
keywords: clipboardData, createObjectURL, FormData, getAsFile, paste event, paste image from clipboard, XMLHttpRequest
title: Paste an image from the clipboard
---

```js
// Handle the `paste` event
document.addEventListener('paste', function (evt) {
    // Get the data of clipboard
    const clipboardItems = evt.clipboardData.items;
    const items = [].slice.call(clipboardItems).filter(function (item) {
        // Filter the image items only
        return item.type.indexOf('image') !== -1;
    });
    if (items.length === 0) {
        return;
    }

    const item = items[0];
    // Get the blob of image
    const blob = item.getAsFile();
});
```

From the image blob, we can preview it as you see in the live example below:

```js
// Assume that we have an `img` element
// <img id="preview" />

const imageEle = document.getElementById('preview');
imageEle.src = URL.createObjectURL(blob);
```

or [upload](/upload-files-with-ajax) it to the server with an Ajax request:

```js
// Create a new FormData
const formData = new FormData();
formData.append('image', blob, 'filename');

// Create new Ajax request
const req = new XMLHttpRequest();
req.open('POST', '/path/to/back-end', true);

// Handle the events
req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
        const res = req.responseText;
        // Do something with the response
        // ...
    }
};

// Send it
req.send(formData);
```

### Demo

:demo[]{title="Paste an image from the clipboard" url="/demo/paste-an-image-from-the-clipboard/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Preview an image before uploading it](/preview-an-image-before-uploading-it)
-   [Upload files with Ajax](/upload-files-with-ajax)

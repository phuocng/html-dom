---
category: Intermediate
keywords:
title: Preview an image before uploading it
---

We prepare the markup for a file input which allows to choose an image, and an `img` element for previewing the selected file.

```html
<input type="file" id="fileInput" />

<img id="preview" />
```

Both elements can be taken by the `getElementById()` method:

```js
const fileEle = document.getElementById('fileInput');
const previewEle = document.getElementById('preview');
```

### 1. Use the URL.createObjectURL() method

```js
fileEle.addEventListener('change', function (e) {
    // Get the selected file
    const file = e.target.files[0];

    // Create a new URL that references to the file
    const url = URL.createObjectURL(file);

    // Set the source for preview element
    previewEle.src = url;
});
```

### 2. Use the FileReader's readAsDataURL() method

```js
fileEle.addEventListener('change', function (e) {
    // Get the selected file
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', function () {
        // Set the source for preview element
        previewEle.src = reader.result;
    });

    reader.readAsDataURL(file);
});
```

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Get the size of an image](/get-the-size-of-an-image)
-   [Paste an image from the clipboard](/paste-an-image-from-the-clipboard)
-   [Resize an image](/resize-an-image)

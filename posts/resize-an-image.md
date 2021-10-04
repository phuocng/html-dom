---
category: Intermediate
keywords: Blob, FileReader, readAsDataURL, resize image, toBlob, toDataURL, URL createObjectURL
title: Resize an image
---

Assume that we want to resize an image to a given number of percentages. The image can be determined from a `file` input:

```js
// A file input
<input type="file" id="upload" />;

// Get the selected file
const image = document.getElementById('upload').files[0];
```

The following function scales an `image` file to `ratio` of percentages:

```js
const resize = function (image, ratio) {
    return new Promise(function (resolve, reject) {
        const reader = new FileReader();

        // Read the file
        reader.readAsDataURL(image);

        // Manage the `load` event
        reader.addEventListener('load', function (e) {
            // Create new image element
            const ele = new Image();
            ele.addEventListener('load', function () {
                // Create new canvas
                const canvas = document.createElement('canvas');

                // Draw the image that is scaled to `ratio`
                const context = canvas.getContext('2d');
                const w = ele.width * ratio;
                const h = ele.height * ratio;
                canvas.width = w;
                canvas.height = h;
                context.drawImage(ele, 0, 0, w, h);

                // Get the data of resized image
                'toBlob' in canvas
                    ? canvas.toBlob(function (blob) {
                          resolve(blob);
                      })
                    : resolve(dataUrlToBlob(canvas.toDataURL()));
            });

            // Set the source
            ele.src = e.target.result;
        });

        reader.addEventListener('error', function (e) {
            reject();
        });
    });
};
```

In the sample code above, after drawing a new image, we have to check if the current browser supports the _canvas_' `toBlob` method. If not, we have to get the data URL from `canvas.toDataURL()` first, and then use the following function to convert it to a _Blob_:

```js
const dataUrlToBlob = function (url) {
    const arr = url.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const str = atob(arr[1]);
    let length = str.length;
    const uintArr = new Uint8Array(length);
    while (length--) {
        uintArr[length] = str.charCodeAt(length);
    }
    return new Blob([uintArr], { type: mime });
};
```

As soon as we have the _Blob_ of the resized image, we can preview it on the front-end or send it to the back-end as a part of _FormData_:

```js
// Resize image to 50%
resize(image, 0.5).then(function (blob) {
    // Preview
    // Assume that `previewEle` represents the preview image element
    previewEle.src = URL.createObjectURL(blob);
});
```

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Create an element](/create-an-element)
-   [Preview an image before uploading it](/preview-an-image-before-uploading-it)

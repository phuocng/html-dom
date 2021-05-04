---
title: Upload files with ajax
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords: ajax file upload, FormData, XMLHttpRequest
---

The function below sends selected files from a `fileEle` element to a back-end:

```js
const upload = function(fileEle, backendUrl) {
    return new Promise(function(resolve, reject) {
        // Get the list of selected files
        const files = fileEle.files;

        // Create a new FormData
        const formData = new FormData();

        // Loop over the files
        [].forEach.call(files, function(file) {
            formData.append(fileEle.name, file, file.name);
        });

        // Create new Ajax request
        const req = new XMLHttpRequest();
        req.open('POST', backendUrl, true);

        // Handle the events
        req.onload = function() {
            if (req.status >= 200 && req.status < 400) {
                resolve(req.responseText);
            }
        };
        req.onerror = function() {
            reject();
        };

        // Send it
        req.send(formData);
    });
};
```

## Usage

Assume that we have a `file` input that allows user to choose multiple files:

```html
<input type="file" id="upload" multiple />
```

We can use the following code inside a `click` event handler of a button which performs the uploading:

```js
const fileEle = document.getElementById('upload');

upload(fileEle, '/path/to/back-end').then(function(response) {
    // `response` is what we got from the back-end
    // We can parse it if the server returns a JSON
    const data = JSON.parse(response);
    ...
});
```

## More

* [Loop over a nodelist](/loop-over-a-nodelist)
* [Paste an image from the clipboard](/paste-an-image-from-the-clipboard)
* [Submit a form with ajax](/submit-a-form-with-ajax)
import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
We prepare the markup for a file input which allows to choose an image, and an \`img\` element for previewing the selected file.

~~~ html
<input type="file" id="fileInput" />

<img id="preview" />
~~~

Both elements can be taken by the \`getElementById()\` method:

~~~ javascript
const fileEle = document.getElementById('fileInput');
const previewEle = document.getElementById('preview');
~~~

## 1. Use the URL.createObjectURL() method

~~~ javascript
fileEle.addEventListener('change', function(e) {
    // Get the selected file
    const file = e.target.files[0];

    // Create a new URL that references to the file
    const url = URL.createObjectURL(file);

    // Set the source for preview element
    previewEle.src = url;
});
~~~

## 2. Use the FileReader's readAsDataURL() method

~~~ javascript
fileEle.addEventListener('change', function(e) {
    // Get the selected file
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', function() {
        // Set the source for preview element
        previewEle.src = reader.result;
    });

    reader.readAsDataURL(file);
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'get-the-size-of-an-image',
        'paste-an-image-from-the-clipboard',
        'resize-an-image',
    ]}
/>
</>
    );
};

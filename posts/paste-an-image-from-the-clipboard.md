import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='clipboardData, createObjectURL, FormData, getAsFile, paste event, paste image from clipboard, XMLHttpRequest' />
</Helmet>
<Markdown
    content={`

~~~ javascript
// Handle the \`paste\` event
document.addEventListener('paste', function(evt) {
    // Get the data of clipboard
    const clipboardItems = evt.clipboardData.items;
    const items = [].slice
        .call(clipboardItems)
        .filter(function(item) {
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
~~~

From the image blob, we can preview it as you see in the live example below:

~~~ javascript
// Assume that we have an \`img\` element
// <img id="preview" />

const imageEle = document.getElementById('preview');
imageEle.src = URL.createObjectURL(blob);
~~~

or [upload](/upload-files-with-ajax) it to the server with an Ajax request:

~~~ javascript
// Create a new FormData
const formData = new FormData();
formData.append('image', blob, 'filename');

// Create new Ajax request
const req = new XMLHttpRequest();
req.open('POST', '/path/to/back-end', true);

// Handle the events
req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
        const res = req.responseText;
        // Do something with the response
        // ...
    }
};

// Send it
req.send(formData);
~~~
`}
/>
<Demo src='/demo/paste-an-image-from-the-clipboard/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'preview-an-image-before-uploading-it',
        'upload-files-with-ajax',
    ]}
/>
</>
    );
};

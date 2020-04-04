import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
In the markup below, we have two elements defined by different \`id\` attributes. 
The \`id="size"\` element will be used to display the size of selected file from the \`id="upload"\` element.

~~~ html
<input type="file" id="upload" />
<div id="size"></div>
~~~

We listen on the \`change\` event of the file input, and get the selected files via \`e.target.files\`.
The file size in bytes of the selected file can be retrieved from the \`size\` property of the first (and only) file.

The size element is [shown up or hidden](/show-or-hide-an-element) based on the fact that user selects a file or not.

~~~ javascript
// Query the elements
const fileEle = document.getElementById('upload');
const sizeEle = document.getElementById('size');

fileEle.addEventListener('change', function(e) {
    const files = e.target.files;
    if (files.length === 0) {
        // Hide the size element if user doesn't choose any file
        sizeEle.innerHTML = '';
        sizeEle.style.display = 'none';
    } else {
        // File size in bytes
        sizeEle.innerHTML = \`\${files[0].size} B\`;

        // Display it
        sizeEle.style.display = 'block';
    }
});
~~~

## Display a readable size

There is a room for improving the output of file size. Instead of displaying in bytes, we can transform it to
a readable format in kB, MB, GB, and TB depending on how big it is.

The following \`formatFileSize\` helper method is created for that purpose:

~~~ javascript
// Convert the file size to a readable format
const formatFileSize = function(bytes) {
    const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return \`\${(bytes / Math.pow(1024, i)).toFixed(2)} \${sufixes[i]}\`;
};

// Display the file size
sizeEle.innerHTML = formatFileSize(files[0].size);
~~~

## Use case

* Validate the file size before uploading to the server.
`}
/>
<Demo src='/demo/get-size-of-the-selected-file/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'get-or-set-the-html-of-an-element',
        'show-or-hide-an-element',
    ]}
/>
</>
    );
};

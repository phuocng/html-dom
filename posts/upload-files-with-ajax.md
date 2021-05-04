import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='ajax file upload, FormData, XMLHttpRequest' />
</Helmet>
<Markdown
    content={`
The function below sends selected files from a \`fileEle\` element to a back-end:

~~~ javascript
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
~~~

## Usage

Assume that we have a \`file\` input that allows user to choose multiple files:

~~~ html
<input type="file" id="upload" multiple />
~~~

We can use the following code inside a \`click\` event handler of a button which performs the uploading:

~~~ javascript
const fileEle = document.getElementById('upload');

upload(fileEle, '/path/to/back-end').then(function(response) {
    // \`response\` is what we got from the back-end
    // We can parse it if the server returns a JSON
    const data = JSON.parse(response);
    ...
});
~~~
`}
/>
<RelatedPosts
    slugs={[
        'loop-over-a-nodelist',
        'paste-an-image-from-the-clipboard',
        'submit-a-form-with-ajax',
    ]}
/>
</>
    );
};

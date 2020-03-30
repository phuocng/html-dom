import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 1. Use the download attribute

Adding the \`download\` attribute to a link will force the browser to download the file instead of navigating to the link.
Note that the \`download\` attribute [isn't supported](https://caniuse.com/#feat=download) in IE 11.

~~~ html
<a href="/path/to/file" download>Download</a>
~~~

## 2. Trigger the click event

The idea comes from creating a link, and trigger its \`click\` event.

~~~ javascript
// Create a new link
const link = document.createElement('a');
link.download = 'file name';
link.href = '/path/to/file';

// Append to the document
document.body.appendChild(link);

// Trigger the click event
link.click();

// Remove the element
document.body.removeChild(link);
~~~

## 3. Download file with generated data

It's common to download a file with dynamic data, such as 
- a JSON
- a text
- an image

From the data, we can turn it to a blob, then trigger the \`click\` event as described in the previous section.
The following sample code creates a blob of JSON and downloads it:

~~~ javascript
const data = JSON.stringify({ 'message': 'Hello Word' });

const blob = new Blob([data], { type: 'application/json' });

// Create new URL
const url = window.URL.createObjectURL(blob);

// Create a link and trigger the download
...

// Free the URL created above
window.URL.revokeObjectURL(url);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'append-to-an-element',
        'create-an-element',
        'export-a-table-to-csv',
        'remove-an-element',
        'trigger-an-event',
    ]}
/>
</>
    );
};

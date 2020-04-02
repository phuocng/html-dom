import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='ajax form submit, XMLHttpRequest' />
</Helmet>
<Markdown
    content={`
The following function submits the data of \`formEle\` to the back-end using an Ajax request:

~~~ javascript
const submit = function(formEle) {
    return new Promise(function(resolve, reject) {
        // Serialize form data
        // See https://www.htmldom.cn/serialize-form-data-into-a-query-string
        const params = serialize(formEle);

        // Create new Ajax request
        const req = new XMLHttpRequest();
        req.open('POST', formEle.action, true);
        req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

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
        req.send(params);
    });
};
~~~

Where the \`serialize\` function serializes all the form data into a query string. You can see how it's implemented 
in this [post](/serialize-form-data-into-a-query-string).

## Usage

~~~ javascript
const formEle = document.getElementById(...);

submit(formEle).then(function(response) {
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
        'serialize-form-data-into-a-query-string',
        'upload-files-with-ajax',
    ]}
/>
</>
    );
};

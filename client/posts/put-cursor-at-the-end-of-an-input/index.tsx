import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we have a text field representing the full name of an user.
There is also a _Edit_ button for updating the full name.

~~~ html
<input type="text" id="fullName" />

<button id="edit">Edit</button>
~~~

There is a common requirement that clicking the Edit button will focus on the text field, and move the cursor to
the end of it:

~~~ javascript
const fullNameEle = document.getElementById('fullName');
const editEle = document.getElementById('edit');

editEle.addEventListener('click', function(e) {
    // Focus on the full name element
    fullNameEle.focus();

    // Move the cursor to the end
    const length = fullNameEle.value.length;
    fullNameEle.setSelectionRange(length, length);
});
~~~
`}
/>
<Demo src='/demo/put-cursor-at-the-end-of-an-input/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'trigger-an-event',
    ]}
/>
</>
    );
};

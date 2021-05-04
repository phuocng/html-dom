import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we want to have a placeholder for given \`contenteditable\` element:

~~~ html
<div contenteditable></div>
~~~

## 1. Use the \`:empty\` selector

We use a custom attribute, \`data-placeholder\`, to set the placeholder:

~~~ html
<div class="editable" contenteditable data-placeholder="Edit me"></div>
~~~

The attribute will be shown when the element value is empty:

~~~ css
.editable:empty:before {
    content: attr(data-placeholder);
}
~~~

## 2. Handle the events

First, we add the \`id\` and \`data-placeholder\` attributes to the element as following:

~~~ html
<div contenteditable data-placeholder="Edit me" id="editMe"></div>
~~~

When users focus on the element, we will reset its content if it's the same as the placeholder.
Also, when the element loses its focus, its content will be set back to the placeholder if users don't enter anything.

~~~ javascript
const ele = document.getElementById('editMe');

// Get the placeholder attribute
const placeholder = ele.getAttribute('data-placeholder');

// Set the placeholder as initial content if it's empty
(ele.innerHTML === '') && (ele.innerHTML = placeholder);

ele.addEventListener('focus', function(e) {
    const value = e.target.innerHTML;
    value === placeholder && (e.target.innerHTML = '');
});

ele.addEventListener('blur', function(e) {
    const value = e.target.innerHTML;
    value === '' && (e.target.innerHTML = placeholder);
});
~~~
`}
/>
<Demo src='/demo/placeholder-for-a-contenteditable-element/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'get-or-set-the-html-of-an-element',
        'get-set-and-remove-attributes',
    ]}
/>
</>
    );
};

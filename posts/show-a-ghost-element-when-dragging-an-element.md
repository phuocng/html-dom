import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='addEventListener, drag ghost element, dragend event, dragstart event, setDragImage' />
</Helmet>
<Markdown
    content={`
Assume that we have a draggable element:

~~~ html
<div draggable="true" class="draggable">Drag me</div>
~~~

Using the \`draggable\` attribute lets the browser know that the element can be dragged around.
By default, the browser will show a _ghost_ element created from the original element when it is being dragged.

We can customize the ghost element:

~~~ javascript
// Query the element
const ele = document.getElementById('dragMe');

// The ghost element
let ghostEle;

ele.addEventListener('dragstart', function(e) {
    // Create the ghost element
    ghostEle = document.createElement('div');
    ghostEle.classList.add('dragging');
    ghostEle.innerHTML = 'I am flying';

    // Append it to \`body\`
    document.body.appendChild(ghostEle);

    // Customize the drag image
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
});
~~~

It's worth noting that the ghost element should be removed from the page when users drag the element:

~~~ javascript
ele.addEventListener('dragend', function(e) {
    document.body.removeChild(ghostEle);
});
~~~

In the sample code above, the ghost element is created and removed on the fly. However, it's also possible to use
an existing element:

~~~ html
<div draggable="true" class="draggable">Drag me</div>
<div id="ghost" class="dragging">I am flying</div>
~~~

The event handler doesn't change much:

~~~ javascript
const ghostEle = document.getElementById('ghost');

ele.addEventListener('dragstart', function(e) {
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
});
~~~
`}
/>
<Demo src='/demo/show-a-ghost-element-when-dragging-an-element/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'create-an-element',
        'make-a-draggable-element',
        'remove-an-element',
    ]}
/>
</>
    );
};

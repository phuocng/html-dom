import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 1. Return \`false\` for the \`on<event>\`

~~~ javascript
ele.onclick = function(e) {
    // Do some thing
    ...

    return false;
};
~~~

It's same if you the inline attribute:

~~~ html
<form>
    <button type="submit" onclick="return false">Click</button>
</form>
~~~

I don't recommend this approach because
* Returning \`false\` just doesn't make sense
* It doesn't work with the [addEventListener()](/attach-or-detach-an-event-handler) method

## 2. Use the \`preventDefault()\` method

This method works with inline attribute

~~~ html
<button type="submit" onclick="event.preventDefault()">Click</button>
~~~

and event handlers:

~~~ javascript
ele.onclick = function(e) {
    e.preventDefault();

    // Do some thing
    ...
};

ele.addEventListener('click', function(e) {
    e.preventDefault();
    ...
});
~~~

## Use cases

1. Don't follow a link when clicking it. We often use this when creating tabs.
2. Don't submit the form when clicking its submit button. For example, we want to validate the form first.
3. Don't open a file or download the file when dragging and [dropping a file](/highlight-an-element-when-dragging-a-file-over-it) to a given area.
4. [Show a custom context menu](/show-a-custom-context-menu-at-clicked-position) when right-clicking an element.
`}
/>
<RelatedPosts
    slugs={[
        'allow-to-enter-particular-characters-only',
        'attach-or-detach-an-event-handler',
        'paste-as-plain-text',
        'press-shift-and-enter-for-a-new-line',
        'show-a-custom-context-menu-at-clicked-position',
        'show-or-hide-table-columns',
    ]}
/>
</>
    );
};

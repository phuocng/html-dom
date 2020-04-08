import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Set a CSS style

Setting the style via the \`style\` property:

~~~ javascript
ele.style.backgroundColor = 'red';
ele.style['backgroundColor'] = 'red';
ele.style['background-color'] = 'red';
~~~

Multiple styles can be set at the same time by overwriting or updating the \`cssText\` property:

~~~ javascript
// Add new style
el.style.cssText += 'background-color: red; color: white';

// Ignore previous styles
el.style.cssText = 'background-color: red; color: white';
~~~

## Remove a CSS style

~~~ javascript
ele.style.removeProperty('background-color');

// Does NOT work
ele.style.removeProperty('backgroundColor');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'create-an-image-comparison-slider',
        'create-a-range-slider',
        'create-resizable-split-views',
        'drag-and-drop-element-in-a-list',
        'drag-and-drop-table-column',
        'drag-and-drop-table-row',
        'get-css-styles-of-an-element',
        'make-a-draggable-element',
        'make-a-resizable-element',
        'measure-the-width-of-given-text-of-given-font',
        'print-an-image',
        'resize-columns-of-a-table',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
        'scale-a-text-to-fit-inside-of-an-element',
        'show-a-loading-indicator-when-an-iframe-is-being-loaded',
        'show-or-hide-an-element',
        'toggle-an-element',
    ]}
/>
</>
    );
};

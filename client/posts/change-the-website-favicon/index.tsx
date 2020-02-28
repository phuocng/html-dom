import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
The following function changes the favicon to \`url\`:

~~~ javascript
const setFavicon = function(url) {
    // Find the current favicon element
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        // Update the new link
        favicon.href = url;
    } else {
        // Create new \`link\`
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = url;
    
        // Append to the \`head\` element
        document.head.appendChild(link);
    }
};
~~~

When you want to update the favicon dynamically, for example, to user's icon in a social website:

~~~ javascript
setFavicon('/path/to/user/profile/icon.ico');
~~~

## Use an emoji as the favicon

Note that the \`setFavicon()\` function above accepts the favicon's URL. We can have some cool thing by passing a custom URL.

In the code below, we create a \`canvas\` element, fill it with a particular emoji and get the custom URL:

~~~ javascript
const emojiFavicon = function(emoji) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;

    // Get the canvas context
    const context = canvas.getContext('2d');
    context.font = '64px serif';
    context.fillText(emoji, 0, 64);

    // Get the custom URL
    const url = canvas.toDataURL();

    // Update the favicon
    setFavicon(url);
};

// Usage
emojiFavicon('🎉');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'load-a-css-file-dynamically',
        'load-a-javascript-file-dynamically',
    ]}
/>
</>
    );
};

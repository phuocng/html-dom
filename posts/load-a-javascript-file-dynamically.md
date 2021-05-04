import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## Load a JavaScript file

~~~ javascript
// Create new script element
const script = document.createElement('script');
script.src = '/path/to/js/file.js';

// Append to the \`head\` element
document.head.appendChild(script);
~~~

## Execute code when the JavaScript file is loaded

~~~ javascript
// Create new script element
...
script.addEventListener('load', function() {
    // The script is loaded completely
    // Do something
});

// Append to the \`head\` element
...
~~~

## Load multiple JavaScript files in order

Assume that you want to load an array of JavaScript files, \`arrayOfJs\`, in order.

To do that, we have to load the first script, and load the second script when the first one is loaded completely.
And continue doing so until all scripts are loaded.

~~~ javascript
// Load a script from given \`url\`
const loadScript = function(url) {
    return new Promise(function(resolve, reject) {
        const script = document.createElement('script');
        script.src = url;

        script.addEventListener('load', function() {
            // The script is loaded completely
            resolve(true);
        });

        document.head.appendChild(script);
    });
};

// Perform all promises in the order
const waterfall = function(promises) {
    return promises.reduce(
        function(p, c) {
            // Waiting for \`p\` completed
            return p.then(function() {
                // and then \`c\`
                return c().then(function(result) {
                    return true;
                });
            });
        },
        // The initial value passed to the reduce method
        Promise.resolve([])
    );
};

// Load an array of scripts in order
const loadScriptsInOrder = function(arrayOfJs) {
    const promises = arrayOfJs.map(function(url) {
        return loadScript(url);
    });
    return waterfall(promises);
};
~~~

The \`loadScriptsInOrder\` function returns a \`Promise\` indicates whether all scripts are loaded successfully:

~~~ javascript
loadScriptsInOrder([
    '/path/to/file.js',
    '/path/to/another-file.js',
    '/yet/another/file.js',
]).then(function() {
    // All scripts are loaded completely
    // Do something
})
~~~
`}
/>
<RelatedPosts
    slugs={[
        'change-the-website-favicon',
        'load-a-css-file-dynamically',
    ]}
/>
</>
    );
};

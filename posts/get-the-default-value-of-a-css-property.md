import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
The function below returns the default value of CSS \`property\` for given \`tagName\`:

~~~ javascript
const getDefaultProperty = function(tagName, property) {
    // Create new element
    const ele = document.createElement(tagName);

    // Append to the body
    document.body.appendChild(ele);

    // Get the styles of new element
    const styles = window.getComputedStyle(ele);

    // Get the value of property
    const value = styles.getPropertyValue(property);

    // Remove the element
    document.body.removeChild(ele);

    // Return the value of property
    return value;
};
~~~

> ## Good to know
>
> The [getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method
> returns the _live_ styles of given element.
> It means that it's updated automatically if the element styles are changed.
> 
> That's why we need to get the value of property before removing the element.
> The following code doesn't return the correct value:
>
> ~~~ javascript
> ...
> const styles = window.getComputedStyle(ele);
> document.body.removeChild(ele);
>
> // Always return "" because the element is already 
> // removed from the document
> return styles.getPropertyValue(property);
> ~~~

We can use it, for example, to get the default font size of \`div\` tag:

~~~ javascript
getDefaultProperty('div', 'font-size');

// Or
getDefaultProperty('div', 'fontSize');
~~~
`}
/>
<RelatedPosts
    slugs={[
        'get-css-styles-of-an-element',
    ]}
/>
</>
    );
};

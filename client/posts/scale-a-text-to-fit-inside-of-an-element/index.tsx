import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Let's say that we want to scale a text inside a headline:

~~~ html
<div id="headline">Hello World</div>
~~~

First of all, we need to measure the width of element with its current font size and [text content](/get-the-text-content-of-an-element).
For more information, you can take a look at this [post](/measure-the-width-of-given-text-of-given-font).

~~~ javascript
const measureWidth = function(text, font) {
    // Measure the width of given text for given font
    ...
};

// Query the element
const ele = document.getElementById('headline');

// Get the styles
const styles = window.getComputedStyle(ele);

// Get the font size and font style
const font = styles.font;
const fontSize = parseInt(styles.fontSize);

const measured = measureWidth(ele.textContent, font);
~~~

Now we can calculate how much the element is scaled by comparing the measured width and the [full width](/determine-the-height-and-width-of-an-element):

~~~ javascript
const scale = ele.clientWidth / parseFloat(measured);
~~~

Finally, we set the font size as the element scales up to full width:

~~~ javascript
const scaleFontSize = Math.floor(scale * fontSize);
ele.style.fontSize = \`\${scaleFontSize}px\`;
~~~
`}
/>
<Demo src='/demo/scale-a-text-to-fit-inside-of-an-element/index.html' />
<RelatedPosts
    slugs={[
        'determine-the-height-and-width-of-an-element',
        'get-css-styles-of-an-element',
        'get-the-text-content-of-an-element',
        'measure-the-width-of-given-text-of-given-font',
        'resize-the-width-of-a-text-box-to-fit-its-content-automatically',
        'set-css-style-for-an-element',
    ]}
/>
</>
    );
};

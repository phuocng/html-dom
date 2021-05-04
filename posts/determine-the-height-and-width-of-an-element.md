import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that \`ele\` represents the DOM of element you want to calculate the size.

~~~ javascript
// Get the styles
const styles = window.getComputedStyle(ele);

// The size without padding and border
const height = ele.clientHeight - parseFloat(styles.paddingTop) 
                                - parseFloat(styles.paddingBottom);
const width = ele.clientWidth - parseFloat(styles.paddingLeft) 
                              - parseFloat(styles.paddingRight);

// The size include padding
const clientHeight = ele.clientHeight;
const clientWidth = ele.clientWidth;

// The size include padding and border
const offsetHeight = ele.offsetHeight;
const offsetWidth = ele.offsetWidth;

// The size include padding, border and margin
const heightWithMargin = ele.offsetHeight + parseFloat(styles.marginTop)
                                          + parseFloat(styles.marginBottom);
const widthWithMargin = ele.offsetWidth + parseFloat(styles.marginLeft)
                                        + parseFloat(styles.marginRight);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'calculate-the-size-of-scrollbar',
        'create-a-custom-scrollbar',
        'scale-a-text-to-fit-inside-of-an-element',
    ]}
/>
</>
    );
};

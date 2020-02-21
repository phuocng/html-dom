import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## 1. Use the remove method

Note that the [\`remove\`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) method isn't supported in Internet Explorer.

~~~ javascript
ele.remove();
~~~

## 2. Use the removeChild method

~~~ javascript
if (ele.parentNode) {
    ele.parentNode.removeChild(ele);
}
~~~

## Might be useful

* [Download a file](/download-a-file)
* [Remove all children of a node](/remove-all-children-of-a-node)
`}
/>
    );
};

import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Add a class to an element

~~~ javascript
ele.classList.add('class-name');
~~~

## Remove a class from an element

~~~ javascript
ele.classList.remove('class-name');
~~~

## Toggle a class

~~~ javascript
ele.classList.toggle('class-name');
~~~

## Might be useful

* [Check if an element has given class](/check-if-an-element-has-given-class)
`}
/>
    );
};

import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Select: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
## Select an element by given ID

~~~ javascript
<div id="hello" />

document.getElementById('hello');
~~~

## Select elements by class name

Returns the list of elements that have \`hello\` class within a given element:

~~~ javascript
ele.getElementsByClassName('hello');
~~~

## Select elements by tag name

Returns the list of \`span\` inside a given element:

~~~ javascript
ele.getElementsByTagName('span');
~~~

## Select elements by CSS selector

Returns the list of elements that match a given selector:

~~~ javascript
ele.querySelectorAll('div.hello');
~~~
`}
/>
<RelatedTasks tasks={[TaskType.LoopNodeList]} />
</>
    );
};

export default Select;

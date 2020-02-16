import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Unwrap: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Remove the \`ele\` element except its children:

~~~ javascript
// Get the parent node
const parent = ele.parentNode;

// Move all children node to the parent
while (ele.firstChild) {
    parent.insertBefore(ele.firstChild, ele);
}

// \`ele\` becomes an empty element
// Remove it from the parent
parent.removeChild(ele);
~~~
`}
/>
<RelatedTasks tasks={[TaskType.RemoveAllChildren, TaskType.Wrap]} />
</>
    );
};

export default Unwrap;

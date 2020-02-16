import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Wrap: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Wrap the \`wrapper\` element around the \`ele\` element:

~~~ javascript
// First, insert \`wrapper\` before \`ele\` in its parent node
ele.parentNode.insertBefore(wrapper, ele);

// And then, turn \`ele\` into a children of \`wrapper\`
wrapper.appendChild(ele);
~~~
`}
/>
<RelatedTasks tasks={[TaskType.Unwrap]} />
</>
    );
};

export default Wrap;

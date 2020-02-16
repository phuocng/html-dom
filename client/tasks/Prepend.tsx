import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Prepend: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Add the \`ele\` element to the beginning of the \`target\` element:

~~~ javascript
target.insertBefore(ele, target.firstChild);
~~~
`}
/>
<RelatedTasks tasks={[TaskType.Append, TaskType.Insert]} />
</>
    );
};

export default Prepend;

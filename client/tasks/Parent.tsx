import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Parent: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Returns the parent node of the \`ele\` element:

~~~ javascript
const parent = ele.parentNode;
~~~
`}
/>
<RelatedTasks tasks={[TaskType.Children]} />
</>
    );
};

export default Parent;

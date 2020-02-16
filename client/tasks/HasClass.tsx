import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const HasClass: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
ele.classList.contains('class-name');
~~~
`}
/>
<RelatedTasks tasks={[TaskType.AddClass]} />
</>
    );
};

export default HasClass;

import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Show: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
## Show an element

~~~ javascript
ele.style.display = '';
~~~

## Hide an element

~~~ javascript
ele.style.display = 'none';
~~~
`}
/>
<RelatedTasks tasks={[TaskType.SetStyle]} />
</>
    );
};

export default Show;

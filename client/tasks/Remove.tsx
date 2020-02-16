import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Remove: React.FC<{}> = () => {
    return (
<>
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
`}
/>
<RelatedTasks tasks={[TaskType.RemoveAllChildren]} />
</>
    );
};

export default Remove;

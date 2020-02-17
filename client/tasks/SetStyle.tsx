import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const SetStyle: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Setting the style via the \`style\` property:

~~~ javascript
ele.style.backgroundColor = 'red';
ele.style['backgroundColor'] = 'red';
ele.style['background-color'] = 'red';
~~~

Multiple styles can be set at the same time by overwriting or updating the \`cssText\` property:

~~~ javascript
// Add new style
el.style.cssText += 'background-color: red; color: white';

// Ignore previous styles
el.style.cssText = 'background-color: red; color: white';
~~~
`}
/>
<RelatedTasks tasks={[TaskType.GetStyle, TaskType.Show]} />
</>
    );
};

export default SetStyle;

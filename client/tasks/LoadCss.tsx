import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const LoadCss: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
// Create new link element
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/path/to/js/file.css');

// Append to the \`head\` element
document.head.appendChild(link);
~~~
`}
/>
<RelatedTasks tasks={[TaskType.LoadJs]} />
</>
    );
};

export default LoadCss;

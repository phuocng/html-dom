import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const InnerHtml: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
## Get the HTML

~~~ javascript
// Get the HTML
const html = ele.innerHTML;
~~~

## Set the HTML

~~~ javascript
// Set the HTML
ele.innerHTML = '<h1>Hello World!</h1>';
~~~
`}
/>
<RelatedTasks tasks={[TaskType.TextContent]} />
</>
    );
};

export default InnerHtml;

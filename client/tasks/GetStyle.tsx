import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const GetStyle: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
We can get all CSS styles via the \`getComputedStyle\` method:

~~~ javascript
const styles = window.getComputedStyle(ele, null);
~~~

From there, it's easy to access the value of specific style:

~~~ javascript
// Get the background color
const bgColor = styles.backgroundColor;
~~~

For the style that has a vendor prefix which starts with a hyphen (-), we can get the style value by passing the style:

~~~ javascript
const textSizeAdjust = styles['-webkit-text-size-adjust'];
~~~

The \`getPropertyValue\` method produces the same result:

~~~ javascript
const bgColor = styles.getPropertyValue('background-color');

// Or turn the parameter to camelCase format:
const bgColor = styles.getPropertyValue('backgroundColor');
~~~
`}
/>
<RelatedTasks tasks={[TaskType.SetStyle]} />
</>
    );
};

export default GetStyle;

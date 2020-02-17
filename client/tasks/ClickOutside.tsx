import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const ClickOutside: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
Check if a click was outside of the \`ele\` element:

~~~ javascript
document.addEventListener('click', function(evt) {
    const isClickedOutside = !ele.contains(evt.target);

    // \`isClickedOutside\` is true if the clicked target is outside of \`ele\`
});
~~~
`}
/>
<RelatedTasks tasks={[TaskType.On]} />
</>
    );
};

export default ClickOutside;

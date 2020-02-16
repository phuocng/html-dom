import React from 'react';

import Markdown from '../components/Markdown';
import RelatedTasks from '../components/RelatedTasks';
import TaskType from '../constants/TaskType';

const Closest: React.FC<{}> = () => {
    return (
<>
<Markdown
    content={`
~~~ javascript
const matches = function(ele, selector) {
    return (
        ele.matches || 
        ele.matchesSelector || 
        ele.msMatchesSelector || 
        ele.mozMatchesSelector || 
        ele.webkitMatchesSelector || 
        ele.oMatchesSelector
    ).call(ele, selector);
};

// Find the closest element to \`ele\` and matches the \`selector\`
const closest = function(ele, selector) {
    let e = ele;
    while (e) {
        if (matches(e, selector)) {
            break;
        }
        e = e.parentNode;
    }
    return e;
};
~~~
`}
/>
<RelatedTasks tasks={[TaskType.Match]} />
</>
    );
};

export default Closest;

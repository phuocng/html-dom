import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
~~~ javascript
const ready = function (cb) {
  // Check if the \`document\` is loaded completely
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", function (e) {
        cb();
      })
    : cb();
};

// Usage
ready(function() {
    // Do something when the document is ready
    ...
});
~~~
`}
/>
    );
};

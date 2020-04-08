import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`addEventListener, getSelection, mouseup event`}
    />
</Helmet>
<Markdown
    content={`
Using \`window.getSelection\` to get the current select text.


~~~ javascript
function handleSelectedEvent() {
  const selection = window.getSelection();

  if (selection) {
    const selectString = selection.toString();
    // Do something... e.g. fetch dictionary API base on select string
  }
}
document.addEventListener('mouseup', handleSelectedEvent);
~~~

Following is the demo. Try to select the text.
`}
/>
<Demo src='/demo/get-select-text/index.html' />
<RelatedPosts
    slugs={[
        'select-the-text-of-a-textarea-automatically',
    ]}
/>
</>
    );
};

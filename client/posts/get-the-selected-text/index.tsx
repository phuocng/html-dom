import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content='get selected text, window getSelection'
    />
</Helmet>
<Markdown
    content={`
~~~ javascript
const selectedText = window.getSelection().toString();
~~~
`}
/>
</>
    );
};

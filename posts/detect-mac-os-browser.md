import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='navigator.platform, check mac browser' />
</Helmet>
<Markdown
    content={`
Check if the current browser runs on Mac:

~~~ javascript
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-the-code-is-running-in-the-browser',
        'detect-if-the-caps-lock-is-on',
        'detect-internet-explorer-browser',
        'detect-mobile-browsers',
    ]}
/>
</>
    );
};

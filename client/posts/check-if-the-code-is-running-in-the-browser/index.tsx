import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='check code run browser, detect browser' />
</Helmet>
<Markdown
    content={`
We can detect if the current code is running in the browser by checking the existence of \`window\` and \`document\` objects:

~~~ javascript
const isBrowser = typeof window === 'object' && typeof document === 'object';
~~~
`}
/>
<RelatedPosts
    slugs={[
        'detect-internet-explorer-browser',
        'detect-mac-os-browser',
        'detect-mobile-browsers',
    ]}
/>
</>
    );
};

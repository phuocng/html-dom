import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='navigator userAgent, check internet explorer browser' />
</Helmet>
<Markdown
    content={`
Check if the current browser is Internet Explorer:

~~~ javascript
const isIe = function() {
    const ua = window.navigator.userAgent;
    return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'detect-mac-os-browser',
    ]}
/>
</>
    );
};

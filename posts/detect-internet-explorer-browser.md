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
Check if the current browser is Internet Explorer (IE):

~~~ javascript
const isIe = function() {
    const ua = window.navigator.userAgent;
    return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
};
~~~

We also can rely on \`document.documentMode\`. This property indicates the document compatibility mode of the document
which is an integer in IE 5-11. Other browsers return \`undefined\`.

~~~ javascript
const isIE = !!document.documentMode;
~~~
`}
/>
<RelatedPosts
    slugs={[
        'check-if-the-code-is-running-in-the-browser',
        'detect-mac-os-browser',
        'detect-mobile-browsers',
    ]}
/>
</>
    );
};

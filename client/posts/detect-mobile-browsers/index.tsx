import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='detect mobile browser, matchMedia, userAgent' />
</Helmet>
<Markdown
    content={`
Here is a few ways to check if user is browsering from a mobile browser.

## 1. Check \`userAgent\` (not recomended)

~~~ javascript
// You can add more if you want
const isMobile = /Android|BlackBerry|iPad|iPod|iPhone|webOS/i
    .test(navigator.userAgent);
~~~

I don't recommend this approach because the server can send a fake user agent.

## 2. Use feature detection

Check if the browser supports the \`pointer:coarse\` media query:

~~~ javascript
const isMobile = function() {
    const match = window.matchMedia('(pointer:coarse)');
    return (match && match.matches);
};
~~~

We can't rely on the screen size because the mobile devices are getting bigger.
`}
/>
<RelatedPosts
    slugs={[
        'check-if-the-code-is-running-in-the-browser',
        'check-if-the-touch-events-are-supported',
        'detect-internet-explorer-browser',
        'detect-mac-os-browser',
        'detect-the-dark-mode',
    ]}
/>
</>
    );
};

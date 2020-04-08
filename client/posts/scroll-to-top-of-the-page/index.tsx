import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content='scrollTo, scroll to top'
    />
</Helmet>
<Markdown
    content={`
In general, you can scroll to a point whose coordinates indicates the distance from it to the top and left side of document:

~~~ javascript
window.scrollTo(pageX, pageY);
~~~

So, the following code scrolls to top of the page:

~~~ javascript
window.scrollTo(0, 0);
~~~

## Use cases

1. You can add a button at the bottom of page that allows user to scroll to the top quickly.

2. In a single page application, where page is built on top of components, and users usually don't realize the page changes
when navigating to other page.

The browser keeps the current scroll position. We have to scroll to the top when users change page. The following sample code
is used in the layout of a React application using the [React Router](https://github.com/ReactTraining/react-router):

~~~ javascript
import { useLocation } from 'react-router-dom';

export default ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        ...
    );
};
~~~
`}
/>
<RelatedPosts
    slugs={[
        'scroll-to-an-element',
    ]}
/>
</>
    );
};

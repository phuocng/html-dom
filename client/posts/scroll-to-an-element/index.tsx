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
        content='scrollIntoView, scrollIntoView behavior smooth, smoothly scroll'
    />
</Helmet>
<Markdown
    content={`
## Scroll to the \`ele\` element

~~~ javascript
ele.scrollIntoView();
~~~

## Smoothly scroll

The \`behavior\` option [isn't supported](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#Browser_compatibility) in IE and Safari.

~~~ javascript
ele.scrollIntoView({ behavior: 'smooth' });
~~~

> ## Good to know
>
> The similar CSS property which provides the same functionality is
>
> ~~~ css
> scroll-behavior: smooth;
> ~~~
>
> It [isn't supported](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#Browser_compatibility) in IE and Safari.
`}
/>
<RelatedPosts
    slugs={[
        'scroll-to-an-element-smoothly',
        'scroll-to-top-of-the-page',
    ]}
/>
</>
    );
};

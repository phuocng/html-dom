import React from 'react';
import { Helmet } from 'react-helmet';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta name='keywords' content='encodeURIComponent, serialize form data' />
</Helmet>
<Markdown
    content={`
The following function serializes the form data which consists of names and values of its fields:

~~~ javascript
const serialize = function(formEle) {
    // Get all fields
    const fields = [].slice.call(formEle.elements, 0);

    return fields
        .map(function(ele) {
            const name = ele.name;
            const type = ele.type;
            
            // We ignore
            // - field that doesn't have a name
            // - disabled field
            // - \`file\` input
            // - unselected checkbox/radio
            if (!name ||
                ele.disabled ||
                type === 'file' ||
                (/(checkbox|radio)/.test(type) && !ele.checked))
            {
                return '';
            }

            // Multiple select
            if (type === 'select-multiple') {
                return ele.options
                    .map(function(opt) {
                        return opt.selected
                            ? \`\${encodeURIComponent(name)}=\${encodeURIComponent(opt.value)}\`
                            : '';
                    })
                    .filter(function(item) {
                        return item;
                    })
                    .join('&');
            }

            return \`\${encodeURIComponent(name)}=\${encodeURIComponent(ele.value)}\`;
        })
        .filter(function(item) {
            return item;
        })
        .join('&');
};
~~~

Note that we [convert](/loop-over-a-nodelist) the collection of form elements to array by

~~~ javascript
const fields = [].slice.call(formEle.elements, 0)
~~~
`}
/>
<RelatedPosts
    slugs={[
        'loop-over-a-nodelist',
        'submit-a-form-with-ajax',
    ]}
/>
</>
    );
};

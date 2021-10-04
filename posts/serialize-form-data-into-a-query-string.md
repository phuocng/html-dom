---
category: Basic
keywords: encodeURIComponent, serialize form data
title: Serialize form data into a query string
---

The following function serializes the form data which consists of names and values of its fields:

```js
const serialize = function (formEle) {
    // Get all fields
    const fields = [].slice.call(formEle.elements, 0);

    return fields
        .map(function (ele) {
            const name = ele.name;
            const type = ele.type;

            // We ignore
            // - field that doesn't have a name
            // - disabled field
            // - `file` input
            // - unselected checkbox/radio
            if (!name || ele.disabled || type === 'file' || (/(checkbox|radio)/.test(type) && !ele.checked)) {
                return '';
            }

            // Multiple select
            if (type === 'select-multiple') {
                return ele.options
                    .map(function (opt) {
                        return opt.selected ? `${encodeURIComponent(name)}=${encodeURIComponent(opt.value)}` : '';
                    })
                    .filter(function (item) {
                        return item;
                    })
                    .join('&');
            }

            return `${encodeURIComponent(name)}=${encodeURIComponent(ele.value)}`;
        })
        .filter(function (item) {
            return item;
        })
        .join('&');
};
```

Note that we [convert](/loop-over-a-nodelist) the collection of form elements to array by

```js
const fields = [].slice.call(formEle.elements, 0);
```

### See also

-   [Loop over a nodelist](/loop-over-a-nodelist)
-   [Submit a form with ajax](/submit-a-form-with-ajax)

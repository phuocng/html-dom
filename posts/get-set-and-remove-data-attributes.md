---
category: Basic
keywords:
title: Get, set and remove data attributes
---

### Get the data attribute's value

```js
// Get the `data-message` attribute of the `ele` element
const message = ele.getAttribute('data-message');

// Or
const message = ele.dataset.message;
```

### Set the data attribute's value

```js
ele.setAttribute('data-message', 'Hello World');

// Or
ele.dataset.message = 'Hello World';
```

### Remove the data attribute

```js
ele.removeAttribute('data-message');

// Or
delete ele.dataset.message;
```

Note that calling `delete ele.dataset` doesn't remove all data attributes.

### See also

-   [Create resizable split views](/create-resizable-split-views)
-   [Get set and remove attributes](/get-set-and-remove-attributes)
-   [Show or hide table columns](/show-or-hide-table-columns)
-   [Sort a table by clicking its headers](/sort-a-table-by-clicking-its-headers)

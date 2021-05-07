---
title: Toggle an element
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

To toggle the element, we update the `display` property:

```js
const toggle = function(ele) {
    const display = ele.style.display;
    ele.style.display = display === 'none' ? 'block' : 'none';
};
```

## More

* [Set css style for an element](/set-css-style-for-an-element)
* [Show or hide an element](/show-or-hide-an-element)
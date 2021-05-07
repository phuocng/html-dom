---
title: Insert given html after or before an element
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords: insertAdjacentHTML
---

## Insert after

Insert `html` after the `ele` element:

```js
ele.insertAdjacentHTML('afterend', html);
```

## Insert before

Insert `html` before the `ele` element:

```js
ele.insertAdjacentHTML('beforebegin', html);
```

## More

* [Append to an element](/append-to-an-element)
* [Insert an element after or before other element](/insert-an-element-after-or-before-other-element)
* [Prepend to an element](/prepend-to-an-element)
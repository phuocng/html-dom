---
title: Load a css file dynamically
category: Intermediate
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

```js
// Create new link element
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/path/to/js/file.css');

// Append to the `head` element
document.head.appendChild(link);
```

## More

* [Change the website favicon](/change-the-website-favicon)
* [Load a javascript file dynamically](/load-a-javascript-file-dynamically)
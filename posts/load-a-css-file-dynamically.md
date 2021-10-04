---
category: Intermediate
keywords:
title: Load a CSS file dynamically
---

```js
// Create new link element
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/path/to/js/file.css');

// Append to the `head` element
document.head.appendChild(link);
```

### See also

-   [Change the website favicon](/change-the-website-favicon)
-   [Load a JavaScript file dynamically](/load-a-javascript-file-dynamically)

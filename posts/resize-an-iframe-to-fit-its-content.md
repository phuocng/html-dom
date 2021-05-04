---
title: Resize an iframe to fit its content
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

Assume that `frame` represents the iframe element.

```js
frame.addEventListener('load', function() {
    // Get the height of the content
    const height = frame.contentDocument.body.scrollHeight;

    // Set the height of iframe
    frame.setAttribute('height', `\${height}px`);
});
```

## More

* [Attach or detach an event handler](/attach-or-detach-an-event-handler)
* [Show a loading indicator when an iframe is being loaded](/show-a-loading-indicator-when-an-iframe-is-being-loaded)
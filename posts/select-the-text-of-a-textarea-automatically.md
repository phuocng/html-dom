---
title: Select the text of a textarea automatically
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

Assume that `ele` represents a textarea element.

```js
ele.addEventListener('focus', function(e) {
    // Select the text
    e.target.select();
});
```

## More

* [Attach or detach an event handler](/attach-or-detach-an-event-handler)
* [Trigger an event](/trigger-an-event)
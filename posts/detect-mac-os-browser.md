---
title: Detect mac os browser
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords: navigator.platform, check mac browser
---

Check if the current browser runs on Mac:

```js
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

## More

* [Check if the code is running in the browser](/check-if-the-code-is-running-in-the-browser)
* [Detect if the caps lock is on](/detect-if-the-caps-lock-is-on)
* [Detect internet explorer browser](/detect-internet-explorer-browser)
* [Detect mobile browsers](/detect-mobile-browsers)
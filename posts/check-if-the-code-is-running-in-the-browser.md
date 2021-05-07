---
title: Check if the code is running in the browser
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords: check code run browser, detect browser
---

We can detect if the current code is running in the browser by checking the existence of `window` and `document` objects:

```js
const isBrowser = typeof window === 'object' && typeof document === 'object';
```

## More

* [Detect internet explorer browser](/detect-internet-explorer-browser)
* [Detect mac os browser](/detect-mac-os-browser)
* [Detect mobile browsers](/detect-mobile-browsers)
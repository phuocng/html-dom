---
category: Basic
keywords: navigator.platform, check mac browser
title: Detect mac OS browser
---

Check if the current browser runs on Mac:

```js
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

### See also

-   [Check if the code is running in the browser](/check-if-the-code-is-running-in-the-browser)
-   [Detect if the caps lock is on](/detect-if-the-caps-lock-is-on)
-   [Detect internet explorer browser](/detect-internet-explorer-browser)
-   [Detect mobile browsers](/detect-mobile-browsers)

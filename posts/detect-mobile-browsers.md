---
category: Basic
keywords: detect mobile browser, matchMedia, userAgent
title: Detect mobile browsers
---

Here is a few ways to check if user is browsering from a mobile browser.

### 1. Check `userAgent` (not recomended)

```js
// You can add more if you want
const isMobile = /Android|BlackBerry|iPad|iPod|iPhone|webOS/i.test(navigator.userAgent);
```

I don't recommend this approach because the server can send a fake user agent.

### 2. Use feature detection

Check if the browser supports the `pointer:coarse` media query:

```js
const isMobile = function () {
    const match = window.matchMedia('(pointer:coarse)');
    return match && match.matches;
};
```

We can't rely on the screen size because the mobile devices are getting bigger.

### See also

-   [Check if the code is running in the browser](/check-if-the-code-is-running-in-the-browser)
-   [Check if the touch events are supported](/check-if-the-touch-events-are-supported)
-   [Detect internet explorer browser](/detect-internet-explorer-browser)
-   [Detect mac os browser](/detect-mac-os-browser)
-   [Detect the dark mode](/detect-the-dark-mode)

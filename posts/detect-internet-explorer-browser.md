---
category: Basic
keywords: navigator userAgent, check internet explorer browser
title: Detect internet explorer browser
---

Check if the current browser is Internet Explorer (IE):

```js
const isIe = function () {
    const ua = window.navigator.userAgent;
    return ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1;
};
```

We also can rely on `document.documentMode`. This property indicates the document compatibility mode of the document which is an integer in IE 5-11. Other browsers return `undefined`.

```js
const isIE = !!document.documentMode;
```

### See also

-   [Check if the code is running in the browser](/check-if-the-code-is-running-in-the-browser)
-   [Detect mac os browser](/detect-mac-os-browser)
-   [Detect mobile browsers](/detect-mobile-browsers)

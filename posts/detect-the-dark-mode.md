---
category: Basic
keywords: detect dark mode, prefers-color-scheme
title: Detect the dark mode
---

Modern operating systems such as macOS, Windows 10 allow users to choose the appearance they would like to see in all applications.

The following screenshot is taken from the _General_ setting pane in macOS:

![Set the dark mode in macOS](/assets/appearance-setting.png)

The option can be detected by looking at the `prefers-color-scheme` media query.

It can be one of the following values:

-   `light`: User would like to see the page in the light mode
-   `dark`: User would like to see the page in the dark mode
-   `no-preference`: The system doesn't know about the user preferences

By checking against this media query value, we can determine if the user prefers the drak mode or not:

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

### See also

-   [Detect mobile browsers](/detect-mobile-browsers)

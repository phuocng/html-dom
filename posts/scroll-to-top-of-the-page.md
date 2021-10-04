---
category: Basic
keywords: scrollTo, scroll to top
title: Scroll to top of the page
---

In general, you can scroll to a point whose coordinates indicates the distance from it to the top and left side of document:

```js
window.scrollTo(pageX, pageY);
```

So, the following code scrolls to top of the page:

```js
window.scrollTo(0, 0);
```

### Use cases

1. You can add a button at the bottom of page that allows user to scroll to the top quickly.
2. In a single page application, where page is built on top of components, and users usually don't realize the page changes when navigating to other page.

The browser keeps the current scroll position. We have to scroll to the top when users change page. The following sample code is used in the layout of a React application using the [React Router](https://github.com/ReactTraining/react-router):

```js
import { useLocation } from 'react-router-dom';

export default ({ children }) => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        ...
    );
};
```

### See also

-   [Scroll to an element](/scroll-to-an-element)
-   [Scroll to an element smoothly](/scroll-to-an-element-smoothly)

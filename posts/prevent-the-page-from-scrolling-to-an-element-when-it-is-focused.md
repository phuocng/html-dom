---
category: Basic
keywords:
title: Prevent the page from scrolling to an element when it is focused
---

An element can be focused by either using the `autofocus="true"` attribute or calling the `element.focus()` method. In both cases, the browser will automatically scroll the element into the viewport.
It is not a problem in most cases but I have seen a few scenarios where we would like to avoid the behaviour.

For example, focusing on a text field inside a modal automatically might scroll the page to the top.

There are two solutions to prevent this behaviour.

### Use the preventScroll option

We can pass the `preventScroll` option to the `focus()` method as following:

```js
element.focus({
    preventScroll: true,
});
```

However, the option is not fully supported in all browsers. Check out the [web-platform-tests](https://wpt.fyi/results/html/interaction/focus/processing-model/preventScroll.html) and [Can I use](https://caniuse.com/mdn-api_htmlelement_focus_preventscroll_option) pages.

### Scroll to the previous point

This approach works in all browsers. We store the mouse location before calling the `focus()` method, and then scroll to that location later:

```js
const x = window.scrollX;
const y = window.scrollY;
elem.focus();

// Scroll to the previous location
window.scrollTo(x, y);
```

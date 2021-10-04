---
category: Basic
keywords:
title: Strip HTML from a given text
---

### 1. Get text content from a fake element (not recommended)

```js
const stripHtml = function (html) {
    // Create new element
    const ele = document.createElement('div');

    // Set its HTML
    ele.innerHTML = html;

    // Return the text only
    return ele.textContent || '';
};
```

This approach isn't recommended because it can cause a security issue if the input `html` consists of special tags, such as
`<script>`. However, we can prevent the html from being executed by replacing the `div` tag with `textarea`:

```js
const stripHtml = function (html) {
    const ele = document.createElement('textarea');
    ele.innerHTML = html;
    return ele.textContent || '';
};
```

### 2. Use DOMParser

```js
const stripHtml = function (html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
};
```

### 3. Use template

The [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) tag holds a HTML content that is not to be rendered immediately. However, this is not supported on older browser such as IE 11.

```js
const stripHtml = function (html) {
    const ele = document.createElement('template');
    ele.innerHTML = html;
    return ele.content.textContent || '';
};
```

### See also

-   [Create an element](/create-an-element)
-   [Get or set the html of an element](/get-or-set-the-html-of-an-element)
-   [Get the text content of an element](/get-the-text-content-of-an-element)

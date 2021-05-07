---
title: Detect if an element is focused
category: Basic
tags:
  - posts
layout: layouts/post.njk
metadata:
  keywords:
---

Assume that `ele` represents the element that you want to check if it has the focus currently:

```js
const hasFocus = ele === document.activeElement;
```
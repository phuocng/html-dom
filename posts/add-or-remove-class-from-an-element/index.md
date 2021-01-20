---
tags: posts
title: Add or remove class from an element
layout: layouts/post.njk
---

## Add a class to an element

Note that multiple parameters for the \`add()\` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

``` javascript
ele.classList.add('class-name');
// Add multiple classes (Not supported in IE 11)
ele.classList.add('another', 'class', 'name');
```

## Remove a class from an element

Note that multiple parameters for the \`remove()\` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

``` javascript
ele.classList.remove('class-name');
// Remove multiple classes (Not supported in IE 11)
ele.classList.remove('another', 'class', 'name');
```

## Toggle a class

``` javascript
ele.classList.toggle('class-name');
```
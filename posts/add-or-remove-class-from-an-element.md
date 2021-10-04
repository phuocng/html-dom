---
category: Basic
keywords: classList, classList add, classList remove, classList toggle
title: Add or remove class from an element
---

### Add a class to an element

Note that multiple parameters for the `add()` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

```js
ele.classList.add('class-name');

// Add multiple classes (Not supported in IE 11)
ele.classList.add('another', 'class', 'name');
```

### Remove a class from an element

Note that multiple parameters for the `remove()` [isn't supported](https://caniuse.com/#feat=classlist) in IE 11.

```js
ele.classList.remove('class-name');

// Remove multiple classes (Not supported in IE 11)
ele.classList.remove('another', 'class', 'name');
```

### Toggle a class

```js
ele.classList.toggle('class-name');
```

### See also

-   [Check if an element has given class](/check-if-an-element-has-given-class)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Highlight an element when dragging a file over it](/highlight-an-element-when-dragging-a-file-over-it)
-   [Resize columns of a table](/resize-columns-of-a-table)
-   [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position)

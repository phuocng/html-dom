---
category: Basic
keywords:
title: Loop over a nodelist
---

Assume that `elements` is a NodeList that matches given selector:

```js
const elements = document.querySelectorAll(...);
```

You can loop over `elements` by using one of the approach below:

### 1. Use the ES6 spread operator

```js
[...elements].forEach(function(ele) {
    ...
});
```

### 2. Use the Array methods

```js
// `Array.from` is not supported on IE
Array.from(elements).forEach(function(ele) {
    ...
});

// Or
[].forEach.call(elements, function(ele) {
    ...
});

// Or
[].slice.call(elements, 0).forEach(function(ele) {
    ...
});
```

### 3. Use the forEach method

If you don't have to support Internet Explorer, then use the [`forEach`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach) method:

```js
elements.forEach(function(ele) {
    ...
});
```

### See also

-   [Create resizable split views](/create-resizable-split-views)
-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Export a table to csv](/export-a-table-to-csv)
-   [Make a resizable element](/make-a-resizable-element)
-   [Replace broken images](/replace-broken-images)
-   [Resize columns of a table](/resize-columns-of-a-table)
-   [Select an element or list of elements](/select-an-element-or-list-of-elements)
-   [Select the children of an element](/select-the-children-of-an-element)
-   [Serialize form data into a query string](/serialize-form-data-into-a-query-string)
-   [Show or hide table columns](/show-or-hide-table-columns)
-   [Sort a table by clicking its headers](/sort-a-table-by-clicking-its-headers)
-   [Upload files with ajax](/upload-files-with-ajax)

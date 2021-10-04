---
category: Basic
keywords:
title: Select an element or list of elements
---

### Select an element by given ID

```js
<div id="hello" />;

document.getElementById('hello');
```

### Select elements by class name

Returns the list of elements that have `hello` class within a given element:

```js
ele.getElementsByClassName('hello');
```

### Select elements by tag name

Returns the list of `span` inside a given element:

```js
ele.getElementsByTagName('span');
```

### Select elements by CSS selector

Returns the **list** of elements that match a given selector:

```js
ele.querySelectorAll('div.hello');
```

Returns the **first** element that match a given selector:

```js
ele.querySelector('div.hello');
```

### See also

-   [Drag and drop element in a list](/drag-and-drop-element-in-a-list)
-   [Drag and drop table column](/drag-and-drop-table-column)
-   [Drag and drop table row](/drag-and-drop-table-row)
-   [Export a table to csv](/export-a-table-to-csv)
-   [Loop over a nodelist](/loop-over-a-nodelist)
-   [Sort a table by clicking its headers](/sort-a-table-by-clicking-its-headers)

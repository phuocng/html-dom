---
category: Intermediate
keywords:
title: Highlight an element when dragging a file over it
---

Assume that we have a droppable element as below

```html
<div id="droppable">...</div>
```

We will hightlight the element when user drags a file over it. For example, the element will have a dashed border which can be simulated by a CSS class:

```css
.dragging {
    border: 4px dashed #ccc;
}
```

The `dragging` class will be [added](/add-or-remove-class-from-an-element) to the element when user drags file and moves it over the element:

```js
// Query the element
const ele = document.getElementById('droppable');

ele.addEventListener('dragenter', function (e) {
    e.preventDefault();
    e.target.classList.add('dragging');
});
```

In similar events, the class is removed from the element when user moves the file out of the element, or drops it:

```js
ele.addEventListener('dragover', function (e) {
    e.preventDefault();
});

ele.addEventListener('dragleave', function (e) {
    e.preventDefault();
    e.target.classList.remove('dragging');
});

ele.addEventListener('drop', function (e) {
    e.preventDefault();
    e.target.classList.remove('dragging');
});
```

The last thing, `e.preventDefault()` is used in the handlers to [prevent](/prevent-the-default-action-of-an-event) the browser from executing the default action.

### Demo

:demo[]{title="Highlight an element when dragging a file over it" url="/demo/highlight-an-element-when-dragging-a-file-over-it/index.html"}

### See also

-   [Add or remove class from an element](/add-or-remove-class-from-an-element)
-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Prevent the default action of an event](/prevent-the-default-action-of-an-event)

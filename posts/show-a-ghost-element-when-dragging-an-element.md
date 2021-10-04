---
category: Intermediate
keywords: addEventListener, drag ghost element, dragend event, dragstart event, setDragImage
title: Show a ghost element when dragging an element
---

Assume that we have a draggable element:

```html
<div draggable="true" class="draggable">Drag me</div>
```

Using the `draggable` attribute lets the browser know that the element can be dragged around. By default, the browser will show a _ghost_ element created from the original element when it is being dragged.

We can customize the ghost element:

```js
// Query the element
const ele = document.getElementById('dragMe');

// The ghost element
let ghostEle;

ele.addEventListener('dragstart', function (e) {
    // Create the ghost element
    ghostEle = document.createElement('div');
    ghostEle.classList.add('dragging');
    ghostEle.innerHTML = 'I am flying';

    // Append it to `body`
    document.body.appendChild(ghostEle);

    // Customize the drag image
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
});
```

It's worth noting that the ghost element should be removed from the page when users drag the element:

```js
ele.addEventListener('dragend', function (e) {
    document.body.removeChild(ghostEle);
});
```

In the sample code above, the ghost element is created and removed on the fly. However, it's also possible to use an existing element:

```html
<div draggable="true" class="draggable">Drag me</div>
<div id="ghost" class="dragging">I am flying</div>
```

The event handler doesn't change much:

```js
const ghostEle = document.getElementById('ghost');

ele.addEventListener('dragstart', function (e) {
    e.dataTransfer.setDragImage(ghostEle, 0, 0);
});
```

### Demo

:demo[]{title="Show a ghost element when dragging an element" url="/demo/show-a-ghost-element-when-dragging-an-element/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Create an element](/create-an-element)
-   [Make a draggable element](/make-a-draggable-element)
-   [Remove an element](/remove-an-element)

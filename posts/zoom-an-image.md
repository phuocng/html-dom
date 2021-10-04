---
category: Advanced
keywords: addEventListener, getBoundingClientRect, mousedown event, mousemove event, mouseup event, previous sibling, previousElementSibling, next sibling, nextElementSibling, range input, range slider, scale image, set css style, set element width, transform scale, zoom image
title: Zoom an image
---

In this post, we'll see how to create an image zoomer which allows users to zoom an image using a [range slider](/create-a-range-slider). Here is the structure of the elements:

```html
<!-- The image container -->
<div class="image-container">
    <img id="image" />
</div>

<!-- The range slider -->
<div>
    <!-- The minimum zoom level -->
    <div>10%</div>

    <!-- The slider is constructed by three parts -->
    <div>
        <div class="left"></div>
        <div id="knob"></div>
        <div class="right"></div>
    </div>

    <!-- The maximum zoom level -->
    <div>200%</div>
</div>
```

### Prepare the image container

The image will be displayed at the center of its container. In case users zoom in the image to the level which makes the image bigger than its container, then we'll hide the outside parts.

Having that imagination, the container could be styled as below:

```css
.image-container {
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    overflow: hidden;
    width: 100%;
}
```

### Calculate the initial scale

Initially, we want the image to be fit within its container. To do that, we clone the image and handle the `load` event to determine the size of image:

```js
// Query the element
const image = document.getElementById('image');

// Create new image element
const cloneImage = new Image();
cloneImage.addEventListener('load', function (e) {
    // Get the natural size
    const width = e.target.naturalWidth;
    const height = e.target.naturalHeight;

    // Set the size for image
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
});

// Clone it
cloneImage.src = image.src;
```

The initial scale can be determined based on the widths of [container](/get-the-parent-node-of-an-element) and image:

```js
cloneImage.addEventListener('load', function(e) {
    ...
    // The initial scale
    const scale = image.parentNode.getBoundingClientRect().width / width;
});
```

Now we scale the image to that value by setting the `transform` style:

```js
cloneImage.addEventListener('load', function(e) {
    ...
    image.style.transform = `scale(${scale}, ${scale})`;
});
```

### Create the range slider

You can take a look at the [Create a range slider](/create-a-range-slider) post for more details. Initially, we want to set the slider range based on the scale calculated in the previous section.

First, we define the minimum and maximum scales and calculate the range step:

```js
const minScale = 0.1;
const maxScale = 2;
const step = (maxScale - minScale) / 100;
```

> It's also possible to set the lower and upper values based on the initial scale. I set constant values to make this post simple

The slider can update the value via the width of left part:

```js
// Query the elements
const knob = document.getElementById('knob');
const leftSide = knob.previousElementSibling;

cloneImage.addEventListener('load', function(e) {
    ...
    leftSide.style.width = `${(scale - minScale) / step}%`;
});
```

### Scale the image when sliding the range

In the previous section, we set the initial value for the slider based on the scale. It's the time to do the other part, update the scale based on the slider's value.

It happens when user drags the knob:

```js
const mouseMoveHandler = function (e) {
    // Calculate the width for the left part
    // ...
    let newLeftWidth = ((leftWidth + dx) * 100) / containerWidth;

    // Set the width
    leftSide.style.width = `${newLeftWidth}%`;

    // Calculate the scale
    const scale = minScale + newLeftWidth * step;
    image.style.transform = `scale(${scale}, ${scale})`;
};
```

Enjoy the demo!

_Photo by [Pedro Lastra](https://unsplash.com/@peterlaster) on [Unsplash](https://unsplash.com/photos/Nyvq2juw4_o)_

### Demo

:demo[]{title="Zoom an image" url="/demo/zoom-an-image/index.html"}

### See also

-   [Attach or detach an event handler](/attach-or-detach-an-event-handler)
-   [Create a range slider](/create-a-range-slider)
-   [Create an image comparison slider](/create-an-image-comparison-slider)
-   [Create resizable split views](/create-resizable-split-views)
-   [Drag to scroll](/drag-to-scroll)
-   [Get siblings of an element](/get-siblings-of-an-element)
-   [Get the parent node of an element](/get-the-parent-node-of-an-element)
-   [Make a draggable element](/make-a-draggable-element)
-   [Set css style for an element](/set-css-style-for-an-element)

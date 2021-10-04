---
category: Basic
keywords:
title: Check if the native date input is supported
---

The following function returns `true` if the current browser supports the native date input `<input type="date" />`:

```js
const isDateInputSupported = function () {
    // Create new input element
    const ele = document.createElement('input');

    // Set the type attribute
    ele.setAttribute('type', 'date');

    const invalidValue = 'not-a-valid-date';

    // Set an invalid value
    ele.setAttribute('value', invalidValue);

    // If the browser supports the date input,
    // it won't have effect on the `value` attribute
    // `ele.value` will be an empty string
    //
    // In the other case, the input is treated as normal text input
    // and `ele.value` returns the original value
    return ele.value !== invalidValue;
};
```

This approach can be used to check other HTML 5 input types such as `email`, [`range`](/create-a-range-slider), `url`, etc.

### See also

-   [Create a range slider](/create-a-range-slider)
-   [Create an element](/create-an-element)
-   [Get set and remove attributes](/get-set-and-remove-attributes)

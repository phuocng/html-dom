import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we want to sort any column of the following table:

~~~ html
<table id="sortMe" class="table">
    ...
</table>
~~~

## Sort rows

First of all, we [query](/select-an-element-or-list-of-elements) all the headers, [loop over](/loop-over-a-nodelist) them
and [attach an event handler](/attach-or-detach-an-event-handler) for the \`click\` event to each of them:

~~~ javascript
// Query the table
const table = document.getElementById('sortMe');

// Query the headers
const headers = table.querySelectorAll('th');

// Loop over the headers
[].forEach.call(headers, function(header, index) {
    header.addEventListener('click', function() {
        // This function will sort the column
        sortColumn(index);
    });
});
~~~

The \`sortColumn(index)\` function mentioned above will sort all rows by given column \`index\`.

To do so:
* We can use the \`Array\`'s \`sort()\` method to sort the current rows
* Then, [remove](/remove-an-element) all the current rows
* And [append](/append-to-an-element) the sorted rows

~~~ javascript
// Query all rows
const tableBody = table.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

const sortColumn = function(index) {
    // Clone the rows
    const newRows = Array.from(rows);

    // Sort rows by the content of cells
    newRows.sort(function(rowA, rowB) {
        // Get the content of cells
        const cellA = rowA.querySelectorAll('td')[index].innerHTML;
        const cellB = rowB.querySelectorAll('td')[index].innerHTML;

        switch (true) {
            case cellA > cellB: return 1;
            case cellA < cellB: return -1;
            case cellA === cellB: return 0;
        }
    });

    // Remove old rows
    [].forEach.call(rows, function(row) {
        tableBody.removeChild(row);
    });

    // Append new row
    newRows.forEach(function(newRow) {
        tableBody.appendChild(newRow);
    });
};
~~~

As you see, an array provides a built-in \`sort\` method which accepts a function to compare two items.
In our case, two cells of the column are compared based on its [HTML content](/get-or-set-the-html-of-an-element):

~~~ javascript
newRows.sort(function(rowA, rowB) {
    // Get the content of cells
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    ...
});
~~~

It works well with the cells whose content are string, not numbers or another type such as date.
Going to the next section to see how we can support those cases.

## Support other types

We add a custom attribute to each header to indicate the type of its cells:

~~~ html
<thead>
    <tr>
        <th data-type="number">No.</th>
        <th>First name</th>
        <th>Last name</th>
    </tr>
</thead>
~~~

For example, the _No._ column would have a \`data-type="number"\` attribute. If the attribute is missing, the content types of cells are string.
We need a function to transform the content of cells from string to another type:

~~~ javascript
// Transform the content of given cell in given column
const transform = function(index, content) {
    // Get the data type of column
    const type = headers[index].getAttribute('data-type');
    switch (type) {
        case 'number':
            return parseFloat(content);
        case 'string':
        default:
            return content;
    }
};
~~~

The sample code demonstrates the \`number\` and \`string\` columns, but you are free to support more types such as date.

Now we improve the \`sortColumn\` function a little bit to support the custom content types. Instead of comparing the raw content,
we compare the values which are converted based on the content type:

~~~ javascript
newRows.sort(function(rowA, rowB) {
    const cellA = rowA.querySelectorAll('td')[index].innerHTML;
    const cellB = rowB.querySelectorAll('td')[index].innerHTML;

    // Transform the content of cells
    const a = transform(index, cellA);
    const b = transform(index, cellB);    

    // And compare them
    switch (true) {
        case a > b: return 1;
        case a < b: return -1;
        case a === b: return 0;
    }
});
~~~

## Support both directions

At the moment, clicking a header sorts all the rows. We should reverse the direction if user clicks the header again.
To do so, we prepare a variable to manage the sorting directions of all headers:

~~~ javascript
// Track sort directions
const directions = Array.from(headers).map(function(header) {
    return '';
});
~~~

\`directions\` is an array which each item can be either \`asc\` or \`desc\` indicating the sorting direction in the associate column.

The \`sortColumn()\` function now involves more logics to compare two rows based on the current direction:

~~~ javascript
const sortColumn = function(index) {
    // Get the current direction
    const direction = directions[index] || 'asc';

    // A factor based on the direction
    const multiplier = (direction === 'asc') ? 1 : -1;

    ...

    newRows.sort(function(rowA, rowB) {
        const cellA = rowA.querySelectorAll('td')[index].innerHTML;
        const cellB = rowB.querySelectorAll('td')[index].innerHTML;

        const a = transform(index, cellA);
        const b = transform(index, cellB);    

        switch (true) {
            case a > b: return 1 * multiplier;
            case a < b: return -1 * multiplier;
            case a === b: return 0;
        }
    });

    ...

    // Reverse the direction
    directions[index] = direction === 'asc' ? 'desc' : 'asc';

    ...
};
~~~
`}
/>
<Demo src='/demo/sort-a-table-by-clicking-its-headers/index.html' />
<RelatedPosts
    slugs={[
        'append-to-an-element',
        'attach-or-detach-an-event-handler',
        'get-or-set-the-html-of-an-element',
        'get-set-and-remove-data-attributes',
        'loop-over-a-nodelist',
        'remove-an-element',
        'select-an-element-or-list-of-elements',
    ]}
/>
</>
    );
};

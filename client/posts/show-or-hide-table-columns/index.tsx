import React from 'react';
import { Helmet } from 'react-helmet';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Helmet>
    <meta
        name='keywords'
        content={`
            addEventListener, custom context menu, data attribute, getAttribute, hide table columns
            setAttribute, show table columns
        `}
    />
</Helmet>
<Markdown
    content={`
This post shows how to show or hiden any columns of a table by righ-clicking its header.

The markup consists of the table and a menu that allows user to toggle columns:

~~~ html
<table id="table">...</table>
<ul id="menu"></ul>
~~~

## Build the menu

Since the user can toggle any columns, the menu is constructed by items which each of them contains a checkbox
to toggle particular column:

~~~ html
<ul id="menu">
    <li>
        <!-- The check box to toggle the first column -->
        <label>
            <input type="checkbox"> Label of first column
        </label>

        <!-- Other items ... -->
    </li>
</ul>
~~~

> ## Good to know
>
> If a \`label\` has a single checkbox and a text node, clicking the text will force the checkbox to be changed.

To build up the menu items, we [loop over](/loop-over-a-nodelist) the table headers, and [create](/create-an-element) a menu item for each of them:

~~~ javascript
const menu = document.getElementById('menu');
const table = document.getElementById('table');
const headers = [].slice.call(table.querySelectorAll('th'));

headers.forEach(function(th, index) {
    // Build the menu item
    const li = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // Create the text node
    const text = document.createTextNode(th.textContent);

    label.appendChild(checkbox);
    label.appendChild(text);

    li.appendChild(label);
    menu.appendChild(li);
});
~~~

To toggle the column when clicking the checkbox, we have to [handle](/attach-or-detach-an-event-handler) the \`change\` event:

~~~ javascript
headers.forEach(function(th, index) {
    // Build the menu item
    ...
    // Handle the event
    checkbox.addEventListener('change', function(e) {
        e.target.checked ? showColumn(index) : hideColumn(index);
    });
});
~~~

The \`showColumn\` and \`hideColumn\` functions will show or hide the associated column which is defined by the column index.
We'll see how to implement them later.

## Toggle the menu

The menu will be used to toggle table columns, but we need to toggle the menu first.
* It'll be shown when right-clicking the table header
* It'll be hidden when user clicks outside of the menu

You can take a look at the [Show a custom context menu at clicked position](/show-a-custom-context-menu-at-clicked-position) for more details.
In short, we have something likes this:

~~~ javascript
const thead = table.querySelector('thead');

// Handle the \`contextmenu\` event of the header
thead.addEventListener('contextmenu', function(e) {
    // Prevent the default context menu from being shown
    e.preventDefault();

    // Show the menu
    ...

    document.addEventListener('click', documentClickHandler);
});

// Hide the menu when clicking outside of it
const documentClickHandler = function(e) {
    ...
};
~~~

> ## Tip
>
> This post uses the [Attach event handlers inside other handlers](/attach-event-handlers-inside-other-handlers) tip.

## Toggle table columns

When clicking a menu item, we will toggle the column determined by given index.
In order to query all cells in the given column, we [add](/get-set-and-remove-data-attributes) a custom \`data\` attribute to each cell:

~~~ javascript
// Get the number of columns
const numColumns = headers.length;

const cells = [].slice.call(table.querySelectorAll('th, td'));
cells.forEach(function(cell, index) {
    cell.setAttribute('data-column-index', index % numColumns);
});
~~~

To hide all cells in given column, we find all cells based on the \`data-column-index\` attribute, and [hide](/show-or-hide-an-element)
each of them:

~~~ javascript
const hideColumn = function(index) {
    cells
        .filter(function(cell) {
            return cell.getAttribute('data-column-index') === \`\${index}\`;
        })
        .forEach(function(cell) {
            cell.style.display = 'none';
        });
};
~~~

By taking the advantage of using \`data\` attribute, it's so easy to show the column:

~~~ javascript
const showColumn = function(index) {
    cells
        .filter(function(cell) {
            return cell.getAttribute('data-column-index') === \`\${index}\`;
        })
        .forEach(function(cell) {
            cell.style.display = '';
        });
};
~~~

## Don't allow to hide the last column

As the title of section, we should prevent the last remaining column to be hidden. The associated checkbox has to be disabled.
To do so, we have to associate each checkbox in menu with the column by continuing using the \`data\` attribute.

Let's modify the building menu code a little bit:

~~~ javascript
headers.forEach(function(th, index) {
    // Build the menu item
    ...
    checkbox.setAttribute('data-column-index', index);
});
~~~

When each column is hidden, we add a custom attribute to indicate that the column is already hidden:

~~~ javascript
const hideColumn = function(index) {
    cells
        .filter(function(cell) {
            ...
        })
        .forEach(function(cell) {
            ...
            cell.setAttribute('data-shown', 'false');
        });
};
~~~

Then we can count how many columns are hidden, and if there's only one remaining column, we will disable the associated checkbox:

~~~ javascript
const hideColumn = function(index) {
    // How many columns are hidden
    const numHiddenCols = headers
        .filter(function(th) {
            return th.getAttribute('data-shown') === 'false';
        })
        .length;

    if (numHiddenCols === numColumns - 1) {
        // There's only one column which isn't hidden yet
        // We don't allow user to hide it
        const shownColumnIndex = thead
            .querySelector('[data-shown="true"]')
            .getAttribute('data-column-index');

        const checkbox = menu.querySelector(\`
            [type="checkbox"][data-column-index="\${shownColumnIndex}"]\`
        );
        checkbox.setAttribute('disabled', 'true');
    }
};
~~~

To get it working completely, we need to initialize the \`data-shown\` attribute for each cell, and turn it back to \`true\` when 
showing a column:

~~~ javascript
cells.forEach(function(cell, index) {
    cell.setAttribute('data-shown', 'true');
});

const showColumn = function(index) {
    cells
        .filter(function(cell) {
            ...
        })
        .forEach(function(cell) {
            ...
            cell.setAttribute('data-shown', 'true');
        });

    menu.querySelectorAll(\`[type="checkbox"][disabled]\`)
        .forEach(function(checkbox) {
            checkbox.removeAttribute('disabled');
        });
};
~~~

In the demo below, right-click the headers to show or hide any columns. Enjoy!
`}
/>
<Demo src='/demo/show-or-hide-table-columns/index.html' />
<RelatedPosts
    slugs={[
        'append-to-an-element',
        'attach-or-detach-an-event-handler',
        'calculate-the-mouse-position-relative-to-an-element',
        'create-an-element',
        'get-set-and-remove-data-attributes',
        'loop-over-a-nodelist',
        'prevent-the-default-action-of-an-event',
        'show-a-custom-context-menu-at-clicked-position',
        'show-or-hide-an-element',
    ]}
/>
</>
    );
};

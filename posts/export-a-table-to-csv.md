import React from 'react';

import Demo from '../../components/Demo';
import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
Assume that we have a \`table\` element and a \`button\` for exporting the table cells to CSV as following:

~~~ html
<table id="exportMe" class="table">
    ...
</table>

<button id="export">Export</button>
~~~

## Export the table cells to CSV

The function below exports all the cells of \`table\` to CSV format. First, we [select](/select-an-element-or-list-of-elements) all the rows,
[loop](/loop-over-a-nodelist) over them and export each row to CSV.

In each row, we go through all cells, and retrive their [text content](/get-the-text-content-of-an-element).

~~~ javascript
const toCsv = function(table) {
    // Query all rows
    const rows = table.querySelectorAll('tr');

    return [].slice.call(rows)
        .map(function(row) {
            // Query all cells
            const cells = row.querySelectorAll('th,td');
            return [].slice.call(cells)
                .map(function(cell) {
                    return cell.textContent;
                })
                .join(',');
        })
        .join('\\n');
};
~~~

## Download the CSV

The function below creates a fake \`a\` element whose content is \`text\` and triggers the \`click\` event.
For more information, you can visit the [Download a file](/download-a-file) post.

~~~ javascript
const download = function(text, fileName) {
    const link = document.createElement('a');
    link.setAttribute('href', \`data:text/csv;charset=utf-8,\${encodeURIComponent(text)}\`);
    link.setAttribute('download', fileName);

    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
};
~~~

The last thing is to connect all pieces together. We just need to [handle](/attach-or-detach-an-event-handler) the \`click\` event of the _Export_ button:

~~~ javascript
const table = document.getElementById('exportMe');
const exportBtn = document.getElementById('export');

exportBtn.addEventListener('click', function() {
    // Export to csv
    const csv = toCsv(table);

    // Download it
    download(csv, 'download.csv');
});
~~~
`}
/>
<Demo src='/demo/export-a-table-to-csv/index.html' />
<RelatedPosts
    slugs={[
        'attach-or-detach-an-event-handler',
        'download-a-file',
        'get-the-text-content-of-an-element',
        'loop-over-a-nodelist',
        'select-an-element-or-list-of-elements',
    ]}
/>
</>
    );
};

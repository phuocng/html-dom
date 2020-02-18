import TaskType from './TaskType';

export interface TaskMeta {
    taskType: TaskType;
    title: string;
    slug: string;
}

const TaskMetaList: TaskMeta[] = [
    { taskType: TaskType.AddClass, title: 'Add or remove class from an element', slug: 'add-or-remove-class-from-an-element' },
    { taskType: TaskType.Append, title: 'Append to an element', slug: 'append-to-an-element' },
    { taskType: TaskType.On, title: 'Attach or detach an event handler', slug: 'attach-or-detach-an-event-handler' },
    { taskType: TaskType.Match, title: 'Check an element against a selector', slug: 'check-an-element-against-a-selector' },
    { taskType: TaskType.HasClass, title: 'Check if an element has given class', slug: 'check-if-an-element-has-given-class' },
    { taskType: TaskType.Clone, title: 'Clone an element', slug: 'clone-an-element' },
    { taskType: TaskType.Create, title: 'Create an element', slug: 'create-an-element' },
    { taskType: TaskType.ClickOutside, title: 'Detect clicks outside of an element', slug: 'detect-clicks-outside-of-an-element' },
    { taskType: TaskType.Ready, title: 'Execute code when the document is ready', slug: 'execute-code-when-the-document-is-ready' },
    { taskType: TaskType.Attribute, title: 'Get, set and remove attributes', slug: 'get-set-and-remove-attributes' },
    { taskType: TaskType.Data, title: 'Get, set and remove data attributes', slug: 'get-set-and-remove-data-attributes' },
    { taskType: TaskType.GetStyle, title: 'Get CSS styles of an element', slug: 'get-css-styles-of-an-element' },
    { taskType: TaskType.InnerHtml, title: 'Get or set the HTML of an element', slug: 'get-or-set-the-html-of-an-element' },
    { taskType: TaskType.Sibling, title: 'Get siblings of an element', slug: 'get-siblings-of-an-element' },
    { taskType: TaskType.Closest, title: 'Get the closest element by given selector', slug: 'get-the-closest-element-by-given-selector' },
    { taskType: TaskType.DocumentSize, title: 'Get the document height and width', slug: 'get-the-document-height-and-width' },
    { taskType: TaskType.Parent, title: 'Get the parent node of an element', slug: 'get-the-parent-node-of-an-element' },
    { taskType: TaskType.TextContent, title: 'Get the text content of an element', slug: 'get-the-text-content-of-an-element' },
    { taskType: TaskType.Insert, title: 'Insert an element after or before other element', slug: 'insert-an-element-after-or-before-other-element' },
    { taskType: TaskType.LoadCss, title: 'Load a CSS file dynamically', slug: 'load-a-css-file-dynamically' },
    { taskType: TaskType.LoadJs, title: 'Load a JavaScript file dynamically', slug: 'load-a-javascript-file-dynamically' },
    { taskType: TaskType.LoopNodeList, title: 'Loop over a NodeList', slug: 'loop-over-a-nodelist' },
    { taskType: TaskType.Prepend, title: 'Prepend to an element', slug: 'prepend-to-an-element' },
    { taskType: TaskType.Reload, title: 'Reload the current page', slug: 'reload-the-current-page' },
    { taskType: TaskType.RemoveAllChildren, title: 'Remove all children of a node', slug: 'remove-all-children-of-a-node' },
    { taskType: TaskType.Remove, title: 'Remove an element', slug: 'remove-an-element' },
    { taskType: TaskType.Replace, title: 'Replace an element', slug: 'replace-an-element' },
    { taskType: TaskType.ScrollTop, title: 'Scroll to top of the page', slug: 'scroll-to-top-of-the-page' },
    { taskType: TaskType.Select, title: 'Select an element or list of elements', slug: 'select-an-element-or-list-of-elements' },
    { taskType: TaskType.Children, title: 'Select the children of an element', slug: 'select-the-children-of-an-element' },
    { taskType: TaskType.SetStyle, title: 'Set CSS style for an element', slug: 'set-css-style-for-an-element' },
    { taskType: TaskType.Show, title: 'Show or hide an element', slug: 'show-or-hide-an-element' },
    { taskType: TaskType.Trigger, title: 'Trigger an event', slug: 'trigger-an-event' },
    { taskType: TaskType.Unwrap, title: 'Unwrap an element', slug: 'unwrap-an-element' },
    { taskType: TaskType.Wrap, title: 'Wrap an element around a given element', slug: 'wrap-an-element-around-a-given-element' },
];

export default TaskMetaList;

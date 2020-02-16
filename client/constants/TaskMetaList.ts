import TaskType from './TaskType';

export interface TaskMeta {
    taskType: TaskType;
    title: string;
    slug: string;
}

const TaskMetaList: TaskMeta[] = [
    { taskType: TaskType.AddClass, title: 'Add or remove class from an element', slug: 'add-or-remove-class-from-an-element' },
    { taskType: TaskType.HasClass, title: 'Check if an element has given class', slug: 'check-if-an-element-has-given-class' },
    { taskType: TaskType.LoopNodeList, title: 'Loop over a NodeList', slug: 'loop-over-a-nodelist' },
    { taskType: TaskType.Remove, title: 'Remove an element', slug: 'remove-an-element' },
    { taskType: TaskType.RemoveAllChildren, title: 'Remove all children of a node', slug: 'remove-all-children-of-a-node' },
    { taskType: TaskType.Show, title: 'Show or hide an element', slug: 'show-or-hide-an-element' },
];

export default TaskMetaList;

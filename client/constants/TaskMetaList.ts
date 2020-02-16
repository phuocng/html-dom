import TaskType from './TaskType';

export interface TaskMeta {
    taskType: TaskType;
    title: string;
    slug: string;
}

const TaskMetaList: TaskMeta[] = [
    { taskType: TaskType.Show, title: 'Show or hide an element', slug: 'show-or-hide-an-element' },
    { taskType: TaskType.AddClass, title: 'Add or remove class from an element', slug: 'add-or-remove-class-from-an-element' },
];

export default TaskMetaList;

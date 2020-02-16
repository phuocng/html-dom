import TaskType from './TaskType';

interface TaskMeta {
    title: string;
}

const TaskMetaMap: Map<TaskType, TaskMeta> = new Map([
    [TaskType.Show, { title: 'Show an element' }],
]);

export default TaskMetaMap;

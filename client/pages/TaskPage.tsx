import React from 'react';

import TaskLoader from '../components/TaskLoader';
import TaskMetaList from '../constants/TaskMetaList';

interface TaskPageProps {
    slug: string;
}

const TaskPage: React.FC<TaskPageProps> = ({ slug }) => {
    const task = TaskMetaList.find((v) => v.slug === slug);

    return (
        <TaskLoader taskType={task.taskType} />
    );
};

export default TaskPage;

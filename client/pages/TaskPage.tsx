import React from 'react';

import TaskLoader from '../components/TaskLoader';
import TaskMetaList from '../constants/TaskMetaList';
import TaskLayout from './TaskLayout';

interface TaskPageProps {
    slug: string;
}

const TaskPage: React.FC<TaskPageProps> = ({ slug }) => {
    
    const task = TaskMetaList.find((v) => v.slug === slug);

    return (
        <TaskLayout task={task}>
            <TaskLoader taskType={task.taskType} />
        </TaskLayout>
    );
};

export default TaskPage;

import React from 'react';

import TaskLoader from '../components/TaskLoader';
import TaskLayout from './TaskLayout';

interface TaskPageProps {
    slug: string;
}

const TaskPage: React.FC<TaskPageProps> = ({ slug }) => {
    return (
        <TaskLayout slug={slug}>
            <TaskLoader slug={slug} />
        </TaskLayout>
    );
};

export default TaskPage;

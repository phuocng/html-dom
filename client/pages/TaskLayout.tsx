import React from 'react';
import { Link } from 'react-router-dom';

import { TaskMeta } from '../constants/TaskMetaList';
import Layout from './Layout';

interface TaskLayoutProps {
    task: TaskMeta;
}

const TaskLayout: React.FC<TaskLayoutProps> = ({ children, task }) => {
    return (
        <Layout>
            <h1 className='font-bold mt-32 mb-4 text-center text-4xl lg:text-5xl px-1'>{task.title}</h1>

            <div className="mb-12 text-center">
                <Link
                    to="/"
                    className="text-2xl bg-gray-400 px-4 py-2 mr-2"
                >
                    Home
                </Link>
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href="https://github.com/phuoc-ng/html-dom"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    Github
                </a>
            </div>

            <div className='ml-auto mr-auto max-w-4xl'>
                {children}
            </div>
        </Layout>
    );
};

export default TaskLayout;

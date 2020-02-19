import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import TaskList from '../constants/TaskList';
import { slugify, unslugify } from '../helpers/slugify';
import Layout from './Layout';

interface TaskLayoutProps {
    slug: string;
}

const TaskLayout: React.FC<TaskLayoutProps> = ({ children, slug }) => {
    const numTasks = TaskList.length;
    const index = TaskList.indexOf(slug);
    const title = unslugify(slug);

    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - {title}</title>
            </Helmet>

            <div className='mt-32 text-center'>
                <span className='bg-black text-white text-3xl px-3 py-2 rounded'>{index + 1}/{numTasks}</span>
            </div>
            <h1 className='font-bold mt-4 mb-4 text-center text-3xl lg:text-4xl px-1'>{title}</h1>

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

            <div className='mb-4'>
                {children}
            </div>
            {index > 0 && (
                <div className='mb-2'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(TaskList[index - 1])}`}
                        title={unslugify(TaskList[index - 1])}
                    >
                        ← {unslugify(TaskList[index - 1])}
                    </Link>
                </div>
            )}
            {index < numTasks - 1 && (
                <div className='mb-2 text-right'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(TaskList[index + 1])}`}
                        title={unslugify(TaskList[index + 1])}
                    >
                        {unslugify(TaskList[index + 1])} →
                    </Link>
                </div>
            )}
        </Layout>
    );
};

export default TaskLayout;

import React from 'react';
import { Link } from 'react-router-dom';

import TaskMetaList from '../constants/TaskMetaList';
import TaskType from '../constants/TaskType';

interface RelatedTasksProps {
    tasks: TaskType[];
}

const RelatedTasks: React.FC<RelatedTasksProps> = ({ tasks }) => {
    return (
        <section>
            <h3 className='text-2xl mb-2 inline-block border-b-2 border-black'>Might be useful</h3>
            <ul>
                {
                    tasks.map((task, index) => {
                        const meta = TaskMetaList.find((v) => v.taskType === task);
                        const idx = (index < 10) ? `0${index + 1}` : `${index + 1}`;
                        return (
                            <li key={meta.taskType} className='mb-4'>
                                <Link
                                    to={`/${meta.slug}`}
                                    className='font-light bg-gray-200 px-2 py-1 block'
                                >
                                    {meta.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
};

export default RelatedTasks;

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
            <div className='relative border border-gray-400'>
                <h3
                    className='absolute top-0 ml-4 px-2 bg-white text-2xl inline-block'
                    style={{ transform: 'translate(0px, -50%)' }}
                >
                    Might be useful
                </h3>

                <ul className='mt-6'>
                {
                    tasks.map((task, index) => {
                        const meta = TaskMetaList.find((v) => v.taskType === task);
                        const idx = (index < 10) ? `0${index + 1}` : `${index + 1}`;
                        return (
                            <li key={meta.taskType} className='mb-4'>
                                <Link
                                    to={`/${meta.slug}`}
                                    className='px-2 py-1 block'
                                >
                                    # {meta.title}
                                </Link>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </section>
    );
};

export default RelatedTasks;

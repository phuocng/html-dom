import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TaskMetaList from '../constants/TaskMetaList';

const Filter: React.FC<{}> = () => {
    const [keyword, setKeyword] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);
    const tasks = keyword
                ? TaskMetaList.filter((v) => v.title.toLowerCase().includes(keyword.toLowerCase()))
                : [];

    return (
        <div className='w-full relative'>
            <div className='border border-gray-400'>
                <input
                    className='border-none w-full p-2'
                    placeholder='Filter'
                    onChange={onChange}
                />
            </div>
            {keyword && tasks.length === 0 && (
                <div className='absolute left-0 w-full bg-white border-l border-r border-b border-gray-400 p-2'>
                    Not found
                </div>
            )}
            {keyword && tasks.length > 0 && (
                <div
                    className='absolute left-0 w-full bg-white border-l border-r border-gray-400 overflow-auto'
                    style={{ maxHeight: '300px' }}
                >
                    <ul>
                    {
                        tasks.map((task) => {
                            return (
                                <li
                                    key={task.slug}
                                    className='border-b border-gray-400 hover:bg-gray-200 p-2 truncate'
                                >
                                    <Link
                                        to={`/${task.slug}`}
                                        title={task.title}
                                    >
                                        {task.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Filter;

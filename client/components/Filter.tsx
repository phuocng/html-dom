import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import PostList from '../constants/PostList';
import { slugify, unslugify } from '../helpers/slugify';
import SearchIcon from './SearchIcon';

const Filter: React.FC<{}> = () => {
    const [keyword, setKeyword] = useState('');
    const searchBoxRef = useRef<HTMLInputElement>();

    const onClickSearchIcon = () => searchBoxRef.current.focus();
    const onChangeSearchBox = (e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value);
    const onClickTask = () => setKeyword('');

    const allPosts = PostList.map((s) => unslugify(s.slug));

    const posts = keyword
                ? allPosts.filter((v) => v.toLowerCase().includes(keyword.toLowerCase()))
                : [];

    return (
        <div className='w-full relative'>
            <div className={`border-b border-gray-400`}>
                <input
                    ref={searchBoxRef}
                    className='border-none w-full p-2 flex-1'
                    placeholder='Filter'
                    value={keyword}
                    onChange={onChangeSearchBox}
                />
            </div>
            <button className='absolute border-none p-2 right-0 top-0' onClick={onClickSearchIcon}>
                <SearchIcon />
            </button>
            {keyword && posts.length === 0 && (
                <div className='absolute left-0 w-full bg-white border-l border-r border-b border-gray-400 p-2'>
                    Not found
                </div>
            )}
            {keyword && posts.length > 0 && (
                <div
                    className='absolute left-0 w-full bg-white border-l border-r border-b border-gray-400 overflow-auto'
                    style={{ maxHeight: '300px' }}
                >
                    <ul>
                    {
                        posts.map((title, index) => {
                            const slug = slugify(title);
                            return (
                                <li
                                    key={slug}
                                    className={`border-gray-400 hover:bg-gray-200 p-2 truncate ${index === 0 ? '' : 'border-t'}`}
                                >
                                    <Link
                                        onClick={onClickTask}
                                        to={`/${slug}`}
                                        title={title}
                                    >
                                        {title}
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

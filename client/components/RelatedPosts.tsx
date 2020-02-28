import React from 'react';
import { Link } from 'react-router-dom';

import PostList from '../constants/PostList';
import { unslugify } from '../helpers/slugify';

interface RelatedPostsProps {
    slugs: string[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ slugs }) => {
    const posts = PostList.filter((post) => slugs.indexOf(post.slug) >= 0);
    return (
        <>
        <h2 className='text-2xl sm:text-3xl mb-4'>Might be useful</h2>
        <ul>
        {
            posts.map((post, index) => {
                return (
                    <li key={post.slug} className='mb-2'>
                        <Link
                            to={`/${post.slug}`}
                            className='bg-gray-200 px-2 py-1 flex items-center justify-between'
                        >
                            <span>{unslugify(post.slug)}</span>
                            <span
                                className={`
                                    p-1 text-white rounded
                                    ${post.level === 'Basic' ? 'bg-gray-600' : ''}
                                    ${post.level === 'Intermediate' ? 'bg-blue-600' : ''}
                                    ${post.level === 'Advanced' ? 'bg-red-600' : ''}
                                `}
                            >
                                {post.level.toLowerCase()}
                            </span>
                        </Link>
                    </li>
                );
            })
        }
        </ul>
        </>
    );
};

export default RelatedPosts;

import React from 'react';
import { Link } from 'react-router-dom';

import Post from '../constants/Post';
import { unslugify } from '../helpers/slugify';

interface PostItemProps {
    post: Post;
    renderTitle(title: string): string;
}

const PostItem: React.FC<PostItemProps> = ({ post, renderTitle }) => {
    return (
        <li className='mb-3'>
            <Link
                to={`/${post.slug}`}
                className='bg-gray-200 px-2 py-1 flex items-center justify-between'
            >
                <span className='mr-2'>{renderTitle(unslugify(post.slug))}</span>
                <span
                    className={`
                        p-1 text-sm text-white rounded
                        ${post.category === 'Basic' ? 'bg-gray-600' : ''}
                        ${post.category === 'Intermediate' ? 'bg-blue-600' : ''}
                        ${post.category === 'Advanced' ? 'bg-red-600' : ''}
                        ${post.category === 'Tip' ? 'bg-yellow-600' : ''}
                    `}
                >
                    {post.category.toLowerCase()}
                </span>
            </Link>
        </li>
    );
};

export default PostItem;

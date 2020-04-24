import React from 'react';

import PostList from '../constants/PostList';
import PostItem from './PostItem';

interface RelatedPostsProps {
    slugs: string[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ slugs }) => {
    const posts = PostList.filter((post) => slugs.indexOf(post.slug) >= 0);
    return (
        <>
        <h2 className='text-2xl sm:text-3xl mb-4 mt-8'>Might be useful</h2>
        <ul>
        {
            posts.map((post) => {
                return (
                    <PostItem
                        key={post.slug}
                        post={post}
                        renderTitle={title => title}
                    />
                );
            })
        }
        </ul>
        </>
    );
};

export default RelatedPosts;

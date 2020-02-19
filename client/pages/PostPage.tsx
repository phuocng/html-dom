import React from 'react';

import PostLoader from '../components/PostLoader';
import PostLayout from './PostLayout';

interface PostPageProps {
    slug: string;
}

const PostPage: React.FC<PostPageProps> = ({ slug }) => {
    return (
        <PostLayout slug={slug}>
            <PostLoader slug={slug} />
        </PostLayout>
    );
};

export default PostPage;

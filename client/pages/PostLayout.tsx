import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import PostList from '../constants/PostList';
import { slugify, unslugify } from '../helpers/slugify';
import Layout from './Layout';

interface PostLayoutProps {
    slug: string;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children, slug }) => {
    const numTasks = PostList.length;
    const index = PostList.findIndex((post) => post.slug === slug);
    const title = unslugify(slug);
    const zhTitle = PostList.find((item) => {
        if ((item.zh || item.slug) && item.slug === slug) {
            return item;
        }
    });
    console.log(zhTitle);
    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - {zhTitle.zh || title}</title>
                <meta name='description' content={zhTitle.zh || title} />
            </Helmet>

            <div className='mt-32 text-center'>
                <span className='bg-black text-white text-3xl px-3 py-2 rounded'>{index + 1}/{numTasks}</span>
            </div>
            <h1 className='font-bold mt-4 mb-4 text-center text-3xl lg:text-4xl px-1'>{zhTitle.zh || title}</h1>

            <div className="mb-12 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href={`https://github.com/phuoc-ng/html-dom/blob/master/client/posts/${slug}/index.tsx`}
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    编辑页面内容
                </a>
            </div>

            <div className='mb-4'>
                {children}
            </div>
            {index > 0 && (
                <div className='mb-2'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(PostList[index - 1].slug)}`}
                        title={unslugify(PostList[index - 1].slug)}
                    >
                        ← {PostList[index - 1].zh || unslugify(PostList[index - 1].slug)}
                    </Link>
                </div>
            )}
            {index < numTasks - 1 && (
                <div className='mb-2 text-right'>
                    <Link
                        className='text-xl sm:text-2xl'
                        to={`/${slugify(PostList[index + 1].slug)}`}
                        title={PostList[index + 1].zh || unslugify(PostList[index + 1].slug)}
                    >
                        {PostList[index + 1].zh || unslugify(PostList[index + 1].slug)} →
                    </Link>
                </div>
            )}
        </Layout>
    );
};



export default PostLayout;

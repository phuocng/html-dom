import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import Ad from '../components/Ad';
import PostItem from '../components/PostItem';
import PostList from '../constants/PostList';
import Layout from './Layout';

const HomePage = () => {
    const [totalStars, setTotalStars] = useState(0);

    useEffect(() => {
        fetch('https://api.github.com/repos/phuoc-ng/html-dom')
            .then(res => res.json())
            .then(data => setTotalStars(data.stargazers_count))
            .catch(console.log);
    });

    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - Common tasks of managing HTML DOM with vanilla JavaScript</title>
                <meta name='description' content='Common tasks of managing HTML DOM with vanilla JavaScript' />
            </Helmet>

            <h1 className='font-bold mt-32 text-center text-2xl sm:text-4xl px-1'>how to manage HTML DOM</h1>
            <h3 className='font-light mb-1 text-2xl sm:text-3xl text-center'>
                with <span className='bg-blue-200 p-1'>vanilla JavaScript</span> only?
            </h3>
            <h4 className='font-light mb-12 text-xl text-center italic'>for modern browsers and IE 11+</h4>

            <div className="mb-12 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href="https://github.com/phuoc-ng/html-dom"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    GitHub ∙ {totalStars} ★
                </a>
            </div>

            <Ad />

            <div className='ml-auto mr-auto max-w-4xl'>
                <ul>
                {
                    PostList.map((post, index) => {
                        return (
                            <PostItem
                                key={post.slug}
                                post={post}
                                renderTitle={(title) => `${index + 1} — ${title}`}
                            />
                        );
                    })
                }
                </ul>
            </div>
        </Layout>
    );
};

export default HomePage;

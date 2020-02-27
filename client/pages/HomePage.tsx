import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import PostList from '../constants/PostList';
import { unslugify } from '../helpers/slugify';
import Layout from './Layout';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - Common tasks of managing HTML DOM with native API</title>
                <meta name='description' content='Common tasks of managing HTML DOM with native API' />
            </Helmet>

            <h1 className='font-bold mt-32 text-center text-2xl sm:text-4xl px-1'>how to manage HTML DOM</h1>
            <h3 className='font-light mb-1 text-2xl sm:text-3xl text-center'>
                with <span className='bg-blue-200 p-1'>native API</span> only?
            </h3>
            <h4 className='font-light mb-16 text-xl text-center italic'>for modern browsers and IE 11+</h4>

            <div className="mb-12 text-center">
                <a
                    className="text-2xl bg-gray-400 px-4 py-2"
                    href="https://github.com/phuoc-ng/html-dom"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                    target="_blank"
                >
                    Github
                </a>
            </div>

            <div className='ml-auto mr-auto max-w-4xl'>
                <ul>
                {
                    PostList.map((post, index) => {
                        const idx = (index < 9) ? `0${index + 1}` : `${index + 1}`;
                        return (
                            <li key={post.slug} className='mb-4'>
                                <Link
                                    to={`/${post.slug}`}
                                    className='font-light text-xl sm:text-2xl bg-gray-200 px-2 py-1 block'
                                >
                                    {idx} — {unslugify(post.slug)}
                                </Link>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        </Layout>
    );
};

export default HomePage;

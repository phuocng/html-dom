import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import TaskMetaList from '../constants/TaskMetaList';
import Layout from './Layout';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - Common tasks of managing HTML DOM with native API</title>
                <meta name='description' content='Common tasks of managing HTML DOM with native API' />
            </Helmet>

            <h1 className='font-bold mt-32 text-center text-4xl lg:text-5xl px-1'>How to manage HTML DOM</h1>
            <h3 className='font-light mb-16 text-3xl text-center'>with native API only</h3>

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
                    TaskMetaList.map((meta, index) => {
                        const idx = (index < 10) ? `0${index + 1}` : `${index + 1}`;
                        return (
                            <li key={meta.taskType} className='mb-4'>
                                <Link
                                    to={`/${meta.slug}`}
                                    className='font-light text-2xl bg-gray-200 px-2 py-1 block'
                                >
                                    {idx} — {meta.title}
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

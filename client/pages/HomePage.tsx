import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout';

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - Common tasks of managing HTML DOM with native API</title>
                <meta name='description' content='Common tasks of managing HTML DOM with native API' />
            </Helmet>

            <h1 className='font-bold mt-32 text-center text-4xl lg:text-5xl px-1'>Common tasks of managing HTML DOM</h1>
            <h3 className='font-light mb-16 text-3xl text-center'>native API only</h3>

            <div className="text-center">
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
        </Layout>
    );
};

export default HomePage;

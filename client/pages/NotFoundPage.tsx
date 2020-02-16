import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from './Layout';

const NotFoundPage: React.FC<{}> = () => {
    return (
        <Layout>
            <Helmet>
                <title>HTML DOM - Not found 404</title>
            </Helmet>

            <h1 className='font-bold mt-4 mb-4 text-center text-3xl lg:text-4xl px-1'>
                Not found
            </h1>
        </Layout>
    );
};

export default NotFoundPage;

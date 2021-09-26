import { Heading, Spacer } from '@1milligram/design';
import Head from 'next/head';
import * as React from 'react';
import { Layout } from './Layout';

import { Ad } from '../components/Ad';

export const PostLayout: React.FC<{
    keywords?: string;
    title: string;
}> = ({ children, keywords, title }) => (
    <>
        <Head>
            <title>{title} - HTML DOM</title>
            <meta name="description" content={title} />
            <meta name="twitter:title" content={`${title} - HTML DOM`} />
            <meta name="twitter:description" content={title} />
            <meta property="og:title" content={`${title} - HTML DOM`} />
            <meta property="og:description" content={title} />
            {keywords && keywords.length && <meta property="keywords" content={keywords} />}
        </Head>
        <Layout title={title}>
            <div className="block-container">
                <div className="block-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>{title}</Heading>
                    <Spacer size="large" />
                    <div className="block-ad">
                        <Ad />
                    </div>
                    <Spacer size="medium" />
                </div>
                {children}
                <Spacer size="large" />
            </div>
        </Layout>
    </>
);

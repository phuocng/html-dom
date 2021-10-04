import { Heading, Spacer } from '@1milligram/design';
import * as React from 'react';
import Link from 'next/link';

import { loadPosts } from '../models/loadPosts';
import type { Post } from '../models/Post';
import { Layout } from '../layouts/Layout';

const CATEGORY_SORT = {
    Basic: 0,
    Intermediate: 1,
    Advanced: 2,
    Tip: 3,
};

const HomePage: React.FC<{
    posts: Post[];
}> = ({ posts }) => {
    const groupByCategory = posts.reduce(
        (acc, item) => ((acc[item.category] = [...(acc[item.category] || []), item]), acc),
        {}
    );

    const sortCategory = (a: string, b: string) => CATEGORY_SORT[a] - CATEGORY_SORT[b];

    return (
        <Layout title="Manage HTML DOM with vanilla JavaScript">
            <div className="block-container">
                <div className="block-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>Manage HTML DOM</Heading>
                    <Heading level={4}>with vanilla JavaScript</Heading>
                    <Spacer size="large" />
                </div>
                {Object.keys(groupByCategory)
                    .sort(sortCategory)
                    .map((category) => (
                        <div key={category}>
                            <div className="block-home__category">
                                <Heading level={3}>{category}</Heading>
                            </div>
                            {groupByCategory[category].map((post: Post) => (
                                <Link href={`/${post.slug}`} key={post.slug}>
                                    <a className="block-home__post">
                                        <h3 className="block-home__title">{post.title}</h3>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ))}
            </div>
            <Spacer size="large" />
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = loadPosts();
    return {
        props: {
            posts,
        },
    };
};

export default HomePage;

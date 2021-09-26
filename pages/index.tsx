import { Heading, Spacer } from '@1milligram/design';
import * as React from 'react';

import { Layout } from '../layouts/Layout';

const HomePage = () => {
    return (
        <Layout title="Manage HTML DOM with vanilla JavaScript">
            <div className="block-container">
                <div className="block-home__hero">
                    <Spacer size="extraLarge" />
                    <Heading level={1}>Manage HTML DOM</Heading>
                    <Heading level={4}>with vanilla JavaScript</Heading>
                    <Spacer size="large" />
                </div>                
            </div>
            <Spacer size="large" />
        </Layout>
    );
};

export default HomePage;

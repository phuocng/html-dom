import * as React from 'react';
import { Heading, Spacer } from '@1milligram/design';

const Heading3 = (props) => (
    <>
        <Spacer size="medium" />
        <Heading level={3}>{props.children}</Heading>
        <Spacer size="small" />
    </>
);

export default Heading3;

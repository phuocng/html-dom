import { MDXProvider } from '@mdx-js/react';
import Head from 'next/head';

import {
    MarkdownLink,
    Blockquote,
    Code,
    Heading2,
    Heading3,
    Image,
    InlineCode,
    List,
    OrderedList,
    Paragraph,
    Table,
    TableBody,
    TableHead,
    ThematicBreak,
} from '../components/markdown/index';

// Design
import '@1milligram/design/lib/styles/index.css';
import '@1milligram/frame/lib/styles/index.css';
import '../styles/index.scss';

const markdownComponents = {
    a: MarkdownLink,
    blockquote: Blockquote,
    code: Code,
    h2: Heading2,
    h3: Heading3,
    hr: ThematicBreak,
    img: Image,
    inlineCode: InlineCode,
    ol: OrderedList,
    p: Paragraph,
    pre: (props) => <div {...props} />,
    table: Table,
    tbody: TableBody,
    thead: TableHead,
    ul: List,
};

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <MDXProvider components={markdownComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    );
}

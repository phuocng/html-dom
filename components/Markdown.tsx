import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';

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
} from './markdown/index';
import { Demo } from './Demo';

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

const customDirectivePlugin = (options: Record<string, any>) => {
    const components = options.components || {};
    return (tree) => {
        visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], (node) => {
            if (components[node.name]) {
                node.data = {
                    hName: node.name,
                    hProperties: node.attributes,
                    ...node.data,
                };
            }
            return node;
        });
    };
};

export const Markdown: React.FC<{
    children: string;
}> = ({ children }) => {
    const components = Object.assign({}, markdownComponents, { demo: Demo });

    return (
        <ReactMarkdown
            components={components}
            remarkPlugins={[
                remarkDirective,
                [
                    customDirectivePlugin,
                    {
                        components,
                    },
                ],
                remarkGfm,
            ]}
        >
            {children}
        </ReactMarkdown>
    );
};

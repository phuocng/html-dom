import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { Post } from './Post';

const POSTS_DIR = 'posts';

export const loadPosts = (): Post[] =>
    fs.readdirSync(path.join(POSTS_DIR)).map((file) => {
        const markdown = fs.readFileSync(path.join(POSTS_DIR, file), 'utf-8');
        const { data: frontMatter, content } = matter(markdown);
        return {
            category: frontMatter.category,
            content: content,
            slug: file.replace('.md', ''),
            title: frontMatter.title,
            topics: frontMatter.topics || '',
        };
    });

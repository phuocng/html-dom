#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

import PostList from '../client/constants/PostList';

const output = 
    ['<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">']
    .concat(
        // Sort by slugs
        PostList.map((post: any) => `<url><loc>https://htmldom.dev/${post.slug}</loc></url>`).sort()
    )
    .concat(['</urlset>'])
    .join('\n');

fs.writeFileSync(path.resolve(__dirname, '../dist/sitemap.xml'), output);

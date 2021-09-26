const path = require('path');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
});

module.exports = withMDX({
    // `/about` becomes `/about/index.html`
    trailingSlash: true,
    pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        return config;
    },
});
